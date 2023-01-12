import { MerkleAPIClient } from '@standard-crypto/farcaster-js'
import axios from 'axios'
import { Wallet } from 'ethers'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

// export const getCasts = async ({ userName }) => {
//   const farcaster = new Farcaster(
//     new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
//   )
//   const userRegistry = new UserRegistry(
//     new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
//   )
//   let castsVariable = { casts: [] }
//   const userDetails = await userRegistry.lookupByUsername(userName)
//   for await (const activity of farcaster.getAllActivityForUser(userName, {
//     includeRecasts: false,
//   })) {
//     if (activity.body.data) {
//       let combine = activity.body.data
//       //See if it's a reply - if so add in the data
//       const replyParentAddress = activity.meta?.replyParentUsername?.address
//         ? activity.meta.replyParentUsername.address
//         : ''
//       const replyParentUsername = activity.meta?.replyParentUsername?.username
//         ? activity.meta.replyParentUsername.username
//         : ''

//       //Combine the reply data with the content data
//       combine = {
//         ...combine,
//         replyParentUsername: replyParentUsername,
//         replyParentAddress: replyParentAddress,
//         publishedAt: activity.body.publishedAt,
//         sequence: activity.body.sequence,
//       }
//       castsVariable['casts'].push(combine)
//     }
//   }
//   if (userDetails) {
//     //Could be optimised - This gets the user details for each cast, but only uses the last casts user details
//     castsVariable = {
//       ...castsVariable,
//       avatar: userDetails.avatar.url,
//       displayName: userDetails.displayName,
//       username: userDetails.username,
//       followerCount: userDetails.followerCount,
//       followingCount: userDetails.followingCount,
//       bioText: userDetails.profile.bio.text,
//     }
//   }
//   return castsVariable
// }

// export const getActivity = async ({ userName }) => {
//   const farcaster = new Farcaster(
//     new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
//   )
//   const activityVariable = { activity: [] }
//   for await (const activity of farcaster.getAllActivityForUser(userName, {
//     includeRecasts: false,
//   })) {
//     if (activity) {
//       activityVariable['activity'].push(activity)
//     }
//   }
//   return activityVariable
// }

export const getRecentCasts = async ({ userName }) => {
  const text = { text: userName }

  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)
  const activityVariable = { activity: [] }
  const followingArray = []
  const allFollowedCasts = []
  let orderedCasts = []

  const t0 = performance.now()

  const userDetails = await apiClient.lookupUserByUsername(userName)

  for await (const followingUser of apiClient.fetchUserFollowing({
    fid: userDetails.fid,
  })) {
    if (followingUser) {
      followingArray.push(
        'https://api.farcaster.xyz/v2/casts?fid=' +
          followingUser.fid +
          '&limit=5'
      )
    }
  }

  for (const followingFID of followingArray) {
    const t3 = performance.now()
    //   const res = await axios
    //   .get('https://api.farcaster.xyz/v2/casts?fid='+followingFID+'&limit=25', {
    //     headers: {
    //       accept: 'application/json',
    //       authorization:
    //         'Bearer MK-cmAoLspHzA4SN4KASPutf7m6x25Lkia1BwbVAl+0l1cP6/+4cw1bhh48GVAy1WYiKhWSIpBHFIJfKZp+GZlrMA==',
    //     },
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       console.log(error.response.data)
    //       console.log(error.response.status)
    //       console.log(error.response.headers)
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //       // http.ClientRequest in node.js
    //       console.log(error.request)
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.log('Error', error.message)
    //     }
    //     console.log(error.config)
    //   })

    // const allcasts = res.data
    // console.log(allcasts)
    //   const t4 = performance.now()
    //   console.log(`Call to doSomething took ${t3 - t4} milliseconds.`)
    // }

    // axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //   (data) => console.log(data),
    // );

    // axios.all(promises.map((promise) => axios.get(promise))).then(
    //   axios.spread((user, repos, followers, following) => {
    //     console.log({ user, repos, followers, following });
    //   })
    // );

    // axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    //   axios.spread(({data: user}, {data:repos}, {data:followers}, {data:following}) => {
    //     console.log({ user, repos, followers, following });
    //   })
    // );

    await Promise.all(
      followingArray.map((endpoint) =>
        axios
          .get(endpoint, {
            headers: {
              accept: 'application/json',
              authorization:
                'Bearer MK-cmAoLspHzA4SN4KASPutf7m6x25Lkia1BwbVAl+0l1cP6/+4cw1bhh48GVAy1WYiKhWSIpBHFIJfKZp+GZlrMA==',
            },
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request)
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message)
            }
            console.log(error.config)
          })
      )
    ).then(
      // ([{ data: result }]) => {
      //   console.log({ result }) //
      //   allFollowedCasts.push(result.result.casts)
      //   console.log(allFollowedCasts)
      // }
      // axios.spread((...allData) => {
      //   console.log({ allData })
      // })
      axios.spread((...allData) => {
        console.log({ allData })
        // for (const casts in allData) {
        //   console.log(casts)
        // }
        allData.forEach((element) => {
          element.data.result.casts.forEach((casts) => {
            // debugger
            allFollowedCasts.push(casts)
          })
        })
        console.log('Unordered')
        console.log(allFollowedCasts)
        console.log('Unordered')
        //Hark to convert an array to a json array
        const worthashot1 = JSON.stringify(allFollowedCasts)
        orderedCasts = JSON.parse(worthashot1)
        orderedCasts.sort((a, b) => a.timestamp - b.timestamp)
      })
    )

    console.log(followingArray)
    console.log(activityVariable)

    const t1 = performance.now()
    console.log(`Call to doSomething took ${t1 - t0} milliseconds.`)

    // const EXPIRY_DURATION_MS = 31536000000 // 1 yea
    // const bearerToken = await apiClient.createAuthToken(EXPIRY_DURATION_MS)
    // console.log('Bearer token = ' + bearerToken)
    // console.log(bearerToken)

    //----------------------------------------------------------

    //-----------------------------------------------------------
    console.log('Ordered')
    console.log(orderedCasts)
    console.log('Ordered')

    //IT WORKS!!!
    return text
  }
}

