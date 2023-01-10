<template>
  <div>
    <h2 panel-title flex justify-between mb-4>
      <span>Price feed</span>
      <span class="mx-1 text-1.5rem text-base">🧞‍♂️</span>
    </h2>
    <div
      v-for="token in tokenList"
      :key="token.ticker"
      flex justify-between mb-2
    >
      <div flex>
        <TokenSymbol :name="token.name" />
      </div>
      <div flex items-center text-sm>
        <div px-2 py-2px bg-element font-bold rounded-md>
          {{ useTokenPriceFormatted(token.name).value }}
        </div>
      </div>
    </div>
  </div>
</template>
