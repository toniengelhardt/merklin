import type { GetAccountResult, GetNetworkResult } from '@wagmi/core'
import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: (): {
    account: GetAccountResult | undefined
    network: GetNetworkResult | undefined
  } => {
    return {
      account: undefined,
      network: undefined,
    }
  },
  getters: {
    connected(state) {
      return !!state.account?.address
    },
    address(state) {
      return state.account?.address
    },
    networkName(state) {
      return state.network?.chain?.network
    },
    networkLabel(state) {
      return state.network?.chain?.name
    },
  },
  actions: {
    // async getAccount() {
    //   const { web3Provider, web3Signer } = await useWeb3Provider()
    //   // console.info('web3Provider:', web3Provider)
    //   // console.info('web3Signer:', web3Signer)

    //   // Get accounts
    //   const accounts: Wallet[] = []
    //   const addresses = await web3Provider.send('eth_requestAccounts', []) as Address[]
    //   await Promise.all(addresses.map(async (address) => {
    //     const account: Wallet = { address }
    //     // account.ens = await web3.lookupAddress(address)
    //     // if (account.ens)
    //     //   account.avatar = await web3.getAvatar(account.ens)
    //     accounts.push(account)
    //     return Promise.resolve()
    //   }))
    //   this.accounts = accounts
    //   if (accounts.length) {
    //     this.activeAccount = accounts[0]
    //   }
    //   return this.activeAccount
    // },
  },
  persist: {
    paths: [

    ],
  },
})
