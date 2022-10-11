import type { Prisma, Hivemind } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.HivemindCreateArgs>({
  hivemind: {
    one: { data: { name: 'String4279105' } },
    two: { data: { name: 'String3003412' } },
  },
})

export type StandardScenario = ScenarioData<Hivemind, 'hivemind'>
