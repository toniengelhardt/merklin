<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-green-500:10 rounded-full>
        <Icon name="receive" text-green-500 />
      </div>
    </template>
    <template #label>
      Receive
    </template>
    <template #address>
      <div flex flex-col items-start>
        <div text-xs text-dim>
          from:
        </div>
        <WalletAddress :address="item.transaction.to" />
      </div>
    </template>
  </TransactionItem>
</template>
