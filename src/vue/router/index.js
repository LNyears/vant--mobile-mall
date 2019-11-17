import Vue from 'vue';
import Router from 'vue-router';
import { getLocalStorage } from '@/core/utils/local-storage';

// import home from './home';
// import items from './items';
// import user from './user';
// import order from './order';
// common
import login from './common/login';
import index from './common/comindex';
// is-user
import userhome from './is-user/home';
import useritems from './is-user/items';
import payorder from './is-user/pay-order';
import bargain from './is-user/bargain';
import userorder from './is-user/order';
import useruser from './is-user/user';

// is-eclectrican
import eclechome from './is-electrican/home';
import eclecitems from './is-electrican/items';
import eclecorder from './is-electrican/order';
import eclecuser from './is-electrican/user';

// is-supplier
import supphome from './is-supplier/home';
import suppitems from './is-supplier/items';
import supporder from './is-supplier/order';
import suppuser from './is-supplier/user';

Vue.use(Router);

// const RouterModel = new Router({
//   routes: [...userhome, ...useritems, ...useruser, ...userorder, ...login, ...index]
// });
const RouterModel = new Router({
  mode: 'history',
  routes: [
    ...userhome,
    ...useritems,
    ...payorder,
    ...bargain,
    ...userorder,
    ...useruser,
    ...eclechome,
    ...eclecitems,
    ...eclecorder,
    ...eclecuser,
    ...supphome,
    ...suppitems,
    ...supporder,
    ...suppuser,
    ...login,
    ...index
  ]
});
RouterModel.beforeEach((to, from, next) => {
  const { Authorization, user_id } = getLocalStorage(
    'Authorization',
    'user_id'
  );
  if (!Authorization && !user_id) {
    if (to.meta.login) {
      next({ name: 'login', query: { redirect: to.name } });
      return;
    }
  }
  next();
});

export default RouterModel;
