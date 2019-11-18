<template>
    <div class="u-order-home">
        <van-sticky>
            <div class="top" style="background-color: rgb(56, 184, 138);padding: 10px 15px;">
                <van-tabs @click="onClickType">
                    <van-tab title="服务订单"></van-tab>
                    <van-tab title="交易订单"></van-tab>
                </van-tabs>
            </div>
            <div class="tab">
                <van-dropdown-menu active-color="red">
                    <van-dropdown-item v-model="value1" :options="option1"/>
                    <van-dropdown-item v-model="value2" :options="option2"/>
                    <van-dropdown-item v-model="value3" :options="option3"/>
                    <van-dropdown-item v-model="value4" :options="option4"/>
                </van-dropdown-menu>
            </div>
            <div style="height: 10px"></div>
        </van-sticky>
        <div class="content">
            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>
            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>

            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>
            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>
            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>
            <div style="padding: 10px 15px 10px 15px;margin-bottom: 10px;background-color: white;height: 100px">
                <van-row type="flex" justify="space-between">
                    <van-col style="font-size: 13px"><span
                            style="color: #cccccc">预约服务时间：</span>
                        <span style="color: rgb(56, 184, 138)">明天（2019年10月11日）</span></van-col>

                    <van-col style="color: #cccccc;font-size: 13px"><span><van-icon name="comment-o"
                                                                                    style="margin-right: 2px"/>上面勘察</span>
                    </van-col>
                </van-row>
                <van-row type="flex">
                    <van-col style="font-size: 13px;margin-right: 20px"><span
                            style="color: #cccccc">订单类型：</span>
                        <span style="color: rgb(56, 184, 138)">电器维修</span></van-col>

                    <van-col style="font-size: 13px;"><span
                            style="color: #cccccc">服务类目：</span>
                        <span style="color: rgb(56, 184, 138)">厨具维修</span></van-col>
                </van-row>
                <van-search
                        left-icon="location-o"
                        placeholder="宽窄巷子"
                        :disabled="true"
                        show-action
                        shape="round"
                >
                    <div slot="right-icon" style="color: #6d98ff;">距您2.1km</div>
                </van-search>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Tab, Tabs, DropdownMenu, DropdownItem, Sticky, Row, Col, Search} from 'vant';
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem,
      [Sticky.name]: Sticky,
      [Row.name]: Row,
      [Col.name]: Col,
      [Search.name ]: Search
    },
    data() {
      return {
        value1: 0,
        value2: 'a',
        value3: 'b',
        value4: 'b',
        option1: [
          {text: '综合', value: 0},
          {text: '新款商品', value: 1},
          {text: '活动商品', value: 2}
        ],
        option2: [
          {text: '价格', value: 'a'},
          {text: '升序', value: 'b'},
          {text: '倒序', value: 'c'},
        ],
        option3: [
          {text: '时间', value: 'a'},
          {text: '升序', value: 'b'},
          {text: '倒序', value: 'c'},
        ],
        option4: [
          {text: '时间', value: 'a'},
          {text: '升序', value: 'b'},
          {text: '倒序', value: 'c'},
        ]

      }
    },
    methods: {
      onClickType(name, title) {
        this.$toast(title);
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
    .u-order-home {
        margin-bottom: 50px;
        .van-tabs__nav {
            color: white;
            background: none;
        }
        .van-tab {
            color: white;
        }
        .van-tab--active {
            color: white;
        }
        .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
            border: none;
        }
        .van-tabs__line {
            background-color: #94e7e3;
        }
    }


</style>
