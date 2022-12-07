import { PlusIcon } from '@heroicons/react/24/outline'

import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

const AddAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)
  return (
    <div className="w-12">
      <div className="relative border-r border-gray-dark">
        <img
          className="h-10 w-10 rounded-full brightness-[.3] grayscale"
          alt="Profile"
          // @ts-expect-error Hardcoded for now TODO
          src={anyones[0].profiles[0].importedData.avatar.url}
        ></img>
        <PlusIcon className="absolute top-[11px] right-[17px] h-5 w-5" />
      </div>
    </div>
  )
}

export default AddAnyone
