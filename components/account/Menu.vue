<script setup lang="ts">
</script>

<template>
  <Menu
    :toggleIcon="{ name: 'menu', size: '1.4rem' }"
    toggleClass="btn-transparent"
  >
    <MenuItem>
      <ThemeToggle @click.prevent />
    </MenuItem>
  </Menu>
</template>
