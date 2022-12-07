import type { Prisma, Action } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ActionCreateArgs>({
  action: {
    one: {
      data: {
        anyoneDisplayName: 'String',
        content: 'String',
        contentType: 'String',
        networkLocation: 'String',
        succeeded: true,
        anyone: {
          create: {
            officialName: 'String9432874',
            displayName: 'String',
            shortName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        anyoneDisplayName: 'String',
        content: 'String',
        contentType: 'String',
        networkLocation: 'String',
        succeeded: true,
        anyone: {
          create: {
            officialName: 'String7094300',
            displayName: 'String',
            shortName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Action, 'action'>
