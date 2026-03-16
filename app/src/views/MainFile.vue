<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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