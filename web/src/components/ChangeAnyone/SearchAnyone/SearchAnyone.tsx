import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

const SearchAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  return (
    <div className="w-12">
      <div className="relative border-l border-gray-dark">
        <img
          className="ml-2 h-10 w-10 rounded-full brightness-[.3] grayscale"
          alt="Profile"
          // @ts-expect-error Hardcoded for now TODO
          src={anyones[0].profiles[0].importedData.pfp.url}
        ></img>
        <MagnifyingGlassIcon className="absolute top-[11px] right-[8px] h-5 w-5" />
      </div>
    </div>
  )
}

export default SearchAnyone
