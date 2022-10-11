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
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          Cast
        </label>
        <div className="mt-1">
          <TextAreaField
            id="content"
            name="content"
            rows={5}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
            defaultValue={''}
            placeholder={'What do you want to say, ' + hivemind}
          />
        </div>

        {/* <p className="my-2 text-sm text-gray-500">You have {eggBalance} eggs</p> */}
      </div>
      <Submit
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Tweet
      </Submit>
    </Form>
  )
}

export default ActionBox
