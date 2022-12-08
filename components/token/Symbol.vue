<script setup lang="ts">
const props = defineProps<{
  name: TokenName
}>()
const ticker = tokens[props.name]
</script>

<template>
  <div flex items-center>
    <div flex-center w-6 h-6 bg-element rounded-full>
      <Icon :name="ticker.icon" />
    </div>
    <div ml-6px>
      {{ ticker.label }}
    </div>
  </div>
</template>
