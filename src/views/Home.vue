<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-center align-center column pa-5>
      <div class="text-cont">
        <div class="display-4 font-weight-black white--text text-xs-center">TRACK TIME</div>
        <div class="display-4 font-weight-black white--text text-xs-center mb-3">FROM YOUR DAY</div>
        <div
          class="display-1 font-weight-bold white--text text-xs-center"
        >Finally an easy way to track and visual your work</div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
};
</script>

<style scoped>
.home-hero {
  background: url('/images/pocket-watch.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.text-cont {
  /* background-color: rgba(255, 255, 255, 0.25); */
  margin-left: 55%;
  margin-bottom: 25%;
  padding: 1.5em;
  border-radius: 1em;
  text-align: center;
}

@media screen and (max-width: 700px) {
  .text-cont {
    margin: 0em;
  }
}
</style>
