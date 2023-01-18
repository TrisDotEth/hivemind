import { MerkleAPIClient } from '@standard-crypto/farcaster-js'
import axios from 'axios'
import { Wallet } from 'ethers'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const getRecentCasts = async ({ userName }) => {
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)
  const activityVariable = { activity: [] }
  const followingArray = []
  const allFollowedCasts = []
  let orderedCasts = []

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

  await Promise.all(
    followingArray.map((endpoint) =>
      axios
        .get(endpoint, {
          headers: {
            accept: 'application/json',
            authorization: 'Bearer ' + process.env.FARCASTER_BEARER_TOKEN,
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
  ).then(([...allData]) => {
    allData.forEach((element) => {
      element.data.result.casts.forEach((casts) => {
        // Check cast is not a reply
        if (casts.parentHash) return false
        // Check cast is not a recast
        if (casts.recast) return false
        // Check cast is not deleted TODO
        // if (casts.deleted??) return false

        //Put all the followed casts into their own array
        allFollowedCasts.push(casts)
      })
    })

    //Hack to convert an array to a json array?? TODO do it properly
    const weirdHack = JSON.stringify(allFollowedCasts)
    orderedCasts = JSON.parse(weirdHack)
    //Sort by Timestamp
    orderedCasts.sort((a, b) => b.timestamp - a.timestamp)
    //Reducing size of array to help performance
    orderedCasts.length = 50
  })

  //Add to the same variable used for generic getActivity. Prob needs to be updated at some point.
  orderedCasts.forEach((e) => activityVariable['activity'].push(e))

  return activityVariable
}

export const getUserDetails: QueryResolvers['getUserDetails'] = async ({
  userName,
}) => {
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)

  const userDetails = await apiClient.lookupUserByUsername(userName)
  return userDetails
}

//Get Farcaster Casts

export const getActivity: QueryResolvers['getActivity'] = async ({
  userName,
}) => {
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  const apiClient = new MerkleAPIClient(wallet)
  const activityVariable = { activity: [] }
  const userDetails = await apiClient.lookupUserByUsername(userName)

  const endpoint =
    'https://api.farcaster.xyz/v2/casts?fid=' + userDetails.fid + '&limit=50'
  await axios
    .get(endpoint, {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + process.env.FARCASTER_BEARER_TOKEN,
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
    .then((response) => {
      response.data.result.casts.forEach((cast) => {
        // Check cast is not a reply
        if (cast.parentHash) return false
        // Check cast is not a recast
        if (cast.recast) return false
        // Check cast is not deleted TODO
        // if (casts.deleted??) return false

        //Put all the followed casts into their own array
        activityVariable['activity'].push(cast)
      })
    })
  debugger
  return activityVariable
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

export const getThreadCasts = async ({ threadHash }) => {
  const activityVariable = { activity: [] }

  const endpoint =
    'https://api.farcaster.xyz/v2/all-casts-in-thread?threadHash=' + threadHash
  await axios
    .get(endpoint, {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + process.env.FARCASTER_BEARER_TOKEN,
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
    .then((response) => {
      response.data.result.casts.forEach((cast) => {
        // Check cast is not a reply
        // if (cast.parentHash) return false
        // Check cast is not a recast
        if (cast.recast) return false
        // Check cast is not deleted TODO
        // if (casts.deleted??) return false

        //Put all the followed casts into their own array
        activityVariable['activity'].push(cast)
      })
    })

  return activityVariable
}
