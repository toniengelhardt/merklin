<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import { theme } from '@unocss/preset-mini'
import { normalizeDate } from '~/utils/dates'

const props = defineProps<{
  items: TransactionItem[]
}>()

const colors: Colors = theme.colors!

const colorMode = useColorMode()
const ui = useUIStore()

const histData = $computed(() => generateHistograms(props.items))
const maxVal = $computed(() => {
  return histData
    ? Math.max(Math.abs(Math.min(...histData.sent)), Math.max(...histData.received))
    : undefined
})

const lastIdx = histData.labels.length - 1

const chartData = computed<ChartData<any> | undefined>(() => (
  histData
    ? ({
        labels: histData.labels,
        datasets: [
          {
            label: 'Sent',
            type: 'bar',
            data: histData.sent,
            backgroundColor: colorMode.value === 'light' ? (colors.orange as Colors)['500'] : (colors.orange as Colors)['500'],
            stack: 'bars',
            order: 2,
          },
          {
            label: 'Received',
            type: 'bar',
            data: histData.received,
            backgroundColor: colorMode.value === 'light' ? (colors.green as Colors)['500'] : (colors.green as Colors)['500'],
            stack: 'bars',
            order: 2,
          },
        ],
      })
    : undefined
))

const chartOptions = computed<ChartOptions<any> | undefined>(() => (
  histData && maxVal
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
              min: histData.labels[0],
              max: histData.labels[lastIdx],
              displayFormats: {
                day: 'MMM',
              },
            },
            border: {
              display: false,
            },
            ticks: {
              // source: 'labels',
              color: 'grey',
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
            stacked: false,
            min: -maxVal,
            max: maxVal,
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
              drawBorder: false,
              color: (item: any) => {
                const base = colorMode.value === 'light' ? '0,0,0' : '255,255,255'
                if (item.tick.value === 0)
                  return `rgba(${base},.2)`

                return `rgba(${base},.05)`
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
          tooltips: {
            enabled: !ui.mobile,
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
  const numDays = 365

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
      normalizeDate(item.timestamp)
      const _timestamp = item.timestamp.toISOString()
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
