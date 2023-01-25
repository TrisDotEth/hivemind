import { useLocation } from '@redwoodjs/router'

const Tagline = () => {
  const { pathname } = useLocation()
  const homepage = pathname.length < 2 ? true : false
  return (
    <>
      {homepage && (
        <div className="mb-10 mt-4 flex flex-wrap justify-center text-3xl font-semibold text-white">
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
