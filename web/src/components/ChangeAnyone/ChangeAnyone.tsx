import AddAnyone from './AddAnyone/AddAnyone'
import SearchAnyone from './SearchAnyone/SearchAnyone'
import SelectAnyone from './SelectAnyone/SelectAnyone'

const ChangeAnyone = () => {
  return (
    <div className="mx-auto mt-2 max-w-5xl px-2 text-white">
      <div className="flex h-16 justify-between">
        <div className="flex flex-1">
          <AddAnyone />
        </div>
        <div className="flex">
          <SelectAnyone />
        </div>
        <div className="flex flex-1 justify-end">
          <SearchAnyone />
        </div>
      </div>
    </div>
  )
}

export default ChangeAnyone
