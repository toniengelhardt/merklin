<script setup lang="ts">
import { connect, disconnect } from '@wagmi/core'
const wallet = useWalletStore()
const items = {
  connect: {
    icon: { name: 'wallet' },
    label: 'Connect',
  },
  disconnect: {
    icon: { name: 'disconnect' },
    label: 'Disconnect',
  },
}
</script>

<template>
  <!-- <div v-if="wallet.address" btn-transparent px-2 md:px-4>
    <Icon name="dropdown" size="0.8rem" text-dim />
    <Icon name="wallet" size="1.4rem" mx-2 />
    <div self-center class="text-address">
      {{ displayAddress(wallet.address) }}
    </div>
  </div> -->
  <Menu
    toggle-class="btn-transparent"
    :toggle-icon="{ name: 'wallet', size: '1.4rem' }"
  >
    <MenuItem v-if="!wallet.connected" :item="items.connect" @click.prevent="connect({ connector: metamask })" />
    <MenuItem v-if="wallet.connected" :item="items.disconnect" @click.prevent="disconnect()" />
  </Menu>
</template>
