import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const sessionStorages: QueryResolvers['sessionStorages'] = () => {
  return db.sessionStorage.findMany()
}

export const sessionStorage: QueryResolvers['sessionStorage'] = ({ id }) => {
  return db.sessionStorage.findUnique({
    where: { id },
  })
}

export const createSessionStorage: MutationResolvers['createSessionStorage'] =
  ({ input }) => {
    return db.sessionStorage.create({
      data: input,
    })
  }

export const updateSessionStorage: MutationResolvers['updateSessionStorage'] =
  ({ id, input }) => {
    return db.sessionStorage.update({
      data: input,
      where: { id },
    })
  }

export const deleteSessionStorage: MutationResolvers['deleteSessionStorage'] =
  ({ id }) => {
    return db.sessionStorage.delete({
      where: { id },
    })
  }
