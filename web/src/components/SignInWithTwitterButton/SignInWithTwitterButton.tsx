import { useContext } from 'react'

import { SparklesIcon } from '@heroicons/react/24/outline'
import type { connectTwitterUser } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const CONNECT_TWITTER_USER = gql`
  mutation connectTwitterUserMutation {
    connectTwitterUser {
      twitterURL
    }
  }
`

const SignInWithTwitterButton = () => {
  const { signUp, loading } = useAuth()
  const connectTwitter = async () => {
    //make a user first, with random data
    const randData = {
      username: Math.random().toString(36).slice(2, 7),
      twitterName: Math.random().toString(36).slice(2, 7),
      password: Math.random().toString(36).slice(2, 7),
    }
    const response = await signUp({ ...randData })

    if (response.message) {
      // toast(response.message)
      toast('First response')
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      console.log('2nd response')
      console.log(response)
      split()
    }
  }
  const split = () => {
    connectTwitterUser()
  }

  const [connectTwitterUser, { error, data }] = useMutation(
    CONNECT_TWITTER_USER,
    {
      onCompleted: (e) => {
        window.location.assign(e.connectTwitterUser.twitterURL)
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  return (
    <div>
      <button onClick={connectTwitter}>Connect Twitter</button>
    </div>
  )
}

export default SignInWithTwitterButton
