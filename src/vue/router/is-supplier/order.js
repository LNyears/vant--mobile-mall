import asyncLoader from 'core/async-loader';
const tab_cart = asyncLoader('is-supplier/order/tabbar-cart');
const PlaceOrderEntity = asyncLoader('is-supplier/order/place-order-entity');
const PlaceOrderVirtual = asyncLoader('is-supplier/order/place-order-virtual');
const Payment = asyncLoader('is-supplier/order/payment');
const PaymentStatus = asyncLoader('is-supplier/order/payment-status');

const Tabbar = () =>
  import(/* webpackChunkName: "Tabbar" */ '@/vue/components/supplier-tabbar/');

export default [
  {
    path: '/supplierOrder',
    name: 'supplierOrder',
    meta: {
      login: true
    },
    components: { default: tab_cart, tabbar: Tabbar }
  },
  {
    path: '/supplierOrder/placeOrderEntity',
    name: 'placeOrderEntity',
    component: PlaceOrderEntity
  },
  {
    path: '/supplierOrder/placeOrderVirtual',
    name: 'placeOrderVirtual',
    component: PlaceOrderVirtual
  },
  {
    path: '/supplierOrder/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/supplierOrder/payment/:status',
    name: 'paymentStatus',
    component: PaymentStatus,
    props: true
  }
];
