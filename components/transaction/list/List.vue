<script setup lang="ts">
import Approve from '~/components/transaction/list/item/Approve.vue'
import Send from '~/components/transaction/list/item/Send.vue'
import Receive from '~/components/transaction/list/item/Receive.vue'
import Swap from '~/components/transaction/list/item/Swap.vue'
import Unknown from '~/components/transaction/list/item/Unknown.vue'

const props = defineProps<{
  items?: TransactionItem[]
}>()

const compMap: Record<TransactionSignature, any> = {
  approve: Approve,
  send: Send,
  receive: Receive,
  swap: Swap,
}
</script>

<template>
  <div v-if="props.items">
    <template
      v-for="item in props.items"
      :key="item.transaction.hash"
    >
      <div v-if="item.firstForDate" mt-4 mb-3 text-dim>
        {{ displayDate(item.timestamp) }}
      </div>
      <component
        :is="item.type ? compMap[item.type as TransactionSignature] : Unknown"
        :item="item"
      />
    </template>
    <p text-xs text-dim italic>
      That's it for now...
    </p>
  </div>
  <Loading v-else />
</template>
