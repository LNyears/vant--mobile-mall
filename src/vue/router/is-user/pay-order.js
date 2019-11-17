import asyncLoader from 'core/async-loader';

const bargainHome = asyncLoader('is-user/pay-order/home');
const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/userPayOrder',
    name: 'userPayOrder',
    meta: {
      keepAlive: true
    },
    components: { default: bargainHome, tabbar: Tabbar }
  }
];
