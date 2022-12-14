/** Stuff related to the web3 wallet, aka. MetaMask, etc. */

declare type Address = string

declare interface Wallet {
  address: Address,
  ens?: string | null,
  avatar?: string | null,
}
