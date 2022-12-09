<script setup lang="ts">
const priceStore = usePriceStore()
</script>

<template>
  <div>
    <h2 mt-0 mb-4 text-faint>
      Price feed
    </h2>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="eth" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          {{ useTokenPriceFormatted('eth').value }}
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="matic" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          {{ useTokenPriceFormatted('matic').value }}
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="op" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          {{ useTokenPriceFormatted('op').value }}
        </div>
      </div>
    </div>
    <div flex justify-between mb-2>
      <div flex>
        <TokenSymbol name="xdai" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          {{ useTokenPriceFormatted('xdai').value }}
        </div>
      </div>
    </div>
  </div>
</template>
