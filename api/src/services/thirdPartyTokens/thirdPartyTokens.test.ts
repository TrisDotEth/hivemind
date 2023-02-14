import type { ThirdPartyToken } from '@prisma/client'

import {
  thirdPartyTokens,
  thirdPartyToken,
  createThirdPartyToken,
  updateThirdPartyToken,
  deleteThirdPartyToken,
} from './thirdPartyTokens'
import type { StandardScenario } from './thirdPartyTokens.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('thirdPartyTokens', () => {
  scenario(
    'returns all thirdPartyTokens',
    async (scenario: StandardScenario) => {
      const result = await thirdPartyTokens()

      expect(result.length).toEqual(
        Object.keys(scenario.thirdPartyToken).length
      )
    }
  )

  scenario(
    'returns a single thirdPartyToken',
    async (scenario: StandardScenario) => {
      const result = await thirdPartyToken({
        id: scenario.thirdPartyToken.one.id,
      })

      expect(result).toEqual(scenario.thirdPartyToken.one)
    }
  )

  scenario('creates a thirdPartyToken', async () => {
    const result = await createThirdPartyToken({
      input: {
        profilename: 'String',
        thirdparty: 'String',
        refreshtoken: 'String',
      },
    })

    expect(result.profilename).toEqual('String')
    expect(result.thirdparty).toEqual('String')
    expect(result.refreshtoken).toEqual('String')
  })

  scenario('updates a thirdPartyToken', async (scenario: StandardScenario) => {
    const original = (await thirdPartyToken({
      id: scenario.thirdPartyToken.one.id,
    })) as ThirdPartyToken
    const result = await updateThirdPartyToken({
      id: original.id,
      input: { profilename: 'String2' },
    })

    expect(result.profilename).toEqual('String2')
  })

  scenario('deletes a thirdPartyToken', async (scenario: StandardScenario) => {
    const original = (await deleteThirdPartyToken({
      id: scenario.thirdPartyToken.one.id,
    })) as ThirdPartyToken
    const result = await thirdPartyToken({ id: original.id })

    expect(result).toEqual(null)
  })
})
