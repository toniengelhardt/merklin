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
  height: undefined,
  chartId: 'bar-chart',
  cssClasses: '',
  styles: () => {},
  plugins: () => {},
})

const ui = useUIStore()

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
const mergedOptions = $computed(() => Object.assign(defaultOptions, props.chartOptions))

const defaultPlugins: any[] = []
const mergedPlugins = $computed(() => [...defaultPlugins, ...props.plugins])

const mergedHeight = $computed(() => props.height || (ui.mobile ? '8rem' : '12rem'))
</script>

<template>
  <div relative flex w-full :style="{ width, height: mergedHeight }">
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
