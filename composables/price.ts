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

// ETH/USD Chainlink contract
const ethUsdChainlinkAddress = '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419'
// MATIC/USD Chainlink contract
const maticUsdChainlinkAddress = '0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676'
// OP/USD Chainlink contract
const optimismUsdAddress = '0x0d276fc14719f9292d5c1ea2198673d1f4269246'
// xDai/USD Chainlink contract
const daiChainlinkAddress = '0xaed0c38402a5d19df6e4c03f4e2dced6e29c1ee9'

let ethUsdChainlinkContract: ethers.Contract
let maticUsdChainlinkContract: ethers.Contract
let optimismUsdContract: ethers.Contract
let daiChainlinkContract: ethers.Contract

export const useEthPriceFeed = async () => {
  if (!ethUsdChainlinkContract) {
    const provider = await useRpcProvider()
    ethUsdChainlinkContract = new ethers.Contract(ethUsdChainlinkAddress, aggregatorV3InterfaceABI, provider)
  }
  return ethUsdChainlinkContract
}

export const useMaticPriceFeed = async () => {
  if (!maticUsdChainlinkContract) {
    const provider = await useRpcProvider()
    maticUsdChainlinkContract = new ethers.Contract(maticUsdChainlinkAddress, aggregatorV3InterfaceABI, provider)
  }
  return maticUsdChainlinkContract
}

export const useOptimismPriceFeed = async () => {
  if (!optimismUsdContract) {
    const provider = await useRpcProvider()
    optimismUsdContract = new ethers.Contract(optimismUsdAddress, aggregatorV3InterfaceABI, provider)
  }
  return optimismUsdContract
}

export const useDaiPriceFeed = async () => {
  if (!daiChainlinkContract) {
    const provider = await useRpcProvider()
    daiChainlinkContract = new ethers.Contract(daiChainlinkAddress, aggregatorV3InterfaceABI, provider)
  }
  return daiChainlinkContract
}
