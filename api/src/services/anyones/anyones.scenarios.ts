import type { Prisma, Anyone } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnyoneCreateArgs>({
  anyone: {
    one: {
      data: {
        officialName: 'String9321577',
        displayName: 'String',
        shortName: 'String',
      },
    },
    two: {
      data: {
        officialName: 'String3786610',
        displayName: 'String',
        shortName: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Anyone, 'anyone'>
