import { useState } from 'react'

import { verifyMessage } from 'ethers/lib/utils'
import { useForm } from 'react-hook-form'
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

import { useAnyoneStore } from 'src/providers/store/AllAnyonesStore'

const CREATE_ACTION = gql`
  mutation CreateActionInput($input: CreateActionInput!) {
    createAction(input: $input) {
      casted
    }
  }
`

interface FormValues {
  content: string
  userName: string
  name: string
  networkLocation: string
  walletAddress: string
  signedTransaction: string
  parentOwnerfid: number
  parentHash: string
}

export interface ActionBox {
  reply: Reply | null
  networkLocation: 'reddit' | 'farcaster'
}

export interface Reply {
  fid: number
  hash: string
}

const ActionBox: React.FC<ActionBox> = ({ reply, networkLocation }) => {
  const { address } = useAccount()
  const [castButtonVisible, setCastButtonVisible] = useState(false)
  const [create, { loading, error }] = useMutation(CREATE_ACTION, {
    onCompleted: (data) => {
      console.log('Success')
      console.log(data)
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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // const message: string = data2.content
    // const signedTransaction = await signMessageAsync({
    //   message,
    // })
    // data2.name = 'Test'
    // data2.hivemindId = 1
    // data2.networkLocation = 'farcaster'
    // data2.walletAddress = address
    // data2.signedTransaction = signedTransaction
    if (reply) {
      data.parentOwnerfid = reply.fid
      data.parentHash = reply.hash
    }
    data.userName = 'Tris'
    data.networkLocation = networkLocation
    create({ variables: { input: data } })
    console.log(data)
    formMethods.reset()
  }
  const anyone = useAnyoneStore((state) => state.anyone)
  const formMethods = useForm()
  const showCastButton = (e) => {
    if (e.value.length) {
      setCastButtonVisible(true)
    } else {
      setCastButtonVisible(false)
    }
  }

  return (
    <div className="flex border-y border-gray-dark">
      <div className="min-w-0 flex-1">
        <Form
          onSubmit={onSubmit}
          formMethods={formMethods}
          className="relative"
        >
          <FormError error={error} wrapperClassName="form-error" />

          {/* Not sure what this is, I think it can be removed */}
          {/* <div className="border-gray-300 focus-within:border-indigo-500 focus-within:ring-indigo-500 overflow-hidden rounded-lg border shadow-sm focus-within:ring-1 "></div> */}
          <div className="align-center flex min-h-[3rem] w-full">
            <img
              className=" text ml-4 mt-3 inline-block h-6 w-6 rounded-full"
              alt="Profile"
              // @ts-expect-error Hardcoded for now, should move to own DB? TODO
              src={anyone.profiles[0].importedData.pfp.url}
            ></img>
            <TextAreaField
              onChange={(e) => showCastButton(e.target)}
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
              validation={{ required: true }}
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
            <span className="flex pr-2 pt-1 text-sm text-gray">0 passes</span> */}
          {castButtonVisible && (
            <Submit
              disabled={loading}
              className="focus:ring-indigo-500 float-right mb-1 mr-1 inline-flex items-center rounded-lg border border-transparent bg-primary-dark px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              CAST
            </Submit>
          )}

          {/* </div> */}
        </Form>
      </div>
    </div>
  )
}

export default ActionBox
