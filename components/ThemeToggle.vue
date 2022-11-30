<script setup lang="ts">
const colorMode = useColorMode()

function onClick() {
  let newTheme
  switch (colorMode.preference) {
    case 'light':
      newTheme = 'dark'
      break
    case 'dark':
      newTheme = 'system'
      break
    default:
      newTheme = 'light'
      break
  }
  colorMode.preference = newTheme
}
</script>

<template>
  <div
    title="Toggle theme"
    class="flex justify-center items-center w-8 min-h-8 cursor-pointer"
    @click="onClick()"
  >
    <ClientOnly>
      <Icon :name="colorMode.preference" size="1.2rem" />
    </ClientOnly>
  </div>
</template>
