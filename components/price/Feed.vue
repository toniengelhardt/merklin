<template>
  <div>
    <h2 mt-0 mb-4 text-faint>
      Price feed
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
