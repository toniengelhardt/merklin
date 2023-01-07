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
  <AppDialog :model-value="modelValue" @update:model-value="close()">
    <template #title>
      Address Book
    </template>
    <div flex mb-2>
      <div flex="1/2" shrink-0 pr-2 box-border>
        <Wallet />
      </div>
      <div flex="1/2" shrink-0 pl-2 box-border>
        <AddressBook />
      </div>
    </div>
  </AppDialog>
</template>
