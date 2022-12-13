<script setup lang="ts">
import { theme } from '@unocss/preset-mini'
import type { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js'
import { utils } from 'ethers'

const props = withDefaults(defineProps<{
  unit?: EtherUnit
}>(), {
  unit: 'ether',
})

const colors = theme.colors!

const colorMode = useColorMode()
const currency = useCurrency()
const transactionStore = useTransactionStore()

const items = $computed(() => transactionStore.transactionItems)
const data = $computed(() => items ? generateData(items) : undefined)

const currencyMin = $computed(() => useEthToCurrency(data ? data[0].y : undefined))
const currencyMax = $computed(() => useEthToCurrency(data ? data[data.length - 1].y : undefined))

const lineColors = $computed(() => (
  colorMode.value === 'light'
    ? [(colors.purple as Colors)['500'], (colors.blue as Colors)['500'], (colors.sky as Colors)['500']]
    : [(colors.purple as Colors)['500'], (colors.blue as Colors)['500'], (colors.sky as Colors)['500']]
))
const fillColors = $computed(() => (
  colorMode.value === 'light'
    ? [(colors.purple as Colors)['200'], (colors.blue as Colors)['200'], (colors.sky as Colors)['200']]
    : [(colors.purple as Colors)['800'], (colors.blue as Colors)['800'], (colors.sky as Colors)['800']]
))

type ChartDataType = ChartData<any, (number | ScatterDataPoint | null)[], unknown>
const chartData = $computed<ChartDataType | undefined>(() => (
  data && currencyMin && currencyMax
    ? ({
        datasets: [
          {
            label: 'Ethereum (L1)',
            data,
            borderWidth: 2,
            borderColor: (context: any) => generateChartGradient(context, lineColors),
            backgroundColor: 'transparent',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            fill: {
              target: 'origin',
              above: (context: any) => generateChartGradient(context, fillColors),
            },
            stepped: true,
          },
        ],
      })
    : undefined
))

const chartOptions = $computed<ChartOptions<any> | undefined>(() => (
  data
    ? ({
        layout: {
          padding: 0,
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          x: {
            stacked: true,
            type: 'time',
            time: {
              unit: 'month',
              min: data[0].x,
              max: data[data.length - 1].x,
              displayFormats: {
                day: 'MMM',
              },
            },
            ticks: {
              color: (colors.zinc as Colors)[500],
              maxRotation: 0,
              callback: formatTicksMonthly,
            },
            grid: {
              display: false,
              drawBorder: false,
              tickLength: 0,
              color: colorMode.value === 'light' ? 'rgba(0,0,0,.05)' : 'rgba(255,255,255,.05)',
            },
          },
          y: {
            title: {
              display: true,
              text: 'ETH Ξ',
            },
            stacked: false,
            min: data[0].y,
            max: data[data.length - 1].y,
            ticks: {
              color: (colors.zinc as Colors)[500],
            },
            grid: {
              tickLength: 0,
              color: colorMode.value === 'light' ? (colors.zinc as Colors)[200] : (colors.zinc as Colors)[800],
            },
          },
          currency: {
            title: {
              display: true,
              text: `${currency.ticker} ${currency.symbol}`,
            },
            position: 'right',
            min: currencyMin,
            max: currencyMax,
            ticks: {
              color: (colors.zinc as Colors)[500],
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
        },
      })
    : undefined
))

function generateData(items: TransactionItem[]) {
  let cum = 0
  return items.reduce((list: { x: DatetimeString; y: number }[], item) => {
    if (item.timestamp) {
      cum += +utils.formatUnits(item.transaction.gasLimit * item.transaction.gasPrice, props.unit)
      list.push({
        x: item.timestamp.toISOString(),
        y: cum,
      })
    }
    return list
  }, [])
}
</script>

<template>
  <div v-if="(chartData && chartOptions)">
    <ChartLine :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>
