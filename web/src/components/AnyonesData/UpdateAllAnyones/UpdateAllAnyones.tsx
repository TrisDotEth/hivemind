import { useEffect } from 'react'

import { useAllAnyonesStore } from 'src/providers/store/AllAnyonesStore'

// Getting non-reactive fresh state - worth a shot
// const addAnyones = useAllAnyonesStore.getState().addAnyones

const UpdateAllAnyones = (anyones) => {
  console.log('Update All Anyone rendered')
  const addAnyones = useAllAnyonesStore((state) => state.addAnyones)

  useEffect(() => {
    addAnyones(anyones.anyones)
    console.log('Update All Anyone updated store')
  }, [addAnyones])

  return null
}

export default UpdateAllAnyones
