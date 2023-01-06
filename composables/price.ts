import { ethers } from 'ethers'

const aggregatorV3InterfaceABI = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'description',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint80', name: '_roundId', type: 'uint80' }],
    name: 'getRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRoundData',
    outputs: [
      { internalType: 'uint80', name: 'roundId', type: 'uint80' },
      { internalType: 'int256', name: 'answer', type: 'int256' },
      { internalType: 'uint256', name: 'startedAt', type: 'uint256' },
      { internalType: 'uint256', name: 'updatedAt', type: 'uint256' },
      { internalType: 'uint80', name: 'answeredInRound', type: 'uint80' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]

// Source: https://docs.chain.link/data-feeds/price-feeds/addresses/
const chainlinkPriceAddresses = {
  btc_usd: '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c',
  eth_usd: '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419',
  op_usd: '0x0D276FC14719f9292D5C1eA2198673d1f4269246',
  matic_usd: '0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676',
  dai_usd: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
  xdai_usd: '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9',
  gno_usd: '0xA614953dF476577E90dcf4e3428960e221EA4727',
}

const chainlinkPriceContracts: Record<string, ethers.Contract> = {}

export const usePriceFeed = async (marketPair: MarketPair) => {
  if (!chainlinkPriceContracts[marketPair]) {
    const provider = await useRpcProvider()
    chainlinkPriceContracts[marketPair] = new ethers.Contract(chainlinkPriceAddresses[marketPair], aggregatorV3InterfaceABI, provider)
  }
  return chainlinkPriceContracts[marketPair]
}
