<script setup lang="ts">
const ui = useUIStore()
const wallet = useWalletStore()
const activeNetwork = $computed(() => wallet.network?.chain ? networks[wallet.network.chain.network as keyof typeof networks] : undefined)
const otherNetworks = $computed(() => networkList.filter(network => network !== activeNetwork))
</script>

<template>
  <Menu
    v-if="activeNetwork"
    :orientation="ui.mobile ? 'right' : 'left'"
    :toggle-icon="{ name: activeNetwork.icon, size: '1.4rem' }"
    :toggle-label="ui.mobile ? undefined : (activeNetwork.label || 'N/A')"
    toggle-class="btn-transparent px-4"
  >
    <template v-if="!ui.mobile" #before>
      <Icon name="dropdown" class="text-dim" mr-1.5 />
    </template>
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
