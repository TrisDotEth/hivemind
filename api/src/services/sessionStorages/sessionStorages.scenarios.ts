import type { Prisma, SessionStorage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SessionStorageCreateArgs>({
  sessionStorage: {
    one: {
      data: {
        id: 'String',
        twitterState: 'String',
        twitterCodeVerifier: 'String',
        twitterURLRedirect: 'String',
      },
    },
    two: {
      data: {
        id: 'String',
        twitterState: 'String',
        twitterCodeVerifier: 'String',
        twitterURLRedirect: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SessionStorage, 'sessionStorage'>
