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
      this.activeAddresses.splice(0, this.activeAddresses.length)
      this.activeAddresses.push(address)
      // Refresh transactions
      const transactionStore = useTransactionStore()
      transactionStore.loadTransactions()
    },
    deselectAddress(address: Address) {
      const idx = this.activeAddresses.indexOf(address)
      if (idx !== -1) {
        this.activeAddresses.splice(idx, 1)
      }
      // Refresh transactions
      const transactionStore = useTransactionStore()
      transactionStore.loadTransactions()
    },
    saveAddress(address: Address) {
      if (!this.savedAddresses.includes(address)) {
        this.savedAddresses.push(address)
      }
    },
    deleteAddress(address: Address) {
      const savedIdx = this.savedAddresses.indexOf(address)
      const activeIdx = this.activeAddresses.indexOf(address)
      if (savedIdx !== -1) {
        this.savedAddresses.splice(savedIdx, 1)
      }
      if (activeIdx !== -1) {
        this.activeAddresses.splice(activeIdx, 1)
      }
    }
  },
  persist: {
    paths: [
      'savedAddresses',
      'activeAddresses',
    ],
  },
})
