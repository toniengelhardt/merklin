<template>
  <div page>
    <div col-span-3>
      <div panel flex flex-col h-61>
        <h2 panel-title>
          gm
        </h2>
        <div flex-1 flex-center flex-col pb-7>
          <p mt-0 mb-2>
            <span class="text-2rem">🌴</span>
          </p>
          <p m-0 text-sm text-dim text-center>
            Let's learn and have fun!<br>
            Check out transactions for now.
          </p>
        </div>
      </div>
    </div>
    <div col-span-9>
      <div panel h-61>
        <h2 panel-title flex justify-between>
          <span>Portfolio performance</span>
          <span class="mx-1 text-1.5rem text-base">🦍</span>
        </h2>
        <div italic text-dim>
          Portfolio value over time in USD/EUR/...
        </div>
      </div>
    </div>
    <div col-span-3 panel h-61>
      <PriceFeed />
    </div>
    <div col-span-9>
      <InsightPanelGasFees />
    </div>
    <div col-span-4 panel h-61>
      <h2 panel-title>
        Predictions
      </h2>
      <div>
        Follow oracles on betting markets.
      </div>
    </div>
    <div col-span-4 panel h-61>
      <h2 panel-title>
        Airdrop detection
      </h2>
      <div>
        Similar to
        <NuxtLink
          to="https://earni.fi/"
          title="Earni.fi airdrop detection"
          target="_blank"
          inline-block underline
        >
          Earnify
        </NuxtLink> and
        <NuxtLink
          to="https://earndrop.io/"
          title="Earndrop airdrop detection"
          target="_blank"
          inline-block underline
        >
          Earndrop
        </NuxtLink>.
      </div>
    </div>
    <div col-span-4 panel h-61>
      <h2 panel-title>
        D<span font-mono>0x</span>ing score<span ml-3 text-base>🐍</span>
      </h2>
      <div>
        Potential exposure and security.
      </div>
    </div>
  </div>
</template>
