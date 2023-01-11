<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue', 'close'])

const ui = useUIStore()
const addressStore = useAddressStore()

function selectAddress(address: Address) {
  if (!addressStore.activeAddresses.includes(address)) {
    addressStore.selectAddress(address)
    ui.addressDialogOpen = false
  }
}

function close() {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <AppDialog
    :model-value="modelValue"
    max-width="50rem"
    @update:model-value="close()"
  >
    <template #title>
      Address Book
    </template>
    <div mb-4 text-dim>
      Click on an address to select it and show insights.
    </div>
    <div flex lt-md:flex-col mb-2>
      <div flex="1/2" shrink-0 lt-md:mt-2 md:pr-2 box-border>
        <!-- <Wallet /> -->
        <h3 flex items-center m-0>
          <Icon name="ph:user-focus-bold" /><span ml-2>Samples</span>
        </h3>
        <div mt-4>
          <div
            v-for="sample in sampleAddresses"
            :key="sample.address"
            flex items-center mb-2
            @click="selectAddress(sample.address)"
          >
            <div flex-center h-5 w-5 rounded>
              <Icon v-if="addressStore.activeAddresses.includes(sample.address)" name="check" text-green />
              <Icon v-else name="safe" text-faint />
            </div>
            <div flex items-center flex-1 cursor-pointer>
              <AddressIcon :address="sample.address" w-4 h-4 ml-2 rounded-md lt-md:hidden border-solid border-zinc-400 />
              <div ml-1.5>
                {{ sample.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div flex="1/2" shrink-0 lt-md:mt-6 md:pl-2 box-border>
        <AddressBook />
      </div>
    </div>
  </AppDialog>
</template>
