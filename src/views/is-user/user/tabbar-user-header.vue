<template>
  <div
    class="user_header"
    :style="{ backgroundImage: `url(${background_image})` }"
  >
    <van-icon name="set" class="user_set" @click="toSetting" />
    <div class="user_avatar">
      <img :src="avatar" @click="toLogin" alt="头像" width="55" height="55" />
    </div>
    <div>{{ nick_name }}</div>
  </div>
</template>

<script>
import avatar_default from '../../../assets/images/avatar_default.png';
import bg_default from '../../../assets/images/user_head_bg.png';
import { getLocalStorage } from 'core/utils/local-storage';

export default {
  name: 'user-header',

  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      nick_name: '昵称',
      avatar: avatar_default,
      background_image: bg_default
    };
  },

  activated() {
    this.getUserInfo();
  },

  methods: {
    getUserInfo() {
      const infoData = getLocalStorage(
        'nick_name',
        'background_image',
        'avatar'
      );
      this.nick_name = infoData.nick_name || '昵称';
      this.avatar = infoData.avatar || avatar_default;
      this.background_image = infoData.background_image || bg_default;
    },
    toSetting() {
      this.$router.push({ name: 'user-information' });
    },
    toLogin() {
      !this.isLogin &&
        this.$router.push({ name: 'login', query: { redirect: 'user' } });
    }
  }
};
</script>

<style lang="scss" scoped>
.user_header {
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  height: 130px;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  padding-top: 30px;
}

i.user_set {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
}
.user_avatar {
  margin-bottom: 10px;
  img {
    border: 0;
    border-radius: 50%;
  }
}
</style>
