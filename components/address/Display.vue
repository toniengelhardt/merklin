<script setup lang="ts">
defineProps<{
  address: Address
}>()
</script>

<template>
  <div flex items-center font-mono text-faint class="text-obscure">
    0x<span mx-0.25 text-base>{{ address.slice(2, 6) }}</span>...<span ml-0.25 text-base>{{ address.slice(-4) }}</span>
  </div>
</template>
