<template>
    <div>
      <DataCard v-for="(Dat, index) in TData" :key="Dat.establishment_record_dba"
      :TData="Dat" :id="index + 1"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataCard from '@/components/DataCard.vue';
const TData = ref([])
async function getData(){
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/9b9u-8989.json')
    const data = await response.json()
    TData.value = data.results
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