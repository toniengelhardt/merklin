<script setup lang="ts">
const { provider, signer } = await useProvider()
console.log('Provider:', provider)
console.log('Signer:', signer)
</script>

<template>
  <div class="no-translate" relative bg-base>
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div relative flex flex-col min-h-100vh text-base z-1>
      <Header />
      <main flex-1 flex justify-center items-center>
        <div w-full max-w-screen-md>
          <div panel flex justify-center items-center h-48 text-2rem font-mono>
            gm
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
