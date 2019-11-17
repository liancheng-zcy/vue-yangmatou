<template>
  <ul class="product-list">
    <Cnxhitem v-for="(CnxhValue,index) in CnxhList" :key="index" :CnxhValue="CnxhValue"></Cnxhitem>
  </ul>
</template>

<script>
import Vue from "vue";
import Cnxhitem from "components/home/Cnxhitem";
import { get } from "utils/http.js";
import BScroll from "better-scroll";
import { Toast } from 'vant';
Vue.use(Toast);

export default Vue.extend({
  data() {
    return {
      CnxhList: []
    };
  },
  components: {
    Cnxhitem
  },
  async mounted() {
    let result = await get({
      url: "/ajax/home/api/getLikeList?",
      params: {
        pageNub: 1,
        pageSize: 20
      }
    });
    this.CnxhList = result.data.likeProductInfo;

    let bScroll = new BScroll(".home-wrap", {
      pullUpLoad: true,
      click: true,
      probeType: 2
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
        this.CnxhList = [
          ...this.CnxhList,
          ...moreResult.data.likeProductInfo
        ]
        // 在下一次事件循环刷新DOM,若果不放到下一次事件循环，因为DOM还没渲染完，就刷新了
        await this.$nextTick()
        bScroll.refresh()
      } else {
       Toast({
          message: '我也是有底线的~',
          position: 'bottom',
          duration: 1000
        })
      }
      bScroll.finishPullUp();
    })

    bScroll.on('scroll',() =>{//吸顶
      // console.log(this.$refs['adRef'])
      if(bScroll.y < -50){
        this.$store.commit('setSticky',true)
      }else{
        this.$store.commit('setSticky',false)
      }
    })
  }
});
</script>

<style lang = "stylus" scoped>
.product-list
  margin-top 0.1rem
  display flex
  flex-wrap wrap
</style>