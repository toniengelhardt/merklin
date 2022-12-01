import { defineStore } from 'pinia'

export const useRabbitholeStore = defineStore('rabbithole', {
  state: (): {
    accounts: Web3Account[] | undefined
    account: Web3Account | undefined // Active account
    network: Web3Network | undefined
    blocknumber: number | undefined
  } => {
    return {
      accounts: undefined,
      account: undefined,
      network: undefined,
      blocknumber: undefined,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
