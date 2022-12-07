// import { Link, routes, navigate } from '@redwoodjs/router'
// import { useMutation } from '@redwoodjs/web'
// import { toast } from '@redwoodjs/web/toast'

// import {  } from 'src/lib/formatters'

// import type { DeleteHivemindMutationVariables, FindHivemindById } from 'types/graphql'

// const DELETE_HIVEMIND_MUTATION = gql`
//   mutation DeleteHivemindMutation($id: Int!) {
//     deleteHivemind(id: $id) {
//       id
//     }
//   }
// `

// interface Props {
//   hivemind: NonNullable<FindHivemindById['hivemind']>
// }

// const Hivemind = ({ hivemind }: Props) => {
//   const [deleteHivemind] = useMutation(DELETE_HIVEMIND_MUTATION, {
//     onCompleted: () => {
//       toast.success('Hivemind deleted')
//       navigate(routes.hiveminds())
//     },
//     onError: (error) => {
//       toast.error(error.message)
//     },
//   })

//   const onDeleteClick = (id: DeleteHivemindMutationVariables['id']) => {
//     if (confirm('Are you sure you want to delete hivemind ' + id + '?')) {
//       deleteHivemind({ variables: { id } })
//     }
//   }

//   return (
//     <>
//       <div className="rw-segment">
//         <header className="rw-segment-header">
//           <h2 className="rw-heading rw-heading-secondary">
//             Hivemind {hivemind.id} Detail
//           </h2>
//         </header>
//         <table className="rw-table">
//           <tbody>
//             <tr>
//               <th>Id</th>
//               <td>{hivemind.id}</td>
//             </tr><tr>
//               <th>Name</th>
//               <td>{hivemind.name}</td>
//             </tr><tr>
//               <th>Profile image url</th>
//               <td>{hivemind.profileImageURL}</td>
//             </tr><tr>
//               <th>About information</th>
//               <td>{hivemind.aboutInformation}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <nav className="rw-button-group">
//         <Link
//           to={routes.editHivemind({ id: hivemind.id })}
//           className="rw-button rw-button-blue"
//         >
//           Edit
//         </Link>
//         <button
//           type="button"
//           className="rw-button rw-button-red"
//           onClick={() => onDeleteClick(hivemind.id)}
//         >
//           Delete
//         </button>
//       </nav>
//     </>
//   )
// }

// export default Hivemind
