import { Anyone } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'

export interface TabLocation {
  anyone: Anyone
  location: 'home' | 'DAO'
}

const AnyoneTab: React.FC<TabLocation> = ({ anyone, location }) => {
  const changeLocation = (location) => {
    console.log(location)
    if (location == 'DAO') {
      navigate(routes.dao({ name: anyone.officialName }))
    }
    if (location == 'home') {
      navigate(routes.be({ name: anyone.officialName }))
    }
  }
  return (
    <div className="m-auto grid w-full justify-center pt-0">
      <h3 className={`${location == 'DAO' ? 'text-gray' : 'text-white'}`}>
        <button onClick={() => changeLocation('home')}>
          {anyone.shortName}&apos;s Home
        </button>
        <button
          onClick={() => changeLocation('DAO')}
          className={`inline-block pl-10 ${
            location == 'DAO' ? 'text-white' : 'text-gray'
          }`}
        >
          {anyone.shortName}DAO
        </button>
      </h3>
    </div>
  )
}

export default AnyoneTab
