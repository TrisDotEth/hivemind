import { MetaTags } from '@redwoodjs/web'

const RedditPage = () => {
  const DURATION = 'permanent'
  const SCOPE = 'identity edit flair history read vote wikiread wikiedit submit'
  const REDIRECT_URI = 'http://localhost:8911/redditAuth'
  const RANDOM_STRING = '2278ba553a'
  const RESPONSE_TYPE = 'code'
  const CLIENT_ID = process.env.REDDIT_CLIENT_ID
  // const CLIENT_SECRET = process.env.REDDIT_SECRET_ID

  const URL = `https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&state=${RANDOM_STRING}&redirect_uri=${REDIRECT_URI}&duration=${DURATION}&scope=${SCOPE}`
  return (
    <>
      <MetaTags title="Reddit" description="Reddit page" />

      <h1>RedditPage</h1>
      <div className="sign-in">
        <div>
          <h1>Welcome to Reddit OAuth demo</h1>
          <p>Sign in to continue!</p>
        </div>
        <a
          style={{
            margin: '20px',
            background: 'red',
            color: '#FFFFFF',
            borderRadius: '3px',
            padding: '8px',
          }}
          href={URL}
        >
          Sign in with Reddit
        </a>
      </div>
    </>
  )
}

export default RedditPage
