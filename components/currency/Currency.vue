<script setup lang="ts">
const currency = useCurrency()
</script>

<template>
  <div btn-transparent px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <div ml-2 text-lg>
      {{ currency.symbol }}
    </div>
  </div>
</template>
