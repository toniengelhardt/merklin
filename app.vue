<script setup lang="ts">
import { useRabbitholeStore } from '~/stores/rabbithole'
const rhStore = useRabbitholeStore()

async function initRabbithole() {
  const { web3Provider, web3Signer } = await useWeb3Provider()
  // console.info('web3Provider:', web3Provider)
  // console.info('web3Signer:', web3Signer)

  // Get accounts
  const accounts: Web3Account[] = []
  const addresses = await web3Provider.send('eth_requestAccounts', []) as Web3Address[]
  await Promise.all(addresses.map(async (address) => {
    const account: Web3Account = { address }
    // account.ens = await web3.lookupAddress(address)
    // if (account.ens)
    //   account.avatar = await web3.getAvatar(account.ens)
    accounts.push(account)
    return Promise.resolve()
  }))
  rhStore.accounts = accounts
  if (accounts.length)
    rhStore.account = accounts[0]
}

onMounted(() => initRabbithole())
</script>

<template>
  <div class="no-translate" relative bg-base>
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div relative flex h-100vh max-h-100vh max-h-100dvh text-base z-1>
      <div flex flex-col w-70 bg-surface>
        <AppMenu />
      </div>
      <main flex-1 flex flex-col>
        <ActionBar />
        <div flex-1 flex overflow-scroll pb-4>
          <NuxtPage />
        </div>
      </main>
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
