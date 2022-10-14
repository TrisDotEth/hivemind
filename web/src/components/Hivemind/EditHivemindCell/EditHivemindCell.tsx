import type { EditHivemindById, UpdateHivemindInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HivemindForm from 'src/components/Hivemind/HivemindForm'

export const QUERY = gql`
  query EditHivemindById($id: Int!) {
    hivemind: hivemind(id: $id) {
      id
      name
      profileImageURL
      aboutInformation
    }
  }
`
const UPDATE_HIVEMIND_MUTATION = gql`
  mutation UpdateHivemindMutation($id: Int!, $input: UpdateHivemindInput!) {
    updateHivemind(id: $id, input: $input) {
      id
      name
      profileImageURL
      aboutInformation
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ hivemind }: CellSuccessProps<EditHivemindById>) => {
  const [updateHivemind, { loading, error }] = useMutation(
    UPDATE_HIVEMIND_MUTATION,
    {
      onCompleted: () => {
        toast.success('Hivemind updated')
        navigate(routes.hiveminds())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateHivemindInput,
    id: EditHivemindById['hivemind']['id']
  ) => {
    updateHivemind({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Hivemind {hivemind?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <HivemindForm hivemind={hivemind} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
