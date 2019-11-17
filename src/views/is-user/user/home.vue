<template>
    <div class="u-user-home">
        <van-cell-group
                style=" background-image: linear-gradient(to right, rgb(56, 184, 138), rgb(18, 125, 106));height: 170px">
            <van-cell :border="false" title="我的" style="color: white;background: none" id="my-class"></van-cell>
            <van-cell :title="userData.name" :label="userData.phon" @click.native="onClick(0)" to="" isLink style="background: none;color: white">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <img slot="icon"
                     style="margin-right: 10px;border-radius: 50px"
                     src="../../../assets/images/is-user/icon_log.png"
                     alt="头像"
                     width="60"
                     height="60"
                />
                <!--<img slot="icon"
                     style="margin-right: 10px;border-radius: 50px"
                     :src="userData.icon"
                     alt="头像"
                     width="60"
                     height="60"
                />-->
                <van-icon
                        slot="right-icon"
                        name="arrow"
                        style="line-height: 60px"
                />
            </van-cell>
        </van-cell-group>
        <van-cell-group>
            <van-cell @click.native="onClick(1)" title="消息" to="" isLink/>
            <van-cell @click.native="onClick(2)" title="钱包" to="" isLink/>
            <van-cell @click.native="onClick(3)" title="客服" to="" isLink/>
            <van-cell @click.native="onClick(4)" title="收藏" to="" isLink/>
            <van-cell @click.native="onClick(5)" title="新手入门" to="" isLink/>
        </van-cell-group>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    components: {},
    data() {
      return {
        userData: {
          name: '冬日柠檬',
          phon: '135 8**8******',
          icon: ''
        }
      }
    },
    methods: {
      onClick(val) {
        switch (val) {
          case 0:
            console.log('头像')
            break
          case 1:
            console.log('消息')
            break
          case 2:
            console.log('钱包')
            break
          case 3:
            console.log('客服')
            break
          case 4:
            console.log('收藏')
            break
          case 5:
            console.log('新手入门')
            break
          default:
        }
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
    #my-class {
        .van-cell:not(:last-child)::after {
            border-bottom: none !important;
        }
    }
    .van-cell__label{
        color: white;
    }
</style>
