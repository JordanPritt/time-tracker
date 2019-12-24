<template>
  <v-card class="container">
    <LineChart v-if="loaded" :chartdata="chartdata" :options="options" />
  </v-card>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: '',
      datasets: [],
    },
    options: null,
  }),
  async mounted() {
    this.loaded = false;
    try {
      const daysWorked = await fetch(
        'https://localhost:5001/api/timeworked'
      ).then(r => r.json());
      const options = await fetch(
        'https://localhost:5001/api/timeworked/default'
      ).then(r => r.json());
      this.chartdata.labels = daysWorked.labels;
      this.chartdata.datasets = daysWorked.data;

      this.options = options;
      this.loaded = true;
    } catch (e) {
      console.error("Couldn't access data:", e);
    }
  },
};
</script>
