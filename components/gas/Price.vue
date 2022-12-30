<script setup lang="ts">
const networkStore = useNetworkStore()
</script>

<template>
  <div flex items-center>
    <Icon name="gas" />
    <div ml-2 text-xs text-dim>
      {{ networkStore.homestead.gasPrice !== undefined ? `${networkStore.homestead.gasPrice} gwei` : '...' }}
    </div>
  </div>
</template>
