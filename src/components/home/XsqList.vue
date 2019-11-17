<template>
  <div class="xsq-list">
    <van-loading v-if="XsqitemList.length <= 0" size="24px">加载中...</van-loading>
     <Xsqitem 
      v-else
      v-for="(xsqValue,index) in XsqitemList"
      :key="index"
      :xsqValue = "xsqValue"
     ></Xsqitem>
  </div>
</template>

<script>
import Vue from "vue";
import Xsqitem from 'components/home/Xsqitem'
import VueJsonp from "vue-jsonp";
Vue.use(VueJsonp)
import { Loading } from 'vant';
Vue.use(Loading);
export default Vue.extend({
  data(){
    return {
      XsqitemList:[]
    }
  },

  components:{
    Xsqitem
  },
  getData(that) {
    //获取热门jsonp数据
    return that.$jsonp(
        "https://jsapi.ymatou.com/evt/api/FlashSale/GetFlashSaleProductList/16761/2774cad5-d9df-4a8d-b2ba-8bf473764559_c69076ba647dcfb7b834a029366bf3a9/0?",
        {
          ProductId: "009c54b1-aa0f-49dd-9db4-c1d1fd1478a3",
          callback: "ymatou_at_0",
          callbackQuery: 'callback', 
          callbackName: 'ymatou_at_0',
        }
      )
      .then(json => {
        return json;
      })
      .catch(err => {
        console.log(err);
      });
  },
  async mounted() {
      let result = await this.$options.getData(this);
      this.XsqitemList = result.Data.List
  }
});
</script>

<style lang = "stylus" scoped>
  .xsq-list
      width: max-content
      white-space: nowrap;
      overflow: hidden;
      height 1.4rem
      background: #fff;
      padding: .16rem .10522222rem;
      font-size: 0;
    .van-loading
      width 3.2rem
      height 1.1rem
      span 
        line-height 1.1rem
</style>