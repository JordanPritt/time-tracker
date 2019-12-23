<template>
  <div class="container">
    <LineChart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import LineChart from './LineChart.vue';

export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
  }),
  async mounted() {
    this.loaded = false;
    try {
      const daysWorked = await fetch(
        'https://localhost:5001/api/timeworked',
      ).then(r => r.json());
      console.log('days worked data:', daysWorked);
      this.chartdata = daysWorked;
      this.loaded = true;
    } catch (e) {
      console.error("Couldn't access data:", e);
      // console.log('response data:', e.response.data);
    }
  },
};
</script>
