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
  <div panel flex flex-col>
    <h2 panel-title>
      Addresses
    </h2>
    <div flex-1 flex justify-center items-center>
      <div flex-1 />
      <div flex flex-col items-center w-18>
        <div flex-center h-10 mt-2 text-xs text-dim>
          Incoming
        </div>
        <div flex-center w-12 h-12 bg-green-500:10 text-green-500 rounded-xl>
          {{ addressCounts.in }}
        </div>
        <div flex-center flex-col h-12 text-xs>
          <div text-dim>
            Rep. rate
          </div>
          <div>
            0%
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
        <div flex-center w-12 h-12 bg-orange-500:10 text-orange-500 rounded-xl>
          {{ addressCounts.out }}
        </div>
        <div flex-center flex-col h-12 text-xs>
          <div text-dim>
            Rep. rate
          </div>
          <div>
            0%
          </div>
        </div>
      </div>
      <div flex-1 />
    </div>
    <div h-7 flex-center text-sm text-dim />
  </div>
</template>
