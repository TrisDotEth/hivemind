// import { useAnyoneStoreWithoutContent } from 'src/providers/store/AllAnyonesStore'

const LSAProfileChrome = ({ anyone }) => {
  // const anyoneNoContent = useAnyoneStoreWithoutContent(
  //   (state) => state.anyoneNoContent
  // )
  // debugger
  return (
    <div>
      {/* <h2 className="mx-auto flex w-fit text-center text-2xl font-semibold leading-[22px] text-white">
        {anyoneNoContent.displayName}
      </h2> */}
      {/* <button className="focus:ring-indigo-500 absolute left-0 right-0 bottom-[10.5rem] m-auto mb-1 mt-2 inline-flex w-fit items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
        <span className="mr-1">be: </span>
        <img
          className="mx-auto h-5 w-5 rounded-full"
          alt="Profile"
          // @ts-expect-error Hardcoded for now, should move to own DB? TODO
          src={anyoneNoContent.profiles[0].importedData.pfp.url}
        ></img>
        <span className="ml-1"> {anyoneNoContent.shortName}</span>
      </button> */}
      <div className="relative mt-1 min-h-[129px] text-center">
        <p className="text-sm text-white">
          {anyone.profiles[0].importedData.profile.bio.text}
        </p>
        {/* <div className="mt-[-7px]">
          <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-white">50</span> Members
            </span>
          <button onClick={openChoose}><PassDetails /></button>
          {chooseAnyoneOpen && (
            <span className="mr-3 inline-block text-xs text-gray">
              <span className="text-sm text-gray">
                DAO address - 0x0db9...0b46{' '}
              </span>
            </span>
          )}
        </div> */}

        {/* {anyone.officialName == 'ttris' && (
          <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button>
        )} */}

        {/* <button className="focus:ring-indigo-500 mb-1 mt-2 inline-flex items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
            CLAIM PASS
          </button> */}
        {/* //This one button adds like 20ms of rendering time... wtf... Turns out it was zustand. Passing down the anyone as props is so much more performant. Lame. TODO */}
        <button className="focus:ring-indigo-500 absolute left-0 right-0 bottom-1 m-auto mb-1 inline-flex w-fit items-center rounded-lg border border-transparent bg-primary px-4 py-1 text-xs font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2">
          <span className="mr-1">be: </span>
          <img
            className="mx-auto h-5 w-5 rounded-full"
            alt="Profile"
            // @ts-expect-error Hardcoded for now, should move to own DB? TODO
            src={anyone.profiles[0].importedData.pfp.url}
          ></img>
          <span className="ml-1"> {anyone.shortName}</span>
        </button>
      </div>
    </div>
  )
}

export default LSAProfileChrome
