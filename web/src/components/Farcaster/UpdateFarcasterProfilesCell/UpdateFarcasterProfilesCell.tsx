import type { UpdateFarcasterProfilesMutation } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

// import UpdateAllAnyones from 'src/components/UpdateAllAnyones'

export const MUTATION = gql`
  mutation UpdateFarcasterProfilesMutation($input: String) {
    updateFarcasterProfiles(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  updateFarcasterProfiles,
}: CellSuccessProps<UpdateFarcasterProfilesMutation>) => {
  // return <UpdateAllAnyones anyones={updateFarcasterProfiles} />
  return <span>f</span>
}
