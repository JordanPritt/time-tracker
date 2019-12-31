<template>
  <v-container>
    <v-row>
      <v-col>
        <UserInfo />
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserInfo from '../components/Account/UserInfo.vue';

export default {
  name: 'account',
  components: {
    UserInfo,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
