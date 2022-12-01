<script setup lang="ts">
const gasPrice = useGasPrice()
</script>

<template>
  <div flex items-center>
    <Icon name="gas" size="1.2rem" />
    <div ml-2 text-xs text-dim>
      {{ gasPrice !== undefined ? gasPrice : '...' }}
    </div>
  </div>
</template>
