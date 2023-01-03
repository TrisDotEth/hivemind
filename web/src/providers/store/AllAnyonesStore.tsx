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

export const useAnyoneStore = create<AddAnyone>()(
  persist(
    (set) => ({
      anyone: {
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
      addAnyone: (e) => set({ anyone: e }),
    }),
    {
      name: 'anyone-storage', // unique name
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
