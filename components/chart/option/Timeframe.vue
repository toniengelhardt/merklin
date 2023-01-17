<script setup lang="ts">
defineProps<{ modelValue: ChartUnitOption }>()
defineEmits(['update:modelValue'])

const options = [{
  value: '30d',
  label: '30d',
}, {
  value: '3m',
  label: '3m',
}, {
  value: '1y',
  label: '1y',
}, {
  value: 'all',
  label: 'All',
}]
</script>

<template>
  <ChartOptionSelect
    :model-value="modelValue"
    :options="options"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
