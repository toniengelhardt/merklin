<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js'

withDefaults(defineProps<{
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
  height: '12rem',
  chartId: 'line-chart',
  cssClasses: '',
  styles: () => {},
  plugins: () => {},
})
</script>

<template>
  <div relative flex w-full :style="{ width, height }">
    <LineChart
      :chart-id="chartId"
      :data="chartData"
      :options="chartOptions"
      :class="cssClasses"
      :style="styles"
      :plugins="[]"
      w-full
      h-full
    />
  </div>
</template>
