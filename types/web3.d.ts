/** Stuff related to the web3 wallet, aka. MetaMask, etc. */

declare type Web3Address = string

declare interface Web3Account {
  address: Web3Address,
  ens?: string | null,
  avatar?: string | null,
}
