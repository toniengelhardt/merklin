<template>
  <div
    class="mobile-navigation"
    flex justify-around items-center w-full px-3 bg-base
    box-border border-t-solid border-t-1 border-base
  >
    <AppMenuItemMobile
      v-for="(item, idx) in appMenuItems"
      :key="idx"
      :item="item"
    />
    <AccountMenu direction="up" toggle-class="text-dim" />
  </div>
</template>

<style scoped>
.mobile-navigation {
  height: calc(3.5rem + env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
