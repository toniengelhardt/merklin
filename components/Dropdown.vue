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
    <HeadlessMenu>
      <HeadlessMenuButton :class="toggleClass">
        <Icon
          :name="toggleIcon.name"
          :class="toggleIcon.class"
        />
        <div v-if="toggleLabel">
          {{ toggleLabel }}
        </div>
      </HeadlessMenuButton>
      <HeadlessMenuItems>
        <slot>
          <HeadlessMenuItem
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
          </HeadlessMenuItem>
        </slot>
      </HeadlessMenuItems>
    </HeadlessMenu>
  </div>
</template>
