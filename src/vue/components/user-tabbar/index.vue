<template>
  <van-tabbar v-model="active" style="z-index: 1999">
    <van-tabbar-item
      v-for="(tab, index) in tabbar"
      :icon="tab.icon"
      :to="tab.path"
      :dot="tab.dot"
      :info="tab.info"
      :key="index"
    >
      {{ tab.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem, Icon } from 'vant';
export default {
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: '首页',
          path: '/userHome',
          pathName: 'userHome',
          icon: 'wap-home',
          dot: false,
          info: ''
        },
        {
          name: '下单',
          path: '/userPayOrder',
          pathName: 'userPayOrder',
          icon: 'balance-list',
          dot: false,
          info: ''
        },
        {
          name: '淘货',
          path: '/userBargain',
          pathName: 'userBargain',
          icon: 'shop',
          dot: false,
          info: ''
        },
        {
          name: '订单',
          path: '/userOrder',
          pathName: 'userOrder',
          icon: 'todo-list',
          dot: false,
          info: ''
        },
        {
          name: '我的',
          path: '/userUser',
          pathName: 'userUser',
          icon: 'wode',
          dot: false,
          info: ''
        }
      ]
    };
  },

  watch: {
    $route: 'changeActive'
  },

  created() {
    const toName = this.$route.name;
    this.setActive(toName);
  },

  methods: {
    changeActive({ name }) {
      this.setActive(name);
    },
    setActive(name) {
      this.tabbar.forEach((tab, i) => {
        if (tab.pathName == name) {
          this.active = i;
          return false;
        }
      });
    }
  },

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon
  }
};
</script>
