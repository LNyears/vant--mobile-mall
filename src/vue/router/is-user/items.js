import asyncLoader from 'core/async-loader';

const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/userItems',
    name: 'userItems',
    meta: {
      keepAlive: true
    },
    components: {
      default: asyncLoader('is-user/items/tabbar-class'),
      tabbar: Tabbar
    }
  },
  {
    path: '/userItems/search',
    name: 'userSearch',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-user/items/search')
  },
  {
    path: '/userItems/search/result',
    name: 'userItemsSearchResult',
    meta: {
      keepAlive: true
    },
    component: asyncLoader('is-user/items/search-result'),
    props: route => route.query
  },
  {
    path: '/userItems/detail/:itemId',
    name: 'userItemsDetail',
    props: true,
    component: asyncLoader('is-user/items/detail')
  },
  {
    path: '/userItems/list',
    name: 'userItemsList',
    component: asyncLoader('is-user/items/list'),
    props: route => ({
      itemClass: +route.query.itemClass
    })
  }
];
