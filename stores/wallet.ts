import type { GetAccountResult, GetNetworkResult, InjectedConnector } from '@wagmi/core'
import type { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import type { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { ethers } from 'ethers'
import { defineStore } from 'pinia'

export const useWalletStore = defineStore('wallet', {
  state: (): {
    connector: MetaMaskConnector | WalletConnectConnector | InjectedConnector | undefined
    account: GetAccountResult | undefined
    network: GetNetworkResult | undefined
    balance: String | undefined
  } => {
    return {
      connector: undefined,
      account: undefined,
      network: undefined,
      balance: undefined,
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
      return state.network?.chain?.network as NetworkName | undefined
    },
    networkLabel(state) {
      return state.network?.chain?.name
    },
  },
  actions: {
    async updateBalance() {
      try {
        const provider = useWeb3Provider()
        const signer = (await provider).web3Signer
        const balance = await signer.getBalance()
        this.balance = ethers.formatEther(balance)
      } catch (error) {
        console.log('Could not retrieve balance from wallet. This might happen if it is not connected.')
        this.balance = undefined
      }
      return this.balance
    },
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
