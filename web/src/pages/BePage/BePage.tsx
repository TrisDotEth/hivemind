import AnyoneTab from 'src/components/AnyoneTab/AnyoneTab'
import FarcasterHomeCell from 'src/components/Farcaster/FarcasterHomeCell'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const BePage = () => {
  const anyone = useAnyoneStore((state) => state.anyone)
  return (
    <>
      <div className="text-white">
        <AnyoneTab anyone={anyone} location="home" />
        <FarcasterHomeCell
          userName={anyone.profiles[0].importedData.username}
        />
      </div>
    </>
  )
}

export default BePage
