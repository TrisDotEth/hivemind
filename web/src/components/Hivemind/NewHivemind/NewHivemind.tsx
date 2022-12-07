// import { navigate, routes } from '@redwoodjs/router'
// import { useMutation } from '@redwoodjs/web'
// import { toast } from '@redwoodjs/web/toast'

// import HivemindForm from 'src/components/Hivemind/HivemindForm'

// import type { CreateHivemindInput } from 'types/graphql'

// const CREATE_HIVEMIND_MUTATION = gql`
//   mutation CreateHivemindMutation($input: CreateHivemindInput!) {
//     createHivemind(input: $input) {
//       id
//     }
//   }
// `

// const NewHivemind = () => {
//   const [createHivemind, { loading, error }] = useMutation(
//     CREATE_HIVEMIND_MUTATION,
//     {
//       onCompleted: () => {
//         toast.success('Hivemind created')
//         navigate(routes.hiveminds())
//       },
//       onError: (error) => {
//         toast.error(error.message)
//       },
//     }
//   )

//   const onSave = (input: CreateHivemindInput) => {
//     createHivemind({ variables: { input } })
//   }

//   return (
//     <div className="rw-segment">
//       <header className="rw-segment-header">
//         <h2 className="rw-heading rw-heading-secondary">New Hivemind</h2>
//       </header>
//       <div className="rw-segment-main">
//         <HivemindForm onSave={onSave} loading={loading} error={error} />
//       </div>
//     </div>
//   )
// }

// export default NewHivemind
