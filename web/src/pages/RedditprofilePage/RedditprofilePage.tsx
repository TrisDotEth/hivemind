import axios from 'axios'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const RedditprofilePage = () => {
  // const REDIRECT_URI = 'http://localhost:3000/profile'
  // const RANDOM_STRING = 'randomestringhere'
  // const CLIENT_ID = ''
  // const CLIENT_SECRET = ''

  // const getToken = async (body) => {
  //   const data = await axios.post(
  //     'https://www.reddit.com/api/v1/access_token',
  //     querystring.stringify(body),
  //     {
  //       headers: {
  //         Authorization: `Basic ${Buffer.from(
  //           `${CLIENT_ID}:${CLIENT_SECRET}`
  //         ).toString('base64')}`,
  //         'content-type': 'application/x-www-form-urlencoded',
  //       },
  //     }
  //   )
  //   return data.data
  // }

  const headers = new Headers({
    Authorization: 'Basic ' + btoa('YOUR_CLIENT_ID:YOUR_CLIENT_SECRET'),
    'User-Agent': 'YOUR_APP_NAME',
    'Content-Type': 'application/x-www-form-urlencoded',
  })

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code: 'THE_CODE_OBTAINED_FROM_THE_REDIRECT_URI',
    redirect_uri: 'YOUR_REDIRECT_URI',
  })

  fetch('https://www.reddit.com/api/v1/access_token', {
    method: 'POST',
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.access_token)
    })
    .catch((error) => {
      console.error(error)
    })

  return (
    <>
      <MetaTags title="Redditprofile" description="Redditprofile page" />

      <h1>RedditprofilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RedditprofilePage/RedditprofilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>redditprofile</code>, link to me with `
        <Link to={routes.redditprofile()}>Redditprofile</Link>`
      </p>
    </>
  )
}

export default RedditprofilePage
