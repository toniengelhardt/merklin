<script setup lang="ts">
const ui = useUIStore()
</script>

<template>
  <div
    title="Toggle theme"
    group flex w-full items-center rounded-lg px-2 py-2 text-sm
    box-border cursor-pointer
    @click="(ui.obscure = !ui.obscure)"
  >
    <ClientOnly>
      <Icon :name="ui.obscure ? 'visible' : 'obscured'" size="1.2rem" mr-2 h-5 w-5 aria-hidden="true" />
      <span>{{ ui.obscure ? 'Show values' : 'Hide values' }}</span>
    </ClientOnly>
  </div>
</template>
