<template>
  <div class="home">
    <MenuBar />
    <div class="container">
      <TimeList />
      <TimeList id="right" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeList from '@/components/TimeList.vue';
import MenuBar from '@/components/MenuBar.vue';

export default {
  name: 'home',
  components: {
    TimeList,
    MenuBar,
  },
};
</script>

<style scoped>
.home {
  height: 100%;
}
.container {
  display: flex;
  flex-direction: row;
}

#right {
  margin-left: auto;
}
</style>
