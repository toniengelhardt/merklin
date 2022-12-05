<script setup lang="ts">
const props = defineProps<{
  items?: TransactionItem[]
}>()

const addressCounts = $computed(() => {
  if (props.items) {
    const inDict = {}
    const outDict = {}
    props.items.forEach((item) => {
      if (item.type === 'send') {
        dictIncrement(outDict, item.transaction.to)
      }
      else if (item.type === 'receive') {
        dictIncrement(inDict, item.transaction.from)
      }
    })
    return {
      in: Object.keys(inDict).length,
      out: Object.keys(outDict).length,
    }
  }
  return {
    in: undefined,
    out: undefined,
  }
})
</script>

<template>
  <div panel>
    <h2 panel-title>
      Addresses
    </h2>
    <div>
      <p>IN: {{ addressCounts.in }}</p>
      <p>OUT: {{ addressCounts.out }}</p>
    </div>
  </div>
</template>
