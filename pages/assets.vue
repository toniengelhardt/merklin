<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="page">
    <PanelUnderConstruction col-span-12 md:col-span-3 md:h-50 />
    <div col-span-12 md:col-span-9 panel md:h-50>
      <h2 panel-title>
        Concept
      </h2>
      <p text-dim>
        Overview of token balances and DeFi positions.
      </p>
    </div>
  </div>
</template>
