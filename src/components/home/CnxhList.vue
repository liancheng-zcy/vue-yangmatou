<template>
  <div class="product-wrap">
    <ul class="product-list">
      <Cnxhitem v-for="(CnxhValue,index) in CnxhList" :key="index" :CnxhValue="CnxhValue"></Cnxhitem>
    </ul>
    <van-loading v-if = 'lodaing' class="product-loading" color="#1989fa"></van-loading>
  </div>
</template>


<script>
import Vue from "vue";
import Cnxhitem from "components/home/Cnxhitem";
import { get } from "utils/http.js";
import BScroll from "better-scroll";
import { Toast, Loading } from "vant";
Vue.use(Toast).use(Loading);

export default Vue.extend({
  props: ["cnxhType"],
  data() {
    return {
      CnxhList: [],
      lodaing:''
    };
  },
  components: {
    Cnxhitem
  },
  async mounted() {
    let type = this.cnxhType;
    let result = await get({
      url: "/ajax/home/api/getLikeList?",
      params: {
        pageNub: 1,
        pageSize: 20
      }
    });
    this.CnxhList = result.data.likeProductInfo;

    let bScroll = new BScroll(`.${type}`, {
      pullUpLoad: true,
      
      probeType: 2,
      preventDefault:false
    });
    let num = 1;
    let size = 30;
    bScroll.on("pullingUp", async () => {
      if (num < Math.ceil(result.data.likeProduct.total / size)) {
        let moreResult = await get({
          url: "/ajax/home/api/getLikeList?",
          params: {
            pageNub: num,
            pageSize: size
          }
        });
        num++;
        this.CnxhList = [...this.CnxhList, ...moreResult.data.likeProductInfo];
        // 在下一次事件循环刷新DOM,若果不放到下一次事件循环，因为DOM还没渲染完，就刷新了
        await this.$nextTick();
        bScroll.refresh();
        this.lodaing = 'true'
        console.log(this.lodaing)
      } else {
        Toast({
          message: "我也是有底线的~",
          position: "bottom",
          duration: 1000
        });
      }
      bScroll.finishPullUp();
      this.lodaing = 'false'
       console.log(this.lodaing)
    });

    bScroll.on("scroll", () => {
      //吸顶
      // console.log(this.$refs['adRef'])
      if (bScroll.y < -50) {
        this.$store.commit("setSticky", true);
      } else {
        this.$store.commit("setSticky", false);
      }
    });
  }
});
</script>

<style lang = "stylus" scoped>
.product-list
  margin-top 0.1rem
  display flex
  flex-wrap wrap
.product-wrap
  .product-loading
    margin-left  calc(50% - .15rem)
  

  
</style>