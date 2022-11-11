import type { SessionStorage } from '@prisma/client'

import {
  sessionStorages,
  sessionStorage,
  createSessionStorage,
  updateSessionStorage,
  deleteSessionStorage,
} from './sessionStorages'
import type { StandardScenario } from './sessionStorages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sessionStorages', () => {
  scenario(
    'returns all sessionStorages',
    async (scenario: StandardScenario) => {
      const result = await sessionStorages()

      expect(result.length).toEqual(Object.keys(scenario.sessionStorage).length)
    }
  )

  scenario(
    'returns a single sessionStorage',
    async (scenario: StandardScenario) => {
      const result = await sessionStorage({
        id: scenario.sessionStorage.one.id,
      })

      expect(result).toEqual(scenario.sessionStorage.one)
    }
  )

  scenario('creates a sessionStorage', async () => {
    const result = await createSessionStorage({
      input: {
        id: 'String',
        twitterState: 'String',
        twitterCodeVerifier: 'String',
        twitterURLRedirect: 'String',
      },
    })

    expect(result.id).toEqual('String')
    expect(result.twitterState).toEqual('String')
    expect(result.twitterCodeVerifier).toEqual('String')
    expect(result.twitterURLRedirect).toEqual('String')
  })

  scenario('updates a sessionStorage', async (scenario: StandardScenario) => {
    const original = (await sessionStorage({
      id: scenario.sessionStorage.one.id,
    })) as SessionStorage
    const result = await updateSessionStorage({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a sessionStorage', async (scenario: StandardScenario) => {
    const original = (await deleteSessionStorage({
      id: scenario.sessionStorage.one.id,
    })) as SessionStorage
    const result = await sessionStorage({ id: original.id })

    expect(result).toEqual(null)
  })
})
