import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { prisma } from '@/server/db'
import { TokenType, TokenRequirementBlockChain, type Prisma, PerkStatus } from '@prisma/client'
import { createPerkOnAWSService, getNftContractMetadata, getTokenMetadata } from '@/libs'
import { convertTokenRequirementNetworkToAlchemyNetwork } from '@/components/perk/TokenRequirement'
import { createNftAllowListPerkSchema } from '@/schemas'

const tokenRequirementSchema = z.object({
  tokenType: z.nativeEnum(TokenType),
  blockchain: z.nativeEnum(TokenRequirementBlockChain),
  contractAddress: z.string(),
  mustHoldAmount: z.number(),
  tokenSymbol: z.string().optional(),
  tokenName: z.string().optional(),
  logoUrl: z.string().optional(),
})

export type TokenRequirementSchemaType = z.infer<typeof tokenRequirementSchema>

export type CreateNftAllowListPerkSchemaType = z.infer<typeof createNftAllowListPerkSchema>

export type DisplayStatus = 'published' | 'draft' | 'expired'

export const perkRouter = createTRPCRouter({
  list: protectedProcedure
    .input(
      z.object({
        status: z.enum(['published', 'draft', 'expired', 'all']),
      })
    )
    .query(async ({ ctx, input }) => {
      const { user } = ctx.session
      const { status } = input
      const filter: Prisma.PerkWhereInput = {
        userId: user.id,
      }
      if (status === 'published') {
        filter.status = PerkStatus.Published
        filter.endDate = {
          gt: new Date(),
        }
      } else if (status === 'draft') {
        filter.status = PerkStatus.Draft
      } else if (status === 'expired') {
        filter.endDate = {
          lte: new Date(),
        }
      }

      const perks = await prisma.perk.findMany({
        where: filter,
        orderBy: [
          {
            createdAt: 'desc',
          },
        ],
      })

      return {
        perks,
      }
    }),
  createAllowListPerk: protectedProcedure.input(createNftAllowListPerkSchema).mutation(async ({ input, ctx }) => {
    const { user } = ctx.session
    const project = await prisma.project.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
      },
    })

    /**user must have Twitter account to create perk*/
    await prisma.account.findFirstOrThrow({
      where: {
        userId: user.id,
        provider: 'twitter',
      },
    })

    /**Check token requirement contract validity*/
    const tokenRequirements = input.tokenHolderRequirement?.tokenRequirement ?? []
    const contractPromises = tokenRequirements.map(tokenRequirement => {
      const network = convertTokenRequirementNetworkToAlchemyNetwork(tokenRequirement.blockchain)
      if (tokenRequirement.tokenType === 'Token') {
        return getTokenMetadata(network, tokenRequirement.contractAddress)
      } else if (tokenRequirement.tokenType === 'NFT') {
        return getNftContractMetadata(network, tokenRequirement.contractAddress)
      }
    })
    await Promise.all(contractPromises)

    const createAndUpdateData = {
      name: input.name,
      description: input.description,
      blockchain: input.blockchain,
      type: input.perkType,
      projectId: project.id,
      userId: user.id,
      status: input.status,
      startDate: input.startDate,
      endDate: input.endDate,
      allowList: {
        spots: input.spot,
        spotsUsed: 0,
        priceSymbol: input.priceSymbol,
        totalSupply: input.totalSupply,
        price: input.price,
      },
      tokenHolderRequirement: input.tokenHolderRequirement === undefined ? null : input.tokenHolderRequirement,
    }

    if (input.perkId) {
      const perk = await prisma.perk.findFirstOrThrow({
        where: {
          id: input.perkId,
        },
      })
      /** Published Perk can only update the following field*/
      const isPublishedPerk = perk.status === PerkStatus.Published
      const publishedUpdateData = {
        description: input.description,
        startDate: input.startDate,
        endDate: input.endDate,
      }
      await prisma.perk.update({
        where: {
          id: input.perkId,
        },
        data: isPublishedPerk ? publishedUpdateData : createAndUpdateData,
      })
      if (isPublishedPerk) {
        await createPerkOnAWSService({
          name: input.name,
          description: input.description,
          featureImage: '',
          contractAddress: '',
          activeDate: input.startDate.toISOString(),
          expireDate: input.endDate.toISOString(),
          chain: input.blockchain,
          id: input.perkId,
          status: 'active',
          linkToClaim: '',
          requirement: {
            tokenHolder: input.tokenHolderRequirement,
          },
        })
      }

      return {
        message: 'Perk Updated',
      }
    } else {
      const result = await prisma.perk.create({
        data: createAndUpdateData,
      })

      await createPerkOnAWSService({
        name: input.name,
        description: input.description,
        featureImage: '',
        contractAddress: '',
        activeDate: input.startDate.toISOString(),
        expireDate: input.endDate.toISOString(),
        chain: input.blockchain,
        id: result.id,
        status: 'active',
        linkToClaim: '',
        requirement: {
          tokenHolder: input.tokenHolderRequirement,
        },
      })
      return {
        message: 'Perk Published',
      }
    }
  }),
})