<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Make sure a valid Ethereum address is passed.
    return typeof route.params.address === 'string' && reEthAddress.test(route.params.address)
  },
})

onBeforeMount(() => {
  const route = useRoute()
  const addressStore = useAddressStore()
  addressStore.selectAddress(route.params.address as string)
  navigateTo({ path: '/', query: route.query })
})
</script>

<template>
  <div>
    <!-- The page will always redirect. -->
  </div>
</template>
