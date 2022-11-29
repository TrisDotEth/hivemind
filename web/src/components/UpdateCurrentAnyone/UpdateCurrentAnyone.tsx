import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const UpdateCurrentAnyone = (data) => {
  const anyone = useAnyoneStore((state) => state.addAnyone)
  useEffect(() => {
    anyone(data.data)
    navigate(routes.be({ name: data.data.username }))
  }, [anyone])

  return (
    <>
      <span>Done</span>
    </>
  )
}

export default UpdateCurrentAnyone
