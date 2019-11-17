import asyncLoader from 'core/async-loader';
const tab_cart = asyncLoader('is-electrician/order/tabbar-cart');
const PlaceOrderEntity = asyncLoader('is-electrician/order/place-order-entity');
const PlaceOrderVirtual = asyncLoader(
  'is-electrician/order/place-order-virtual'
);
const Payment = asyncLoader('is-electrician/order/payment');
const PaymentStatus = asyncLoader('is-electrician/order/payment-status');

const Tabbar = () =>
  import(
    /* webpackChunkName: "Tabbar" */ '@/vue/components/electrican-tabbar/'
  );

export default [
  {
    path: '/electricanOrder',
    name: 'electricanOrder',
    meta: {
      login: true
    },
    components: { default: tab_cart, tabbar: Tabbar }
  },
  {
    path: '/electricanOrder/placeOrderEntity',
    name: 'placeOrderEntity',
    component: PlaceOrderEntity
  },
  {
    path: '/electricanOrder/placeOrderVirtual',
    name: 'placeOrderVirtual',
    component: PlaceOrderVirtual
  },
  {
    path: '/electricanOrder/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/electricanOrder/payment/:status',
    name: 'paymentStatus',
    component: PaymentStatus,
    props: true
  }
];
