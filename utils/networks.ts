export const networkTechnologies: { [name: string]: NetworkTechnology } = {
  evm: {
    label: 'EVM',
    link: 'https://ethereum.org/en/developers/docs/evm',
  },
  optimisticRollups: {
    label: 'Optimistic rollups',
    link: 'https://ethereum.org/en/developers/docs/scaling/optimistic-rollups',
  },
  zkRollups: {
    label: 'ZK rollups',
    link: 'https://ethereum.org/en/developers/docs/scaling/zk-rollups',
  },
  sidechain: {
    label: 'Sidechain',
    link: 'https://ethereum.org/en/developers/docs/scaling/sidechains',
  },
}

export const networks: Record<NetworkName, NetworkInfo> = {
  ethereum: {
    name: 'ethereum',
    chainId: 1,
    icon: 'ethereum',
    label: 'Ethereum',
    layer: 'L1',
    technology: networkTechnologies.evm,
    token: tokens.eth,
    tps: {
      max: '15-30',
      24: '??',
    },
    activeWalletCount: '??',
  },
  optimism: {
    name: 'optimism',
    chainId: 10,
    icon: 'optimism',
    label: 'Optimism',
    layer: 'L2',
    technology: networkTechnologies.optimisticRollups,
    token: tokens.op,
    tps: {
      max: 'up to 2k',
      24: '??',
    },
    activeWalletCount: '??',
  },
  arbitrum: {
    name: 'arbitrum',
    chainId: 42161,
    icon: 'arbitrum',
    label: 'Arbitrum',
    layer: 'L2',
    technology: networkTechnologies.optimisticRollups,
    tps: {
      max: 'up to 65k',
      24: '??',
    },
    activeWalletCount: '??',
  },
  zksync: {
    name: 'zksync',
    chainId: 324,
    icon: 'zksync',
    label: 'zkSync',
    layer: 'L2',
    technology: networkTechnologies.zkRollups,
    tps: {
      max: 'up to 3k',
      24: '??',
    },
    activeWalletCount: '??',
  },
  polygon: {
    name: 'polygon',
    chainId: 137,
    icon: 'polygon',
    label: 'Polygon',
    layer: 'L2',
    technology: networkTechnologies.sidechain,
    token: tokens.matic,
    tps: {
      max: 'up to 65k',
      24: '??',
    },
    activeWalletCount: '??',
  },
  gnosis: {
    name: 'gnosis',
    chainId: 100,
    icon: 'gnosis',
    label: 'Gnosis',
    layer: 'L2',
    technology: networkTechnologies.sidechain,
    token: tokens.xdai,
    tps: {
      max: '??',
      24: '??',
    },
    activeWalletCount: '??',
  },
}

export const networkList: Network[] = [
  networks.ethereum,
  networks.optimism,
  networks.arbitrum,
  networks.zksync,
  networks.polygon,
  networks.gnosis,
]

export const transactionGasLimit: Record<NetworkName, number> = {
  ethereum: 21000,
  optimism: 0,
  arbitrum: 0,
  zksync: 0,
  polygon: 0,
  gnosis: 0,
}
