<template>
  <div
    class="mobile-navigation"
    flex justify-between items-center w-full px-4 bg-base
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
  height: calc(3.5rem + var(--sab));
  padding-bottom: var(--sab);
  /* border-top: 1px solid;
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, rgba(var(--gradient-blue), 0.35) 0%, rgba(var(--gradient-blue), 0.35) 10%, rgba(var(--gradient-purple), 0.35)); */
}
</style>
