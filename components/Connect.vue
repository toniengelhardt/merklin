<script setup lang="ts">
import { connect } from '@wagmi/core'

const wallet = useWalletStore()
const connectors = useConnectors()

async function connectWallet(connectorName: keyof typeof connectors) {
  const connector = connectors[connectorName]
  await connect({ connector })
  wallet.connector = connector // use this connector to connect to more wallets.
}
</script>

<template>
  <div flex-col-center w-full p-8 pb-16 md:mr-70>
    <!-- <p>Address: {{ address }}</p>
    <p>isConnecting: {{ isConnecting }}</p>
    <p>isDisconnected: {{ isDisconnected }}</p> -->
    <div flex-center mb-6 text-xl text-dim>
      Connect your <Icon name="wallet" mx-1 /> wallet
    </div>
    <div w-full max-w-100 bg-surface p-2 rounded-3xl>
      <div
        h-28 flex-col-center rounded-2xl bg-element hover:bg-element-active
        cursor-pointer
        @click="connectWallet('metamask')"
      >
        <Icon name="metamask" size="2.5rem" my-2 />
        <div text-xl>
          MetaMask
        </div>
      </div>
      <!-- <div
        h-28 mt-2 flex-col-center rounded-2xl bg-element hover:bg-element-active
        cursor-pointer
        @click="connectWallet('walletconnect')"
      >
        <Icon name="walletconnect" size="3rem" />
        <div text-xl>
          WalletConnect
        </div>
      </div> -->
    </div>
    <div flex-col-center max-w-100 mt-6 text-xs text-dim>
      <div
        flex-center px-2 py-1 text-base rounded-md bg-element hover:bg-element-active
        cursor-pointer
        @click="connectWallet('injectedWallet')"
      >
        <!-- <Icon name="injected" /> -->
        <span ml-1>
          Injected Wallet
        </span>
      </div>
      <p m-0 mt-4>
        This project is work in progress and open-source.
      </p>
      <p m-0 mt-2 text-center>
        Wallet access is supposed to be readonly. For the sake of your funds,
        don't sign any transactions and don't grant wild-card permissions.
      </p>
    </div>
  </div>
</template>
