<script setup lang="ts">
const networkStore = useNetworkStore()
</script>

<template>
  <div v-if="networkStore">
    <table border-0>
      <tr>
        <th width="100%">
          <div flex>
            <div w-6 border-1>
              <Icon name="network" />
            </div>
            <div ml-6px text-left lt-md:hidden>
              Name
            </div>
          </div>
        </th>
        <th lt-md:hidden>
          <div w-24>
            <Icon name="block" />
          </div>
        </th>
        <th>
          <div w-20>
            <Icon name="gas" /> <small>(gwei)</small>
          </div>
        </th>
        <th>
          <div w-12>
            {{ useCurrency().symbol }}/tx
          </div>
        </th>
        <th>
          <div w-20>
            tx/s
          </div>
        </th>
        <th>
          <div w-8>
            <Icon name="ph:plugs-bold" />
          </div>
        </th>
      </tr>
      <tr v-for="(network, idx) in networkList" :key="idx">
        <td flex items-center>
          <div flex-center w-6 h-6 rounded-full bg-element>
            <Icon :name="network.icon" />
          </div>
          <div lt-md:hidden ml-2 text-size-base>
            {{ network.label }}
          </div>
        </td>
        <td lt-md:hidden>
          {{ useBlockNumber(network.name, '?').value }}
        </td>
        <td>{{ useGasPriceFormatted(network.name, '?', false).value }}</td>
        <td nowrap>
          {{ useTransactionCostFormatted(network.name, '?').value }}
        </td>
        <td>{{ networkStore[network.name].tps ? networkStore[network.name].tps![24] : '?' }}</td>
        <td>
          <div
            :class="networkStore[network.name].status === 'connected' ? 'bg-green-500' : 'bg-red-500'"
            class="w-1.5 h-1.5"
            inline-block rounded-full
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
th {
  @apply pb-1 text-sm text-dim font-normal;
}
td {
  @apply py-0.5 text-sm text-center;
}
</style>
