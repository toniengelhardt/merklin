<template>
  <div h-16 px-4 flex items-center>
    <div flex-1>
      <div flex items-center px-3 box-border>
        <NetworkInfo />
        <GasPrice pl-6 />
      </div>
    </div>
    <div grid grid-flow-col gap-2>
      <!-- <Currency /> -->
      <Network />
      <AddressSelect />
      <AccountMenu />
    </div>
  </div>
</template>
