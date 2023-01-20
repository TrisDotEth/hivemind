import { MerkleAPIClient } from '@standard-crypto/farcaster-js'
import axios from 'axios'
import { Wallet } from 'ethers'
import type {
  QueryResolvers,
  MutationResolvers,
  ActionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const actions: QueryResolvers['actions'] = () => {
  return db.action.findMany()
}

export const action: QueryResolvers['action'] = ({ id }) => {
  return db.action.findUnique({
    where: { id },
  })
}

export const createAction: MutationResolvers['createAction'] = async ({
  input,
}) => {
  // Get Bearer token
  // const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC_TRIS)
  // const client = new MerkleAPIClient(wallet)
  // const EXPIRY_DURATION_MS = 31536000000 // 1 years
  // const bearerToken = await client.createAuthToken(EXPIRY_DURATION_MS)
  // console.log(bearerToken)

  // const userDetails = await apiClient.lookupUserByUsername(input.userName)
  //TODO change the account it post to based on the user posting

  console.log(input)

  if (input.parentHash) {
    const cast = {
      text: input.content,
      parent: {
        fid: input.parentOwnerfid,
        hash: input.parentHash,
      },
    }
    await axios
      .post('https://api.farcaster.xyz/v2/casts', cast, {
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + process.env.FARCASTER_BEARER_TOKEN_TRIS,
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response)
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
  } else {
    const cast = { text: input.content }
    await axios
      .post('https://api.farcaster.xyz/v2/casts', cast, {
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + process.env.FARCASTER_BEARER_TOKEN_TRIS,
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response)
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
  }

  const placeholder = {
    casted: true,
  }

  return placeholder
  // return db.action.create({
  //   data: input,
  // })
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
  anyone: (_obj, { root }) => {
    return db.action.findUnique({ where: { id: root?.id } }).anyone()
  },
}
