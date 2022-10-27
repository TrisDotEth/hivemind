import { AlchemyProvider } from '@ethersproject/providers'
import { Farcaster } from '@standard-crypto/farcaster-js'
import { UserRegistry } from '@standard-crypto/farcaster-js'

export const getCasts = async ({ userName }) => {
  const farcaster = new Farcaster(
    new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  )
  const userRegistry = new UserRegistry(
    new AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY)
  )
  let castsVariable = { casts: [] }
  const userDetails = await userRegistry.lookupByUsername(userName)
  for await (const activity of farcaster.getAllActivityForUser(userName, {
    includeRecasts: false,
  })) {
    if (activity.body.data) {
      let combine = activity.body.data
      //See if it's a reply - if so add in the data
      const replyParentAddress = activity.meta?.replyParentUsername?.address
        ? activity.meta.replyParentUsername.address
        : ''
      const replyParentUsername = activity.meta?.replyParentUsername?.username
        ? activity.meta.replyParentUsername.username
        : ''

      //Combine the reply data with the content data
      combine = {
        ...combine,
        replyParentUsername: replyParentUsername,
        replyParentAddress: replyParentAddress,
        publishedAt: activity.body.publishedAt,
        sequence: activity.body.sequence,
      }
      castsVariable['casts'].push(combine)
    }
  }
  if (userDetails) {
    //Could be optimised - This gets the user details for each cast, but only uses the last casts user details
    castsVariable = {
      ...castsVariable,
      avatar: userDetails.avatar.url,
      displayName: userDetails.displayName,
      username: userDetails.username,
      followerCount: userDetails.followerCount,
      followingCount: userDetails.followingCount,
      bioText: userDetails.profile.bio.text,
    }
  }
  return castsVariable
}
