<template>
  <div grid grid-cols-12 h-16 px-4>
    <div col-span-4 grid grid-flow-col gap-4 items-center text-sm>
      <NetworkInfo />
    </div>
    <div col-span-4 grid grid-flow-col gap-8 justify-center items-center>
      <Icon name="nuxt" />
      <Icon name="vite" />
      <Icon name="unocss" dark:invert />
      <Icon name="headless" />
    </div>
    <div col-span-4 grid grid-flow-col gap-4 justify-end items-center pr-2>
      <Icon name="twitter" size="1.5rem" />
      <Icon name="discord" size="1.5rem" />
      <Icon name="github" size="1.5rem" />
    </div>
  </div>
</template>

<style lang="pcss" scoped>

</style>
