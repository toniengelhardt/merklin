<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-orange-500:10 rounded-full>
        <Icon name="send" text-orange-500 />
      </div>
    </template>
    <template #label>
      Send
    </template>
    <template #address>
      <div flex flex-col items-start>
        <div text-xs text-dim>
          to:
        </div>
        <WalletAddress :address="item.transaction.to" />
      </div>
    </template>
  </TransactionItem>
</template>
