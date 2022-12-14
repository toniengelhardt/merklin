<script setup lang="ts">
import { useConnect, useDisconnect } from 'vagmi'

const config = useRuntimeConfig()
const items = {
  disconnect: {
    icon: { name: 'disconnect' },
    label: 'Disconnect',
  },
  web3VueNuxtProjects: {
    icon: { name: 'vue' },
    label: 'Vue web3 projects',
    link: 'https://github.com/toniengelhardt/web3-vue-and-nuxt-projects',
    external: true,
  },
  repotracker: {
    icon: { name: 'repotracker' },
    label: 'Dev Stats',
    link: 'https://repo-tracker.com/r/gh/toniengelhardt/m3tadata',
    external: true,
  },
  plausible: {
    icon: { name: 'plausible' },
    label: 'Analytics',
    link: 'https://plausible.io/m3tadata.vercel.app',
    external: true,
  },
  github: {
    icon: { name: 'github' },
    label: 'Contribute',
    title: 'MΞTADATA repository on GitHub',
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

const { isConnected } = useConnect()
const { disconnect } = useDisconnect()
</script>

<template>
  <Menu
    :toggle-icon="{ name: 'menu', size: '1.4rem' }"
    toggle-class="btn-transparent"
  >
    <MenuItem v-if="isConnected" :item="items.disconnect" @click.prevent="disconnect()" />
    <MenuItem v-slot="{ active }">
      <ThemeToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem v-slot="{ active }">
      <ObscureToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem :item="items.github" />
    <MenuItem :item="items.repotracker" />
    <MenuItem :item="items.plausible" />
    <MenuItem :item="items.web3VueNuxtProjects" />
    <MenuItem :item="items.twitter" />
    <MenuItem :item="items.discord" />
  </Menu>
</template>
