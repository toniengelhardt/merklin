<script setup lang="ts">
defineProps<{
  item: AppMenuItem
}>()
</script>

<template>
  <NuxtLink
    :to="item.link"
    :title="item.title"
    class="flex items-center h-10 px-2 text-lg text-dim font-bold hover:bg-element rounded-lg decoration-none select-none"
  >
    <span flex-center w-6>
      <Icon :name="item.icon.name" size="1.25rem" />
    </span>
    <span class="gradient ml-2">{{ item.label }}</span>
  </NuxtLink>
</template>

<style scoped>
/* .router-link-active {
  @apply bg-element;
} */
.router-link-active > * > .icon {
  @apply text-yellow-600;
}
.router-link-active > .gradient {
  @apply text-gradient-yellow;
}
</style>
