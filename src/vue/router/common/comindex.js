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
      name: 'index'
    }
  }
];
