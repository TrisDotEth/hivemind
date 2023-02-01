import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import AllContextProviders from 'src/providers/context'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { DataLoadingInital } from './providers/data/DataLoadingInital'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%AppTitle">
      <RedwoodApolloProvider>
        <AllContextProviders>
          <DataLoadingInital>
            <Routes />
          </DataLoadingInital>
        </AllContextProviders>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
