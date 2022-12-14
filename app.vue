<script setup lang="ts">
import { useAccount } from 'vagmi'

const uiStore = useUIStore()
const accountStore = useAccountStore()
const networkStore = useNetworkStore()
const priceStore = usePriceStore()
const transactionStore = useTransactionStore()

function setMobile() {
  // The timeout is necessary to make it work correctly.
  // Without the timeout the size will be determined before the resize is
  // complete e.g. when switching between mobile/desktop in Chrome dev tools.
  setTimeout(() => uiStore.mobile = window.innerWidth < 1024, 15)
}

function initUI() {
  setMobile()
  useEventListener(window.visualViewport, 'resize', useThrottleFn(() => setMobile(), 100))
}

function initDataFeeds() {
  // 60s interval
  useEagerIntervalFn(() => {
    console.log('Updating prices (60s interval)')
    priceStore.updateEthUsd()
    priceStore.updateMaticUsd()
    priceStore.updateOpUsd()
    priceStore.updateXdaiUsd()
  }, 60 * 1000)
  // 10s interval
  useEagerIntervalFn(() => {
    networkStore.updateBlocknumber()
    networkStore.updateGasPrice()
  }, 10 * 1000)
}

const { address, isConnecting, isDisconnected } = useAccount()

console.log('XXX', address, isConnecting, isDisconnected)

onMounted(() => {
  initUI()
  initDataFeeds()
  // Load account first, then trigger actions that require the account.
  accountStore
    .getAccount()
    .then(() => {
      transactionStore.loadTransactions()
    })
})
</script>

<template>
  <div
    class="no-translate"
    :class="{ obscure: uiStore.obscure }"
    relative bg-base
  >
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div
      relative flex flex-col md:flex-row h-100vh max-h-100vh max-h-100dvh
      max-w-100vw overflow-x-hidden text-base z-1
    >
      <div v-if="uiStore.mobile" flex>
        <MobileHeader h-16 />
      </div>
      <div v-else flex flex-col w-70 bg-surface>
        <AppMenu />
      </div>
      <main flex-1 flex flex-col>
        <ActionBar v-if="!uiStore.mobile" />
        <div flex-1 flex overflow-scroll>
          <!-- <NuxtPage v-if="accountStore.activeAccount" />
          <Loading v-else /> -->
          <NuxtPage v-if="address" />
          <Connect v-else />
        </div>
      </main>
      <div v-if="uiStore.mobile" h-16>
        <MobileNavigation />
      </div>
    </div>
  </div>
</template>

<style lang="pcss">
.bg-gradient {
  --gr-main: 65, 184, 131;
  --gr-left: 217, 70, 239;
  --gr-right: 14, 165, 233;
  background:
    radial-gradient(100% 100% at 65% 5%, rgba(var(--gr-main), 0.35) 0%, rgba(var(--gr-main), 0.1) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(100% 100% at 100% 100%, rgba(var(--gr-left), 0.15) 0%, rgba(var(--gr-left), 0.015) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(200% 200% at 0% 100%, rgba(var(--gr-right), 0.25) 0%, rgba(var(--gr-right), 0.025) 52.6%, rgba(0, 0, 0, 0) 100%);
}
</style>
