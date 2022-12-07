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
        anyoneDisplayName: 'String',
        anyoneId: scenario.action.two.anyoneId,
        content: 'String',
        contentType: 'String',
        networkLocation: 'String',
        succeeded: true,
      },
    })

    expect(result.anyoneDisplayName).toEqual('String')
    expect(result.anyoneId).toEqual(scenario.action.two.anyoneId)
    expect(result.content).toEqual('String')
    expect(result.contentType).toEqual('String')
    expect(result.networkLocation).toEqual('String')
    expect(result.succeeded).toEqual(true)
  })

  scenario('updates a action', async (scenario: StandardScenario) => {
    const original = (await action({ id: scenario.action.one.id })) as Action
    const result = await updateAction({
      id: original.id,
      input: { anyoneDisplayName: 'String2' },
    })

    expect(result.anyoneDisplayName).toEqual('String2')
  })

  scenario('deletes a action', async (scenario: StandardScenario) => {
    const original = (await deleteAction({
      id: scenario.action.one.id,
    })) as Action
    const result = await action({ id: original.id })

    expect(result).toEqual(null)
  })
})
