import { AllHivemindsContextProvider } from './AllHivemindsContext'
import { DevModeContextProvider } from './DevModeContext'
import { HivemindContextProvider } from './HivemindContext'
import { WalletContextProvider } from './WalletContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return (
    <DevModeContextProvider>
      <WalletContextProvider>
        <AllHivemindsContextProvider>
          <HivemindContextProvider>{children}</HivemindContextProvider>
        </AllHivemindsContextProvider>
      </WalletContextProvider>
    </DevModeContextProvider>
  )
}

export default AllContextProviders
