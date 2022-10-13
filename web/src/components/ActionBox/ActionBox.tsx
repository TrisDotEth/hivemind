import { CreateActionInput } from 'types/graphql'

import {
  Form,
  Submit,
  TextAreaField,
  SubmitHandler,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_ACTION = gql`
  mutation CreateActionInput($input: CreateActionInput!) {
    createAction(input: $input) {
      id
    }
  }
`

interface FormValues {
  content: string
  name: string
  hivemindId: Int
  networkLocation: string
}

const ActionBox = () => {
  const [create, { loading, error }] = useMutation(CREATE_ACTION, {
    onCompleted: () => {
      alert('Success')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    data.name = 'Test'
    data.hivemindId = 1
    data.networkLocation = 'farcaster'
    create({ variables: { input: data } })
  }

  const hivemind = 'No hivemind yet'

  return (
    <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
      <FormError error={error} wrapperClassName="form-error" />
      <div className="sm:col-span-6">
        <div className="mt-1">
          <TextAreaField
            id="content"
            name="content"
            rows={5}
            className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
            placeholder={'What do you want to say, ' + hivemind}
          />
        </div>

        {/* <p className="my-2 text-sm text-gray-500">You have {eggBalance} eggs</p> */}
      </div>
      <Submit
        disabled={loading}
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Tweet
      </Submit>
    </Form>
  )
}

export default ActionBox
