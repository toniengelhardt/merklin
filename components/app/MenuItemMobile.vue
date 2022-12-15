<script setup lang="ts">
const props = defineProps<{
  item: AppMenuItem
}>()
</script>

<template>
  <NuxtLink
    :to="item.link"
    :title="item.title"
    class="flex items-center h-12 px-3 text-dim radius-base decoration-none"
  >
    <Icon :name="item.icon.name" size="1.5rem" />
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply bg-element;
}
.router-link-active > .icon {
  @apply text-base;
}
</style>
