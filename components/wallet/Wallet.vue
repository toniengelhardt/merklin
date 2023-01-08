<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div>
    <h3 flex items-center m-0>
      <Icon name="wallet" /><span ml-2>Wallet</span>
    </h3>
    <div mt-4>
      <a btn-default flex-inline h-8 px-6 text-sm rounded-md>
        Connect (TBD)
      </a>
    </div>
  </div>
</template>
