import type { getAllAnyones } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UpdateAllAnyones from '../UpdateAllAnyones/UpdateAllAnyones'

export const QUERY = gql`
  query getAllAnyones {
    anyones {
      id
      shortName
      displayName
      officialName
      profiles {
        id
        importedData
        profileType
      }
    }
  }
`

export const Loading = () => <div></div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ anyones }: CellSuccessProps<getAllAnyones>) => {
  return <UpdateAllAnyones anyones={anyones} />
}
