// import type { APIGatewayEvent, Context } from 'aws-lambda'
import axios from 'axios'

import { db } from 'src/lib/db'
// import { logger } from 'src/lib/logger'

const qs = require('querystring')

const { schedule } = require('@netlify/functions')
/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async () => {
  const REDIRECT_URI = 'http://localhost:8911/redditAuth'
  const CLIENT_ID = process.env.REDDIT_CLIENT_ID
  const CLIENT_SECRET = process.env.REDDIT_SECRET_ID

  const tokensDb = await db.thirdPartyToken.findUnique({
    where: {
      id: 1,
    },
  })

  const body = {
    grant_type: 'refresh_token',
    refresh_token: tokensDb.refreshtoken,
    redirect_uri: REDIRECT_URI,
  }

  const getToken = await axios
    .post('https://www.reddit.com/api/v1/access_token', qs.stringify(body), {
      auth: { username: CLIENT_ID, password: CLIENT_SECRET },
    })
    .catch(function (err) {
      throw err
    })

  console.log('getToken')
  console.log(getToken.data)
  console.log('getToken end')

  await db.thirdPartyToken.update({
    data: {
      profilename: 'Test',
      thirdparty: 'Reddit',
      refreshtoken: getToken.data.refresh_token,
      bearertoken: getToken.data.access_token,
    },
    where: {
      id: 1,
    },
  })

  return {
    statusCode: 200,
  }
}

module.exports.handler = schedule('@hourly', handler)
