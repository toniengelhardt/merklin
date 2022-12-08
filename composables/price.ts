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

// Mainnet ETH/USD Chainlink contract
const ethUsdChainlinkAddress = '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419'
// Polygon ETH/USD Chainlink contract
const polygonEthUsdAddress = '0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676'

let ethUsdChainlinkContract: ethers.Contract
let polygonEthUsdChainlinkContract: ethers.Contract

export const useEthPriceFeed = async () => {
  const provider = await useRpcProvider()
  if (!ethUsdChainlinkContract) {
    ethUsdChainlinkContract = new ethers.Contract(ethUsdChainlinkAddress, aggregatorV3InterfaceABI, provider)
  }
  return ethUsdChainlinkContract
}

export const usePolygonPriceFeed = async () => {
  const provider = await useRpcProvider()
  if (!polygonEthUsdChainlinkContract) {
    polygonEthUsdChainlinkContract = new ethers.Contract(polygonEthUsdAddress, aggregatorV3InterfaceABI, provider)
  }
  return polygonEthUsdChainlinkContract
}
