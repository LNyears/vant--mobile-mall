<template>
    <div class="u-pay-order-home">
        <div class="sorch" style="background-color: rgb(56, 184, 138);padding: 10px 15px;">
            <van-nav-bar
                    title=""
                    left-text="返回"
                    right-text=""
                    left-arrow
                    @click-left="onClickLeft"
            />
            <div id="my-steps">
                <van-steps :active="active">
                    <van-step>提交订单</van-step>
                    <van-step>电工接单</van-step>
                    <van-step>确认报价</van-step>
                    <van-step>支付订单</van-step>
                    <van-step>订单结束</van-step>
                </van-steps>
            </div>
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
                <div style="padding: 5px 0 10px 15px">上传图片</div>
                <van-grid>
                    <van-grid-item icon="photo-o" text="文字"/>
                    <van-grid-item icon="photo-o" text="文字"/>
                </van-grid>
            </van-cell-group>
            <van-cell-group style="margin-bottom: 10px">
                <van-cell title="预约服务时间" is-link value="请选择"/>
                <van-cell title="联系方式" is-link value=""/>
            </van-cell-group>
        </div>
        <div style="padding: 10px 15px 40px 15px">
            <div style="text-align: center">
                <p><span> <van-checkbox v-model="checked"
                                        checked-color="#07c160">我已阅读并同意</van-checkbox>
                </span><span @click="showPools"><a style="color: rgb(56, 184, 138)">《订单协议》</a></span>
                </p>
            </div>
            <van-button round type="primary" size="large" style="background-color: rgb(56, 184, 138)"
                        @click="submitOrder">提交订单
            </van-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { NavBar, Step, Steps, Field, Grid, GridItem, Checkbox, CheckboxGroup} from 'vant';
  export default {
    components: {
      [NavBar.name]: NavBar,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Field.name]: Field,
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Checkbox.name]: Checkbox,
      [CheckboxGroup.name]: CheckboxGroup
//      [Image.name]: Image,
    },
    data() {
      return {
        active: 0,
        message: '',
        checked: false,

      }
    },
    methods: {
      showPools(){
        console.log('showPools')
      },
      submitOrder(){
        console.log('submitOrder')
      },
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

<style lang="scss">
    .u-pay-order-home {
        margin-bottom: 50px;
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

        .van-steps {
            background: none;
            color: white;
        }

        #my-steps {
            .van-step__title {
                color: white !important;
            }

            .van-step--horizontal .van-step__title {
                color: white;
            }
            .van-step--horizontal .van-step__circle-container {
                background: none;
            }
            .van-step--horizontal .van-step__icon {
                font-size: 18px;
                color: white !important;
            }
            .van-step--horizontal .van-step__line {
                height: 2px;
                top: 27px;
                left: 19px;
                background-color: #d1d8e3;
            }
            .van-step__circle {
                width: 12px;
                height: 12px;
                background-color: #c8d0df;
                top: -8px;
                position: absolute;
            }
            .van-step--horizontal:last-child .van-step__circle-container {
                right: -7px;
            }
        }
        .van-checkbox {
            display: inline;
        }
        .van-checkbox__icon {
            display: inline-flex;
        }
        .van-checkbox__icon--round .van-icon {
            background-color: white;
            border-radius: 0px;
        }
    }


</style>
