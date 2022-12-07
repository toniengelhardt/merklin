import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: (): {
    mobile?: boolean
    obscure: boolean
  } => {
    return {
      mobile: undefined,
      obscure: false,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
