<script setup lang="ts">
const gasPrice = useGasPrice()
</script>

<template>
  <div flex items-center>
    <Icon name="gas" />
    <div ml-2 text-xs text-dim>
      {{ gasPrice !== undefined ? `${gasPrice} gwei` : '...' }}
    </div>
  </div>
</template>
