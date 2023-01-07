<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()

const activeAddress = $computed(() => addressStore.activeAddresses.length ? addressStore.activeAddresses[0] : undefined)
</script>

<template>
  <div btn-transparent px-4 @click="ui.addressDialogOpen = true">
    <Icon v-if="!ui.mobile" name="dropdown" text-xs text-dim mr-2 />
    <template v-if="activeAddress">
      <AddressIcon :address="activeAddress" w-5 h-5 rounded-md />
      <AddressDisplay :address="activeAddress" ml-2 />
    </template>
    <template v-else>
      <Icon name="addressbook" size="1.5rem" />
      <div ml-2 text-dim>
        Select address
      </div>
    </template>
  </div>
</template>
