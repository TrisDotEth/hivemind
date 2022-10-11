import type { Action } from '@prisma/client'

import {
  actions,
  action,
  createAction,
  updateAction,
  deleteAction,
} from './actions'
import type { StandardScenario } from './actions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('actions', () => {
  scenario('returns all actions', async (scenario: StandardScenario) => {
    const result = await actions()

    expect(result.length).toEqual(Object.keys(scenario.action).length)
  })

  scenario('returns a single action', async (scenario: StandardScenario) => {
    const result = await action({ id: scenario.action.one.id })

    expect(result).toEqual(scenario.action.one)
  })

  scenario('creates a action', async (scenario: StandardScenario) => {
    const result = await createAction({
      input: {
        name: 'String5745975',
        hivemindId: scenario.action.two.hivemindId,
        content: 'String',
        networkLocation: 'String',
      },
    })

    expect(result.name).toEqual('String5745975')
    expect(result.hivemindId).toEqual(scenario.action.two.hivemindId)
    expect(result.content).toEqual('String')
    expect(result.networkLocation).toEqual('String')
  })

  scenario('updates a action', async (scenario: StandardScenario) => {
    const original = (await action({ id: scenario.action.one.id })) as Action
    const result = await updateAction({
      id: original.id,
      input: { name: 'String12349832' },
    })

    expect(result.name).toEqual('String12349832')
  })

  scenario('deletes a action', async (scenario: StandardScenario) => {
    const original = (await deleteAction({
      id: scenario.action.one.id,
    })) as Action
    const result = await action({ id: original.id })

    expect(result).toEqual(null)
  })
})
