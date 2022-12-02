<script setup lang="ts">
const props = defineProps<{
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
          <Icon
            :name="toggleIcon.name"
            :size="toggleIcon.size"
            :class="toggleIcon.class"
          />
          <div v-if="toggleLabel">
            {{ toggleLabel }}
          </div>
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
          radius-base bg-surface shadow-lg ring-0 ring-zinc-900 ring-opacity-5
          focus:outline-none
        >
          <div p-1>
            <slot>
              <!-- <MenuItem
                v-if="items"
                v-for="(item, idx) in items"
                :key="idx"
              >
                <NuxtLink
                  :to="item.link"
                  @click="item.action()"
                >
                  <div>
                    {{ item.label }}
                  </div>
                  <div>
                    <Icon :name="item.icon.name" :class="item.icon.class" />
                  </div>
                </NuxtLink>
              </MenuItem> -->
            </slot>
          </div>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>
