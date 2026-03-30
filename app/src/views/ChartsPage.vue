<template>
  <div class="charts-page">
    <div class="controls">
      <label for="chart-select">Select Chart Type:</label>
      <select id="chart-select" v-model="selectedChart">
        <option value="bar">Bar Chart</option>
        <option value="doughnut">Doughnut Chart</option>
      </select>
    </div>
    
    <div class="chart-display">
      <BarChart v-if="selectedChart === 'bar'" :key="'bar'" />
      <OtherChart v-else-if="selectedChart === 'doughnut'" :key="'doughnut'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BarChart from '@/components/BarChart.vue';
import OtherChart from '@/components/OtherChart.vue';

const selectedChart = ref('bar');
</script>

<style scoped>
.charts-page {
  padding: 20px;
}

.controls {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.controls label {
  font-size: 16px;
  font-weight: 500;
}

.controls select {
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  transition: border-color 0.3s;
}

.controls select:hover {
  border-color: #999;
}

.controls select:focus {
  outline: none;
  border-color: #4CAF50;
}

.chart-display {
  width: 100%;
}
</style>