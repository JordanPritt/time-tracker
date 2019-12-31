import axios from 'axios';

const actions = {
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      axios({ url: 'http://localhost:5000/api/v1/login', data: user, method: 'POST' })
        .then((resp) => {
          const { token } = resp.data;
          // eslint-disable-next-line no-shadow
          const { user } = resp.data;
          localStorage.setItem('token', token);
          axios.defaults.headers.common.Authorization = token;
          commit('auth_success', token, user);
          resolve(resp);
        })
        .catch((err) => {
          console.log('err:', err.response);
          commit('auth_error');
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      commit('logout');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
      resolve();
    });
  },
};

export default actions;
