import asyncLoader from 'core/async-loader';

const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/supplier-tabbar/');

export default [
  {
    path: '/supplierItems',
    name: 'supplierItems',
    meta: {
      keepAlive: true
    },
    components: {
      default: asyncLoader('is-supplier/items/tabbar-class'),
      tabbar: Tabbar
    }
  },
  {
    path: '/supplierItems/search',
    name: 'supplierSearch',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-supplier/items/search')
  },
  {
    path: '/supplierItems/search/result',
    name: 'supplierItemsSearchResult',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-supplier/items/search-result'),
    props: route => route.query
  },
  {
    path: '/supplierItems/detail/:itemId',
    name: 'supplierItemsDetail',
    props: true,
    component: asyncLoader('is-supplier/items/detail')
  },
  {
    path: '/supplierItems/list',
    name: 'supplierItemsList',
    component: asyncLoader('is-supplier/items/list'),
    props: route => ({
      itemClass: +route.query.itemClass
    })
  }
];
