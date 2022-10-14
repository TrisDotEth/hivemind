import type { Prisma, Hivemind } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HivemindCreateArgs>({
  hivemind: {
    one: { data: { name: 'String5074510' } },
    two: { data: { name: 'String5164660' } },
  },
})

export type StandardScenario = ScenarioData<Hivemind, 'hivemind'>
