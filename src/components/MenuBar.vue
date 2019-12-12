<template>
  <div class="menu-bar">
    <AddTime v-show="isAddModalVisible" @close="closeAddTimeModal" />
    <ul class="nav" roll="navigation">
      <li>
        <button v-on:click="openAddTimeModal()">Add Time</button>
      </li>
      <li>
        <button>New Task</button>
      </li>
      <li class="nav-right">
        <button>Sign-In/Out</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddTime from '@/components/AddTime.vue';

export default {
  name: 'MenuBar',
  data() {
    return {
      isAddModalVisible: false,
    };
  },
  components: {
    AddTime,
  },
  computed: {
    ...mapState(['timeList']),
  },
  methods: {
    openAddTimeModal() {
      this.isAddModalVisible = true;
    },
    closeAddTimeModal() {
      this.isAddModalVisible = false;
    },
  },
};
</script>

<style scoped>
.menu-bar {
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 100%;
  flex-flow: row-reverse;
  justify-content: space-between;
  align-items: center;
  background-color: #093b5d;
  border: 1px solid #093b5d;
}

.nav {
  display: flex;
  padding: 0;
  list-style: none;
}

.nav li {
  margin: 0 1em 0 0;
  padding: 0;
  border: 0;
}

.nav-right {
  margin-left: auto;
}

.nav li button {
  border-radius: 0.25em;
  font-weight: bold;
  background-color: #a3d060;
  color: #333;
  border: 2px solid #a3d060;
  padding: 0.5em;
  transition: 0.3s;
}

.nav li button:hover {
  background-color: #1d9ad6;
  border-color: #1d9ad6;
  color: #eee;
  cursor: pointer;
  transition: 0.3s;
}

.nav li button:active {
  transform: scale(0.9);
  transition: 0.3s;
}

@media screen and (max-width: 700px) {
  .menu-bar {
    flex-flow: column-reverse;
  }
}
</style>
