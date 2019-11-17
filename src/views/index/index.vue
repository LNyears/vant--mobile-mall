<template>
  <div id="index">
    <div style="text-align: center;margin-top: 180px">
      <h3>HELLO</h3>
      <p>请选择您的身份</p>
    </div>
    <div style="text-align: center;margin-top: 60px">
      <div style="text-align: center">
        <span style="width: 90px;height: 90px;" @click="onClickBut(0)">
          <!--<van-icon name="friends-o"/><br/>-->
          <span
            style="background-color: #65ecae; width: 60px;  height: 60px; border-radius: 50%;display: inline-block;"
          ></span>
          <br />
          我是用户
        </span>
      </div>
      <div style="margin-top: 40px">
        <van-row>
          <van-col :span="12" style="text-align: right">
            <div style="text-align: center">
              <span style="width: 90px;height: 90px;" @click="onClickBut(1)">
                <span
                  style="background-color: #3e7aec; width: 60px;  height: 60px; border-radius: 50%;display: inline-block;"
                ></span>
                <br />我是电工
              </span>
            </div>
          </van-col>
          <van-col :span="12" style="text-align: center">
            <div style="text-align: center;">
              <span style="width: 90px;height: 90px;" @click="onClickBut(2)">
                <span
                  style="background-color: #57b0ec; width: 60px;  height: 60px; border-radius: 50%;display: inline-block;"
                ></span>
                <br />我是供应商
              </span>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {Row, Col, Icon} from 'vant';
export default {
  name: 'index',
  components: {
    [Icon.name]: Icon,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    onClickBut(type){
      switch (type) {
        case 0:
          this.$router.push({name: 'userHome'});
          break
        case 1:
          this.$router.push({name: 'electricanHome'});
          //            alert('电工')
          break
        case 2:
          this.$router.push({name: 'supplierHome'});
          //            alert('供应商')
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

<style scoped>
#index {
  background-color: white;
}
</style>
