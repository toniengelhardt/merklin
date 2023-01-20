<template>
  <div class="page">
    <div col-span-12 md:col-span-3>
      <div col-span-1 flex flex-row md:flex-col h-full>
        <div class="flex-1/2 md:flex-1" panel flex-center flex-col lt-md:min-h20>
          <h2 w-full m-0 text-3xl text-center font-black>
            <!-- <span inline-block ml-12>gm</span> -->
            <span inline-block w-12 class="text-center text-1.5rem md:text-1.8rem">🔮</span>
          </h2>
          <div md:mt-2 text-sm text-center leading-tight>
            sim sala gm
          </div>
        </div>
        <div class="flex-1/2 lt-md:ml-2 md:(flex-1 mt-4)" panel flex-center flex-col lt-md:min-h20>
          <InsightPanelTotal />
        </div>
      </div>
    </div>
    <div col-span-12 md:col-span-9>
      <InsightPanelPerformance />
    </div>
    <div col-span-12 md:col-span-8>
      <TransactionPanelActivity />
    </div>
    <div col-span-12 md:col-span-4>
      <TransactionPanelAddresses />
    </div>
    <div col-span-12 md:col-span-4 panel>
      <PriceFeed />
    </div>
    <div col-span-12 md:col-span-8>
      <InsightPanelGasFees />
    </div>
    <!-- <div col-span-12 md:col-span-4 panel h-61>
      <h2 panel-title>
        Predictions
      </h2>
      <div>
        Follow oracles on prediction markets.
      </div>
    </div> -->
    <div col-span-12 md:col-span-6 panel min-h-61>
      <h2 panel-title mb-2 md:mb-4>
        Network status
      </h2>
      <div>
        <NetworkStatusTable />
      </div>
    </div>
    <div col-span-12 md:col-span-3 panel>
      <h2 panel-title mb-2 md:mb-4>
        D<span font-mono>0x</span>ing score<span ml-2 text-base>🧟</span>
      </h2>
      <div>
        Pseudonymity compromised?
      </div>
      <div mt-2 text-dim italic>
        Coming soon...
      </div>
    </div>
    <div col-span-12 md:col-span-3 panel>
      <h2 panel-title mb-2 md:mb-4>
        Airdrop detection<span ml-2 text-base>🧞‍♂️</span>
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
      <div mt-2 text-dim italic>
        Coming soon...
      </div>
    </div>
  </div>
</template>
