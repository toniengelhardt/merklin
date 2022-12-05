import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: (): {
    obscure: boolean
  } => {
    return {
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
