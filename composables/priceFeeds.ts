import { ethers } from 'ethers'

// Mainnet ETH/USD Chainlink contract
const ethUsdAddress = '0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419'
// Polygon ETH/USD Chainlink contract
const polygonUsdAddress = '0x7bac85a8a13a4bcd8abb3eb7d6b4d632c5a57676'

const provider = await useRpcProvider()
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

export const useEthPrice = async () => {
  const priceFeed = new ethers.Contract(ethUsdAddress, aggregatorV3InterfaceABI, provider)
  const roundData = await priceFeed.latestRoundData()
  const decimals = await priceFeed.decimals()
  return Number((roundData.answer.toString() / 10 ** decimals).toFixed(2))
}

export const usePolygonPrice = async () => {
  const priceFeed = new ethers.Contract(polygonUsdAddress, aggregatorV3InterfaceABI, provider)
  const roundData = await priceFeed.latestRoundData()
  const decimals = await priceFeed.decimals()
  return Number((roundData.answer.toString()) / 10 ** decimals).toFixed(2)
}

export const historicPolygonPrice = async () => {
  const priceFeed = new ethers.Contract(polygonUsdAddress, aggregatorV3InterfaceABI, provider)
  // We can loop through the roundId parameter to get the token price at each round, hardcoded as example
  const roundData = await priceFeed.getRoundData(55340232221128668506n)
  const decimals = await priceFeed.decimals()
  return Number((roundData.answer.toString()) / 10 ** decimals).toFixed(2)
}
