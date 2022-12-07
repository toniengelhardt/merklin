<script setup lang="ts">
defineProps<{
  item?: TransactionItem
}>()
</script>

<template>
  <TransactionListItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-element rounded-full>
        <Icon name="unknown" text-base:30 />
      </div>
    </template>
    <template #label>
      Unknown
    </template>
  </TransactionListItem>
</template>
