<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-container>
      <v-row>
        <v-col>
          <v-content transition="slide-x-transition">
            <router-view></router-view>
          </v-content>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
