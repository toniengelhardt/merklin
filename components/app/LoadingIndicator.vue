<script setup lang="ts">
const ui = useUIStore()
</script>

<template>
  <div flex-center h-10 mr-2>
    <Icon
      v-if="ui.loading"
      name="loading"
      :size="ui.mobile ? '1.75rem' : '1.25rem'"
      text-green-500 dark:text-green-400
    />
  </div>
</template>
