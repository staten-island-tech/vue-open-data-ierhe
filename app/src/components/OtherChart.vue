<template>
    <Doughnut
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>

import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, DoughnutController, CategoryScale, LinearScale)


export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: ['Staten Island', 'Brooklyn', 'Manhattan'], //boroughs
        datasets: [ { data: [800, 200, 400],
          backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
        ]
        } ],

      },
      chartOptions: {
        responsive: true
      }
    }
  }
}


</script>

<style scoped>

</style>