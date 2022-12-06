<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'

const props = withDefaults(defineProps<{
  chartId?: string
  chartData: ChartData
  chartOptions?: ChartOptions
  width?: number | string
  height?: number | string
  cssClasses?: ''
  styles?: any // Partial<CSSStyleDeclaration>,
  plugins?: any // Plugin<'bar'>{},
}>(), {
  width: '100%',
  height: '14rem',
  chartId: 'bar-chart',
  cssClasses: '',
  styles: () => {},
  plugins: () => {},
})

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
const mergedOptions = $computed(() => Object.assign(defaultOptions, props.chartOptions))

const defaultPlugins: any[] = []
const mergedPlugins = $computed(() => [...defaultPlugins, ...props.plugins])
</script>

<template>
  <div relative flex w-full :style="{ width, height }">
    <BarChart
      :chart-id="chartId"
      :data="chartData"
      :options="mergedOptions"
      :class="cssClasses"
      :style="styles"
      :plugins="[]"
      w-full
      h-full
    />
  </div>
</template>
