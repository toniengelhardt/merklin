<script setup lang="ts">
const items = {
  repotracker: {
    icon: { name: 'repotracker' },
    label: 'RepoTracker',
    link: 'https://repo-tracker.com/r/gh/toniengelhardt/m3tadata',
  },
  github: {
    icon: { name: 'github' },
    label: 'Contribute',
    title: 'MΞTADATA repository on GitHub',
    link: 'https://github.com/toniengelhardt/m3tadata',
  },
  twitter: {
    icon: { name: 'twitter' },
    label: 'Twitter',
  },
  discord: {
    icon: { name: 'discord' },
    label: 'Discord',
  },
}
</script>

<template>
  <Menu
    :toggleIcon="{ name: 'menu', size: '1.4rem' }"
    toggleClass="btn-transparent"
  >
    <MenuItem v-slot="{ active }">
      <ThemeToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem :item="items.repotracker" />
    <MenuItem :item="items.github" />
    <MenuItem :item="items.twitter" />
    <MenuItem :item="items.discord" />
  </Menu>
</template>
