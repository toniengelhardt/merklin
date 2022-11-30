import { ethers } from 'ethers'

let provider: ethers.providers.Web3Provider
let signer: ethers.providers.JsonRpcSigner

export const useProvider = async () => {
  if (!provider)
    provider = new ethers.providers.Web3Provider((window as any).ethereum)

  if (!signer)
    signer = provider.getSigner()

  return { provider, signer }
}
