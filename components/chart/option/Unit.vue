<script setup lang="ts">
defineProps<{ modelValue: ChartUnitOption }>()
defineEmits(['update:modelValue'])

const options = [{
  value: 'eth',
  label: 'ETH',
}, {
  value: 'currency',
  label: 'USD',
}]
</script>

<template>
  <!-- <div flex="~ 1/2" justify-end items-center mb-2 text-sm text-dim font-bold>
    <div
      flex-center px-2 h-6 rounded-md mr-2 cursor-pointer
      :class="modelValue === 'eth' ? 'bg-element text-base' : undefined"
      @click="$emit('update:modelValue', 'eth')"
    >
      <span>Ξ</span><span ml-1>ETH</span>
    </div>
  </div> -->
  <ChartOptionSelect
    :model-value="modelValue"
    :options="options"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
