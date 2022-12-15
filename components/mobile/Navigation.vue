<template>
  <div flex justify-around items-center w-full h-16 px-3 border-t-1 border-highlight box-border>
    <AppMenuItemMobile
      v-for="(item, idx) in appMenuItems"
      :key="idx"
      :item="item"
    />
  </div>
</template>
