<script setup lang="ts">
const props = defineProps<{
  name: TokenName
}>()
const token = tokens[props.name]
</script>

<template>
  <div flex items-center>
    <div flex-center w-6 h-6 bg-element rounded-full>
      <TokenIcon :token="token" />
    </div>
    <div ml-2>
      {{ token.label }}
    </div>
  </div>
</template>
