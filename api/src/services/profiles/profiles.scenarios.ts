import type { Prisma, Profile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: {
        importedData: { foo: 'bar' },
        anyone: {
          create: {
            officialName: 'String8281933',
            displayName: 'String',
            shortName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        importedData: { foo: 'bar' },
        anyone: {
          create: {
            officialName: 'String1732252',
            displayName: 'String',
            shortName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Profile, 'profile'>
