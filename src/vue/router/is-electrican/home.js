const Tabbar = () =>
  import(
    /* webpackChunkName: "Tabbar" */ '@/vue/components/electrican-tabbar/'
  );
import asyncLoader from 'core/async-loader';

export default [
  // {
  //   path: '/electricanHome',
  //   name: 'electricanHome',
  //   components: {
  //     default: asyncLoader('is-electrican/home/index')
  //   },
  //   meta: {
  //     keepAlive: true
  //   }
  // },
  {
    path: '/electricanHome',
    name: 'electricanHome',
    components: {
      default: asyncLoader('is-electrician/home/tabbar-home'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  }
];
