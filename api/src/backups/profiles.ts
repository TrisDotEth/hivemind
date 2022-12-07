// import { AlchemyProvider } from '@ethersproject/providers'
// import { Farcaster } from '@standard-crypto/farcaster-js'
// import { UserRegistry } from '@standard-crypto/farcaster-js'
// import type {
//   QueryResolvers,
//   MutationResolvers,
//   ProfileRelationResolvers,
// } from 'types/graphql'

// import { db } from 'src/lib/db'
// import { logger } from 'src/lib/logger'

// //Get Farcaster User Details

// const getFarcasterUserDetails = async ({ userName }) => {
//   const userRegistry = new UserRegistry(
//     new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
//   )

//   const farcasterUserDetails = await userRegistry.lookupByUsername(userName)
//   return farcasterUserDetails
// }

// //Get Farcaster Casts

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

// export const profiles: QueryResolvers['profiles'] = () => {
//   return db.profile.findMany()
// }

// export const hivemindProfiles: QueryResolvers['hivemindProfiles'] = ({
//   profileId,
// }) => {
//   return db.profile.findMany({
//     where: {
//       profileId,
//     },
//   })
// }

// export const profile: QueryResolvers['profile'] = ({ id }) => {
//   return db.profile.findUnique({
//     where: { id },
//   })
// }

// export const createProfile: MutationResolvers['createProfile'] = ({
//   input,
// }) => {
//   return db.profile.create({
//     data: input,
//   })
// }

// //id for profile does not link to the id for hiveminds, obv. TODO fix it up
// export const updateProfile: MutationResolvers['updateProfile'] = async ({
//   id,
//   input,
// }) => {
//   //So damn hacky...
//   // const dbDataForProfileId = await db.profile.findUnique({
//   //   where: { id },
//   // })
//   // const dbData = await db.hivemind.findUnique({
//   //   where: { id: dbDataForProfileId.profileId },
//   // })
//   debugger
//   console.log('foo')
//   const f = 'sdfsdf'
//   logger.info('sdfgsdfg')
//   logger.debug({ custom: input }, 'Update')
//   //TODO Fix up this TS
//   // const farcasterUserDetails = await getFarcasterUserDetails({
//   //   userName: dbData.name,
//   // })
//   // TODO Fix up this TS
//   // input.importedData = farcasterUserDetails
//   return db.profile.update({
//     data: input,
//     where: { id },
//   })
// }

// export const deleteProfile: MutationResolvers['deleteProfile'] = ({ id }) => {
//   return db.profile.delete({
//     where: { id },
//   })
// }

// export const Profile: ProfileRelationResolvers = {
//   //TODO Fix up this TS
//   hivemind: (_obj, { root }) => {
//     return db.profile.findUnique({ where: { id: root?.id } }).hivemind()
//   },
// }
