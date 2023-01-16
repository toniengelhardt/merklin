<script setup lang="ts">
const addressStore = useAddressStore()

const newAddressInput = ref<HTMLInputElement>()

function selectAddress(address: Address) {
  if (!addressStore.activeAddresses.includes(address)) {
    addressStore.selectAddress(address)
  } else {
    addressStore.deselectAddress(address)
  }
}

function addAddress(address: Address) {
  addressStore.saveAddress(address)
  newAddressInput.value!.value = ''
  if (addressStore.activeAddresses.length === 0) {
    addressStore.selectAddress(address)
  }
}
</script>

<template>
  <div min-h-60>
    <h3 flex items-center m-0>
      <Icon name="harddrives" w-5 /><span ml-2>Saved</span>
    </h3>
    <div mt-4>
      <div
        v-for="address in addressStore.savedAddresses"
        :key="address"
        flex items-center mb-2
        @click="selectAddress(address)"
      >
        <div flex-center h-5 w-5 rounded>
          <Icon v-if="addressStore.activeAddresses.includes(address)" name="check" text-green />
          <Icon v-else name="safe" text-faint />
        </div>
        <div flex items-center flex-1 cursor-pointer>
          <AddressIcon :address="address" w-4 h-4 ml-2 rounded-md lt-md:hidden border-solid border-zinc-400 />
          <AddressDisplay :address="address" ml-1.5 />
        </div>
        <div flex-center h-5 w-5 ml-2 cursor-pointer @click.stop="addressStore.deleteAddress(address)">
          <Icon name="delete" />
        </div>
      </div>
      <div flex items-center h-8 mt-4>
        <input
          ref="newAddressInput"
          placeholder="Add address 0x..."
          flex-1 ml-4 bg-element border-none mr-7 px-3 py-2 rounded-md text-base
          @keypress.enter="addAddress(($event.target as HTMLInputElement)?.value)"
        >
      </div>
      <p mx-7 my-0 text-xs text-faint>
        Input/paste address and hit 'Enter'.
      </p>
    </div>
  </div>
</template>
