import clsx from 'clsx'
import { Anyone } from 'types/graphql'

import LargeSelectAnyone from './LargeSelectAnyone/LargeSelectAnyone'
import SelectAnyone from './SelectAnyone/SelectAnyone'

// Notes
// - Such a strange bug with scroller. Having the width be auto freaked it out and set the width to some obscenely high value. Changing the width to be a low percentage fixed it. But I'm not sure how. Too much time spent on this already...

interface SizeOfChangeAnyone {
  large: boolean
  anyone: Anyone
  fadeOut: boolean
}
const ChangeAnyone = ({ large, anyone, fadeOut }: SizeOfChangeAnyone) => {
  return (
    <div
      className={clsx(
        'relative',
        'mx-auto',
        'w-full',
        'max-w-5xl',
        'bg-black',
        'px-2',
        'pt-1',
        'text-white',
        'transition-all',
        'transform-gpu',
        {
          'opacity-0': fadeOut,
          '-translate-y-8': fadeOut,
        }
      )}
    >
      {/* Background Overlay */}
      {/* <div
        style={{
          position: 'absolute',
          width: '100vw',
          left: '0px',
          top: '-70px',
          height: '370px',
          opacity: '0.15',
          backgroundImage: 'url(' + backgroundImage + ')',
          userSelect: 'none',
        }}
      ></div> */}
      {/* <div className="flex">
        <div className="w-1/6 flex-1"> */}
      {large ? <LargeSelectAnyone anyone={anyone} /> : <SelectAnyone />}
      {/* </div>
      </div> */}
    </div>
  )
}

export default ChangeAnyone
