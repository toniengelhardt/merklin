<script setup lang="ts">
import { ChartData, ChartOptions } from 'chart.js'

const props = withDefaults(defineProps<{
  chartId?: string,
  chartData: ChartData,
  chartOptions?: ChartOptions,
  width?: number,
  height?: number,
  cssClasses?: '',
  styles?: any, // Partial<CSSStyleDeclaration>,
  plugins?: any, // Plugin<'bar'>{},
}>(), {
  chartId: 'bar-chart',
  width: 400,
  height: 400,
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
  <div relative>
    <BarChart
      :chartId="chartId"
      :chartData="chartData"
      :chartOptions="mergedOptions"
      :width="width"
      :height="height"
      :class="cssClasses"
      :style="styles"
      :plugins="[]"
    />
  </div>
</template>
