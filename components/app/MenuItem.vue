<script setup lang="ts">
defineProps<{
  item: AppMenuItem
}>()
</script>

<template>
  <NuxtLink
    :to="item.link"
    :title="item.title"
    class="flex items-center h-12 px-3 text-lg text-dim font-bold hover:bg-element radius-base decoration-none"
  >
    <Icon :name="item.icon.name" size="1.5rem" />
    <span class="gradient ml-2">{{ item.label }}</span>
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply bg-element;
}
.router-link-active > .icon {
  @apply text-yellow-600;
}
.router-link-active > .gradient {
  @apply bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent bg-clip-text;
}
</style>
