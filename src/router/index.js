import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (to.matched.some(r => r.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      if (to.path !== '/login') {
        next('/login');
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
