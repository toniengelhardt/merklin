<script setup lang="ts">
withDefaults(defineProps<{
  orientation?: 'left' | 'right'
  direction?: 'up' | 'down'
  toggleClass?: string
}>(), {
  orientation: 'left',
  direction: 'down',
})
const config = useRuntimeConfig()
const ui = useUIStore()
const items = {
  settings: {
    icon: { name: 'settings' },
    label: 'Settings',
    link: '/settings',
  },
  feedback: {
    icon: { name: 'feedback' },
    label: 'Feedback',
    link: `mailto:${config.public.feedbackEmail}`,
  },
  repotracker: {
    icon: { name: 'repotracker' },
    label: 'Repo Insights',
    link: 'https://repo-tracker.com/r/gh/toniengelhardt/merklin',
    external: true,
  },
  plausible: {
    icon: { name: 'plausible' },
    label: 'Analytics',
    link: 'https://plausible.io/app.merklin.xyz',
    external: true,
  },
  github: {
    icon: { name: 'github' },
    label: 'Contribute',
    title: 'Merklin repository on GitHub',
    link: config.public.repoUrl,
    external: true,
  },
  twitter: {
    icon: { name: 'twitter' },
    label: 'Twitter',
    external: true,
  },
  discord: {
    icon: { name: 'discord' },
    label: 'Discord',
    external: true,
  },
}
</script>

<template>
  <Menu
    :orientation="orientation"
    :direction="direction"
    :toggle-icon="{ name: 'menu', size: ui.mobile ? '1.4rem' : '1.2rem' }"
    :toggle-class="`btn-transparent ${toggleClass}`"
  >
    <MenuItem v-slot="{ active }">
      <ObscureToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem v-slot="{ active }">
      <ThemeToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem :item="items.settings" />
    <MenuItem :item="items.feedback" />
    <MenuDivider />
    <MenuItem :item="items.github" />
    <MenuItem :item="items.repotracker" />
    <MenuItem :item="items.plausible" />
    <!-- <MenuItem :item="items.twitter" />
    <MenuItem :item="items.discord" /> -->
  </Menu>
</template>
