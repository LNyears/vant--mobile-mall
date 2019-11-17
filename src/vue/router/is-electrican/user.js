import asyncLoader from 'core/async-loader';

const tab_user = asyncLoader('is-electrician/user/tabbar-user');
const UserCollect = asyncLoader('is-electrician/user/module-collect');
const UserTeam = asyncLoader('is-electrician/user/module-team');
const UserInvitation = asyncLoader('is-electrician/user/module-invitation');
const UserAddress = asyncLoader('is-electrician/user/module-address');
const UserAddressEdit = asyncLoader('is-electrician/user/module-address-edit');
const UserAutonym = asyncLoader('is-electrician/user/module-autonym');
const UserAutonymEdit = asyncLoader('is-electrician/user/module-autonym-edit');
const UserServer = asyncLoader('is-electrician/user/module-server');

const UserInformation = asyncLoader('is-electrician/user/user-information-set');
const UserInfo_SetBg = asyncLoader(
  'is-electrician/user/user-information-set/set-bg'
);
const UserInfo_SetMobile = asyncLoader(
  'is-electrician/user/user-information-set/set-mobile'
);
const UserInfo_SetNickname = asyncLoader(
  'is-electrician/user/user-information-set/set-nickname'
);
const UserInfo_SetPassword = asyncLoader(
  'is-electrician/user/user-information-set/set-password'
);

const UserOrderEntityList = asyncLoader('is-electrician/user/order-entity-list');
const UserOrderEleList = asyncLoader('is-electrician/user/order-ele-list');
const UserRefundList = asyncLoader('is-electrician/user/refund-list');

const Tabbar = () =>
  import(
    /* webpackChunkName: "Tabbar" */ '@/vue/components/electrican-tabbar/'
  );

export default [
  {
    path: '/electricanUser',
    name: 'electricanUser',
    meta: {
      keepAlive: true
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
  {
    path: '/electricanUser/collect',
    name: 'collect',
    meta: {
      login: true
    },
    component: UserCollect
  },
  {
    path: '/electricanUser/team',
    name: 'team',
    meta: {
      login: true
    },
    component: UserTeam
  },
  {
    path: '/electricanUser/invitation',
    name: 'invitation',
    meta: {
      login: true
    },
    component: UserInvitation
  },
  {
    path: '/electricanUser/address',
    name: 'address',
    meta: {
      login: true
    },
    component: UserAddress
  },
  {
    path: '/electricanUser/address/edit/:addressId',
    name: 'address-edit',
    props: true,
    meta: {
      login: true
    },
    component: UserAddressEdit
  },
  {
    path: '/electricanUser/autonym',
    name: 'autonym',
    component: UserAutonym
  },
  {
    path: '/electrican/autonym/edit',
    name: 'autonym-edit',
    component: UserAutonymEdit
  },
  {
    path: '/electricanUser/server',
    name: 'user-server',
    component: UserServer
  },
  {
    path: '/electricanUser/information',
    name: 'user-information',
    meta: {
      login: true
    },
    component: UserInformation
  },
  {
    path: '/electricanUser/information/setbg',
    name: 'user-info-setbg',
    component: UserInfo_SetBg
  },
  {
    path: '/electricanUser/information/setMobile',
    name: 'user-info-setMobile',
    component: UserInfo_SetMobile
  },
  {
    path: '/electricanUser/information/setNickname',
    name: 'user-info-setNickname',
    component: UserInfo_SetNickname
  },
  {
    path: '/electricanUser/information/setPassword',
    name: 'user-info-setPassword',
    component: UserInfo_SetPassword
  },
  {
    path: '/electricanUser/order/list/:active',
    name: 'user-order-list',
    props: true,
    component: UserOrderEntityList
  },
  {
    path: '/electricanUser/orderEle/list/:active',
    name: 'user-order-ele-list',
    props: true,
    component: UserOrderEleList
  },
  {
    path: '/electricanUser/refund/list',
    name: 'user-refund-list',
    component: UserRefundList
  }
];
