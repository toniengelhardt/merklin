<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div panel>
    <h2 panel-title>
      Gas fees
    </h2>
    <div py-2>
      <GasChartCumulativeFees />
    </div>
  </div>
</template>
