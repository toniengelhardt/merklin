<script setup lang="ts">
import { formatUnits } from 'ethers'

const props = defineProps<{
  network: NetworkName
  token: TokenName
  value: bigint // in Wei
  multiplier?: number // e.g. -1 to display a negative value
  timestamp?: DatetimeString
}>()

const valueDisplay = computed(() => (+formatUnits(props.value, 'ether') * (props.multiplier || 1)).toPrecision(4))
const currencyDisplay = computed(() => useEthToCurrencyFormatted(BigInt(formatUnits(props.value, 'ether'))))
</script>

<template>
  <div flex items-center>
    <div flex justify-center items-center w-7 h-7 bg-element rounded-full>
      <Icon name="ethereum" />
    </div>
    <div flex flex-col text-sm leading-tight ml-2 md:ml-3>
      <div class="text-value">
        {{ +valueDisplay > 0 ? '+' : '' }}{{ valueDisplay }}
      </div>
      <div class="text-currency">
        ~{{ currencyDisplay }}
      </div>
    </div>
  </div>
</template>
