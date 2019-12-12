import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    timeList: [
      {
        title: 'UI Modification',
        type: 'Development',
        date: '12/05/2019',
        start: '8:00am',
        end: '4:30pm',
      },
      {
        title: 'Change Request',
        type: 'Maintenance',
        date: '12/06/2019',
        start: '8:00am',
        end: '4:30pm',
      },
      {
        title: 'Performance Optimization',
        type: 'Development',
        date: '12/9/2019',
        start: '8:00am',
        end: '4:30pm',
      },
    ],
  },
  mutations: {
    ADD_TIME: (state, newTime) => {
      state.timeList.push(newTime);
    },
    REMOVE_TIME: (state, time) => {
      state.timeList.splice(time, 1);
    },
    REMOVE_ALL: (state) => {
      state.timeList = [];
    },
  },
  getters: {
    allTimeItems(state) {
      return state.timeList;
    },
  },
  actions: {
    removeTime: (context, time) => {
      context.commit('REMOVE_TIME', time);
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL');
          resolve();
        }, 1500);
      });
    },
  },
  modules: {
  },
});
