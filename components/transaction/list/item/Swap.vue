<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionListItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-blue-500:10 rounded-full>
        <Icon name="swap" size="1.2rem" text-blue-500 />
      </div>
    </template>
    <template #label>
      Swap
    </template>
    <template #address>
      <div flex flex-col items-start>
        <div text-xs text-dim mb-1>
          via:
        </div>
        <WalletAddress :address="item.transaction.to" />
      </div>
    </template>
  </TransactionListItem>
</template>
