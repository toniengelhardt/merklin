<template>
  <div relative bg-base>
    <div class="bg-gradient" absolute top-0 left-0 bottom-0 right-0 z-0 />
    <div relative flex flex-col min-h-100vh text-base z-1>
      <Header />
      <main flex-1 p4>
        Let's go...
      </main>
      <Footer />
    </div>
  </div>
</template>

<style lang="pcss">
html,
body {
  margin: 0;
  padding: 0;
  font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,
    Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,
    Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  overscroll-behavior: none;
}

.bg-gradient {
  background: radial-gradient(100% 100% at 50% 5%, rgba(65, 184, 131, 0.2) 0%, rgba(65, 184, 131, 0.05) 52.6%, rgba(0, 0, 0, 0) 100%);
}
</style>
