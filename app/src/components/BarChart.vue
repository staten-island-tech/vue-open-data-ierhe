<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, BarController, CategoryScale, LinearScale } from 'chart.js'
import { ref, onMounted, onUnmounted } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, BarController, CategoryScale, LinearScale)

export default {
  name: 'BarChart',

  setup() {
    const chartCanvas = ref(null)
    let chartInstance = null

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'NYC Data by Borough'
        },
        legend: {
          display: true
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }

    async function getData() {
      try {
        console.log('Fetching data...')
        const response = await fetch('https://data.cityofnewyork.us/resource/5vi6-xdpy.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log('Data received:', data.length, 'items')

        const counts = {}

        data.forEach(item => {
          const borough = item.borough
          if (borough) {
            counts[borough] = (counts[borough] || 0) + 1
          }
        })

        console.log('Counts:', counts)

        const labels = Object.keys(counts)
        const values = Object.values(counts)
        console.log('Labels:', labels, 'Values:', values)

        if (chartInstance) {
          chartInstance.destroy()
        }

        if (chartCanvas.value) {
          chartInstance = new ChartJS(chartCanvas.value, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Borough Count',
                  data: values,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)'
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                  ],
                  borderWidth: 1
                }
              ]
            },
            options: chartOptions
          })
          console.log('Chart instance created:', chartInstance)
        }

      } catch (error) {
        console.error('Error:', error)
      }
    }

    onMounted(() => {
      console.log('Component mounted')
      getData()
    })

    onUnmounted(() => {
      console.log('Component unmounted, destroying chart')
      if (chartInstance) {
        chartInstance.destroy()
        chartInstance = null
      }
    })

    return {
      chartCanvas
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
  margin: 20px 0;
}
</style>