<template>
  <div h-14 flex items-center px-6 bg-base box-border border-b-solid border-b-1 border-base>
    <div flex="~ 1/3" w-10 h-10>
      <AddressSelect />
    </div>
    <div flex="~ 1/3" justify-center items-end h-14>
      <NuxtLink
        to="/"
        title="Insights"
        flex p-0 text-1.5rem
      >
        <img src="/icon.png" width="54" height="54" flex>
      </NuxtLink>
    </div>
    <div flex="~ 1/3" justify-end>
      <!-- <GasPrice mr-2 /> -->
      <Network w-10 />
    </div>
  </div>
</template>
