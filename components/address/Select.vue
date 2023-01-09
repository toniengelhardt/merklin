<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()

const activeAddress = $computed(() => addressStore.activeAddresses.length ? addressStore.activeAddresses[0] : undefined)
</script>

<template>
  <div btn-transparent md:btn-default md:px-3 @click="ui.addressDialogOpen = true">
    <!-- <Icon v-if="!ui.mobile" name="dropdown" text-xs text-dim mr-2 /> -->
    <template v-if="activeAddress">
      <AddressIcon :address="activeAddress" flex w-6 h-6 md:w-5 md:h-5 p-1px rounded-full md:rounded-lg border-solid border-zinc-400 />
      <AddressDisplay :address="activeAddress" :format="ui.mobile ? 'short' : 'long'" ml-2 mr-0.5 lt-md:hidden />
    </template>
    <template v-else>
      <Icon name="addressbook" size="1.5rem" text-dim />
      <div ml-2 mr-1 text-dim lt-md:hidden>
        Select address
      </div>
    </template>
  </div>
</template>
