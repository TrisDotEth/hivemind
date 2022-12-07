import type { Anyone } from '@prisma/client'

import {
  anyones,
  anyone,
  createAnyone,
  updateAnyone,
  deleteAnyone,
} from './anyones'
import type { StandardScenario } from './anyones.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('anyones', () => {
  scenario('returns all anyones', async (scenario: StandardScenario) => {
    const result = await anyones()

    expect(result.length).toEqual(Object.keys(scenario.anyone).length)
  })

  scenario('returns a single anyone', async (scenario: StandardScenario) => {
    const result = await anyone({ id: scenario.anyone.one.id })

    expect(result).toEqual(scenario.anyone.one)
  })

  scenario('creates a anyone', async () => {
    const result = await createAnyone({
      input: {
        officialName: 'String3519221',
        displayName: 'String',
        shortName: 'String',
      },
    })

    expect(result.officialName).toEqual('String3519221')
    expect(result.displayName).toEqual('String')
    expect(result.shortName).toEqual('String')
  })

  scenario('updates a anyone', async (scenario: StandardScenario) => {
    const original = (await anyone({ id: scenario.anyone.one.id })) as Anyone
    const result = await updateAnyone({
      id: original.id,
      input: { officialName: 'String66721152' },
    })

    expect(result.officialName).toEqual('String66721152')
  })

  scenario('deletes a anyone', async (scenario: StandardScenario) => {
    const original = (await deleteAnyone({
      id: scenario.anyone.one.id,
    })) as Anyone
    const result = await anyone({ id: original.id })

    expect(result).toEqual(null)
  })
})
