import create from 'zustand'

interface Swiper {
  firstSwiper: any
  secondSwiper: any
  addFirstSwiper: (e) => void
  addSecondSwiper: (e) => void
}

export const useSwiperStore = create<Swiper>()((set) => ({
  firstSwiper: false,
  secondSwiper: false,
  addFirstSwiper: (e) => set({ firstSwiper: e }),
  addSecondSwiper: (e) => set({ secondSwiper: e }),
}))
