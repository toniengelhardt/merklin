<template>
  <div flex justify-around items-center w-full h-16 px-3 bg-base box-border>
    <AppMenuItemMobile
      v-for="(item, idx) in appMenuItems"
      :key="idx"
      :item="item"
    />
  </div>
</template>
