<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue', 'close'])

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
    <div flex lt-md:flex-col mb-2>
      <div flex="1/2" shrink-0 md:pr-2 box-border>
        <Wallet />
      </div>
      <div flex="1/2" shrink-0 lt-md:mt-4 md:pl-2 box-border>
        <AddressBook />
      </div>
    </div>
  </AppDialog>
</template>
