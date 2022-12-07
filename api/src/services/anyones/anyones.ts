import type {
  QueryResolvers,
  MutationResolvers,
  AnyoneRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

import { getUserDetails } from '../farcaster/farcaster'

export const anyones: QueryResolvers['anyones'] = () => {
  // const tris = await getUserDetails({ userName: 'tris' })
  // logger.debug(tris)

  // const allAnyones = await db.anyone.findMany()
  // const allAnyonesProfiles = await db.profile.findMany()

  // const allImportedData = allAnyones.map(async function (anyone, index) {
  //   const importedData = getUserDetails({
  //     userName: anyone.officialName.toLowerCase(),
  //   })
  //   console.log(this)
  //   const updatedProfile = this[index]
  //   updatedProfile.importedData = importedData

  //   return updatedProfile
  // }, allAnyonesProfiles)

  // const newImportedData = await Promise.all(allImportedData)
  // logger.debug({ custom: newImportedData }, 'What gets returned')

  return db.anyone.findMany()
}

export const anyone: QueryResolvers['anyone'] = ({ id }) => {
  return db.anyone.findUnique({
    where: { id },
  })
}

export const createAnyone: MutationResolvers['createAnyone'] = ({ input }) => {
  return db.anyone.create({
    data: input,
  })
}

export const updateAnyone: MutationResolvers['updateAnyone'] = ({
  id,
  input,
}) => {
  return db.anyone.update({
    data: input,
    where: { id },
  })
}

export const deleteAnyone: MutationResolvers['deleteAnyone'] = ({ id }) => {
  return db.anyone.delete({
    where: { id },
  })
}

export const Anyone: AnyoneRelationResolvers = {
  actions: (_obj, { root }) => {
    return db.anyone.findUnique({ where: { id: root?.id } }).actions()
  },
  profiles: (_obj, { root }) => {
    return db.anyone.findUnique({ where: { id: root?.id } }).profiles()
  },
}
