const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/Tabbar/');
import asyncLoader from 'core/async-loader';

export default [
  {
    path: '/',
    name: 'index',
    components: {
      default: asyncLoader('index/index')
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
  {
    // path: '/',
    path: '/home',
    name: 'home',
    components: {
      default: asyncLoader('home/tabbar-home'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  }
];
