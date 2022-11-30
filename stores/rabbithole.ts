import { defineStore } from 'pinia'

export const useRabbitholeStore = defineStore('rabbithole', {
  state: (): {
    accounts: Web3Account[] | undefined
    network: Web3Network | undefined
  } => {
    return {
      accounts: undefined,
      network: undefined,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
