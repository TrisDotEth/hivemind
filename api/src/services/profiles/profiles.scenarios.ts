import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: {
        importedData: { foo: 'bar' },
        hivemind: { create: { name: 'String1626285' } },
      },
    },
    two: {
      data: {
        importedData: { foo: 'bar' },
        hivemind: { create: { name: 'String6471167' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
