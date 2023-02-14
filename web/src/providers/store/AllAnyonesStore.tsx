import type { Anyone } from 'types/graphql'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AddAnyone {
  anyone: Anyone
  addAnyone: (e) => void
}

interface AddAnyones {
  anyones: Anyone[]
  addAnyones: (e) => void
}

interface AddAnyoneWithoutContent {
  anyoneNoContent: Anyone
  addAnyoneWithoutContent: (e) => void
}

export const useAnyoneStore = create<AddAnyone>()(
  persist(
    (set) => ({
      anyone: {
        __typename: 'Anyone',
        id: 1,
        shortName: 'Design',
        displayName: 'Design',
        officialName: 'Design',
        profiles: [
          {
            __typename: 'Profile',
            id: 1,
            anyoneId: 1,
            // @ts-expect-error not sure about recursive TS
            anyone: {
              id: 1,
              shortName: 'Tris',
              displayName: 'Design4',
              officialName: 'Tris',
            },
            importedData: {
              pfp: {
                url: 'https://i.seadn.io/gcs/files/6d14b5d85b3cc57aa89d339f0f04fd4e.png?auto=format&w=3840',
                isVerified: true,
              },
              address: '0xDC34F1Cf1927bbc69a6507fa1C0e0F7F0c8eBCCC',
              profile: {
                bio: {
                  text: 'I’m the DAO designing be:Anyone. The first of many. If you have a Farcaster username you can post as me.',
                  mentions: [],
                },
                directMessageTargets: {
                  telegram: '',
                },
              },
              username: 'tris',
              displayName: 'tris.eth',
              farcasterId: {
                hex: '0x0d97',
                type: 'BigNumber',
              },
              followerCount: 51,
              followingCount: 108,
              isFollowingViewer: false,
              isViewerFollowing: false,
              viewerCanSendDirectCasts: false,
            },
            profileType: 'farcaster',
          },
        ],
      },
      addAnyone: (e) => {
        set({ anyone: e })
      },
    }),
    {
      name: 'anyone-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export const useAnyoneStoreWithoutContent = create<AddAnyoneWithoutContent>()(
  persist(
    (set) => ({
      anyoneNoContent: {
        __typename: 'Anyone',
        id: 1,
        shortName: 'Design2',
        displayName: 'Design5',
        officialName: 'Tris',
        profiles: [
          {
            __typename: 'Profile',
            id: 1,
            anyoneId: 1,
            // @ts-expect-error not sure about recursive TS
            anyone: {
              id: 1,
              shortName: 'Tris',
              displayName: 'Design6',
              officialName: 'Tris',
            },
            importedData: {
              pfp: {
                url: 'https://i.seadn.io/gae/sSk6isYBBGhGxfXUCH08GVoxbfMhwAHrsXuO5Cb-YNSjPoCkSoz5oms0knBls4BavaaBgbFur_UKJ6rzB9zoERlx0xDEyuJUfwIetg?w=500&auto=format',
                isVerified: true,
              },
              address: '0xDC34F1Cf1927bbc69a6507fa1C0e0F7F0c8eBCCC',
              profile: {
                bio: {
                  text: 'Encouraging new forms of DAOs.',
                  mentions: [],
                },
                directMessageTargets: {
                  telegram: '',
                },
              },
              username: 'tris',
              displayName: 'tris.eth',
              farcasterId: {
                hex: '0x0d97',
                type: 'BigNumber',
              },
              followerCount: 51,
              followingCount: 108,
              isFollowingViewer: false,
              isViewerFollowing: false,
              viewerCanSendDirectCasts: false,
            },
            profileType: 'farcaster',
          },
        ],
      },
      addAnyoneWithoutContent: (e) => set({ anyoneNoContent: e }),
    }),
    {
      name: 'anyone-storage-without-content', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export const useAllAnyonesStore = create<AddAnyones>()(
  persist(
    (set) => ({
      anyones: [
        {
          __typename: 'Anyone',
          id: 1,
          shortName: 'Tris',
          displayName: 'Tristan Grace',
          officialName: 'Tris',
          profiles: [
            {
              __typename: 'Profile',
              id: 1,
              anyoneId: 1,
              // @ts-expect-error not sure about recursive TS
              anyone: {
                id: 1,
                shortName: 'Tris',
                displayName: 'Tristan Grace',
                officialName: 'Tris',
              },
              importedData: {
                pfp: {
                  url: 'https://i.seadn.io/gae/sSk6isYBBGhGxfXUCH08GVoxbfMhwAHrsXuO5Cb-YNSjPoCkSoz5oms0knBls4BavaaBgbFur_UKJ6rzB9zoERlx0xDEyuJUfwIetg?w=500&auto=format',
                  isVerified: true,
                },
                address: '0xDC34F1Cf1927bbc69a6507fa1C0e0F7F0c8eBCCC',
                profile: {
                  bio: {
                    text: 'Encouraging new forms of DAOs.',
                    mentions: [],
                  },
                  directMessageTargets: {
                    telegram: '',
                  },
                },
                username: 'tris',
                displayName: 'tris.eth',
                farcasterId: {
                  hex: '0x0d97',
                  type: 'BigNumber',
                },
                followerCount: 51,
                followingCount: 108,
                isFollowingViewer: false,
                isViewerFollowing: false,
                viewerCanSendDirectCasts: false,
              },
              profileType: 'farcaster',
            },
          ],
        },
      ],
      addAnyones: (e) => set({ anyones: e }),
    }),
    {
      name: 'anyones-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)
