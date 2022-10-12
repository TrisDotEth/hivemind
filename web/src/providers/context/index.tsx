import { HivemindContextProvider } from './HivemindContext'

const AllContextProviders = ({ children }) => {
  // Add additional context providers here
  return <HivemindContextProvider>{children}</HivemindContextProvider>
}

export default AllContextProviders
