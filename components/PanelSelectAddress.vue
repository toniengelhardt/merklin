<script setup lang="ts">
const ui = useUIStore()
</script>

<template>
  <div
    panel flex-center flex-col py-8 text-dim hover:text-base cursor-pointer
    @click="ui.addressDialogOpen = true"
  >
    <p m-0 text-3xl>
      <Icon name="addressbook" />
    </p>
    <p m-0 mt-3>
      Select address
    </p>
  </div>
</template>
