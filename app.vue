<script setup lang="ts">
import { useRabbitholeStore } from '~/stores/rabbithole'
const rhStore = useRabbitholeStore()

async function initRabbithole() {
  const { provider, signer } = await useProvider()
  console.log('Provider:', provider)
  console.log('Signer:', signer)

  const accounts: Web3Account[] = []
  const addresses = await provider.send('eth_requestAccounts', []) as Web3Address[]
  await Promise.all(addresses.map(async (address) => {
    const account: Web3Account = { address }
    account.ens = await provider.lookupAddress(address)
    if (account.ens)
      account.avatar = await provider.getAvatar(account.ens)
    accounts.push(account)
    return Promise.resolve()
  }))
  rhStore.accounts = accounts
}

onMounted(async () => initRabbithole())
</script>

<template>
  <div class="no-translate" relative bg-base>
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div relative flex flex-col min-h-100vh text-base z-1>
      <Header />
      <main flex-1 flex justify-center items-center>
        <div w-full max-w-screen-md>
          <div panel flex justify-center items-center h-48 text-3rem font-mono>
            gm 🦧
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="pcss">
.bg-gradient {
  --gr-main: 65, 184, 131;
  --gr-left: 217, 70, 239;
  --gr-right: 14, 165, 233;
  background:
    radial-gradient(100% 100% at 50% 5%, rgba(var(--gr-main), 0.25) 0%, rgba(var(--gr-main), 0.05) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(100% 100% at 100% 100%, rgba(var(--gr-left), 0.1) 0%, rgba(var(--gr-left), 0.025) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(100% 100% at 0% 100%, rgba(var(--gr-right), 0.1) 0%, rgba(var(--gr-right), 0.025) 52.6%, rgba(0, 0, 0, 0) 100%),
    radial-gradient(100% 100% at 0% 100%, rgba(var(--gr-right), 0.1) 0%, rgba(var(--gr-right), 0.025) 52.6%, rgba(0, 0, 0, 0) 100%);
}
</style>
