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
  }
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
    <Icon name="nuxt" />
    <Icon name="vite" />
    <Icon name="unocss" dark:invert />
    <Icon name="headless" />
    <Icon name="vercel" />
    <div text-sm text-faint>
      v0.1-alpha
    </div>
  </div>
</template>
