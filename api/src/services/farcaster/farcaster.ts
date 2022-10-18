import { Farcaster } from "@standard-crypto/farcaster-js";
import { AlchemyProvider } from "@ethersproject/providers";

export const getCasts = async ({ userName }) => {
  const farcaster = new Farcaster(new AlchemyProvider("goerli"));
  let castsVariable = {casts:[]}
  for await (const activity of farcaster.getAllActivityForUser(userName, {
    includeRecasts: false,
  })) {
    if(activity.body.data){
      castsVariable = {
        ...castsVariable,
        avatar: activity.meta.avatar,
        displayName: activity.meta.displayName,
        username: activity.body.username,
        type: activity.body.type,
      }
      let combine = activity.body.data
      combine = {
        ...combine,
        publishedAt: activity.body.publishedAt
      }
      castsVariable['casts'].push(combine)
    }
  }
  return castsVariable
}

