import { ethers, logger } from 'ethers'

export const getEthDetails = async () => {
  const provider5 = ethers.getDefaultProvider('goerli', {
    etherscan: process.env.ETHERSCAN_API_KEY,
    alchemy: process.env.ALCHEMY_API_KEY,
  })

  const ABI = [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_anyoneParent',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'becomeAlive',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_anyoneParent',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'create',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_anyoneParent',
          type: 'address',
        },
      ],
      name: 'queryAnyone',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ]
  const contractAddress = '0xeeF5056Efe8759bA62B6f76EC6013c1743436A07'
  const contract = new ethers.Contract(contractAddress, ABI, provider5)
  const moderator = await contract.queryAnyone(
    '0xAb98C9b496474CcE246786B1b639A404Ac010567'
  )
  console.log(moderator)
  logger.debug('f', moderator)
  // contractDetails.moderator = moderator
  // const allRules = await contract.rules(0)
  // contractDetails.rules = [{ text: allRules.text, active: allRules.active }]
  // contractDetails.contractAddress = contractAddress
  // const hivemindData = {
  //   ...dbData,
  //   ...contractDetails,
  // }
}
