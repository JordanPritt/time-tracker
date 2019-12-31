import Home from '../views/Home.vue';
import Account from '../views/Account.vue';
import Login from '../views/Login.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
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

export default routes;
