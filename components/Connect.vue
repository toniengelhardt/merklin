<script setup lang="ts">
import { connect } from '@wagmi/core'
import { arbitrum, mainnet, optimism, polygon } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'

const chains = [mainnet, optimism, arbitrum, polygon]

const metamask = new MetaMaskConnector({ chains })
const walletconnect = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
})
</script>

<template>
  <div flex-col-center w-full pb-16>
    <!-- <p>Address: {{ address }}</p>
    <p>isConnecting: {{ isConnecting }}</p>
    <p>isDisconnected: {{ isDisconnected }}</p> -->
    <div flex-center mb-6 text-xl text-dim>
      Connect your wallet
    </div>
    <div w-full max-w-100 bg-surface p-2 rounded-3xl>
      <div
        h-28 flex-col-center rounded-2xl bg-element hover:bg-element-active
        cursor-pointer
        @click="connect({ connector: metamask })"
      >
        <Icon name="metamask" size="2.5rem" my-2 />
        <div text-xl>
          MetaMask
        </div>
      </div>
      <div
        h-28 mt-2 flex-col-center rounded-2xl bg-element hover:bg-element-active
        cursor-pointer
        @click="connect({ connector: walletconnect })"
      >
        <Icon name="walletconnect" size="3.5rem" />
        <div text-xl>
          WalletConnect
        </div>
      </div>
    </div>
    <div flex-col-center max-w-100 mt-6 text-xs text-dim>
      <p m-0>
        This project is work in progress and open-source.
      </p>
      <p m-0 mt-2 text-center>
        Wallet access is supposed to be readonly. For the sake of your funds,
        don't sign any transactions and don't grant wild-card permissions.
      </p>
    </div>
  </div>
</template>
