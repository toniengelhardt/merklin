<script setup lang="ts">
const addressStore = useAddressStore()
</script>

<template>
  <div>
    <h4 flex items-center m-0>
      <Icon name="addressbook" w-5 /><span ml-2>Saved</span>
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
        </div>
        <AddressIcon :address="address" w-4 h-4 ml-2 rounded lt-md:hidden />
        <span ml-1 text-faint>0x</span>
        <span text-sm class="text-address">
          {{ displayAddress(address).slice(2) }}
        </span>
      </div>
      <div h-8 flex items-center>
        <Icon name="plus" w-5 />
        <input
          placeholder="Add address..."
          flex-1 ml-2
          @keypress.enter="addressStore.saveAddress(($event.target as HTMLInputElement)?.value)"
        >
      </div>
    </div>
  </div>
</template>
