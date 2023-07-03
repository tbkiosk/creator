import { type TokenHolderRequirement } from '@prisma/client'
import { Card, Group, Text } from '@mantine/core'

export const TokenRequirementDetail = ({ tokenHolderRequirement }: { tokenHolderRequirement: TokenHolderRequirement | null }) => {
  const mustHoldTokenContracts = tokenHolderRequirement?.mustHoldTokenContracts ?? []
  const mustHoldTokens = tokenHolderRequirement?.tokenRequirement ?? []
  let tokenRequirementText = ''
  if (mustHoldTokens[0]) {
    tokenRequirementText = `Must hold at least ${mustHoldTokens[0].mustHoldAmount} ${mustHoldTokens[0]?.tokenSymbol ?? ''}`
  }
  if (mustHoldTokens[1]) {
    const prefix = mustHoldTokenContracts.length > 0 ? 'and' : 'or'
    tokenRequirementText = `${tokenRequirementText} ${prefix} hold at least ${mustHoldTokens[1].mustHoldAmount} ${
      mustHoldTokens[1]?.tokenSymbol ?? ''
    }`
  }

  if (tokenRequirementText === '') return null

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Group>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.25 8.39719V7.875C17.25 5.52375 13.7034 3.75 9 3.75C4.29656 3.75 0.75 5.52375 0.75 7.875V11.625C0.75 13.5834 3.21094 15.1397 6.75 15.6056V16.125C6.75 18.4762 10.2966 20.25 15 20.25C19.7034 20.25 23.25 18.4762 23.25 16.125V12.375C23.25 10.4344 20.8669 8.87625 17.25 8.39719ZM5.25 13.7691C3.41344 13.2562 2.25 12.4116 2.25 11.625V10.3059C3.015 10.8478 4.03969 11.2847 5.25 11.5781V13.7691ZM12.75 11.5781C13.9603 11.2847 14.985 10.8478 15.75 10.3059V11.625C15.75 12.4116 14.5866 13.2562 12.75 13.7691V11.5781ZM11.25 18.2691C9.41344 17.7562 8.25 16.9116 8.25 16.125V15.7341C8.49656 15.7434 8.74594 15.75 9 15.75C9.36375 15.75 9.71906 15.7378 10.0678 15.7172C10.4552 15.8559 10.8499 15.9736 11.25 16.0697V18.2691ZM11.25 14.0859C10.5051 14.196 9.75302 14.2508 9 14.25C8.24698 14.2508 7.49493 14.196 6.75 14.0859V11.8556C7.49604 11.9528 8.24765 12.0011 9 12C9.75235 12.0011 10.504 11.9528 11.25 11.8556V14.0859ZM17.25 18.5859C15.758 18.8047 14.242 18.8047 12.75 18.5859V16.35C13.4958 16.4503 14.2475 16.5004 15 16.5C15.7523 16.5011 16.504 16.4528 17.25 16.3556V18.5859ZM21.75 16.125C21.75 16.9116 20.5866 17.7562 18.75 18.2691V16.0781C19.9603 15.7847 20.985 15.3478 21.75 14.8059V16.125Z"
            fill="#0062FF"
          />
        </svg>
        <Text>Token holders</Text>
      </Group>
      <Text mt={'sm'}>{tokenRequirementText}</Text>
    </Card>
  )
}
