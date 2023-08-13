<script setup lang="ts">
import { theme } from '@unocss/preset-mini'
import type { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js'
import { formatUnits } from 'ethers'

const props = withDefaults(defineProps<{
  unit?: ChartUnitOption
  timeframe?: ChartTimeframeOption
}>(), {
  unit: 'currency',
  timeframe: 'all',
})

const colors = theme.colors!

const colorMode = useColorMode()
const ui = useUIStore()
const transactionStore = useTransactionStore()

const items = computed(() => transactionStore.transactionItems)
const data = computed(() => items.value ? generateData(items.value, props.unit) : undefined)

const fillColors = computed(() => (
  colorMode.value === 'light'
    ? [(colors.sky as Colors)['400'], (colors.blue as Colors)['400'], (colors.purple as Colors)['400']]
    : [(colors.sky as Colors)['500'], (colors.blue as Colors)['500'], (colors.purple as Colors)['600']]
))

type ChartDataType = ChartData<any, (number | ScatterDataPoint | null)[], unknown>
const chartData = computed<ChartDataType | undefined>(() => (
  data.value
    ? ({
        datasets: [
          {
            data: data.value,
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0)',
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            fill: {
              target: 'origin',
              above: (context: any) => generateChartGradient(context, fillColors.value),
            },
            tension: 0.01,
          },
        ],
      })
    : undefined
))

const chartOptions = computed<ChartOptions<any> | undefined>(() => (
  data.value
    ? ({
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          x: {
            type: 'time',
            min: useTimeframeMin(props.timeframe).value,
            max: new Date(),
            border: {
              display: false,
            },
            ticks: {
              color: (colors.zinc as Colors)[500],
              maxRotation: 0,
            },
            grid: {
              color: 'rgba(0,0,0,0)',
              tickColor: colorMode.value === 'light' ? (theme.colors as any).zinc[200] : (theme.colors as any).zinc[800],
            },
          },
          y: {
            border: {
              display: false,
            },
            ticks: {
              color: (colors.zinc as Colors)[500],
              callback: formatTicksCurrency,
            },
            grid: {
              tickColor: 'rgba(0,0,0,0)',
              color: colorMode.value === 'light' ? (colors.zinc as Colors)[200] : (colors.zinc as Colors)[800],
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          tooltip: {
            enabled: !ui.mobile,
          },
        },
      })
    : undefined
))

function generateData(transactionItems: TransactionItem[], unit: 'eth' | 'currency') {
  let cum = 0n
  const data = transactionItems.reduce((list: { x: DatetimeString; y: number }[], item) => {
    if (item.timestamp && ['send', 'receive'].includes(item.type)) {
      const val = BigInt(formatUnits(item.transaction.value.toBigInt(), 'ether'))
      cum += (item.type === 'send' ? -1n : 1n) * (unit === 'eth' ? val : (useEthToCurrency(val) || 0n))
      list.push({
        x: item.timestamp.toISOString(),
        y: Number(cum),
      })
    }
    return list
  }, [])
  data.push({
    x: new Date().toISOString(),
    y: Number(cum),
  })
  return data
}
</script>

<template>
  <div v-if="(chartData && chartOptions)">
    <ChartLine :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
