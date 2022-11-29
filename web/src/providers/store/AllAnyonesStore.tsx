import create from 'zustand'
import { persist } from 'zustand/middleware'

interface Anyone {
  anyone: {
    name: 'Design'
    username: string
    profileImageURL: ''
    aboutInformation: ''
    displayName: ''
    avatar: {
      url: string
    }
    profile: {
      bio: {
        text: ''
      }
    }
  }
  addAnyone: (e) => void
}

interface Anyones {
  anyones: [
    {
      id: number
      name: string
    }
  ]
  addAnyones: (e) => void
}

export const useAnyoneStore = create<Anyone>()(
  persist(
    (set) => ({
      anyone: {
        name: 'Design',
        username: 'tris',
        profileImageURL: '',
        aboutInformation: '',
        displayName: '',
        avatar: {
          url: 'ff',
        },
        profile: {
          bio: {
            text: '',
          },
        },
      },
      addAnyone: (e) => set({ anyone: e }),
    }),
    {
      name: 'anyone-storage', // unique name
      getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
    }
  )
)

export const useAllAnyonesStore = create<Anyones>()(
  persist(
    (set) => ({
      anyones: [
        {
          id: 1,
          name: 'design',
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
