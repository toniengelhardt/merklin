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
        <TokenSymbol name="eth" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          ${{ ethUsd }}
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="matic" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          ??
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="op" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          ??
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="gno" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          ??
        </div>
      </div>
    </div>
  </div>
</template>
