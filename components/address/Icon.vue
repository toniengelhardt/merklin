<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <IconBlockies :seed="address" :color="`#${address.slice(-6)}`" />
</template>
