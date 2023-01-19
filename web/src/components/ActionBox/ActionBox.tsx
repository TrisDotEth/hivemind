import { useContext } from 'react'

import { verifyMessage } from 'ethers/lib/utils'
import { useAccount } from 'wagmi'
import { useSignMessage } from 'wagmi'

import {
  Form,
  Submit,
  TextAreaField,
  SubmitHandler,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import { HivemindContext } from 'src/providers/context/HivemindContext'
import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

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
  const { address } = useAccount()
  const hivemindContext = useContext(HivemindContext)
  const [create, { loading, error }] = useMutation(CREATE_ACTION, {
    onCompleted: () => {
      alert('Success')
    },
  })

  const recoveredAddress = React.useRef<string>()
  const { signMessageAsync } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data)
      recoveredAddress.current = address
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data2) => {
    const message: string = data2.content
    const signedTransaction = await signMessageAsync({
      message,
    })
    data2.name = 'Test'
    data2.hivemindId = 1
    data2.networkLocation = 'farcaster'
    data2.walletAddress = address
    data2.signedTransaction = signedTransaction
    create({ variables: { input: data2 } })
  }
  const anyone = useAnyoneStore((state) => state.anyone)

  return (
    <div className="flex border-y border-gray-dark">
      <div className="min-w-0 flex-1">
        <Form onSubmit={onSubmit} className="relative">
          <FormError error={error} wrapperClassName="form-error" />

          {/* Not sure what this is, I think it can be removed  */}
          {/* <div className="border-gray-300 focus-within:border-indigo-500 focus-within:ring-indigo-500 overflow-hidden rounded-lg border shadow-sm focus-within:ring-1 "></div> */}
          <div className="align-center flex min-h-[3rem] w-full">
            <img
              className=" text ml-4 mt-3 inline-block h-6 w-6 rounded-full"
              alt="Profile"
              // @ts-expect-error Hardcoded for now, should move to own DB? TODO
              src={anyone.profiles[0].importedData.pfp.url}
            ></img>
            <TextAreaField
              rows={1}
              id="content"
              name="content"
              className="
              placeholder:font-regular
              mt-[3px]
              block
              w-full
              resize-none
              rounded-lg
              border-0
              border-gray
              bg-transparent
              py-3
              text-sm

              text-white
              placeholder:text-gray
              hover:border-primary
              focus:border-primary


              focus:ring-0
              "
              placeholder={"What's going on, " + anyone.officialName + '?'}
              defaultValue={''}
            />
          </div>
          {/* Spacer element to match the height of the toolbar */}
          {/* <div className="py-1" aria-hidden="true"> */}
          {/* Matches height of button in toolbar (1px border + 36px content height) */}
          {/* <div className="py-px">
              <div className="h-9" />
            </div>
          </div> */}

          {/* <div className="absolute inset-x-0 bottom-0 flex justify-end py-2 pl-3 text-right">
            <span className="flex pr-2 pt-1 text-sm text-gray">0 passes</span>
            <Submit
              disabled={loading}
              className="focus:ring-indigo-500 mb-1 inline-flex items-center rounded-lg border border-transparent bg-primary-dark px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              CAST
            </Submit>
          </div> */}
        </Form>
      </div>
    </div>
  )
}

export default ActionBox
