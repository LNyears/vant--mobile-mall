<template>
  <div>
    <van-cell-group>
      <van-cell title="我的电子券" isLink>
        <router-link to="/user/orderEle/list/0" class="text-desc"
          >全部电子券</router-link
        >
      </van-cell>
    </van-cell-group>

    <van-row class="ecoupon_status">
      <van-col span="6">
        <div
          class="ecoupon_status_icon"
          @click="$router.push({ path: '/user/orderEle/list/1' })"
        >
          <van-icon name="coupon" />
        </div>
        <div>待使用</div>
      </van-col>
      <van-col span="6">
        <div
          class="ecoupon_status_icon"
          @click="$router.push({ path: '/user/orderEle/list/2' })"
        >
          <van-icon name="coupon-used" />
        </div>
        <div>已使用</div>
      </van-col>
      <van-col span="6">
        <div
          class="ecoupon_status_icon"
          @click="$router.push({ path: '/user/orderEle/list/3' })"
        >
          <van-icon name="coupon-due" />
        </div>
        <div>过期关闭</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Row, Col } from 'vant';

export default {
  name: 'ecoupon-group',
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/mixin';
.ecoupon_status {
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;

  > div {
    @include one-border;
    &::after {
      top: 50%;
      left: 50%;
      border-bottom: 0;
      border-right: 1px solid $border-color;
      height: 150%;
      transform: scale(0.5) translate3d(-50%, -50%, 0);
      transform-origin: 0 0;
    }
    &:last-child::after {
      border: 0;
    }
  }

  .ecoupon_status_icon {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-block;
    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      font-size: 24px;
      color: #000;
    }
  }
}
</style>
