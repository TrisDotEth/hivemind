import type { Prisma, Hivemind } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HivemindCreateArgs>({
  hivemind: {
    one: { data: { name: 'String7043981' } },
    two: { data: { name: 'String4935610' } },
  },
})

export type StandardScenario = ScenarioData<Hivemind, 'hivemind'>
