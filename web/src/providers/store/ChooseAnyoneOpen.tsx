import create from 'zustand'

interface chooseAnyoneOpen {
  chooseAnyoneOpen: boolean
  changeChooseAnyoneOpen: (e) => void
}

export const useChooseAnyoneOpenStore = create<chooseAnyoneOpen>()((set) => ({
  chooseAnyoneOpen: true,
  changeChooseAnyoneOpen: (e) => set({ chooseAnyoneOpen: e }),
}))
