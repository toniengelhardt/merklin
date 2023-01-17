<template>
  <div flex justify-between items-center h-14 pl-4 pr-2>
    <Brand />
    <AccountMenu orientation="right" toggle-class="text-dim" />
  </div>
  <AddressSelect mx-2 />
  <!-- <Network mx-2 mt-2 /> -->
  <div flex-1 mt-2 px-2>
    <div grid gap-1>
      <AppMenuItem
        v-for="(item, idx) in appMenuItems"
        :key="idx"
        :item="item"
      />
    </div>
  </div>
  <div px-4 text-xs>
    <div py-4 border-b-0 border-base>
      <p flex items-center text-sm m-0>
        <b>Disclaimer</b><span ml-1 text-lg>🧌</span>
      </p>
      <p m-0 mt-1 text-dim>
        This project is work in progress and the presented data might not be correct.
      </p>
      <p m-0 mt-1 text-dim>
        Use at your own risk!
      </p>
      <p flex items-center m-0 mt-3 font-bold>
        <AppContributeButton />
      </p>
    </div>
  </div>
  <div flex justify-between items-center text-sm text-center px-4 py-3>
    <div flex-center>
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
        ml-4
      >
        <Icon name="vite" />
      </NuxtLink>
      <NuxtLink
        href="https://uno.antfu.me"
        target="_blank"
        title="UnoCSS"
        ml-4
      >
        <Icon name="unocss" dark:invert />
      </NuxtLink>
      <NuxtLink
        href="https://headlessui.com"
        target="_blank"
        title="Headless UI"
        ml-4
      >
        <Icon name="headless" />
      </NuxtLink>
      <NuxtLink
        href="https://vercel.com"
        target="_blank"
        title="Vercel"
        ml-4
      >
        <Icon name="vercel" />
      </NuxtLink>
    </div>
    <NuxtLink
      to="https://github.com/toniengelhardt/merklin/releases"
      title="Releases on GitHub"
      text-xs text-dim hover:text-base decoration-none hover:decoration-none
    >
      {{ appVersion }}
    </NuxtLink>
  </div>
</template>
