<script setup lang="ts">
import { connect, disconnect } from '@wagmi/core'

const ui = useUIStore()
const wallet = useWalletStore()

const items = {
  addAddresses: {
    icon: { name: 'plus' },
    label: 'Add addresses',
  },
  disconnect: {
    icon: { name: 'disconnect' },
    label: 'Disconnect',
  },
}
</script>

<template>
  <Menu
    v-if="wallet.address"
    :orientation="ui.mobile ? 'right' : 'left'"
    :toggle-icon="{ name: 'wallet', size: '1.5rem' }"
    toggle-class="btn-transparent px-4"
  >
    <template #before>
      <Icon name="dropdown" class="text-dim" mr-1.5 />
    </template>
    <template #label>
      <div ml-2 flex text-sm text-faint class="text-obscure">
        0x<span mx-0.5 text-base>{{ wallet.address.slice(2, 6) }}</span>...<span class="ml-0.5" text-base>{{ wallet.address.slice(-4) }}</span>
      </div>
    </template>
    <MenuItem :item="items.addAddresses" />
    <MenuItem :item="items.disconnect" @click.prevent="disconnect()" />
  </Menu>
</template>
