import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      guest: true,
    },
  },
  {
    path: '/account',
    name: 'account',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/reports',
    name: 'reports',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/current',
    name: 'current',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/total',
    name: 'total',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (to.matched.some(r => r.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
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
