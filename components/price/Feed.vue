<script setup lang="ts">
const ethUsd = await useEthPrice()
</script>

<template>
  <div>
    <h2 mt-0 mb-2 text-faint>
      Price feed
    </h2>
    <div flex justify-between mb-2>
      <div flex>
        <div flex items-center ml-2 text-xs text-dim>
          ETH/USD
        </div>
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          ${{ ethUsd }}
        </div>
      </div>
    </div>
  </div>
</template>
