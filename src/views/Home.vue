<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Weekly Progress
            <v-spacer />
            <small>
              Current Total:
              <span class="primary--text">{{this.currentWeek}}</span>
            </small>
            <small class="ml-4">
              Previous Total:
              <span class="error--text">{{this.previousWeek}}</span>
            </small>
          </v-card-title>
          <WeeklyChart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import WeeklyChart from '@/components/WeeklyChart.vue';

export default {
  name: 'home',
  components: {
    WeeklyChart,
  },
  data() {
    return { currentWeek: 40, previousWeek: 40 };
  },
};
</script>

<style scoped>
</style>
