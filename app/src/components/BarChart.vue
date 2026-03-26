<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script >
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Staten Island', 'Brooklyn', 'Manhattan'], //boroughs
        datasets: [ { data: [800, 200, 400] } ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}

import { ref, onMounted } from 'vue';

const TData = ref([])
async function getData(){
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/5vi6-xdpy.json')
    const data = await response.json()
    TData.value = data
    x.value = data.borough

    
  } catch (error) {
    console.log(error)
  }
}

const x = ref([])


onMounted(()=> {
  getData()
})

</script>

<style scoped>

</style>