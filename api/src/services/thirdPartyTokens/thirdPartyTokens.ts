import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const thirdPartyTokens: QueryResolvers['thirdPartyTokens'] = () => {
  return db.thirdPartyToken.findMany()
}

export const thirdPartyToken: QueryResolvers['thirdPartyToken'] = ({ id }) => {
  return db.thirdPartyToken.findUnique({
    where: { id },
  })
}

export const createThirdPartyToken: MutationResolvers['createThirdPartyToken'] =
  ({ input }) => {
    return db.thirdPartyToken.create({
      data: input,
    })
  }

export const updateThirdPartyToken: MutationResolvers['updateThirdPartyToken'] =
  ({ id, input }) => {
    return db.thirdPartyToken.update({
      data: input,
      where: { id },
    })
  }

export const deleteThirdPartyToken: MutationResolvers['deleteThirdPartyToken'] =
  ({ id }) => {
    return db.thirdPartyToken.delete({
      where: { id },
    })
  }
