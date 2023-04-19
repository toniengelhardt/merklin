<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue', 'close'])

const networkStore = useNetworkStore()

// function selectNetwork(address: Address) {
//   // if (!addressStore.activeAddresses.includes(address)) {
//   //   addressStore.selectAddress(address)
//   //   ui.addressDialogOpen = false
//   // }
// }

function close() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <AppDialog
    :model-value="modelValue"
    max-width="25rem"
    @update:model-value="close()"
  >
    <template #title>
      Network
    </template>
    <div flex lt-md:flex-col mb-2>
      <div
        v-for="network in networks"
        :key="network.name"
        :class="{ selected: networkStore.activeNetworks?.includes(network) }"
      >
        {{ network.label }}
      </div>
    </div>
  </AppDialog>
</template>
