<script setup lang="ts">
import { utils as ethersUtils } from 'ethers'

const props = defineProps<{
  item?: TransactionItem
}>()

const expanded = $ref(false)

const gasPriceDisplay = $computed(() => (
  props.item
    ? Math.round(+ethersUtils.formatUnits(props.item.transaction.gasPrice, 'gwei'))
    : undefined
))
const gasCost = $computed(() => (
  props.item
    ? +ethersUtils.formatUnits(props.item.transaction.gasLimit * props.item.transaction.gasPrice, 'ether')
    : undefined
))
const gasCostDisplay = $computed(() => gasCost?.toPrecision(2))
</script>

<template>
  <div
    v-if="item"
    flex flex-col lt-md:mx="-1rem" mb-2 bg-element px-3 md:radius-base cursor-pointer
    border-1 border-transparent transition-border-color hover:border-base
    :class="{ 'border-base': expanded, 'hover:border-highlight': expanded }"
    @click="(expanded = !expanded)"
  >
    <div flex items-center h-14>
      <div flex min-w-5 w-5 h-5 md:w-8 md:h-8>
        <slot name="icon" />
      </div>
      <div flex flex-col ml-2 md:ml-3 w-18>
        <div font-bold text-sm>
          <slot name="label" />
        </div>
        <div text-xs text-dim>
          {{ item.timestamp ? formatTime(item.timestamp) : '-- ' }}h
        </div>
      </div>
      <div flex-1 flex md:ml-3>
        <slot name="details" />
      </div>
      <div lt-md:hidden flex items-center w-44 ml-3>
        <Icon name="gas" size="1.2rem" mr-3 text-dim />
        <div flex flex-col text-sm leading-tight>
          <div flex items-center>
            <span class="text-value">{{ gasCostDisplay }}</span>
            <span ml-1>Ξ</span>
            <span ml-1 text-xs tracking-tighter>@ {{ gasPriceDisplay }} gwei</span>
          </div>
          <div class="text-currency">
            ~{{ useEthToCurrencyFormatted(gasCost) }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="expanded"
      flex flex-col py-3 ml-11 border-t-1 border-base
    >
      <div flex>
        <div flex flex-col w-24>
          <div text-xs text-faint>
            Block
          </div>
          <div text-sm text-dim>
            {{ item.transaction.blockNumber }}
          </div>
        </div>
        <div flex flex-col w-24 ml-4>
          <div text-xs text-faint>
            Type
          </div>
          <div text-sm text-dim>
            {{ TransactionTypeMap[item.transaction.type as TransactionType] }}
          </div>
        </div>
        <div flex flex-col ml-4>
          <div text-xs text-faint>
            Nonce
          </div>
          <div text-sm text-dim>
            {{ item.transaction.nonce }}
          </div>
        </div>
      </div>
      <div flex mt-3>
        <div flex flex-col>
          <div text-xs text-faint>
            Hash
          </div>
          <div text-sm text-dim>
            {{ item.transaction.hash }}
          </div>
        </div>
      </div>
      <!-- <div flex mt-3>
        <div flex flex-col>
          <div text-xs text-faint>
            Data
          </div>
          <div text-sm text-dim>
            {{ item.transaction.data }}
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <Loading v-else />
</template>
