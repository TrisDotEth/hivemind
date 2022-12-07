import { DevModeContextProvider } from './DevModeContext'
import { WalletContextProvider } from './WalletContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return (
    <DevModeContextProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </DevModeContextProvider>
  )
}

export default AllContextProviders
