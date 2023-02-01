import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'

const UPDATE_FARCASTER_PROFILES = gql`
  mutation UpdateFarcasterProfilesMutation($input: String) {
    updateFarcasterProfiles(input: $input) {
      id
    }
  }
`

const UpdateFarcasterProfiles = () => {
  const [create] = useMutation(UPDATE_FARCASTER_PROFILES, {
    onCompleted: () => {
      console.log('Farcaster profiles for all anyones updated')
    },
    onError: (error) => {
      console.log('Error fired')
      alert(error)
    },
  })

  const auth = async () => {
    create()
  }

  useEffect(() => {
    auth()
    // 👇️ only runs once because the dependency array is empty
  }, [])

  return null
}

export default UpdateFarcasterProfiles
