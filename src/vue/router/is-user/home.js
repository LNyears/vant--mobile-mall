const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');
import asyncLoader from 'core/async-loader';

export default [
  // {
  //   path: '/userHome',
  //   name: 'userHome',
  //   components: {
  //     default: asyncLoader('is-user/home/index')
  //   },
  //   meta: {
  //     keepAlive: true
  //   }
  // },
  {
    path: '/userHome',
    name: 'userHome',
    components: {
      // default: asyncLoader('is-user/home/tabbar-home'),
      default: asyncLoader('is-user/home/home'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  }
];
