<template>
    <div class="user-home">
        <div>
            <div class="group_banner">
                <img v-lazy="data.banner" alt="海报" width="100%" height="300px"/>
            </div>
            <div style="padding-left: 30px;padding-right: 30px;position: absolute;margin-top: -30px;width: 100%">
                <div @click='onClickType(0)' style="box-shadow: 3px 3px 3px #ccc;border-radius:5px;text-align: center;padding: 20px;margin-bottom: 20px;background-color: white">
                    <van-row>
                        <van-col span="16" style="text-align: left;line-height: 22px">
                            <span style="font-size: 16px;">{{data.homeData1.title}}</span>
                            <br/><span style="font-size: 12px;color: #bfbfbf;">{{data.homeData1.detils}}</span>
                        </van-col>
                        <van-col span="8" style="text-align: right">
                            <img
                                    src="../../../assets/images/is-user/icon_log.png"
                                    alt="下单"
                                    width="50"
                                    height="60"
                            />
                        </van-col>
                    </van-row>
                </div>
                <div @click='onClickType(1)' style="box-shadow: 3px 3px 3px #ccc;border-radius:5px;text-align: center;padding: 20px;margin-bottom: 20px;background-color: white">
                    <van-row>
                        <van-col span="16" style="text-align: left;line-height: 22px">
                            <span style="font-size: 16px;">{{data.homeData2.title}}</span>
                            <br/><span style="font-size: 12px;color: #bfbfbf;">{{data.homeData2.detils}}</span>
                        </van-col>
                        <van-col span="8" style="text-align: right">
                            <img
                                    src="../../../assets/images/is-user/icon_log.png"
                                    alt="淘好货"
                                    width="50"
                                    height="60"
                            />
                        </van-col>
                    </van-row>
                </div>
                <div @click='onClickType(2)' style="box-shadow: 3px 3px 3px #ccc;border-radius:5px;text-align: center;padding: 20px;margin-bottom: 20px;background-color: white">
                    <van-row>
                        <van-col span="16" style="text-align: left;line-height: 22px">
                            <span style="font-size: 16px;">{{data.homeData3.title}}</span>
                            <br/><span style="font-size: 12px;color: #bfbfbf;">{{data.homeData3.detils}}</span>
                        </van-col>
                        <van-col span="8" style="text-align: right">
                            <img
                                    src="../../../assets/images/is-user/icon_log.png"
                                    alt="查订单"
                                    width="50"
                                    height="60"
                            />
                        </van-col>
                    </van-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Row, Col} from 'vant';
  export default {
    components: {
      [Col.name]: Col,
      [Row.name]: Row
    },
    data() {
      return {
        data: {
          banner: "http:\/\/mamaqunaer.oss-cn-shanghai.aliyuncs.com\/android\/201711\/6ebfc6b423caa4db6e3c8a91997210b7.JPEG",
          homeData1: {
            title: '在线下单',
            detils: '家装布线，电器维保，统统一键下单',
            icon: '../../../assets/images/is-user/icon_log.png'
          },
          homeData2: {
            title: '淘好货',
            detils: '电器耗材，装备，设备，这里都有',
            icon: '../../../assets/images/is-user/icon_log.png'
          },
          homeData3: {
            title: '查下单',
            detils: '随时跟踪订单状态',
            icon: '../../.../.../assets/images/is-user/icon_log.png'
          }
        }
      }
    },
    methods: {
      onClickType(val) {
        switch (val) {
          case 0:
            console.log('0')
            break
          case 1:
            console.log('1')
            break
          case 2:
            console.log('2')
            break
          default:
        }
      }
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
    .user-home{
        margin-bottom: 50px;
    }
</style>
