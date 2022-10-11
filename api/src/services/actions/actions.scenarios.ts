import type { Prisma, Action } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ActionCreateArgs>({
  action: {
    one: {
      data: {
        name: 'String4592351',
        content: 'String',
        networkLocation: 'String',
        hivemind: { create: { name: 'String4008773' } },
      },
    },
    two: {
      data: {
        name: 'String4319661',
        content: 'String',
        networkLocation: 'String',
        hivemind: { create: { name: 'String2166602' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Action, 'action'>
