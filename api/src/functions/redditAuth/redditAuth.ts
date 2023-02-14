import type { APIGatewayEvent } from 'aws-lambda'
import axios from 'axios'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const qs = require('querystring')

// const fetch = require('node-fetch')

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
export const handler = async (event: APIGatewayEvent) => {
  logger.info('Invoked redditAuth function')

  const REDIRECT_URI = 'http://localhost:8911/redditAuth'
  // const RANDOM_STRING = '2278ba553a'
  const CLIENT_ID = process.env.REDDIT_CLIENT_ID
  const CLIENT_SECRET = process.env.REDDIT_SECRET_ID
  const RETURNED_CODE = event.queryStringParameters.code

  const body = {
    grant_type: 'authorization_code',
    code: RETURNED_CODE,
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

  //CREATE FIRST TOKEN
  // await db.thirdPartyToken.create({
  //   data: {
  //     profilename: 'Test',
  //     thirdparty: 'Reddit',
  //     refreshtoken: getToken.data.refresh_token,
  //     bearertoken: getToken.data.access_token,
  //   },
  // })

  //UPDATE TOKEN
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

  //////THIS WORKS////////
  // const REDIRECT_URI = 'http://localhost:8911/redditAuth'
  // const CLIENT_ID = process.env.REDDIT_CLIENT_ID
  // const CLIENT_SECRET = process.env.REDDIT_SECRET_ID

  // const tokensDb = await db.thirdPartyToken.findUnique({
  //   where: {
  //     id: 1,
  //   },
  // })

  // const body = {
  //   grant_type: 'refresh_token',
  //   refresh_token: tokensDb.refreshtoken,
  //   redirect_uri: REDIRECT_URI,
  // }

  // const getToken = await axios
  //   .post('https://www.reddit.com/api/v1/access_token', qs.stringify(body), {
  //     auth: { username: CLIENT_ID, password: CLIENT_SECRET },
  //   })
  //   .catch(function (err) {
  //     throw err
  //   })

  // console.log('getToken')
  // console.log(getToken.data)
  // console.log('getToken end')

  // await db.thirdPartyToken.update({
  //   data: {
  //     profilename: 'Test',
  //     thirdparty: 'Reddit',
  //     refreshtoken: getToken.data.refresh_token,
  //     bearertoken: getToken.data.access_token,
  //   },
  //   where: {
  //     id: 1,
  //   },
  // })

  //////THIS WORKS END////////

  const data = {
    api_type: 'json',
    text: 'refresh good',
    thing_id: 't3_10s7mcd',
  }

  // const foo = await axios.post(
  //   'https://oauth.reddit.com/api/comment',
  //   qs.stringify(data),
  //   {
  //     headers: {
  //       'User-Agent': 'beAnyone',
  //       Authorization: 'bearer 5659237-IL832veGmOEMjyZ4aKfF9WpaahAnEQ',
  //     },
  //   }
  // )

  // console.log('comment')
  // console.log(foo.data)
  // console.log('end comment')

  // const foo = await axios.post(
  //   'https://oauth.reddit.com/api/comment?api_type=json&text=Testtt&thing_id=t1_10s7mcd',
  //   {
  //     headers: {
  //       'User-Agent': 'beAnyone',
  //       Authorization: 'bearer 5659237-IL832veGmOEMjyZ4aKfF9WpaahAnEQ',
  //     },
  //   }
  // )

  //////THIS WORKS ////////

  // const bar = await axios
  //   .get('https://oauth.reddit.com/api/v1/me', {
  //     headers: {
  //       'User-Agent': 'beAnyone node test',
  //       Authorization: 'bearer 5659237-IL832veGmOEMjyZ4aKfF9WpaahAnEQ',
  //     },
  //   })
  //   .catch(function (err) {
  //     throw err
  //   })

  // console.log('me')
  // console.log(bar.data)
  // console.log('end me')

  //////THIS WORKS END////////

  //////THIS WORKS ////////

  const tokensDb = await db.thirdPartyToken.findUnique({
    where: {
      id: 1,
    },
  })

  const bar = await axios
    .post('https://oauth.reddit.com/api/comment', qs.stringify(data), {
      headers: {
        'User-Agent': 'beAnyone node test',
        Authorization: 'bearer ' + tokensDb.bearertoken,
      },
    })
    .catch(function (err) {
      throw err
    })

  console.log('me')
  console.log(bar.data)
  console.log('end me')
  //////THIS WORKS END////////
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'redditAuth function',
    }),
  }
}
