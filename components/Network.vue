<script setup lang="ts">
const { provider } = await useProvider()
console.log(provider)

// const network =
</script>

<template>
  <div flex items-center>
    <Icon name="dropdown" size="0.8rem" />
    <Icon name="optimism" size="1.2rem" px-2 />
    <div>Optimism</div>
  </div>
</template>
