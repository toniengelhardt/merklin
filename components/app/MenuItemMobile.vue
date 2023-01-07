<script setup lang="ts">
const props = defineProps<{
  item: AppMenuItem
}>()
</script>

<template>
  <NuxtLink
    :to="item.link"
    :title="item.title"
    class="flex-center h-10 w-10 text-dim radius-base decoration-none"
  >
    <Icon :name="item.icon.name" size="1.5rem" />
  </NuxtLink>
</template>

<style scoped>
/* .router-link-active {
  @apply bg-element;
} */
.router-link-active > .icon {
  @apply text-base;
}
</style>
