import { AlchemyProvider } from '@ethersproject/providers'
import { publishCast } from '@standard-crypto/farcaster-js'
import { Wallet } from 'ethers'
import type {
  QueryResolvers,
  MutationResolvers,
  ActionRelationResolvers,
  CreateActionInput,
} from 'types/graphql'

import { validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const actions: QueryResolvers['actions'] = () => {
  return db.action.findMany()
}

export const action: QueryResolvers['action'] = ({ id }) => {
  return db.action.findUnique({
    where: { id },
  })
}

export const createAction: MutationResolvers['createAction'] = ({ input }) => {
  //Check which network to post to
  //Just farcaster atm, so it's hardcoded
  const allowedNetworkId = 'farcaster'
  validateWith(() => {
    if (input.networkLocation !== allowedNetworkId) {
      throw 'Can only perform actions on farcaster atm'
    }
  })

  postToFarcaster(input)

  return db.action.create({
    data: input,
  })
}

const postToFarcaster = async (input: CreateActionInput) => {
  // Pretty sure there is rate limiting happening when posting to farcaster with this library. This needs to be looked into. It keeps failing silently when it doesn't post. But a few messages do seem to get through. TODO

  const provider = new AlchemyProvider('goerli')
  const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  try {
    await publishCast(wallet, provider, input.content)
  } catch (e) {
    logger.debug({ custom: e }, 'Farcaster error')
  }
  return
}

export const updateAction: MutationResolvers['updateAction'] = ({
  id,
  input,
}) => {
  return db.action.update({
    data: input,
    where: { id },
  })
}

export const deleteAction: MutationResolvers['deleteAction'] = ({ id }) => {
  return db.action.delete({
    where: { id },
  })
}

export const Action: ActionRelationResolvers = {
  hivemind: (_obj, { root }) => {
    return db.action.findUnique({ where: { id: root?.id } }).hivemind()
  },
}
