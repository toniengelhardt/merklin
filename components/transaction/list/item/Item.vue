<script setup lang="ts">
import { formatUnits } from 'ethers'

const props = defineProps<{
  item?: TransactionItem
}>()

const expanded = ref(false)

const gasPriceDisplay = computed(() => (
  props.item?.transaction.gasPrice
    ? Math.round(+formatUnits(props.item.transaction.gasPrice.toBigInt(), 'gwei'))
    : undefined
))
const gasCost = computed(() => (
  (props.item?.transaction.gasLimit && props.item?.transaction.gasPrice)
    ? BigInt(formatUnits(props.item.transaction.gasLimit.toBigInt() * props.item.transaction.gasPrice.toBigInt(), 'ether'))
    : undefined
))
const gasCostDisplay = computed(() => gasCost.value ? Number(gasCost.value).toPrecision(2) : undefined)
</script>

<template>
  <div
    v-if="item"
    flex flex-col cursor-pointer
    border="solid light 0 t-1"
    @click="expanded = !expanded"
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
        <Icon name="gas" size="1rem" mr-3 text-dim />
        <div flex flex-col text-sm leading-tight>
          <div flex items-center>
            <span class="text-value">{{ gasCostDisplay }}</span>
            <span ml-1 text-xs text-dim tracking-tighter>@ {{ gasPriceDisplay }} gwei</span>
          </div>
          <div class="text-currency">
            ~{{ useEthToCurrencyFormatted(gasCost) }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="expanded"
      flex flex-col pb-2 md:py-2 ml-7 md:ml-11
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
      <div flex mt-3 lt-md:hidden>
        <div flex flex-col>
          <div text-xs text-faint>
            Hash
          </div>
          <div text-sm text-dim>
            {{ item.transaction.hash }}
          </div>
        </div>
      </div>
      <div flex mt-4 mb-2 lt-md:hidden>
        <div flex>
          <NuxtLink
            :to="`https://etherscan.io/tx/${item.transaction.hash}`"
            target="_blank"
            btn-default px-3 btn-xs
            @click.stop
          >
            <span>Etherscan</span><Icon name="external" ml-0.5 />
          </NuxtLink>
          <NuxtLink
            :to="`https://beaconcha.in/tx/${item.transaction.hash}`"
            target="_blank"
            btn-default px-3 btn-xs ml-2
            @click.stop
          >
            <span>Beaconchain</span><Icon name="external" ml-0.5 />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>
