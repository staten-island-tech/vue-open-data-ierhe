<template>
    <div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const TData = ref([])
async function getData(){
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    const data = await response.json()
    stuff.value = data.results
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>

</style>