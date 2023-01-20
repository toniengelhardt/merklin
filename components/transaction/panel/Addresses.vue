<script setup lang="ts">
const addressStore = useAddressStore()
const transactionStore = useTransactionStore()
const items = $computed(() => transactionStore.transactionItems)

const addressCounts = $computed(() => {
  if (items) {
    const inDict = {}
    let inCount = 0
    const outDict = {}
    let outCount = 0
    items.forEach((item) => {
      if (item.type === 'send' && item.transaction.to) {
        dictIncrement(outDict, item.transaction.to)
        outCount += 1
      }
      else if (item.type === 'receive') {
        dictIncrement(inDict, item.transaction.from)
        inCount += 1
      }
    })
    const uniqueIn = Object.keys(inDict).length
    const uniqueOut = Object.keys(outDict).length
    return {
      in: uniqueIn,
      inRepRate: 1 - uniqueIn / inCount,
      out: uniqueOut,
      outRepRate: 1 - uniqueOut / outCount,
    }
  }
  return {
    in: undefined,
    inRepRate: 0,
    out: undefined,
    outRepRate: 0,
  }
})
</script>

<template>
  <div panel flex flex-col md:h-61>
    <h2 panel-title flex justify-between mb-2>
      <span>Addresses</span>
      <!-- <span class="mx-1 text-1.5rem text-base">🧜🏻‍♀️</span> -->
    </h2>
    <template v-if="addressStore.activeAddresses.length">
      <template v-if="items?.length">
        <div flex-1 flex justify-center items-center lt-md:mb-2>
          <div flex-1 />
          <div flex flex-col items-center w-18>
            <div flex-center h-10 mt-2 text-xs text-dim>
              Incoming
            </div>
            <div flex-center w-12 h-12 bg-sky-500:10 text-sky-500 font-bold rounded-xl>
              {{ addressCounts.in }}
            </div>
            <div flex-center flex-col h-12 text-xs>
              <div text-dim>
                Rep. rate
              </div>
              <div>
                {{ formatPercent(addressCounts.inRepRate) }}
              </div>
            </div>
          </div>
          <div flex-1>
            <div h-1 bg-action ml-1 />
          </div>
          <div flex justify-center items-center w-18 h-18 bg-element rounded-2xl>
            <Icon name="wallet" size="2rem" />
          </div>
          <div flex-1>
            <div h-1 bg-action mr-1 />
          </div>
          <div flex flex-col items-center w-18>
            <div flex-center h-10 mt-2 text-xs text-dim>
              Outgoing
            </div>
            <div flex-center w-12 h-12 bg-pink-300:10 text-pink-300 font-bold rounded-xl>
              {{ addressCounts.out }}
            </div>
            <div flex-center flex-col h-12 text-xs>
              <div text-dim>
                Rep. rate
              </div>
              <div>
                {{ formatPercent(addressCounts.inRepRate) }}
              </div>
            </div>
          </div>
          <div flex-1 />
        </div>
        <div lt-md:hidden h-7 flex-center text-sm text-dim />
      </template>
      <div v-else flex-1 flex-center>
        <AppNoTransactions v-if="items" />
      </div>
    </template>
    <div v-else flex-1 flex-center>
      <AppNoAddress />
    </div>
  </div>
</template>
