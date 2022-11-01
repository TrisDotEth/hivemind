import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { WagmiConfig, createClient } from 'wagmi'

const alchemyId = process.env.ALCHEMY_API_KEY

const client = createClient(
  getDefaultClient({
    appName: 'Hivemind',
    alchemyId,
  })
)

const WalletContextProvider = ({ children }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  )
}

export { WalletContextProvider }
