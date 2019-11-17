<template>
    <div class="pay-order-home">
        <div class="sorch" style="background-color: rgb(56, 184, 138);padding: 10px 15px;">
            <van-nav-bar
                    title=""
                    left-text="返回"
                    right-text=""
                    left-arrow
                    @click-left="onClickLeft"
            />
            <van-steps :active="active">
                <van-step>提交订单</van-step>
                <van-step>电工接单</van-step>
                <van-step>确认报价</van-step>
                <van-step>支付订单</van-step>
                <van-step>订单结束</van-step>
            </van-steps>
        </div>
        <div class="tab">
            <van-cell-group style="margin-bottom: 10px">
                <van-cell title="订单类型" is-link value="请选择"/>
                <van-cell title="服务范围" is-link value="请选择"/>
                <van-field
                        v-model="message"
                        rows="3"
                        autosize
                        label="备注"
                        type="textarea"
                        placeholder="请输入备注100字内"
                />
            </van-cell-group>
            <van-cell-group style="margin-bottom: 10px">
                <div style="padding: 5px 0 0 15px">上传图片</div>
                <div style="height: 60px"></div>
                <!--<van-grid>-->
                    <!--<van-grid-item icon="photo-o" text="文字"/>-->
                    <!--<van-grid-item icon="photo-o" text="文字"/>-->
                <!--</van-grid>-->
            </van-cell-group>
            <van-cell-group style="margin-bottom: 10px">
                <van-cell title="预约服务时间" is-link value="请选择"/>
                <van-cell title="联系方式" is-link value=""/>
            </van-cell-group>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Row, Col, Card, Search, NavBar, Step, Steps, Field} from 'vant';
  export default {
    components: {
      [Col.name]: Col,
      [Row.name]: Row,
      [Card.name]: Card,
      [Search.name]: Search,
      [NavBar.name]: NavBar,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Field.name]: Field,
//      [Grid.name]: Grid,
//      [GridItem.name]: GridItem,
//      [Image.name]: Image,
    },
    data() {
      return {
        active: 0,
        message: '',

      }
    },
    methods: {
      onClickLeft() {
        console.log('onClickLeft')
      },
    },
    created() {
      console.log(window.location.href)
      console.log(this.$route.path)
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
    .bargain-home {
        margin-bottom: 50px;
    }

    .van-nav-bar {
        background: none;
        color: #ffffff;
    }

    .van-hairline--bottom::after {
        border: none;
    }

    .van-nav-bar .van-icon {
        color: white;
    }

    .van-nav-bar__text {
        color: #ffffff;
    }
</style>
