<template>
  <div h-16 px-4 flex items-center>
    <div flex-1>
      <div flex items-center px-3 box-border>
        <NetworkInfo />
      </div>
    </div>
    <div grid grid-flow-col gap-2>
      <!-- <Currency /> -->
      <GasPrice />
      <Network />
      <AddressSelect />
      <AccountMenu toggle-class="text-faint" />
    </div>
  </div>
</template>
