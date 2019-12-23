<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      datasets: [
        {
          label: 'Current Week',
          backgroundColor: 'rgba(113, 37, 236, .75)',
          data: [40, 39, 40, 41, 40],
        },
        {
          label: 'Previous Week',
          backgroundColor: 'rgba(236, 113, 37, .75)',
          data: [41, 38, 41, 41, 38],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
