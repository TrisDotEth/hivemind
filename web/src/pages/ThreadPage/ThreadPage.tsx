import FarcasterThreadCell from 'src/components/Farcaster/FarcasterThreadCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const ThreadPage = ({ threadHash }) => {
  const anyone = useAnyoneStore((state) => state.anyone)

  return (
    <>
      <div className="mb-2 flex w-full justify-center">
        <img
          className="mr-1 mt-1 h-5 w-5 rounded-full"
          src={anyone.profiles[0].importedData.pfp.url}
          alt=""
        />
        <h1 className="text-lg text-white">{anyone.displayName}'s Thread</h1>
      </div>
      <div className="mt-40">
        <FarcasterThreadCell threadHash={threadHash} anyone={anyone} />
      </div>
    </>
  )
}

export default ThreadPage
