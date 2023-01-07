import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: (): {
    mobile?: boolean
    obscure: boolean
    addressDialogOpen: boolean
  } => {
    return {
      mobile: undefined,
      obscure: false,
      addressDialogOpen: false,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
