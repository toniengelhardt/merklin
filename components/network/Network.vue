<script setup lang="ts">
const ui = useUIStore()
const networkStore = useNetworkStore()
const activeNetwork = computed(() => networkStore.activeNetworks?.length ? networkStore.activeNetworks[0] : networks.homestead)
</script>

<template>
  <div
    flex items-center
    p-2 border-solid border-1 border-base hover:border-highlight rounded-lg box-border cursor-pointer
    @click="ui.networkDialogOpen = true"
  >
    <div flex-center w-6 h-6>
      <Icon :name="activeNetwork.icon" size="1.25rem" />
    </div>
    <div flex-1 flex-col ml-2>
      {{ activeNetwork.label }}
    </div>
    <div flex-center w-6 h-6 text-dim>
      <Icon name="dropdown" size="0.75rem" />
    </div>
  </div>
</template>
