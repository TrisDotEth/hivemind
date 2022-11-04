import { ethers } from 'ethers'
import type {
  QueryResolvers,
  MutationResolvers,
  HivemindRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const hiveminds: QueryResolvers['hiveminds'] = () => {
  return db.hivemind.findMany()
}

export const hivemind: QueryResolvers['hivemind'] = async ({ id }) => {
  const ABI = [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'changeOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_text',
          type: 'string',
        },
      ],
      name: 'createRule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'oldOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnerSet',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_index',
          type: 'uint256',
        },
      ],
      name: 'toggleActive',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_index',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: '_text',
          type: 'string',
        },
      ],
      name: 'updateRuleText',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getModerator',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'numberOfRules',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rules',
      outputs: [
        {
          internalType: 'string',
          name: 'text',
          type: 'string',
        },
        {
          internalType: 'bool',
          name: 'active',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ]
  // Add ABI of 0xcda3c4fe63bae50a8e60db3cec594d8a0bea32a1
  const dbData = await db.hivemind.findUnique({
    where: { id },
  })
  const contractDetails = {}
  const provider5 = ethers.getDefaultProvider('goerli', {
    etherscan: process.env.ETHERSCAN_API_KEY,
    alchemy: process.env.ALCHEMY_API_KEY,
  })
  const contractAddress = '0xcdA3C4FE63BAE50A8E60db3ceC594d8a0BEa32a1'
  const connect = async () => {
    const contract = new ethers.Contract(contractAddress, ABI, provider5)
    const moderator = await contract.getModerator()
    contractDetails.moderator = moderator
    const allRules = await contract.rules(0)
    contractDetails.rules = [{ text: allRules.text, active: allRules.active }]
    contractDetails.contractAddress = contractAddress
    const hivemindData = {
      ...dbData,
      ...contractDetails,
    }

    return hivemindData
  }

  const t = await connect()
  console.log(t)

  return t
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
