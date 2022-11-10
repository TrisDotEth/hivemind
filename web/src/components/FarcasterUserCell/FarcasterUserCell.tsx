// import type { getUserDetails } from 'types/graphql'
import type { profile } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UpdateHmContext from '../UpdateHmContext/UpdateHmContext'

// export const QUERY = gql`
//   query getUserDetails($userName: String!) {
//     getUserDetails(userName: $userName) {
//       address
//       avatar {
//         isVerified
//         url
//       }
//       displayName
//       followerCount
//       followingCount
//       isFollowingViewer
//       isViewerFollowing
//       profile {
//         bio {
//           text
//         }
//       }
//       username
//     }
//   }
// `

export const QUERY = gql`
  query gethivemindProfiles($profileId: Int!) {
    hivemindProfiles(profileId: $profileId) {
      profileId
      profileType
      importedData
    }
  }
`

export const Loading = () => <div></div>

export const Empty = () => <div></div>

export const Failure = ({ error }: CellFailureProps) => {
  return <div style={{ color: 'red' }}>Error: {error?.message}</div>
}

export const Success = (farcasterUserDetails: CellSuccessProps<profile>) => {
  return (
    <UpdateHmContext
      data={farcasterUserDetails.hivemindProfiles[0].importedData}
    />
  )
  // return <div>{JSON.stringify(farcasterUserDetails.getUserDetails)}</div>
}
