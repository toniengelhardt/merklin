<script setup lang="ts">
const ui = useUIStore()
const wallet = useWalletStore()
const activeNetwork = $computed(() => wallet.network?.chain ? networks[wallet.network.chain.network as keyof typeof networks] : networks.homestead)
const otherNetworks = $computed(() => networkList.filter(network => network !== activeNetwork))
</script>

<template>
  <Menu
    orientation="left"
    :toggle-icon="{ name: activeNetwork.icon, size: '1.3rem' }"
    toggle-class="btn-transparent w-10 h-10 flex-center p-0"
  >
    <!-- <template v-if="!ui.mobile" #before>
      <Icon name="dropdown" class="text-xs text-dim" mr-1.5 />
    </template> -->
    <MenuItem
      v-for="network in otherNetworks"
      :key="network.name"
      :item="{
        icon: { name: network.icon },
        label: network.label,
        title: network.label,
      }"
    />
  </Menu>
</template>
