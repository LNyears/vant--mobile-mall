import asyncLoader from 'core/async-loader';
const tab_cart = asyncLoader('is-user/order/tabbar-cart');
const PlaceOrderEntity = asyncLoader('is-user/order/place-order-entity');
const PlaceOrderVirtual = asyncLoader('is-user/order/place-order-virtual');
const Payment = asyncLoader('is-user/order/payment');
const PaymentStatus = asyncLoader('is-user/order/payment-status');

const userOrderHome = asyncLoader('is-user/order/home');
const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/user-tabbar/');

export default [
  {
    path: '/userOrder',
    name: 'userOrder',
    meta: {
      login: true
    },
    components: { default: userOrderHome, tabbar: Tabbar }
  },
  {
    path: '/userOrders',
    name: 'userOrders',
    meta: {
      login: true
    },
    components: { default: tab_cart, tabbar: Tabbar }
  },
  {
    path: '/userOrder/placeOrderEntity',
    name: 'placeOrderEntity',
    component: PlaceOrderEntity
  },
  {
    path: '/userOrder/placeOrderVirtual',
    name: 'placeOrderVirtual',
    component: PlaceOrderVirtual
  },
  {
    path: '/userOrder/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/userOrder/payment/:status',
    name: 'paymentStatus',
    component: PaymentStatus,
    props: true
  }
];
