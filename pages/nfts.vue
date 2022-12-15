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
        Detailed NFT analytics including price, collection, storage location, mutability, etc.
      </p>
    </div>
  </div>
</template>
