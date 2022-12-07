<script setup lang="ts">
import type { BigNumber } from 'ethers'
import { utils } from 'ethers'

const props = defineProps<{
  network: Web3Network
  token: Web3Token
  value: BigNumber // in Wei
  multiplier?: number // e.g. -1 to display a negative value
  timestamp?: DatetimeString
}>()

const valueDisplay = $computed(() => (+utils.formatUnits(props.value, 'ether') * (props.multiplier || 0)).toPrecision(4))
const currencyDisplay = $computed(() => useEthToCurrencyFormatted(+utils.formatUnits(props.value, 'ether')))
</script>

<template>
  <div flex items-center>
    <div flex justify-center items-center w-7 h-7 bg-element rounded-full>
      <Icon name="ethereum" />
    </div>
    <div flex flex-col text-sm leading-tight ml-3>
      <div class="text-value">
        {{ valueDisplay }}
      </div>
      <div class="text-currency">
        ~{{ currencyDisplay }}
      </div>
    </div>
  </div>
</template>
