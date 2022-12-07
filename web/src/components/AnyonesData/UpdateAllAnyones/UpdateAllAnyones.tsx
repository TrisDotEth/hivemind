import { useEffect } from 'react'

import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

// Getting non-reactive fresh state - worth a shot
// const addAnyones = useAllAnyonesStore.getState().addAnyones

const UpdateAllAnyones = (anyones) => {
  const addAnyones = useAllAnyonesStore((state) => state.addAnyones)

  useEffect(() => {
    addAnyones(anyones.anyones)
  }, [addAnyones])

  return (
    <>
      <span></span>
    </>
  )
}

export default UpdateAllAnyones
