<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'
import { normalizeDate } from '~/utils/dates'

const props = defineProps<{
  items: TransactionItem[]
}>()

const histData = $computed(() => generateHistograms(props.items))
const maxVal = $computed(() => {
  if (histData) {
    const _min = Math.min(...histData.sent)
    const _max = Math.max(...histData.received)
    console.log(_min, _max)
    const x = Math.max(Math.abs(_min), _max)
    console.log(x)

    return x
  }
  return undefined
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
            backgroundColor: 'orange',
            stack: 'bars',
            order: 2,
          },
          {
            label: 'Received',
            type: 'bar',
            data: histData.received,
            backgroundColor: 'green',
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
            ticks: {
              color: 'grey',
              maxRotation: 0,
              callback: formatTicksMonthly,
            },
            grid: {
              display: false,
              borderColor: 'blue',
            },
          },
          y: {
            stacked: false,
            min: -maxVal - 1,
            max: maxVal + 1,
            ticks: {
              display: false,
              precision: 0,
              color: 'grey',
            },
            grid: {
              tickColor: 'transparent',
              // color: 'grey',
              // borderColor: 'grey',
              tickLength: 0,
              drawBorder: false,
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
          // tooltip: {
          //   enabled: true,
          //   caretSize: 0,
          //   callbacks: {
          //     title: (ctx: any) => {
          //       const [date, year, _] = ctx[0].label.split(',')
          //       return `${date}, ${year}`
          //     },
          //     label: (ctx: any) => {
          //       if (ctx.dataset.label === 'Total')
          //         return `Total: ${ctx.parsed.y}`

        //       return `${ctx.dataset.label}: ${ctx.parsed._custom.end - ctx.parsed._custom.start}`
        //     },
        //   },
        // },
        // annotation: {
        //   annotations: Object.assign(
        //     {},
        //     ...props.releases.map((release, idx) => {
        //       const pubDt = new Date(`${release.publishedAt.slice(0, 10)}T12:00:00`)
        //       return {
        //         [`release-${idx}`]: {
        //           type: 'line',
        //           mode: 'vertical',
        //           xMin: pubDt,
        //           xMax: pubDt,
        //           borderWidth: 2,
        //           borderColor: hexOpacify(releaseColor.value, colorMode.value === 'light' ? 0.4 : 0.6),
        //           drawTime: 'beforeDatasetsDraw',
        //         },
        //       }
        //     }),
        //   ),
        // },
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
    const timestamp = new Date(item.timestamp)
    normalizeDate(timestamp)
    const _timestamp = timestamp.toISOString()
    if (valueDict[_timestamp]) {
      if (item.type === 'send')
        valueDict[_timestamp].sent -= 1

      else if (item.type === 'receive')
        valueDict[_timestamp].received += 1
    }
  })

  labels.forEach((label) => {
    const sentCount = valueDict[label.toISOString()].sent
    const receivedCount = valueDict[label.toISOString()].received
    sent.push(sentCount)
    received.push(receivedCount)
  })

  // sent.reverse()
  // received.reverse()

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
