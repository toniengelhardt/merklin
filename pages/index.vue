<template>
  <div page>
    <div col-span-3 panel flex justify-center items-center>
      <div text-center>
        <p pt-4 m-0 text-2rem font-mono>
          <span mr-2>gm</span>🌴
        </p>
        <p text-sm text-dim>
          Let's learn and have fun!<br>
          Check out transactions for now.
        </p>
      </div>
    </div>
    <div col-span-9 panel>
      <h2 panel-title>
        Portfolio performance
      </h2>
      <div italic text-dim>
        Portfolio value over time in USD/EUR/...
      </div>
    </div>
    <div col-span-3 panel>
      <PriceFeed />
    </div>
    <div col-span-9 panel>
      <h2 panel-title>
        Gas fees
      </h2>
      <div italic text-dim>
        Commulative chart of gas fees over time...
      </div>
    </div>
    <div col-span-4 panel>
      <h2 panel-title>
        Oracle
      </h2>
      <div>
        Follow predictions on prediction markets.
      </div>
    </div>
    <div col-span-4 panel>
      <h2 panel-title>
        Airdrops
      </h2>
      <div>
        Airdrop detection similar to
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
    <div col-span-4 panel />
  </div>
</template>
