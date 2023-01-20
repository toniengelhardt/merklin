<script setup lang="ts">
const networkStore = useNetworkStore()
</script>

<template>
  <div v-if="networkStore">
    <div table table-auto w-full text-sm text-center>
      <div table-header-group text-dim>
        <div table-row>
          <div table-cell>
            <div flex w-full>
              <div w-6 border-1>
                <Icon name="network" />
              </div>
              <div ml-6px text-left lt-md:hidden>
                Name
              </div>
            </div>
          </div>
          <div table-cell lt-md:hidden w-30>
            <Icon name="block" />
          </div>
          <div table-cell w-25>
            <Icon name="gas" /> <small>(gwei)</small>
          </div>
          <div table-cell w-20>
            {{ useCurrency().symbol }}/tx
          </div>
          <div table-cell w-20>
            tx/s
          </div>
          <div table-cell w-8>
            <Icon name="ph:plugs-bold" />
          </div>
        </div>
      </div>
      <div
        v-for="(network, idx) in networkList"
        :key="idx"
        table-row text-sm text-center border-separate border-2
      >
        <div table-cell pt-1>
          <div flex items-center>
            <div flex-center w-6 h-6 rounded-full bg-element>
              <Icon :name="network.icon" />
            </div>
            <div lt-md:hidden ml-2 text-size-base>
              {{ network.label }}
            </div>
          </div>
        </div>
        <div table-cell lt-md:hidden>
          {{ useBlockNumber(network.name, '?').value }}
        </div>
        <div table-cell>
          {{ useGasPriceFormatted(network.name, '?', false).value }}
        </div>
        <div table-cell nowrap>
          {{ useTransactionCostFormatted(network.name, '?').value }}
        </div>
        <div table-cell>
          {{ networkStore[network.name].tps ? networkStore[network.name].tps![24] : '?' }}
        </div>
        <div table-cell>
          <div
            :class="networkStore[network.name].status === 'connected' ? 'bg-green-500' : 'bg-red-500'"
            class="w-1.5 h-1.5"
            inline-block rounded-full
          />
        </div>
      </div>
    </div>
  </div>
</template>
