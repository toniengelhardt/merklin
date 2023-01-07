<script setup lang="ts">
import process from 'process'
import EventEmitter from 'events'
import { Buffer } from 'buffer'
import { watchAccount, watchNetwork } from '@wagmi/core'

// Fix for WalletConnect issue.
// https://stackoverflow.com/a/72978659/1384972
window.Buffer = Buffer
window.process = process
// @ts-expect-error EventEmitter is not defined on the window object.
window.EventEmitter = EventEmitter
window.global = window

const intervals: ReturnType<typeof useIntervalFn>[] = []

const ui = useUIStore()
const addressStore = useAddressStore()
const wallet = useWalletStore()
const { updateNetworkData } = useNetworkStore()
const { updatePriceData } = usePriceStore()
const { loadTransactions } = useTransactionStore()

function setMobile() {
  // The timeout is necessary to make it work correctly.
  // Without the timeout the size will be determined before the resize is
  // complete e.g. when switching between mobile/desktop in Chrome dev tools.
  // Note: check if the trailing flag could be used instead:
  // https://github.com/vueuse/vueuse/blob/main/packages/shared/useThrottleFn/index.ts
  setTimeout(() => ui.mobile = window.innerWidth < 1024, 15)
}

function startDataFeeds() {
  if (!intervals.length) {
    // Init the intervals if they don't exist yet.
    intervals.push(useIntervalFn(updateNetworkData, 30 * 1000, { immediateCallback: true })) // 30s interval
    intervals.push(useIntervalFn(updatePriceData, 60 * 1000, { immediateCallback: true })) // 1m interval
  } else {
    // Otherwise recycle them.
    intervals.forEach(interval => interval.resume())
  }
}

function pauseDataFeeds() {
  intervals.forEach(interval => interval.pause())
}

/**
 * Called when the tab changes visibility.
 */
function onVisibilityChange() {
  // Pause data feeds when the tab is not visible to save requests.
  if (document.visibilityState === 'visible') {
    startDataFeeds()
  } else {
    pauseDataFeeds()
  }
}

/**
 * Called when either the account or the network changes.
 */
function onAddressChange() {
  if (wallet.address && wallet.networkName) {
    loadTransactions()
  }
}

onMounted(() => {
  setMobile()
  startDataFeeds()
  loadTransactions()
  useEventListener(window.visualViewport, 'resize', useThrottleFn(() => setMobile(), 100))
  useEventListener(window.document, 'visibilitychange', onVisibilityChange)
})

watchAccount((account) => {
  console.log('Account changed:', account.address)
  wallet.account = account
  onAddressChange()
})
watchNetwork((network) => {
  console.log('Network changed:', network.chain?.network, network.chain?.name)
  wallet.network = network
  onAddressChange()
})
</script>

<template>
  <div
    class="no-translate"
    :class="{ obscure: ui.obscure }"
    relative bg-base
  >
    <div
      class="bg-gradient"
      absolute top-0 left-0 bottom-0 right-0 z-0
    />
    <div
      class="container"
      relative flex flex-col md:flex-row
      max-w-100vw overflow-x-hidden text-base z-1
    >
      <div v-if="ui.mobile" h-16>
        <MobileHeader />
      </div>
      <div v-else flex flex-col w-70 bg-surface>
        <AppMenu />
      </div>
      <main flex-1 flex flex-col>
        <ActionBar v-if="!ui.mobile" />
        <div
          class="content"
          flex-1 flex items-start overflow-scroll box-border
        >
          <NuxtPage />
        </div>
      </main>
      <div v-if="ui.mobile" h-16>
        <MobileNavigation />
      </div>
    </div>
    <teleport to="body">
      <AddressDialog v-model="ui.addressDialogOpen" />
    </teleport>
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
.container {
  height: 100vh;
  height: 100svh;
  max-height: 100vh;
  max-height: 100svh;
}
@media (max-width: 639px) {
  .content {
    max-height: calc(100svh - 7rem);
  }
  /* Hack for padding bug. */
  .page:before,
  .page:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
  }
}
</style>
