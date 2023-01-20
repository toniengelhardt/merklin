<script setup lang="ts">
const ui = useUIStore()
</script>

<template>
  <div flex-center h-10>
    <Icon
      v-if="ui.loading"
      name="loading"
      :size="ui.mobile ? '1.75rem' : '1.25rem'"
      text-yellow-500 dark:text-yellow-400
    />
  </div>
</template>
