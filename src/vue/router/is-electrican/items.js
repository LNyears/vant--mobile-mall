import asyncLoader from 'core/async-loader';

const Tabbar = () =>
  import(
    /* webpackChunkName: "Tabbar" */ '@/vue/components/electrican-tabbar/'
  );

export default [
  {
    path: '/electricanItems',
    name: 'electricanItems',
    meta: {
      keepAlive: true
    },
    components: {
      default: asyncLoader('is-electrician/items/tabbar-class'),
      tabbar: Tabbar
    }
  },
  {
    path: '/electricanItems/search',
    name: 'electricanSearch',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-electrician/items/search')
  },
  {
    path: '/electricanItems/search/result',
    name: 'electricanItemsSearchResult',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-electrician/items/search-result'),
    props: route => route.query
  },
  {
    path: '/electricanItems/detail/:itemId',
    name: 'electricanItemsDetail',
    props: true,
    component: asyncLoader('is-electrician/items/detail')
  },
  {
    path: '/electricanItems/list',
    name: 'electricanItemsList',
    component: asyncLoader('is-electrician/items/list'),
    props: route => ({
      itemClass: +route.query.itemClass
    })
  }
];
