<script setup lang="ts">
import { version } from '~/package.json'

const appVersion = version

const menuItems = [
  {
    icon: {
      name: 'insights',
    },
    label: 'Insights',
    title: 'Insights',
    link: '/',
  },
  {
    icon: {
      name: 'assets',
    },
    label: 'Assets',
    title: 'Assets',
    link: '/assets',
  },
  {
    icon: {
      name: 'nft',
    },
    label: 'NFTs',
    title: 'NFTs',
    link: '/nfts',
  },
  {
    icon: {
      name: 'transaction',
    },
    label: 'Transactions',
    title: 'Transactions',
    link: '/transactions',
  },
  {
    icon: {
      name: 'blockchain',
    },
    label: 'Networks',
    title: 'Networks',
    link: '/networks',
  },
]
</script>

<template>
  <div flex items-center h-16 px-6>
    <Brand />
  </div>
  <div flex-1 px-3>
    <div grid gap-1>
      <AppMenuItem
        v-for="(item, idx) in menuItems"
        :key="idx"
        :item="item"
      />
    </div>
  </div>
  <div px-6 text-xs>
    <div py-4 border-b-0 border-base>
      <p flex items-center text-sm m-0>
        <b>Disclaimer</b><span ml-2 text-lg>🍌</span>
      </p>
      <p m-0 mt-1 text-dim>
        This project is work in progress and the presented data might not be correct. Use at your own risk!
      </p>
      <p flex items-center m-0 mt-2>
        <NuxtLink
          :to="$config.repoUrl"
          title="MΞTADATA repository on GitHub"
          target="_blank"
          btn-default h-6 px-2 rounded
        >
          <Icon name="opensource" mr-1 style="color: #4CAF50" />
          <Icon name="github" mr-1 />
          <span>Contribute</span>
        </NuxtLink>
      </p>
    </div>
  </div>
  <div h-12 flex justify-between items-center text-center px-6>
    <NuxtLink
      href="https://nuxt.com"
      target="_blank"
      title="Nuxt"
    >
      <Icon name="nuxt" />
    </NuxtLink>
    <NuxtLink
      href="https://vitejs.dev"
      target="_blank"
      title="Vite"
    >
      <Icon name="vite" />
    </NuxtLink>
    <NuxtLink
      href="https://uno.antfu.me"
      target="_blank"
      title="UnoCSS"
    >
      <Icon name="unocss" dark:invert />
    </NuxtLink>
    <NuxtLink
      href="https://headlessui.com"
      target="_blank"
      title="Headless UI"
    >
      <Icon name="headless" />
    </NuxtLink>
    <NuxtLink
      href="https://vercel.com"
      target="_blank"
      title="Vercel"
    >
      <Icon name="vercel" />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/toniengelhardt/m3tadata/releases"
      title="Releases on GitHub"
      text-sm text-dim hover:text-base decoration-none hover:decoration-none
    >
      {{ appVersion }}
    </NuxtLink>
  </div>
</template>
