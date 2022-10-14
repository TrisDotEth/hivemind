import { HivemindContextProvider } from './HivemindContext'
import { WalletContextProvider } from './WalletContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return (
    <WalletContextProvider>
      <HivemindContextProvider>{children}</HivemindContextProvider>
    </WalletContextProvider>
  )
}

export default AllContextProviders
