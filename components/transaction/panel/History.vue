<script setup lang="ts">
import Approve from '~/components/transaction/list/item/Approve.vue'
import Send from '~/components/transaction/list/item/Send.vue'
import Receive from '~/components/transaction/list/item/Receive.vue'
import Swap from '~/components/transaction/list/item/Swap.vue'
import Unknown from '~/components/transaction/list/item/Unknown.vue'

const compMap: Record<TransactionSignature, any> = {
  approve: Approve,
  send: Send,
  receive: Receive,
  swap: Swap,
}

const transactionStore = useTransactionStore()
const panels = $computed(() => {
  if (transactionStore.transactionItems) {
    const _panels: { date: DateString; items: TransactionItem[] }[] = []
    let prevDate: DateString | undefined
    transactionStore.transactionItems.forEach((item) => {
      if (item.date && item.date !== prevDate) {
        _panels.push({
          date: item.date,
          items: [],
        })
        prevDate = item.date
      }
      _panels[_panels.length - 1].items.push(item)
    })
    return _panels
  }
  return undefined
})
</script>

<template>
  <div v-if="panels">
    <div v-if="panels.length" grid gap-2 md:gap-4>
      <div
        v-for="panel in panels"
        :key="panel.date"
        panel pb-1 box-border
      >
        <div mb-2 md:mb-4 text-sm text-faint font-bold leading-none>
          {{ displayDate(new Date(panel.date)) }}
        </div>
        <div
          v-for="item in panel.items"
          :key="item.transaction.hash"
        >
          <component
            :is="item.type ? compMap[item.type as TransactionSignature] : Unknown"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div v-else panel>
      <h2 panel-title mb-2 md:mb-4>
        History
      </h2>
      <p m-0 mb-2 text-dim italic>
        No transactions yet...
      </p>
    </div>
  </div>
  <div v-else panel>
    <Loading />
  </div>
</template>
