<script setup lang="ts">
defineProps<{
  item?: MenuItem
}>()
</script>

<template>
  <HeadlessMenuItem v-slot="{ active }">
    <slot :active="active">
      <template v-if="item">
        <NuxtLink
          :to="item.link"
          :class="[active ? 'bg-element' : undefined]"
          group flex w-full items-center rounded-lg px-2 py-2 text-sm
          box-border cursor-pointer
          @click="item!.action ? item!.action() : null"
        >
          <Icon
            :name="item.icon.name"
            :active="active"
            class="mr-2 h-5 w-5"
            aria-hidden="true"
          />
          <span>{{ item.label }}</span>
          <Icon v-if="item.external" name="external" ml-1 />
        </NuxtLink>
      </template>
    </slot>
  </HeadlessMenuItem>
</template>
