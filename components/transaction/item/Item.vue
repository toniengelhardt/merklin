<script setup lang="ts">
defineProps<{
  item?: TransactionItem
}>()
</script>

<template>
  <div v-if="item" flex items-center mb-2 bg-element h-14 px-4 radius-base>
    <div flex w-8 h-8>
      <slot name="icon" />
    </div>
    <div flex flex-col ml-4>
      <div font-bold text-sm>
        <slot name="label" />
      </div>
      <div text-xs text-dim>
        {{ formatTime(item.timestamp) }}h
      </div>
    </div>
    <div flex-1 flex>
      <div>
        {{ item.transaction.value }}
      </div>
    </div>
    <div w-48>
      <slot name="address" />
    </div>
    <div flex items-center w-32 ml-4>
      <Icon name="gas" size="1.2rem" mr-2 text-dim />
      <div flex flex-col>
        <div text-xs>
          {{ gweiToEth(item.transaction.gasLimit * item.transaction.gasPrice) }}
        </div>
        <div text-xs>
          {{ inGwei(item.transaction.gasPrice) }} gwei
        </div>
      </div>
    </div>
    <div flex flex-col items-end w-24 ml-4>
      <div bg-element px-6px py-2px rounded-md text-xs>
        {{ item.transaction.nonce }}
      </div>
      <div text-xs text-right>
        {{ TransactionTypeMap[item.transaction.type as TransactionType] }}
      </div>
    </div>
  </div>
  <Loading v-else />
</template>
