import type { gethivemindProfiles } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UpdateCurrentAnyone from '../UpdateCurrentAnyone/UpdateCurrentAnyone'

export const QUERY = gql`
  query gethivemindProfiles($profileId: Int!) {
    hivemindProfiles(profileId: $profileId) {
      profileId
      profileType
      importedData
    }
  }
`

export const Loading = () => <div className="text-white"></div>

export const Empty = () => <div className="text-white">empty</div>

export const Failure = ({ error }: CellFailureProps) => {
  return (
    <div className="text-white" style={{ color: 'red' }}>
      Error: {error?.message}
    </div>
  )
}

export const Success = (
  farcasterUserDetails: CellSuccessProps<gethivemindProfiles>
) => {
  return (
    <UpdateCurrentAnyone
      data={farcasterUserDetails.hivemindProfiles[0].importedData}
    />
  )
}
