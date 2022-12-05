<script setup lang="ts">
const props = defineProps<{
  items?: TransactionItem
}>()

const inAddressCount = $ref(0)
const outAddressCount = $ref(0)
</script>

<template>
  <div panel>
    <h2 panel-title>
      Addresses
    </h2>
  </div>
</template>
