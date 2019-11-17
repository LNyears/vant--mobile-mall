import asyncLoader from 'core/async-loader';

const bargainHome = asyncLoader('is-user/bargain/home');
const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/userBargain',
    name: 'userBargain',
    meta: {
      keepAlive: true
    },
    components: { default: bargainHome, tabbar: Tabbar }
  }
];
