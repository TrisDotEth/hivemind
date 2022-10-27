import { useContext } from 'react'

import { CreateActionInput } from 'types/graphql'

import {
  Form,
  Submit,
  TextAreaField,
  SubmitHandler,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { HivemindContext } from 'src/providers/context/HivemindContext'

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
  const hivemindContext = useContext(HivemindContext)
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

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-14 w-14 rounded-full"
          src={hivemindContext.activeHmData.profileImageURL}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <Form onSubmit={onSubmit} className="relative">
          <FormError error={error} wrapperClassName="form-error" />

          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            {/* <TextAreaField

                rows={3}
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue={''}
                placeholder={"What's up, " + hivemindName + '?'}
              /> */}
            <TextAreaField
              rows={3}
              id="content"
              name="content"
              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
              placeholder={
                "What's up, " + hivemindContext.activeHmData.name + '?'
              }
              defaultValue={''}
            />
            {/* Spacer element to match the height of the toolbar */}
            <div className="py-2" aria-hidden="true">
              {/* Matches height of button in toolbar (1px border + 36px content height) */}
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5"></div>
            <div className="flex-shrink-0">
              <Submit
                disabled={loading}
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cast
              </Submit>
            </div>
          </div>

          {/* <p className="my-2 text-sm text-gray-500">You have {eggBalance} eggs</p> */}
        </Form>
      </div>
    </div>
  )
}

export default ActionBox
