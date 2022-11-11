import { useRef } from 'react'
import { useEffect } from 'react'

import type { CreateHivemindInput } from 'types/graphql'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CONNECT_TWITTER_USER = gql`
  mutation connectTwitterUserMutation {
    connectTwitterUser {
      tweetURL
    }
  }
`

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      // navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    debugger
    const response = await signUp({ ...data })

    if (response.message) {
      // toast(response.message)
      toast('Tris rocks! First response')
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      console.log('Tris rocks! 2nd response')
      console.log(response)
    }
  }

  const [connectTwitterUser, { loading, error, data }] = useMutation(
    CONNECT_TWITTER_USER,
    {
      onCompleted: () => {
        // toast.success(data.connectTwitterUser.tweetURL)
        // debugger
        console.log(data)
        window.location.assign(data.connectTwitterUser.tweetURL)
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const connectTwitter = () => {
    connectTwitterUser()
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <button onClick={connectTwitter}>Connect Twitter</button>
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />
                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="twitterName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    twitterName
                  </Label>
                  <TextField
                    name="twitterName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'twitterName is required',
                      },
                    }}
                  />
                  <FieldError name="twitterName" className="rw-field-error" />

                  <Label
                    name="twitterAuthState"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    twitterAuthState
                  </Label>
                  <TextField
                    name="twitterAuthState"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'twitterAuthState is required',
                      },
                    }}
                  />
                  <FieldError
                    name="twitterAuthState"
                    className="rw-field-error"
                  />

                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    email
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{
                      required: {
                        value: true,
                        message: 'email is required',
                      },
                    }}
                  />
                  <FieldError name="email" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />
                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
