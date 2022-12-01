<script setup lang="ts">
const blocknumber = useBlocknumber()
</script>

<template>
  <div flex justify-between items-center h-16 px-4>
    <div grid grid-flow-col gap-4 items-center text-sm>
      <div flex items-center>
        <Icon name="block" px-2 />
        <div text-xs text-dim>
          {{ blocknumber || '...' }}
        </div>
      </div>
    </div>
    <div grid grid-flow-col gap-4 items-center>
      <Icon name="nuxt" />
      <Icon name="vite" />
      <Icon name="unocss" dark:invert />
      <Icon name="headless" />
      <ThemeToggle ml-1 />
    </div>
  </div>
</template>

<style lang="pcss" scoped>

</style>
