<script setup lang="ts">
defineProps<{
  token: Token
}>()

const custom: Partial<Record<TokenName, boolean>> = {
  op: true,
}
</script>

<template>
  <Icon v-if="custom[token.name]" :name="token.name" size="24" />
  <CryptoIcon v-else :symbol="token.name" />
</template>
