<script setup lang="ts">
const ui = useUIStore()
const addressStore = useAddressStore()

const activeAddress = $computed(() => addressStore.activeAddresses.length ? addressStore.activeAddresses[0] : undefined)

function copyAddress() {
  if (activeAddress) {
    navigator.clipboard.writeText(activeAddress)
  }
}
</script>

<template>
  <div
    flex items-center h-10 lt-md:justify-center lt-md:w-10
    md:px-2 md:pl-1.35 md:border-solid md:border-1 md:border-base md:hover:border-highlight
    md:rounded-xl box-border cursor-pointer
    @click="ui.addressDialogOpen = true"
  >
    <template v-if="activeAddress">
      <AddressIcon
        :address="activeAddress"
        flex w-9 h-9 md:(w-7 h-7) lt-md:p-1px border-solid lt-md:border-2 md:border-0 border-highlight
        rounded-full md:rounded-md box-border
      />
      <AddressDisplay
        :address="activeAddress"
        :format="ui.mobile ? 'short' : 'long'"
        flex-1 ml-1.5 lt-md:hidden
      />
      <div lt-md:hidden flex-center w-6 h-6 text-dim hover:text-base @click.stop="copyAddress()">
        <Icon name="copy" size="0.85rem" />
      </div>
    </template>
    <template v-else>
      <Icon name="addressbook" size="1.5rem" text-dim />
      <div flex-1 ml-2 mr-1 text-dim lt-md:hidden>
        Select address
      </div>
    </template>
    <div flex-center w-6 h-6 text-dim lt-md:hidden>
      <Icon name="dropdown" size="0.75rem" />
    </div>
  </div>
</template>
