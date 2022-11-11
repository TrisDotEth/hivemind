import { TwitterApi } from 'twitter-api-v2'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const connectTwitterUser = async () => {
  const client = new TwitterApi({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
  })

  const { url, codeVerifier, state } = client.generateOAuth2AuthLink(
    process.env.TWITTER_REDIRECT,
    { scope: ['tweet.read', 'tweet.write', 'users.read', 'offline.access'] }
  )
  //Update db
  const dbInput = {
    twitterURLRedirect: process.env.TWITTER_REDIRECT,
    twitterCodeVerifier: codeVerifier,
    twitterState: state,
  }

  //TODO removing await here might speed it up
  await db.user.update({
    data: dbInput,
    where: { id: context.currentUser.id },
  })

  const twitterURL = { twitterURL: url }
  return twitterURL
}

export const authTwitterAccountSuccess = async ({ id, input }) => {
  //get saved details
  const twitterData = await db.user.findUnique({
    where: { id: context.currentUser.id },
  })

  const state = input.state
  const code = input.bearertoken
  const codeVerifier = twitterData.twitterCodeVerifier
  const sessionState = twitterData.twitterState
  const callbackUrl = twitterData.twitterURLRedirect

  let tweetDeets = {
    twitterAccessToken: '',
    twitterRefreshToken: '',
    twitterName: '',
  }

  //guards
  if (!codeVerifier || !state || !sessionState || !code) {
    throw new Error('You denied the app or your session expired')
  }
  if (state !== sessionState) {
    throw new Error('Stored tokens didnt match!')
  }

  // Obtain access token
  const client = new TwitterApi({
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
  })
  //check it works and add name to db
  await client
    .loginWithOAuth2({ code, codeVerifier, redirectUri: callbackUrl })
    .then(async ({ client: loggedClient, accessToken, refreshToken }) => {
      // If you want to refresh your token later, store {refreshToken} (it is present if 'offline.access' has been given as scope)
      //Update db
      const { data: userObject } = await loggedClient.v2.me({
        'user.fields': ['description', 'verified'],
      })
      debugger
      tweetDeets = {
        twitterAccessToken: accessToken,
        twitterRefreshToken: refreshToken,
        twitterName: userObject.username,
      }
      //TODO Search for unique twitter name, if the same then update keys and delete old copy
      logger.debug({ custom: tweetDeets }, 'tweetDeetsOBjeCT')
      //TODO removing await here might speed it up
      await db.user.update({
        data: tweetDeets,
        where: { id: context.currentUser.id },
      })
    })
    .catch((err) =>
      console.log('Error is = ' + err + ' ||| JSON is = ' + JSON.stringify(err))
    )

  return tweetDeets
}
