<script setup lang="ts">
// const defaultProvider = await useDefaultProvider()
const items = {
  matic: {
    icon: { name: 'polygon' },
    label: 'Polygon',
  },
  optimism: {
    icon: { name: 'optimism' },
    label: 'Optimism',
  },
  xDai: {
    icon: { name: 'xdai' },
    label: 'xDai',
  },
}
</script>

<template>
  <Menu
    :toggle-icon="{ name: 'ethereum', size: '1.4rem' }"
    toggle-class="btn-transparent"
  >
    <MenuItem :item="items.matic" />
    <MenuItem :item="items.optimism" />
    <MenuItem :item="items.xDai" />
  </Menu>
</template>
