<script setup lang="ts">
const networkStore = useNetworkStore()
</script>

<template>
  <div flex items-center>
    <Icon name="block" />
    <div ml-2 text-xs text-dim>
      {{ networkStore.homestead.blocknumber || '...' }}
    </div>
    <div
      v-if="networkStore.homestead.status"
      class="w-1.5 h-1.5 ml-2 rounded-full"
      :class="networkStore.homestead.status === 'connected' ? 'bg-green-500' : 'bg-red-500'"
    />
  </div>
</template>
