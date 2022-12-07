import { defineStore } from 'pinia'

export const useRabbitholeStore = defineStore('rabbithole', {
  state: (): {
    accounts: Web3Account[] | undefined
    account: Web3Account | undefined // Active account
  } => {
    return {
      accounts: undefined,
      account: undefined,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
