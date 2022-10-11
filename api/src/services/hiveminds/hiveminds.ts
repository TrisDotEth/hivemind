import type {
  QueryResolvers,
  MutationResolvers,
  HivemindRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const hiveminds: QueryResolvers['hiveminds'] = () => {
  return db.hivemind.findMany()
}

export const hivemind: QueryResolvers['hivemind'] = ({ id }) => {
  return db.hivemind.findUnique({
    where: { id },
  })
}

export const createHivemind: MutationResolvers['createHivemind'] = ({
  input,
}) => {
  return db.hivemind.create({
    data: input,
  })
}

export const updateHivemind: MutationResolvers['updateHivemind'] = ({
  id,
  input,
}) => {
  return db.hivemind.update({
    data: input,
    where: { id },
  })
}

export const deleteHivemind: MutationResolvers['deleteHivemind'] = ({ id }) => {
  return db.hivemind.delete({
    where: { id },
  })
}

export const Hivemind: HivemindRelationResolvers = {
  actions: (_obj, { root }) => {
    return db.hivemind.findUnique({ where: { id: root?.id } }).actions()
  },
}
