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
  chartId: 'line-chart',
  cssClasses: '',
  styles: () => {},
  plugins: () => {},
})

const ui = useUIStore()

const mergedHeight = computed(() => props.height || (ui.mobile ? '10rem' : '12rem'))
</script>

<template>
  <div relative flex w-full :style="{ width, height: mergedHeight }">
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
