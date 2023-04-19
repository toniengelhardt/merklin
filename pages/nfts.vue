<script setup lang="ts">
defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div class="page">
    <PanelUnderConstruction col-span-12 md:col-span-3 md:h-50 />
    <div col-span-12 md:col-span-9 panel md:h-50>
      <h2 panel-title>
        Concept
      </h2>
      <p text-dim>
        Detailed analytics for
        <NuxtLink
          to="https://en.wikipedia.org/wiki/Non-fungible_token"
          title="Non-fungible token on Wikipedia"
          class="inline-block text-base underline"
        >
          NFTs
        </NuxtLink> and
        <NuxtLink
          to="https://vitalik.ca/general/2022/01/26/soulbound.html"
          title="Soulbound on Vitalik Buterin's blog"
          class="inline-block text-base underline"
        >
          SBTs
        </NuxtLink> (soulbound tokens), including storage location, mutability, etc.
      </p>
      <p text-dim>
        Inspiration:
        <NuxtLink
          to="https://looksmutable.com/"
          title="LooksMutable project"
          class="inline-block text-base underline"
        >
          LooksMutable
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
