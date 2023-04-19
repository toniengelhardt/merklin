<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import { theme } from '@unocss/preset-mini'
import { normalizeDate } from '~/utils/dates'

const props = withDefaults(defineProps<{
  items: TransactionItem[]
  timeframe?: ChartTimeframeOption
}>(), {
  timeframe: 'all',
})

const colors: Colors = theme.colors!

const colorMode = useColorMode()
const ui = useUIStore()

const histData = computed(() => generateHistograms(props.items))
const maxVal = computed(() => (
  histData.value
    ? Math.max(Math.abs(Math.min(...histData.value.sent)), Math.max(...histData.value.received), 1)
    : undefined
))

const chartData = computed<ChartData<any> | undefined>(() => (
  histData.value
    ? ({
        labels: histData.value.labels,
        datasets: [
          {
            label: 'Received',
            type: 'bar',
            data: histData.value.received,
            backgroundColor: colorMode.value === 'light' ? (colors.green as Colors)['500'] : (colors.green as Colors)['500'],
            stack: 'bars',
            order: 2,
          },
          {
            label: 'Sent',
            type: 'bar',
            data: histData.value.sent,
            backgroundColor: colorMode.value === 'light' ? (colors.orange as Colors)['500'] : (colors.orange as Colors)['500'],
            stack: 'bars',
            order: 2,
          },
        ],
      })
    : undefined
))

const chartOptions = computed<ChartOptions<any> | undefined>(() => (
  (histData.value && maxVal.value)
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
              color: 'grey',
              maxRotation: 0,
            },
            grid: {
              tickColor: colorMode.value === 'light' ? (theme.colors as any).zinc[200] : (theme.colors as any).zinc[800],
              color: 'rgba(0,0,0,0)',
            },
          },
          y: {
            min: -maxVal.value,
            max: maxVal.value,
            border: {
              display: false,
            },
            ticks: {
              display: false,
              precision: 0,
              color: 'grey',
            },
            grid: {
              tickColor: 'transparent',
              tickLength: 0,
              color: (item: any) => {
                if (item.tick.value === 0) {
                  return colorMode.value === 'light' ? (theme.colors as any).zinc[400] : (theme.colors as any).zinc[500]
                }
                return colorMode.value === 'light' ? (theme.colors as any).zinc[200] : (theme.colors as any).zinc[800]
              },
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
            callbacks: {
              title: (ctx: any) => {
                return ctx[0].label.split(', ').slice(0, 2).join(', ')
              },
              label: (ctx: any) => {
                const label = ctx.datasetIndex === 0 ? ' tx in' : ' tx out'
                const value = Math.abs(ctx.parsed.y)
                return `${value}${label}`
              },
            },
          },
        },
      })
    : undefined
))

function generateHistograms(items: TransactionItem[]): {
  labels: Date[]
  sent: number[]
  received: number[]
} {
  const now = new Date()
  let firstItemWithTimestamp
  let numDays
  for (let i = 0; i < items.length; i++) {
    if (items[i].timestamp) {
      firstItemWithTimestamp = items[i]
      break
    }
  }
  switch (props.timeframe) {
    case '30d':
      numDays = 30
      break
    case '3m':
      numDays = 90
      break
    case '1y':
      numDays = 365
      break
    default:
      if (firstItemWithTimestamp) {
        numDays = Math.ceil((now.getTime() - firstItemWithTimestamp!.timestamp.getTime()) / (1000 * 60 * 60 * 24))
      } else {
        numDays = 365
      }
  }
  const labels: Date[] = []
  const sent: number[] = []
  const received: number[] = []
  const today = normalizeDate(new Date())
  const minDate = normalizeDate(new Date())
  minDate.setDate(minDate.getDate() - numDays)
  // Init value dict to generate histogram.
  const valueDict: { [key: string]: { [key: string]: number } } = {}
  const date = today
  for (let i = 0; i < numDays; i++) {
    labels.unshift(new Date(date.getTime()))
    valueDict[date.toISOString()] = {
      sent: 0,
      received: 0,
    }
    date.setDate(date.getDate() - 1)
  }
  items.forEach((item) => {
    if (item.timestamp) {
      // Note: it's important to truly clone the date object here since the
      // normalizeDate function mutates the item in place.
      const nts = new Date(item.timestamp.valueOf())
      normalizeDate(nts)
      const _timestamp = nts.toISOString()
      if (valueDict[_timestamp]) {
        if (item.type === 'send') {
          valueDict[_timestamp].sent -= 1
        }
        else if (item.type === 'receive') {
          valueDict[_timestamp].received += 1
        }
      }
    }
  })
  labels.forEach((label) => {
    const sentCount = valueDict[label.toISOString()].sent
    const receivedCount = valueDict[label.toISOString()].received
    sent.push(sentCount)
    received.push(receivedCount)
  })
  return {
    labels,
    sent,
    received,
  }
}
</script>

<template>
  <div class="chart-container relative">
    <ChartBar
      v-if="(chartData && chartOptions)"
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
  </div>
</template>
