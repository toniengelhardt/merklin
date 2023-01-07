<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()

const activeAddress = $computed(() => addressStore.activeAddresses.length ? addressStore.activeAddresses[0] : undefined)
</script>

<template>
  <div btn-transparent px-4 @click="ui.addressDialogOpen = true">
    <Icon name="dropdown" text-xs text-dim mr-2 lt-md:hidden />
    <Icon name="addressbook" size="1.5rem" />
    <AddressDisplay v-if="activeAddress" :address="activeAddress" ml-2 text-sm />
    <div v-else ml-2 text-dim>
      Select address
    </div>
  </div>
</template>
