<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionListItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-green-500:10 rounded-full>
        <Icon name="receive" text-green-500 />
      </div>
    </template>
    <template #label>
      Receive
    </template>
    <template #details>
      <div flex w-full>
        <div flex-1 flex items-center>
          <TokenValueDisplay
            network="ethereum"
            token="eth"
            :value="item.transaction.value"
          />
        </div>
        <div flex flex-col items-start w-26 md:w-36>
          <div text-xs text-dim mb-1>
            from:
          </div>
          <WalletAddress :address="item.transaction.to" />
        </div>
      </div>
    </template>
  </TransactionListItem>
</template>
