<script setup lang="ts">
const ui = useUIStore()
</script>

<template>
  <div
    flex-center flex-col text-dim hover:text-base cursor-pointer
    @click="ui.addressDialogOpen = true"
  >
    <Icon name="addressbook" size="1.2rem" mt-1 />
    <div mt-1 text-sm>
      Select address
    </div>
  </div>
</template>
