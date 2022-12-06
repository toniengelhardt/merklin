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
        Detailed NFT analytics including price, collection, storage location, mutability, etc.
      </p>
    </div>
  </div>
</template>
