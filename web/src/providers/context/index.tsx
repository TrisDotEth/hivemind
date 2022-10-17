import { HivemindContextProvider } from './HivemindContext'
import { WalletContextProvider } from './WalletContext'
import { AllHivemindsContextProvider} from './AllHivemindsContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return (
    <WalletContextProvider>
      <AllHivemindsContextProvider>
        <HivemindContextProvider>{children}</HivemindContextProvider>
      </AllHivemindsContextProvider>
    </WalletContextProvider>
  )
}

export default AllContextProviders
