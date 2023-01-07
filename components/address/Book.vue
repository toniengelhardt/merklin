<script setup lang="ts">
const addressStore = useAddressStore()

const newAddressInput = ref<HTMLInputElement>()

function addAddress(address: Address) {
  addressStore.saveAddress(address)
  newAddressInput.value!.value = ''
}
</script>

<template>
  <div min-h-60>
    <h4 flex items-center m-0>
      <Icon name="harddrives" w-5 /><span ml-2>Saved</span>
    </h4>
    <div mt-2>
      <div
        v-for="address in addressStore.savedAddresses"
        :key="address"
        flex items-center mb-2 cursor-pointer
        @click="addressStore.selectAddress(address)"
      >
        <div flex-center h-5 w-5 rounded>
          <Icon v-if="addressStore.activeAddresses.includes(address)" name="check" text-green />
          <Icon v-else name="key" text-faint />
        </div>
        <AddressIcon :address="address" w-4 h-4 ml-2 rounded lt-md:hidden />
        <AddressDisplay :address="address" ml-1 />
      </div>
      <div h-8 flex items-center>
        <Icon name="plus" w-5 text-faint />
        <input
          ref="newAddressInput"
          placeholder="Add address..."
          flex-1 ml-2 bg-element border-none mr-1 px-3 py-1.5 rounded-md text-base
          @keypress.enter="addAddress(($event.target as HTMLInputElement)?.value)"
        >
      </div>
    </div>
  </div>
</template>
