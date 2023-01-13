<template>
  <div class="page">
    <div
      v-for="(network, idx) in networkList"
      :key="idx"
      col-span-12 md:col-span-4 panel justify-start
    >
      <div flex items-center>
        <div class="icon-container">
          <Icon :name="network.icon" size="1.5rem" />
        </div>
        <div flex-1 ml-2 text-xl font-semibold>
          {{ network.label }}
        </div>
      </div>
      <div mt-3 text-sm>
        <div class="item">
          <div class="label">
            Layer:
          </div>
          <div class="value">
            {{ network.layer }}
            <small text-dim>
              (<NuxtLink
                :to="network.technology.link"
                :title="network.technology.label"
                target="_blank"
                underline
              >
                {{ network.technology.label }}
              </NuxtLink>)
            </small>
          </div>
        </div>
        <div class="item">
          <div class="label">
            Token:
          </div>
          <div class="value">
            {{ network.token.ticker || '--' }}
            <small v-if="network.token.types" text-dim>
              ({{ network.token.types.join(', ') }})
            </small>
            <template v-if="network.govToken && network.govToken !== network.token">
              , {{ network.govToken.ticker }}
              <small v-if="network.govToken.types" text-dim>
                ({{ network.govToken.types.join(', ') }})
              </small>
            </template>
          </div>
        </div>
        <div class="item">
          <div class="label">
            Price:
          </div>
          <div class="value">
            {{
              network.govToken
                ? useTokenPriceFormatted(network.govToken.name).value
                : network.token
                  ? useTokenPriceFormatted(network.token.name).value
                  : '--'
            }}
          </div>
        </div>
        <div class="item">
          <div class="label">
            Gas price:
          </div>
          <div class="value">
            {{ useGasPriceFormatted(network.name, '--', true).value }}
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
  @apply flex justify-center items-center;
}
.label {
  @apply text-dim;
}
.value {
  @apply ml-2;
}
</style>
