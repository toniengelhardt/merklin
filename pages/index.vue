<template>
  <div page>
    <div col-span-12 md:col-span-3>
      <div col-span-1 flex flex-col h-full>
        <div flex-1 panel flex-center flex-col>
          <h2 w-full m-0 text-3xl text-center font-black>
            <span inline-block ml-12>gm</span>
            <span inline-block w-12 text="center 2.2rem">🌴</span>
          </h2>
          <div mt-2 italic text-faint>
            Welcome to the jungle!
          </div>
        </div>
        <div flex-1 mt-4 panel flex-center flex-col>
          <div mb-2 text-dim italic>
            Degen Level
          </div>
          <div text-5xl font-black text-gradient-yellow-rose>
            69
          </div>
        </div>
      </div>
    </div>
    <div col-span-12 md:col-span-9>
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
    <div col-span-12 md:col-span-8>
      <InsightPanelGasFees />
    </div>
    <div col-span-12 md:col-span-4 panel h-61>
      <PriceFeed />
    </div>
    <!-- <div col-span-12 md:col-span-4 panel h-61>
      <h2 panel-title>
        Predictions
      </h2>
      <div>
        Follow oracles on prediction markets.
      </div>
    </div> -->
    <div col-span-12 md:col-span-6 panel h-61>
      <h2 panel-title>
        D<span font-mono>0x</span>ing score<span ml-3 text-base>🐍</span>
      </h2>
      <div>
        Has pseudonymity been compromised?
      </div>
    </div>
    <div col-span-12 md:col-span-6 panel h-61>
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
          earni.fi
        </NuxtLink> and
        <NuxtLink
          to="https://earndrop.io/"
          title="Earndrop airdrop detection"
          target="_blank"
          inline-block underline
        >
          earndrop.io
        </NuxtLink>.
      </div>
    </div>
  </div>
</template>
