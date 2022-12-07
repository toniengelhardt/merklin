<script setup lang="ts">
const networkStore = useNetworkStore()
const blocknumber = useBlocknumber()

const status = $computed(() => networkStore.status)
</script>

<template>
  <div flex items-center>
    <Icon name="block" />
    <div ml-2 text-xs text-dim>
      {{ blocknumber || '...' }}
    </div>
    <div
      v-if="status"
      class="w-1.5 h-1.5 ml-2 rounded-full"
      :class="status === 'connected' ? 'bg-green-500' : 'bg-orange-400'"
    />
  </div>
</template>
