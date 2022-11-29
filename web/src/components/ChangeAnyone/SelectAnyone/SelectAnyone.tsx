import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

const SelectAnyone = () => {
  const anyones = useAllAnyonesStore((state) => state.anyones)

  return (
    <div className="flex text-white">
      {anyones.map((anyone) => (
        <ul key={anyone.id}>
          <li className="mx-2 inline-block w-12 items-center">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              alt="Profile"
              src={anyone.importedData.avatar.url}
            ></img>
            <span className="mx-auto flex w-fit text-center text-[10px] leading-[12px]">
              {anyone.importedData.displayName}
            </span>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default SelectAnyone
