import { AlchemyProvider } from '@ethersproject/providers'
import { EvmChain } from '@moralisweb3/evm-utils'
import { publishCast } from '@standard-crypto/farcaster-js'
import axios from 'axios'
import { Wallet } from 'ethers'
import { verifyMessage } from 'ethers/lib/utils'
import Moralis from 'moralis'
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

export const createAction: MutationResolvers['createAction'] = async ({
  input,
}) => {
  //Check which network to post to
  //Just farcaster atm, so it's hardcoded
  const allowedNetworkId = 'farcaster'
  validateWith(() => {
    if (input.networkLocation !== allowedNetworkId) {
      throw new Error('Can only perform actions on farcaster atm')
    }
  })
  //Check that they have a farcaster address
  const farcasterAddress = await validateFarcasterConnection(input)
  validateWith(() => {
    if (!farcasterAddress) {
      throw new Error('No farcaster address')
    }
  })
  //get connected addresses
  const connectedAddresses = await getConnectedAddresses(farcasterAddress)
  console.log(connectedAddresses)
  await postToFarcaster(input)

  return db.action.create({
    data: input,
  })
}

const postToFarcaster = async (input: CreateActionInput) => {
  // Pretty sure there is rate limiting happening when posting to farcaster with this library. This needs to be looked into. It keeps failing silently when it doesn't post. But a few messages do seem to get through. TODO

  // await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })

  // const nftList = await Moralis.EvmApi.nft.getWalletNFTs({
  //   chain: EvmChain.ETHEREUM,
  //   address: input.walletAddress,
  //   tokenAddress: '0x0db9e2f4395a179e4add26b43cfe8e4ea1830b46',
  // })

  // logger.debug({ custom: nftList }, 'NFT LIST OBjeCT')

  const recoveredAddress = verifyMessage(input.content, input.signedTransaction)
  validateWith(() => {
    if (recoveredAddress !== input.walletAddress) {
      throw new Error("Signatures don't match")
    }
  })

  // const provider = new AlchemyProvider('goerli')
  // const wallet = Wallet.fromMnemonic(process.env.FARCASTER_MNEMONIC)
  // try {
  //   await publishCast(wallet, provider, input.content)
  // } catch (e) {
  //   logger.debug({ custom: e }, 'Farcaster error')
  // }

  return
}

const validateFarcasterConnection = async (input) => {
  try {
    const response = await axios({
      url: 'https://protocol.beb.xyz/graphql',
      method: 'post',
      data: {
        query: `
      query GET_ACCOUNT_IDENTITIES($address: String!, $chainId: Int!) {
        findAccountByAddressAndChain(address: $address, chainId: $chainId) {
          _id
          identities {
            _id
            farcaster {
              avatarUrl
              username
              displayName
              directoryUrl
              farcasterAddress
              __typename
            }
            __typename
          }
          __typename
        }
      }
      `,
        variables: {
          address: input.walletAddress,
          chainId: 1,
        },
      },
    })
    console.log(response)
    return response.data.data.findAccountByAddressAndChain.identities.farcaster
      .farcasterAddress
  } catch (error) {
    console.error(error)
  }
}

const getConnectedAddresses = async (farcasterAddress) => {
  console.log(
    'https://api.farcaster.xyz/v1/verified_addresses/' + farcasterAddress
  )
  try {
    const response = await axios.get(
      'https://api.farcaster.xyz/v1/verified_addresses/' + farcasterAddress
    )
    console.log(response)
    return response.data.result.verifiedAddresses
  } catch (error) {
    console.error(error)
  }
  console.log('sgd')
  // https://api.farcaster.xyz/v1/verified_addresses/0xDC34F1Cf1927bbc69a6507fa1C0e0F7F0c8eBCCC
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
