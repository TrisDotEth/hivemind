import type { Prisma, ThirdPartyToken } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThirdPartyTokenCreateArgs>({
  thirdPartyToken: {
    one: {
      data: {
        profilename: 'String',
        thirdparty: 'String',
        refreshtoken: 'String',
      },
    },
    two: {
      data: {
        profilename: 'String',
        thirdparty: 'String',
        refreshtoken: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThirdPartyToken, 'thirdPartyToken'>
