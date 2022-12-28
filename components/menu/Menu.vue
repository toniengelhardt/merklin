<script setup lang="ts">
defineProps<{
  toggleIcon: ItemIcon
  toggleLabel?: string
  toggleClass?: string
  items?: MenuItem[]
}>()
</script>

<template>
  <div>
    <HeadlessMenu as="div" relative>
      <div>
        <HeadlessMenuButton :class="toggleClass">
          <slot name="icon">
            <Icon
              :name="toggleIcon.name"
              :size="toggleIcon.size"
              :class="toggleIcon.class"
            />
          </slot>
          <slot name="label">
            <div v-if="toggleLabel">
              {{ toggleLabel }}
            </div>
          </slot>
        </HeadlessMenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <HeadlessMenuItems
          absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100
          radius-base bg-base shadow-lg ring-0 ring-zinc-900 ring-opacity-5
          focus:outline-none z-12
        >
          <div p-1>
            <slot />
          </div>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>
