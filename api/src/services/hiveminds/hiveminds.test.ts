import type { Hivemind } from '@prisma/client'

import {
  hiveminds,
  hivemind,
  createHivemind,
  updateHivemind,
  deleteHivemind,
} from './hiveminds'
import type { StandardScenario } from './hiveminds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('hiveminds', () => {
  scenario('returns all hiveminds', async (scenario: StandardScenario) => {
    const result = await hiveminds()

    expect(result.length).toEqual(Object.keys(scenario.hivemind).length)
  })

  scenario('returns a single hivemind', async (scenario: StandardScenario) => {
    const result = await hivemind({ id: scenario.hivemind.one.id })

    expect(result).toEqual(scenario.hivemind.one)
  })

  scenario('creates a hivemind', async () => {
    const result = await createHivemind({
      input: { name: 'String7301185' },
    })

    expect(result.name).toEqual('String7301185')
  })

  scenario('updates a hivemind', async (scenario: StandardScenario) => {
    const original = (await hivemind({
      id: scenario.hivemind.one.id,
    })) as Hivemind
    const result = await updateHivemind({
      id: original.id,
      input: { name: 'String71650192' },
    })

    expect(result.name).toEqual('String71650192')
  })

  scenario('deletes a hivemind', async (scenario: StandardScenario) => {
    const original = (await deleteHivemind({
      id: scenario.hivemind.one.id,
    })) as Hivemind
    const result = await hivemind({ id: original.id })

    expect(result).toEqual(null)
  })
})
