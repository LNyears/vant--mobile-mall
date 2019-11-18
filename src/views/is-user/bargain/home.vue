<template>
    <div class="bargain-home">
        <div class="sorch" style="background-color: rgb(56, 184, 138);padding: 10px 15px;">
            <van-row>
                <van-col span="2">
                    <div class="van-cell__title van-field__label" style="line-height: 45px;color: white"><span>淘货</span>
                    </div>
                </van-col>
                <van-col span="22">
                    <van-search
                            v-model="keyWords"
                            placeholder="请输入搜索关键词"
                            show-action
                            shape="round"
                            @search="onSearch"
                    >
                        <div slot="action" @click="onSearch">搜索</div>
                    </van-search>
                </van-col>
            </van-row>
        </div>
        <van-sticky>
            <div class="tab" style="margin-bottom: 10px">
                <van-dropdown-menu active-color="red">
                    <van-dropdown-item v-model="value1" :options="option1"/>
                    <van-dropdown-item v-model="value2" :options="option2"/>
                    <van-dropdown-item v-model="value3" :options="option3"/>
                </van-dropdown-menu>
            </div>
        </van-sticky>
        <div>
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <template v-for="item in list">
                    <van-card
                            @click.native="clickDetails(item)"
                            :price="item.price"
                            :desc="item.desc"
                            :title="item.title"
                            :thumb="item.icon"
                    >
                        <div slot="footer">
                            <div style="height: 20px;width: 50px;position: absolute;right: 10px;bottom: 15px;">
                                详情
                                <van-icon
                                        slot="right-icon"
                                        name="arrow"
                                />
                            </div>
                            <!--<van-cell title="" value="详情" isLink/>-->
                        </div>
                    </van-card>
                </template>
            </van-list>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {Row, Col, Card, Search, List, DropdownMenu, DropdownItem, Sticky, Icon} from 'vant';
  export default {
    components: {
      [Col.name]: Col,
      [Row.name]: Row,
      [Card.name]: Card,
      [Search.name]: Search,
      [List.name]: List,
      [DropdownMenu.name]: DropdownMenu,
      [DropdownItem.name]: DropdownItem,
      [Sticky.name]: Sticky,
      [Icon.name ]: Icon
    },
    data() {
      return {
        active: 2,
        loading: false,
        finished: false,
        keyWords: '',
        list: [
          {
            id: '1',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '2',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '3',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '4',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '5',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '6',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          },
          {
            id: '7',
            icon: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
            title: '商品标题',
            desc: '描述信息',
            price: '2',
            num: ''
          }
        ],
        value1: 0,
        value2: 'a',
        value3: 'b',
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
        ]
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
      },
      clickDetails(item){
        console.log(item)
      },
      onSearch() {
        console.log(this.keyWords)
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
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
    .bargain-home {
        margin-bottom: 50px;
    }

    .van-card__thumb img {
        border: solid 1px #eeecec;
    }

    .van-card {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .van-cell__value--alone {
        text-align: right;
    }

    .van-cell--center {
        background: none;
    }

    .van-cell-group {
        background: none;
        color: white;
    }

    .van-search--show-action {
        background: none !important;
        color: white !important;
    }

    .van-search__action {
        color: white !important;
    }

</style>
