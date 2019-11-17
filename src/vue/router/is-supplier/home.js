const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/supplier-tabbar/');
import asyncLoader from 'core/async-loader';

export default [
  // {
  //   path: '/supplierHome',
  //   name: 'supplierHome',
  //   components: {
  //     default: asyncLoader('is-supplier/home/index')
  //   },
  //   meta: {
  //     keepAlive: true
  //   }
  // },
  {
    path: '/supplierHome',
    name: 'supplierHome',
    components: {
      default: asyncLoader('is-supplier/home/tabbar-home'),
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true
    }
  }
];
