<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div page>
    <PanelUnderConstruction col-span-3 h-50 />
    <div col-span-9 panel h-50>
      <h2 panel-title>
        Concept
      </h2>
      <p text-dim>
        Airdrop detection similar to
        <NuxtLink
          to="https://earni.fi/"
          title="Earni.fi airdrop detection"
          target="_blank"
          inline-block underline
        >
          Earnify
        </NuxtLink> and
        <NuxtLink
          to="https://earndrop.io/"
          title="Earndrop airdrop detection"
          target="_blank"
          inline-block underline
        >
          Earndrop
        </NuxtLink>.
      </p>
    </div>
  </div>
</template>
