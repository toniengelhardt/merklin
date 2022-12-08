<script setup lang="ts">
const networkStore = useNetworkStore()
</script>

<template>
  <div flex items-center>
    <Icon name="block" />
    <div ml-2 text-xs text-dim>
      {{ networkStore.blocknumber || '...' }}
    </div>
    <div
      v-if="networkStore.status"
      class="w-1.5 h-1.5 ml-2 rounded-full"
      :class="networkStore.status === 'connected' ? 'bg-green-500' : 'bg-orange-400'"
    />
  </div>
</template>
