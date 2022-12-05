<script setup lang="ts">
defineProps<{
  item: TransactionItem
}>()
</script>

<template>
  <TransactionItem :item="item">
    <template #icon>
      <div w-full flex justify-center items-center bg-orange-500:10 rounded-full>
        <Icon name="send" text-orange-500 />
      </div>
    </template>
    <template #label>
      Send
    </template>
    <template #details>
      <div flex w-full>
        <div flex-1 flex items-center>
          <TokenValueDisplay
            network="ethereum"
            token="eth"
            :value="item.transaction.value"
            :multiplier="-1"
          />
        </div>
        <div flex flex-col items-start w-36>
          <div text-xs text-dim mb-1>
            to:
          </div>
          <WalletAddress :address="item.transaction.to" />
        </div>
      </div>
    </template>
  </TransactionItem>
</template>
