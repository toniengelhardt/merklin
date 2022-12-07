<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionListItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-element rounded-full>
        <Icon name="approve" />
      </div>
    </template>
    <template #label>
      Approve
    </template>
  </TransactionListItem>
</template>
