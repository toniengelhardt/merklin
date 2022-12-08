<script setup lang="ts">
const props = defineProps<{
  name: TokenName
}>()
const token = tokens[props.name]
</script>

<template>
  <div flex items-center>
    <div flex-center w-6 h-6 bg-element rounded-full>
      <Icon :name="token.icon" />
    </div>
    <div ml-6px>
      {{ token.label }}
    </div>
  </div>
</template>
