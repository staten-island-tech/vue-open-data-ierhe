<template>
    <BarChart />
</template>

<script setup>

import BarChart from '@/components/BarChart.vue';
import { ref, onMounted } from 'vue';

const TData = ref([])
async function getData(){
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/5vi6-xdpy.json')
    const data = await response.json()
    TData.value = data
    
  } catch (error) {
    console.log(error)
  }
}
onMounted(()=> {
  getData()
})

</script>

<style scoped>

</style>