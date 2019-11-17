import asyncLoader from 'core/async-loader';

const tab_user = asyncLoader('is-user/user/home');
// const tab_user = asyncLoader('is-user/user/tabbar-user');
const UserCollect = asyncLoader('is-user/user/module-collect');
const UserTeam = asyncLoader('is-user/user/module-team');
const UserInvitation = asyncLoader('is-user/user/module-invitation');
const UserAddress = asyncLoader('is-user/user/module-address');
const UserAddressEdit = asyncLoader('is-user/user/module-address-edit');
const UserAutonym = asyncLoader('is-user/user/module-autonym');
const UserAutonymEdit = asyncLoader('is-user/user/module-autonym-edit');
const UserServer = asyncLoader('is-user/user/module-server');

const UserInformation = asyncLoader('is-user/user/user-information-set');
const UserInfo_SetBg = asyncLoader('is-user/user/user-information-set/set-bg');
const UserInfo_SetMobile = asyncLoader(
  'is-user/user/user-information-set/set-mobile'
);
const UserInfo_SetNickname = asyncLoader(
  'is-user/user/user-information-set/set-nickname'
);
const UserInfo_SetPassword = asyncLoader(
  'is-user/user/user-information-set/set-password'
);

const UserOrderEntityList = asyncLoader('is-user/user/order-entity-list');
const UserOrderEleList = asyncLoader('is-user/user/order-ele-list');
const UserRefundList = asyncLoader('is-user/user/refund-list');

const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/userUser',
    name: 'userUser',
    meta: {
      keepAlive: true
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
  {
    path: '/userUser/collect',
    name: 'collect',
    meta: {
      login: true
    },
    component: UserCollect
  },
  {
    path: '/userUser/team',
    name: 'team',
    meta: {
      login: true
    },
    component: UserTeam
  },
  {
    path: '/userUser/invitation',
    name: 'invitation',
    meta: {
      login: true
    },
    component: UserInvitation
  },
  {
    path: '/userUser/address',
    name: 'address',
    meta: {
      login: true
    },
    component: UserAddress
  },
  {
    path: '/userUser/address/edit/:addressId',
    name: 'address-edit',
    props: true,
    meta: {
      login: true
    },
    component: UserAddressEdit
  },
  {
    path: '/userUser/autonym',
    name: 'autonym',
    component: UserAutonym
  },
  {
    path: '/user/autonym/edit',
    name: 'autonym-edit',
    component: UserAutonymEdit
  },
  {
    path: '/userUser/server',
    name: 'user-server',
    component: UserServer
  },
  {
    path: '/userUser/information',
    name: 'user-information',
    meta: {
      login: true
    },
    component: UserInformation
  },
  {
    path: '/userUser/information/setbg',
    name: 'user-info-setbg',
    component: UserInfo_SetBg
  },
  {
    path: '/userUser/information/setMobile',
    name: 'user-info-setMobile',
    component: UserInfo_SetMobile
  },
  {
    path: '/userUser/information/setNickname',
    name: 'user-info-setNickname',
    component: UserInfo_SetNickname
  },
  {
    path: '/userUser/information/setPassword',
    name: 'user-info-setPassword',
    component: UserInfo_SetPassword
  },
  {
    path: '/userUser/order/list/:active',
    name: 'user-order-list',
    props: true,
    component: UserOrderEntityList
  },
  {
    path: '/userUser/orderEle/list/:active',
    name: 'user-order-ele-list',
    props: true,
    component: UserOrderEleList
  },
  {
    path: '/userUser/refund/list',
    name: 'user-refund-list',
    component: UserRefundList
  }
];
