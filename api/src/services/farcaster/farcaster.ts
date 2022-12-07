import { AlchemyProvider } from '@ethersproject/providers'
// import { Farcaster } from '@standard-crypto/farcaster-js'
import { UserRegistry } from '@standard-crypto/farcaster-js'
import { Farcaster } from '@standard-crypto/farcaster-js'
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

export const getUserDetails: QueryResolvers['getUserDetails'] = async ({
  userName,
}) => {
  const userRegistry = new UserRegistry(
    new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  )

  const userDetails = await userRegistry.lookupByUsername(userName)
  console.log(userDetails)

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
  const farcaster = new Farcaster(
    new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  )
  const activityVariable = { activity: [] }
  for await (const activity of farcaster.getAllActivityForUser(userName, {
    includeRecasts: false,
  })) {
    if (activity) {
      activityVariable['activity'].push(activity)
    }
  }
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
