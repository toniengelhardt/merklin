<script setup lang="ts">
const addressStore = useAddressStore()
</script>

<template>
  <div panel flex flex-col md:h-61>
    <h2 panel-title flex justify-between>
      <span>Performance</span>
      <span class="mx-1 text-1.5rem text-base">🧞‍♂️</span>
    </h2>
    <div py-2 flex-1 flex-center>
      <div v-if="addressStore.activeAddresses.length" flex-center flex-col>
        <div text-2xl md:text-4xl>
          🐰
        </div>
        <div text-sm text-faint italic>
          Under construction...
        </div>
      </div>
      <AppNoAddress v-else />
    </div>
  </div>
</template>