export const getUserDetails: QueryResolvers['getUserDetails'] = async ({
  userName,
}) => {
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)

  const userDetails = await apiClient.lookupUserByUsername(userName)
  console.log(userDetails)

  // const userRegistry = new UserRegistry(
  //   new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  // )

  // const userDetails = await userRegistry.lookupByUsername(userName)
  // console.log(userDetails)

  // const activityVariable = { activity: [] }
  // for await (const activity of farcaster.getAllActivityForUser(userName, {
  //   includeRecasts: false,
  // })) {
  //   if (activity) {
  //     activityVariable['activity'].push(activity)
  //   }
  // }
  return userDetails
}

//Get Farcaster Casts

export const getActivity: QueryResolvers['getActivity'] = async ({
  userName,
}) => {
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)
  const activityVariable = { activity: [] }

  // fetch handle to a user
  const user = await apiClient.lookupUserByUsername(userName)
  if (user === undefined) throw new Error('no such user')

  // fetch user's casts
  const t0 = performance.now()
  for await (const cast of apiClient.fetchCastsForUser(user)) {
    // console.log(JSON.stringify(cast))
    if (cast) {
      activityVariable['activity'].push(cast)
    }
  }
  const t1 = performance.now()
  console.log(`Call to getActivity took ${t1 - t0} milliseconds.`)

  return activityVariable

  // const farcaster = new Farcaster(
  //   new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  // )
  // const activityVariable = { activity: [] }
  // for await (const activity of farcaster.getAllActivityForUser(userName, {
  //   includeRecasts: false,
  // })) {
  //   if (activity) {
  //     activityVariable['activity'].push(activity)
  //   }
  // }
  // return activityVariable
}

export const updateFarcasterProfiles: MutationResolvers['updateFarcasterProfiles'] =
  async ({ input }) => {
    // logger.debug('Fired!')
    // console.log(input)

    // const tris = await getUserDetails({ userName: 'tris' })
    // logger.debug(tris)

    // const allAnyones = await db.anyone.findMany()
    const allAnyonesProfiles = await db.profile.findMany()

    // const allImportedData = allAnyones.map(async function (anyone, index) {
    //   const importedData = getUserDetails({
    //     userName: anyone.officialName.toLowerCase(),
    //   })
    //   console.log(this)
    //   const updatedProfile = this[index]
    //   updatedProfile.importedData = importedData

    //   return updatedProfile
    // }, allAnyonesProfiles)

    // const await Promise.all(allImportedData = allAnyones.map(async function (anyone, index) {
    //   //Get new data from farcaster
    //   const importedData = await getUserDetails({
    //     userName: anyone.officialName.toLowerCase(),
    //   })
    //   const anyoneId = anyone.id

    //   //Find profile to update
    //   const profileToUpdate = this.findIndex(function (profile) {
    //     // console.log(profile)
    //     //Make sure it's a farcaster profile
    //     if (profile.profileType !== 'farcaster') return false
    //     //Check that it's for this anyone
    //     if (profile.anyoneId == this) return true
    //   }, anyoneId)

    //   // console.log(profileToUpdate)
    //   const profileIdToUpdate = this[profileToUpdate].id

    //   await db.profile.update({
    //     data: { input: { importedData: importedData } },
    //     where: { id: profileIdToUpdate },
    //   })
    // }, allAnyonesProfiles))

    await Promise.all(
      allAnyonesProfiles.map(async function (profile) {
        //Get new data from farcaster
        const importedData = await getUserDetails({
          userName: profile.farcasterUsername.toLowerCase(),
        })
        // debugger
        console.log(importedData)
        const input = {
          importedData: importedData,
          profileType: 'farcaster',
          anyoneId: profile.anyoneId,
        }

        await db.profile.update({
          data: input,
          where: { id: profile.id },
        })
      }, allAnyonesProfiles)
    )

    // const newImportedData = await Promise.all(allImportedData)
    // logger.debug({ custom: newImportedData }, 'What gets returned')

    // return newImportedData

    return db.anyone.findMany()
  }
