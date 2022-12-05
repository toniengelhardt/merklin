<template>
  <div page>
    <div col-span-4 panel flex justify-center items-center>
      <div text-center>
        <p my-0 text-2rem font-mono>
          <span mr-2>gm</span>🌴
        </p>
        <p text-sm text-dim>
          Check out transactions for now!
        </p>
      </div>
    </div>
    <div col-span-8 panel>
      <h2 panel-title>
        Performance
      </h2>
      <div italic text-dim>
        Portfolio value over time in USD/EUR/...
      </div>
    </div>
    <div col-span-4 panel>
      <PriceFeed />
    </div>
    <div col-span-8 panel>
      <h2 panel-title>
        Gas bill
      </h2>
      <div italic text-dim>
        Commulative gas chart...
      </div>
    </div>
    <div col-span-4 panel />
    <div col-span-4 panel />
    <div col-span-4 panel />
  </div>
</template>
