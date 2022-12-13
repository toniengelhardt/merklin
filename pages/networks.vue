<script setup lang="ts">
const networks: NetworkInfo[] = [
  {
    name: 'ethereum',
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
  {
    name: 'optimism',
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
  {
    name: 'arbitrum',
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
  {
    name: 'zksync',
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
  {
    name: 'polygon',
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
  {
    name: 'gnosis',
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
          {{ network.label }}
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
            {{ network.token?.ticker || '--' }}
            <template v-if="network.token?.type">
              ({{ Array.isArray(network.token.type) ? network.token.type.join(', ') : network.token.type }})
            </template>
          </div>
        </div>
        <div class="item">
          <div class="label">
            Price:
          </div>
          <div class="value">
            {{ network.token ? useTokenPriceFormatted(network.token.name).value : '--' }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Gas price:
          </div>
          <div class="value">
            {{ useGasPriceFormatted(network.name).value }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Transaction cost:
          </div>
          <div class="value">
            {{ useTransactionCostFormatted(network.name).value }}
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
            {{ network.tps ? network.tps[24] : '??' }}
          </div>
          <div class="label" ml-2>
            max:
          </div>
          <div class="value">
            {{ network.tps?.max || '??' }}
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
