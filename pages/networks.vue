<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const technologies: { [name: string]: NetworkTechnology } = {
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

const networks = [
  {
    icon: 'ethereum',
    name: 'Ethereum',
    layer: 'L1',
    technology: technologies.evm,
    tokenTicker: 'ETH',
    tokenPrice: useEthTokenPrice(),
    gasPrice: useEthGasPrice(),
    transactionCost: useEthTransactionCost(),
    tpsMax: '15-30',
    tps24: '??',
    activeWalletCount: '??',
  },
  {
    icon: 'optimism',
    name: 'Optimism',
    layer: 'L2',
    technology: technologies.optimisticRollups,
    tokenTicker: 'OP',
    tokenPrice: '??',
    gasPrice: '??',
    transactionCost: '??',
    tps24: '??',
    tpsMax: 'up to 2k',
    activeWalletCount: '??',
  },
  {
    icon: 'arbitrum',
    name: 'Arbitrum',
    layer: 'L2',
    technology: technologies.optimisticRollups,
    tokenTicker: '--',
    tokenPrice: '--',
    gasPrice: '??',
    transactionCost: '??',
    tps24: '??',
    tpsMax: 'up to 65k',
    activeWalletCount: '??',
  },
  {
    icon: 'zksync',
    name: 'zkSync',
    layer: 'L2',
    technology: technologies.zkRollups,
    tokenTicker: '--',
    tokenPrice: '--',
    gasPrice: '??',
    transactionCost: '??',
    tps24: '??',
    tpsMax: 'up to 3k',
    activeWalletCount: '??',
  },
  {
    icon: 'polygon',
    name: 'Polygon',
    layer: 'L2',
    technology: technologies.sidechain,
    tokenTicker: 'MATIC',
    tokenPrice: '??',
    gasPrice: '??',
    transactionCost: '??',
    tps24: '??',
    tpsMax: '15-30',
    activeWalletCount: '??',
  },
  {
    icon: 'gnosis',
    name: 'Gnosis',
    layer: 'L2',
    technology: technologies.sidechain,
    tokenTicker: 'XDAI',
    tokenPrice: '??',
    gasPrice: '??',
    transactionCost: '??',
    tps24: '??',
    tpsMax: '??',
    activeWalletCount: '??',
  },
]
</script>

<template>
  <div page>
    <div
      v-for="(network, idx) in networks"
      :key="idx"
      col-span-12 md:col-span-4 panel justify-start
    >
      <div flex items-center>
        <div class="icon-container">
          <Icon :name="network.icon" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          {{ network.name }}
        </div>
      </div>
      <div mt-3>
        <div class="item">
          <div class="label">
            Layer:
          </div>
          <div class="value">
            {{ network.layer }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Technology:
          </div>
          <div class="value">
            <NuxtLink
              :to="network.technology.link"
              :title="network.technology.label"
              target="_blank"
              underline
            >
              {{ network.technology.label }}
            </NuxtLink> <Icon name="external" />
          </div>
        </div>
        <div class="item">
          <div class="label">
            Token:
          </div>
          <div class="value">
            {{ network.tokenTicker }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Price:
          </div>
          <div class="value">
            {{ network.tokenPrice }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Gas price:
          </div>
          <div class="value">
            {{ network.gasPrice }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Transaction cost:
          </div>
          <div class="value">
            {{ network.transactionCost }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            TPS –
          </div>
          <div class="label" ml-2>
            24h:
          </div>
          <div class="value">
            {{ network.tps24 }}
          </div>
          <div class="label" ml-2>
            max:
          </div>
          <div class="value">
            {{ network.tpsMax }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Active wallet count:
          </div>
          <div class="value">
            {{ network.activeWalletCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply flex mb-1;
}
.icon-container {
  @apply flex justify-center items-center w-12 h-12 bg-element rounded-xl;
}
.label {
  @apply text-dim;
}
.value {
  @apply ml-2;
}
</style>
