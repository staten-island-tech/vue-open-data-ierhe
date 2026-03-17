<template>
    <div class="container">
      <DataCard v-for="(Dat, index) in TData" :key="Dat.business_name"
      :TData="Dat" :id="index + 1"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataCard from '@/components/DataCard.vue';
const TData = ref([])
async function getData(){
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/5vi6-xdpy.json')
    const data = await response.json()
    TData.value = data
    console.log("works")

  } catch (error) {
    console.log(error)
  }
}

onMounted(()=> {
  getData()
})

</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>