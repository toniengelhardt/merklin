import { defineNuxtPlugin } from '#app'
import { Chart, registerables } from 'chart.js'
import chartjsPluginAnnotation from 'chartjs-plugin-annotation'
import 'chartjs-adapter-date-fns'
import { Bar, Doughnut, Line } from 'vue-chartjs'


export default defineNuxtPlugin(nuxtApp => {
  Chart.register(
    ...registerables,
    chartjsPluginAnnotation,
  )
  nuxtApp.vueApp.component('BarChart', Bar)
  nuxtApp.vueApp.component('DoughnutChart', Doughnut)
  nuxtApp.vueApp.component('LineChart', Line)
})
