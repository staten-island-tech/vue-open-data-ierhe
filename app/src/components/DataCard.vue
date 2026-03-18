<template>
    <router-link :to="DataPath" class="card">
        <h2>{{ props.TData.business_name }}</h2>

        <h3>{{ props.TData.borough }}</h3>
        <h3>{{ props.TData.street }}</h3>
        <h3>{{ props.TData.business_phone }}</h3>
        <h3>{{ props.id }}</h3>
    </router-link>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
    TData:{
        type: Object, 
        required: true 
    }, 
    id: {
        type:Number,
        required: true
    }
})
const DataPath = computed(() =>{
    return `/${props.TData.business_name}`
})
</script>

<style scoped>
.card {
  width: 28%;
  height: 500px;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-transform: uppercase;
}
img {
  width: 100%;
  height: 80%;
  object-fit: cover;
}
</style>