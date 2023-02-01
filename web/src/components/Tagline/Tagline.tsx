import clsx from 'clsx'

import { useLocation } from '@redwoodjs/router'

interface Tagline {
  fadeOut: boolean
}

const Tagline = ({ fadeOut }: Tagline) => {
  const { pathname } = useLocation()
  const homepage = pathname.length < 2 ? true : false
  return (
    <>
      {homepage && (
        // <div className="mb-10 mt-4 flex flex-wrap justify-center text-3xl font-semibold text-white">
        <div
          className={clsx(
            'mb-10',
            'mt-4',
            'flex',
            'opacity-100',
            'flex-wrap',
            'justify-center',
            'text-4xl',
            'font-semibold',
            'text-white',
            'transition-all',
            'transform-gpu',
            'no-wrap',
            {
              '!opacity-0': fadeOut,
              '-translate-y-8': fadeOut,
            }
          )}
        >
          <h2>DAO Controlled</h2>
          <h2>
            <span className="text-primary">Farcaster</span> Profiles
          </h2>
        </div>
      )}
    </>
  )
}

export default Tagline
