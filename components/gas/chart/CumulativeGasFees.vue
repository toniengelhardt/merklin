<script setup lang="ts">
import { theme } from '@unocss/preset-mini'
import type { ChartData, ChartOptions, ScatterDataPoint } from 'chart.js'
import { utils as ethersUtils } from 'ethers'

const props = withDefaults(defineProps<{
  unit?: 'eth' | 'currency'
}>(), {
  unit: 'currency',
})

const colors = theme.colors!

const colorMode = useColorMode()
const ui = useUIStore()
const transactionStore = useTransactionStore()

const items = $computed(() => transactionStore.transactionItems)
const data = $computed(() => items ? generateData(items, props.unit) : undefined)

const currencyMin = $computed(() => useEthToCurrency(data?.length ? data[0].y : undefined))
const currencyMax = $computed(() => useEthToCurrency(data?.length ? data[data.length - 1].y : undefined))

// const lineColors = $computed(() => (
//   colorMode.value === 'light'
//     ? [(colors.purple as Colors)['500'], (colors.blue as Colors)['500'], (colors.sky as Colors)['500']]
//     : [(colors.purple as Colors)['500'], (colors.blue as Colors)['500'], (colors.sky as Colors)['500']]
// ))
const fillColors = $computed(() => (
  colorMode.value === 'light'
    ? [(colors.yellow as Colors)['400'], (colors.orange as Colors)['400'], (colors.rose as Colors)['400']] // orig: 200
    : [(colors.yellow as Colors)['500'], (colors.orange as Colors)['500'], (colors.rose as Colors)['600']] // orig: 800
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
            borderColor: 'rgba(0,0,0,0)', // (context: any) => generateChartGradient(context, lineColors),
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
        responsive: true,
        maintainAspectRatio: false,
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
            /* title: {
              display: true,
              text: 'ETH Ξ',
            }, */
            stacked: false,
            border: {
              display: false,
            },
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
          // currency: {
          //   title: {
          //     display: true,
          //     text: `${currency.ticker} ${currency.symbol}`,
          //   },
          //   position: 'right',
          //   min: currencyMin,
          //   max: currencyMax,
          //   ticks: {
          //     color: (colors.zinc as Colors)[500],
          //   },
          // },
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

function generateData(items: TransactionItem[], unit: 'eth' | 'currency') {
  let cum = 0
  return items.reduce((list: { x: DatetimeString; y: number }[], item) => {
    if (item.timestamp) {
      const val = +ethersUtils.formatUnits(item.transaction.gasLimit * item.transaction.gasPrice, 'ether')
      cum += unit === 'eth' ? val : (useEthToCurrency(val) || 0)
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
