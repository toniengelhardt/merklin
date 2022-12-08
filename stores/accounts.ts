import { defineStore } from 'pinia'

export const useAccountStore = defineStore('account', {
  state: (): {
    accounts: Web3Account[] | undefined
    activeAccount: Web3Account | undefined // Active account
  } => {
    return {
      accounts: undefined,
      activeAccount: undefined,
    }
  },
  actions: {
    async getAccount() {
      const { web3Provider, web3Signer } = await useWeb3Provider()
      // console.info('web3Provider:', web3Provider)
      // console.info('web3Signer:', web3Signer)

      // Get accounts
      const accounts: Web3Account[] = []
      const addresses = await web3Provider.send('eth_requestAccounts', []) as Web3Address[]
      await Promise.all(addresses.map(async (address) => {
        const account: Web3Account = { address }
        // account.ens = await web3.lookupAddress(address)
        // if (account.ens)
        //   account.avatar = await web3.getAvatar(account.ens)
        accounts.push(account)
        return Promise.resolve()
      }))
      this.accounts = accounts
      if (accounts.length) {
        this.activeAccount = accounts[0]
      }
      return this.activeAccount
    },
  },
  persist: {
    paths: [

    ],
  },
})
