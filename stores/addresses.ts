import { defineStore } from 'pinia'

export const useAddressStore = defineStore('addresses', {
  state: (): {
    savedAddresses: Address[] // Addresses saved in address book
    walletAddresses: Address[] // Addresses associated with connected wallet
    activeAddresses: Address[] // Selected addresses
  } => {
    return {
      savedAddresses: [],
      walletAddresses: [],
      activeAddresses: [],
    }
  },
  getters: {

  },
  actions: {
    selectAddress(address: Address) {
      this.activeAddresses = [address]

      // Refresh transactions
      const transactionStore = useTransactionStore()
      transactionStore.loadTransactions()
    },
    saveAddress(address: Address) {
      if (!this.savedAddresses.includes(address)) {
        this.savedAddresses.push(address)
      }
    },
  },
  persist: {
    paths: [
      'savedAddresses',
      'activeAddresses',
    ],
  },
})
