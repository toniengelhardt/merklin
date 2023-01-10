<script setup lang="ts">
withDefaults(defineProps<{
  address: Address
  format?: 'short' | 'long'
}>(), {
  format: 'long',
})
</script>

<template>
  <div flex items-center font-mono text-faint class="text-obscure">
    0x<span mr-0.5 text-base>{{ address.slice(2, 6) }}</span>…<span v-if="format === 'long'" ml-0.5 text-base>{{ address.slice(-4) }}</span>
  </div>
</template>
