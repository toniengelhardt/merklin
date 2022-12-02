<script setup lang="ts">
// let idx = 3

const labels = $ref(['1', '2', '3'])
const data = $ref([40, 20, 12])

const chartData = $computed(() => {
  return {
    labels,
    datasets: [ { data } ]
  }
})
// onMounted(() => {
//   setInterval(() => {
//     console.log('YO');
//     idx++
//     labels.push(`${idx}`)
//     data.push(Math.floor(Math.random() * 100))
//   }, 1000);
// })
</script>

<template>
  <div page>
    <div col-span-12 panel>
      <ChartBar :chartData="chartData" />
    </div>
    <div col-span-12 panel>
      <TransactionList />
    </div>
  </div>
</template>
