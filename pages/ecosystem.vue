<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div page>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="ethereum" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          Ethereum
        </div>
      </div>
      <div mt-3>
        <div>Type: L1</div>
        <div>Price: {{ useEthToCurrency(1) }}</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="optimism" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          Optimism
        </div>
      </div>
      <div mt-3>
        <div>
          Type: L2 – <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/"
            target="_blank"
            inline-block underline
          >
            Optimistic rollups
          </NuxtLink> <Icon name="external" />
        </div>
        <div>Price: ??</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="arbitrum" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          Arbitrum
        </div>
      </div>
      <div mt-3>
        <div>
          Type: L2 – <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/"
            target="_blank"
            inline-block underline
          >
            Optimistic rollups
          </NuxtLink> <Icon name="external" />
        </div>
        <div>Price: ??</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="zksync" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          zkSync
        </div>
      </div>
      <div mt-3>
        <div>
          Type: L2 – <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/zk-rollups"
            target="_blank"
            inline-block underline
          >
            Zero-knowledge rollups
          </NuxtLink> <Icon name="external" />
        </div>
        <div>Price: ??</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="polygon" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          Polygon
        </div>
      </div>
      <div mt-3>
        <div>
          Type: L2 – <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/sidechains/"
            target="_blank"
            inline-block underline
          >
            Sidechain
          </NuxtLink> <Icon name="external" />
        </div>
        <div>Price: ??</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
    <div col-span-4 panel>
      <div flex items-center>
        <div flex justify-center items-center w-12 h-12 bg-element rounded-lg>
          <Icon name="gnosis" size="1.5rem" />
        </div>
        <div flex-1 ml-3 text-2xl>
          Gnosis
        </div>
      </div>
      <div mt-3>
        <div>
          Type: L2 – <NuxtLink
            to="https://ethereum.org/en/developers/docs/scaling/sidechains/"
            target="_blank"
            inline-block underline
          >
            Sidechain
          </NuxtLink> <Icon name="external" />
        </div>
        <div>Price: ??</div>
        <div>TPS: ??</div>
        <div>Active wallet count: ??</div>
      </div>
    </div>
  </div>
</template>
