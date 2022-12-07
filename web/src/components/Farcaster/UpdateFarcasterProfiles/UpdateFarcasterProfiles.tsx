import { useEffect } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const TWEET_AUTH = gql`
  mutation UpdateFarcasterProfilesMutation($input: String) {
    updateFarcasterProfiles(input: $input) {
      id
    }
  }
`

const UpdateFarcasterProfiles = () => {
  const [create, { loading, error }] = useMutation(TWEET_AUTH, {
    onCompleted: () => {
      console.log('Complete fired')
      toast.success('Account Authed')
    },
    onError: (error) => {
      console.log('Error fired')
      // toast.error(error.message)
      alert(error)
    },
  })

  const auth = async () => {
    console.log('auth ran')
    create()
  }

  useEffect(() => {
    // 👇️ only runs once
    console.log('useEffect ran')
    auth()
    // 👇️ only runs once because the dependency array is empty
  }, [])

  return <div></div>
}

export default UpdateFarcasterProfiles
