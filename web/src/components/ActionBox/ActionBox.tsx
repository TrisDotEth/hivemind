import { useContext } from 'react'

import { CreateActionInput } from 'types/graphql'
import { useAccount } from 'wagmi'

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
  hivemindId: number
  networkLocation: string
  walletAddress: string
  signedTransaction: string
}

const ActionBox = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
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
    data.walletAddress = address
    data.signedTransaction = 'TEST'
    create({ variables: { input: data } })
  }

  return (
    <div className="flex">
      <div className="min-w-0 flex-1">
        <Form onSubmit={onSubmit} className="relative">
          <FormError error={error} wrapperClassName="form-error" />

          <div className="border-gray-300 focus-within:border-indigo-500 focus-within:ring-indigo-500 overflow-hidden rounded-lg border shadow-sm focus-within:ring-1 "></div>
          <TextAreaField
            rows={4}
            id="content"
            name="content"
            className="
              placeholder:font-regular
              block
              w-full
              resize-none
              rounded-lg
              border-0
              bg-primary-dark
              py-2
              text-sm
              text-white
              placeholder:text-gray
              focus:ring-0
              "
            placeholder={'Cast as @' + hivemindContext.activeHmData.name}
            defaultValue={''}
          />
          {/* Spacer element to match the height of the toolbar */}
          <div className="py-1" aria-hidden="true">
            {/* Matches height of button in toolbar (1px border + 36px content height) */}
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 text-right">
            <span className="flex pr-2 pt-1 text-sm text-gray">
              0 farcasterUsernames
            </span>
            <Submit
              disabled={loading}
              className="focus:ring-indigo-500 inline-flex items-center rounded-xl border border-transparent bg-primary px-4 py-1 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Cast
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default ActionBox
