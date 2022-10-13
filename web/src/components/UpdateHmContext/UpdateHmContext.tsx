import { useContext, useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { HivemindContext } from 'src/providers/context/HivemindContext'

const UpdateHmContext = (data) => {
  const setActiveHmData = useContext(HivemindContext).setActiveHmData
  useEffect(() => {
    setActiveHmData(data.data)
    navigate(routes.home({ name: data.data.name }))
  })

  return <></>
}

export default UpdateHmContext
