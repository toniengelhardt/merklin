<template>
  <NuxtLink
    :to="$config.repoUrl"
    title="MΞTADATA repository on GitHub"
    target="_blank"
    btn-default h-6 px-2 text-xs rounded
  >
    <!-- <Icon name="opensource" mr-1 style="color: #4CAF50" /> -->
    <Icon name="github" mr-1 />
    <span>Contribute</span>
  </NuxtLink>
</template>
