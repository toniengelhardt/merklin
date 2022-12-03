import { format } from 'date-fns'
import { utils } from 'ethers'

export const TransactionTypeMap: Record<TransactionType, string> = {
  0: 'legacy',
  1: 'EIP2930',
  2: 'EIP1559',
}

// From: https://www.4byte.directory/signatures
export const TransactionSignatureMap: Record<TransactionSignature, string> = {
  '0x095ea7b3': 'approve',
  '0x5f575529': 'swap',
  '0x1bf2907b': 'airdrop',
  '0x75cd9cce': 'deposit',
  '0x53674f0e': 'trustedMint',
  '0x9e74b0e7': 'trustedBatchMint',
  '0x0fa6f1cc': 'trustedBurn',
  '0x9670371b': 'trustedBatchBurn',
  '0xc97d7137': 'newDAO',
  '0x9c2605a5': 'placeNFT',
  '0xa0c5da86': 'placeNFTs',
  '0xabb6e08c': 'removeNFT',
  '0x797a722e': 'removeNFTs',
}

export function formatTimestamp(timestamp: BlockTimestamp) {
  const date = new Date(timestamp * 1000)
  return format(date, 'MMM d, yyyy H:mm')
}

export function displayAddress(address: Web3Address): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function inGwei(value: number): number {
  return Math.round(+utils.formatUnits(value, 'gwei'))
}

export function gweiToEth(value: number): number {
  return value / 1000000000
}
