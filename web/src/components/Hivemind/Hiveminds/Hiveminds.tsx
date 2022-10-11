import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Hivemind/HivemindsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteHivemindMutationVariables, FindHiveminds } from 'types/graphql'

const DELETE_HIVEMIND_MUTATION = gql`
  mutation DeleteHivemindMutation($id: Int!) {
    deleteHivemind(id: $id) {
      id
    }
  }
`

const HivemindsList = ({ hiveminds }: FindHiveminds) => {
  const [deleteHivemind] = useMutation(DELETE_HIVEMIND_MUTATION, {
    onCompleted: () => {
      toast.success('Hivemind deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteHivemindMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete hivemind ' + id + '?')) {
      deleteHivemind({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {hiveminds.map((hivemind) => (
            <tr key={hivemind.id}>
              <td>{truncate(hivemind.id)}</td>
              <td>{truncate(hivemind.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.hivemind({ id: hivemind.id })}
                    title={'Show hivemind ' + hivemind.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHivemind({ id: hivemind.id })}
                    title={'Edit hivemind ' + hivemind.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete hivemind ' + hivemind.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(hivemind.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HivemindsList
