import { defineStore } from 'pinia'

export const useNetworkStore = defineStore('networks', {
  state: (): {
    network: Web3Network | undefined
    blocknumber: number | undefined
    status: ConnectionStatus | undefined
  } => {
    return {
      network: undefined,
      blocknumber: undefined,
      status: undefined,
    }
  },
  actions: {
  },
  persist: {
    paths: [

    ],
  },
})
