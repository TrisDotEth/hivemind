import AddAnyone from './AddAnyone/AddAnyone'
import SearchAnyone from './SearchAnyone/SearchAnyone'
import SelectAnyone from './SelectAnyone/SelectAnyone'
// Such a strange bug with scroller. Having the width be auto freaked it out and set the width to some obscenely high value. Changing the width to be a low percentage fixed it. But I'm not sure how. Too much time spent on this already...
const ChangeAnyone = () => {
  return (
    <div className="fixed bottom-10 z-10 mx-auto w-full max-w-5xl bg-black px-2 pt-1 text-white">
      <div className="flex h-16">
        <div className="flex-none">
          <AddAnyone />
        </div>
        <div className="w-1/6 flex-1">
          <SelectAnyone />
        </div>
        <div className="flex-none justify-end">
          <SearchAnyone />
        </div>
      </div>
    </div>
  )
}

export default ChangeAnyone
