<script setup lang="ts">
const menuItems = [
  {
    icon: {
      name: 'dashboard',
    },
    label: 'Dashboard',
    title: 'Dashboard',
    link: '/',
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
      name: 'airdrop',
    },
    label: 'Airdrops',
    title: 'Airdrops',
    link: '/airdrops',
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
  <!-- <div h-12 grid grid-flow-col justify-items-center items-center text-center px-3>
    <NuxtLink
      to="https://github.com/toniengelhardt/m3tadata"
      title="GitHub repository"
      class="w-full btn"
    >
      <Icon name="github" size="1.2rem" />
      <div ml-2 mr-2>Contribute</div>
    </NuxtLink>
  </div> -->
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
      v0.1-alpha
    </NuxtLink>
  </div>
</template>
