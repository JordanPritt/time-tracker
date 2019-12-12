<template>
  <div class="list-container">
    <ul>
      <li v-for="(time, index) in timeList" :key="time.title">
        <div class="time-card">
          <div class="time-card-header">
            <button
              class="remove"
              title="Delete Time Record"
              v-on:click="deleteTime(index)"
            >&#10007;</button>
            <button class="edit" title="Edit Time Record">&#10000;</button>
          </div>
          <div class="time-card-body">
            <p>
              <b>Task:</b>
              {{time.title}}
            </p>
            <p>
              <b>Date:</b>
              {{time.date}}
            </p>
            <p>
              <b>Start:</b>
              {{time.start}}
              <b>End:</b>
              {{time.end}}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TimeList',
  data() {
    return {
      newTime: {},
      isAddModalVisible: false,
    };
  },
  components: {},
  computed: {
    ...mapState(['title', 'timeList']),
  },
  methods: {
    ...mapActions(['removeTime']),
    deleteTime(time) {
      this.removeTime(time);
    },
  },
};
</script>

<style scoped>
.list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-container ul {
  margin: 0px;
  padding: 0px;
}
.list-container li {
  list-style-type: none;
  text-decoration: none;
}
.time-card {
  border: 1px solid #333;
  border-radius: 0.25em;
  margin: 1em;
  transition: 0.3s;
  min-width: 15em;
}
.time-card:hover,
.time-card:focus {
  box-shadow: 0em 1.5em 1em 0em #bbb;
  transition: 0.3s;
}
.time-card-header {
  display: flex;
  flex-direction: row-reverse;
  background-color: #093b5d;
  padding: 0.25em;
}
.time-card-header button {
  font-weight: bold;
  font-size: 0.8em;
  border: none;
  border-radius: 50%;
  background-color: #ddd;
  margin: 0 0.25em;
  padding: 0.15em;
  cursor: pointer;
}
.time-card-header button:active {
  transform: scale(0.9);
  transition: 0.3s;
}
.time-card-body {
  padding: 0.25em;
}
.edit {
  color: #a3d060;
}
.remove {
  color: #b22222;
}
</style>
