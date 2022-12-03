<script setup lang="ts">
const config = useRuntimeConfig()
const items = {
  web3VueNuxtProjects: {
    icon: { name: 'vue' },
    label: 'Vue web3 projects',
    link: 'https://github.com/toniengelhardt/web3-vue-and-nuxt-projects',
    external: true,
  },
  repotracker: {
    icon: { name: 'repotracker' },
    label: 'RepoTracker',
    link: 'https://repo-tracker.com/r/gh/toniengelhardt/m3tadata',
    external: true,
  },
  github: {
    icon: { name: 'github' },
    label: 'Contribute',
    title: 'MΞTADATA repository on GitHub',
    link: config.public.repoLink,
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
    :toggle-icon="{ name: 'menu', size: '1.4rem' }"
    toggle-class="btn-transparent"
  >
    <MenuItem v-slot="{ active }">
      <ThemeToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem :item="items.github" />
    <MenuItem :item="items.repotracker" />
    <MenuItem :item="items.web3VueNuxtProjects" />
    <MenuItem :item="items.twitter" />
    <MenuItem :item="items.discord" />
  </Menu>
</template>
