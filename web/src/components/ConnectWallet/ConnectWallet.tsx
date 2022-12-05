import { ConnectKitButton } from 'connectkit'

const ConnectWallet = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className="rounded-full border border-white bg-black py-px  px-2 text-sm font-semibold text-black "
          >
            {isConnected ? ensName ?? truncatedAddress : 'Connect'}
          </button>
        )
      }}
    </ConnectKitButton.Custom>
  )
}

export default ConnectWallet
