import asyncLoader from 'core/async-loader';

const tab_user = asyncLoader('is-supplier/user/tabbar-user');
const UserCollect = asyncLoader('is-supplier/user/module-collect');
const UserTeam = asyncLoader('is-supplier/user/module-team');
const UserInvitation = asyncLoader('is-supplier/user/module-invitation');
const UserAddress = asyncLoader('is-supplier/user/module-address');
const UserAddressEdit = asyncLoader('is-supplier/user/module-address-edit');
const UserAutonym = asyncLoader('is-supplier/user/module-autonym');
const UserAutonymEdit = asyncLoader('is-supplier/user/module-autonym-edit');
const UserServer = asyncLoader('is-supplier/user/module-server');

const UserInformation = asyncLoader('is-supplier/user/user-information-set');
const UserInfo_SetBg = asyncLoader(
  'is-supplier/user/user-information-set/set-bg'
);
const UserInfo_SetMobile = asyncLoader(
  'is-supplier/user/user-information-set/set-mobile'
);
const UserInfo_SetNickname = asyncLoader(
  'is-supplier/user/user-information-set/set-nickname'
);
const UserInfo_SetPassword = asyncLoader(
  'is-supplier/user/user-information-set/set-password'
);

const UserOrderEntityList = asyncLoader('is-supplier/user/order-entity-list');
const UserOrderEleList = asyncLoader('is-supplier/user/order-ele-list');
const UserRefundList = asyncLoader('is-supplier/user/refund-list');

const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/supplierUser',
    name: 'supplierUser',
    meta: {
      keepAlive: true
    },
    components: { default: tab_user, tabbar: Tabbar }
  },
  {
    path: '/supplierUser/collect',
    name: 'collect',
    meta: {
      login: true
    },
    component: UserCollect
  },
  {
    path: '/supplierUser/team',
    name: 'team',
    meta: {
      login: true
    },
    component: UserTeam
  },
  {
    path: '/supplierUser/invitation',
    name: 'invitation',
    meta: {
      login: true
    },
    component: UserInvitation
  },
  {
    path: '/supplierUser/address',
    name: 'address',
    meta: {
      login: true
    },
    component: UserAddress
  },
  {
    path: '/supplierUser/address/edit/:addressId',
    name: 'address-edit',
    props: true,
    meta: {
      login: true
    },
    component: UserAddressEdit
  },
  {
    path: '/supplierUser/autonym',
    name: 'autonym',
    component: UserAutonym
  },
  {
    path: '/user/autonym/edit',
    name: 'autonym-edit',
    component: UserAutonymEdit
  },
  {
    path: '/supplierUser/server',
    name: 'user-server',
    component: UserServer
  },
  {
    path: '/supplierUser/information',
    name: 'user-information',
    meta: {
      login: true
    },
    component: UserInformation
  },
  {
    path: '/supplierUser/information/setbg',
    name: 'user-info-setbg',
    component: UserInfo_SetBg
  },
  {
    path: '/supplierUser/information/setMobile',
    name: 'user-info-setMobile',
    component: UserInfo_SetMobile
  },
  {
    path: '/supplierUser/information/setNickname',
    name: 'user-info-setNickname',
    component: UserInfo_SetNickname
  },
  {
    path: '/supplierUser/information/setPassword',
    name: 'user-info-setPassword',
    component: UserInfo_SetPassword
  },
  {
    path: '/supplierUser/order/list/:active',
    name: 'user-order-list',
    props: true,
    component: UserOrderEntityList
  },
  {
    path: '/supplierUser/orderEle/list/:active',
    name: 'user-order-ele-list',
    props: true,
    component: UserOrderEleList
  },
  {
    path: '/supplierUser/refund/list',
    name: 'user-refund-list',
    component: UserRefundList
  }
];
