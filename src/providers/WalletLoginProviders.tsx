import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import React from 'react'
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { bsc, mainnet, polygon } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { env } from '@/env.mjs'
import { type GetSiweMessageOptions, RainbowKitSiweNextAuthProvider } from '@/providers/RainbowKitSiweNextAuthProvider'

type Props = {
  children: React.ReactNode
}

const { chains, publicClient } = configureChains(
  [mainnet, polygon, bsc],
  [alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'Kiosk Creator',
  projectId: '321bbd837e6b150263cbd24c5a92b541',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in to Kiosk Creator',
})

export const WalletLoginProviders = ({ children }: Props) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitSiweNextAuthProvider getSiweMessageOptions={getSiweMessageOptions}>
        <RainbowKitProvider
          chains={chains}
          modalSize={'compact'}
        >
          {children}
        </RainbowKitProvider>
      </RainbowKitSiweNextAuthProvider>
    </WagmiConfig>
  )
}
