import { useEffect } from 'react'

import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

//not sure why I have to return any object, so have a useless url
const AUTH_TWITTER_ACCOUNT_SUCCESS = gql`
  mutation authTwitter($id: Int!, $bearertoken: String, $state: String) {
    authTwitterAccountSuccess(
      id: $id
      input: { bearertoken: $bearertoken, state: $state }
    ) {
      twitterURL
    }
  }
`

const ConnectsuccessPage = () => {
  const [authTwitterSuccess, { loading, error, data }] = useMutation(
    AUTH_TWITTER_ACCOUNT_SUCCESS,
    {
      onCompleted: () => {
        console.log('Complete fired')
        toast.success('Account Authed')
        // navigate(routes.home())
        // debugger
        console.log(data)
        console.log('here we go!')
        navigate(routes.home())
      },
      onError: (error) => {
        toast.error(error.message)
        navigate(routes.home())
      },
    }
  )

  const auth = async (code, state) => {
    authTwitterSuccess({ variables: { id: 1, bearertoken: code, state } })
    console.log(code, state)
  }

  useEffect(() => {
    // 👇️ only runs once
    console.log('useEffect ran')
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const state = urlParams.get('state')
    if (code) {
      auth(code, state)
    }
    // 👇️ only runs once because the dependency array is empty
  }, [])

  return (
    <>
      <h1>ConnectsuccessPage</h1>
    </>
  )
}

export default ConnectsuccessPage
