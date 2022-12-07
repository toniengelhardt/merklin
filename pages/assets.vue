<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div page>
    <PanelUnderConstruction col-span-3 h-50 />
    <div col-span-9 panel h-50>
      <h2 panel-title>
        Concept
      </h2>
      <p text-dim>
        Overview of token balances and DeFi positions.
      </p>
    </div>
  </div>
</template>
