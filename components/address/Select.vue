<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()

const activeAddress = $computed(() => addressStore.activeAddresses.length ? addressStore.activeAddresses[0] : undefined)
</script>

<template>
  <div btn-transparent px-4 @click="ui.addressDialogOpen = true">
    <Icon name="dropdown" class="text-xs text-dim" mr-2 />
    <Icon name="addressbook" size="1.5rem" />
    <div v-if="activeAddress" ml-2 flex text-sm text-faint class="text-obscure">
      0x<span mx-0.5 text-base>{{ activeAddress.slice(2, 6) }}</span>...<span class="ml-0.5" text-base>{{ activeAddress.slice(-4) }}</span>
    </div>
    <div v-else ml-2 text-dim>
      Select address
    </div>
  </div>
</template>
