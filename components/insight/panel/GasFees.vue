<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div panel md:h-61>
    <h2 panel-title>
      Gas burn
    </h2>
    <div py-2>
      <GasChartCumulativeFees />
    </div>
  </div>
</template>
