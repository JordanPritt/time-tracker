import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7125ec',
        success: '#25ec71',
        info: '#25a0ec',
        warning: '#ecd525',
        error: '#ec7125',
      },
    },
  },
});
