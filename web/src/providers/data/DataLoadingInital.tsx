import AllAnyonesCell from 'src/components/AnyonesData/AllAnyonesCell'
import UpdateFarcasterProfiles from 'src/components/Farcaster/UpdateFarcasterProfiles/UpdateFarcasterProfiles'

const DataLoadingInital = ({ children }) => {
  console.log('dataloadinginitial rendered')
  return (
    <>
      {/*updates data from farcaster for all anyones from  and stores it on the local db */}
      <UpdateFarcasterProfiles />
      {/*pulls in data for all anyones on local db */}
      <AllAnyonesCell />
      {children}
    </>
  )
}

export { DataLoadingInital }
