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

export const transactionGasLimit: Record<NetworkName, number> = {
  ethereum: 21000,
  optimism: 0,
  arbitrum: 0,
  zksync: 0,
  polygon: 0,
  gnosis: 0,
}
