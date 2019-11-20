<template>
  <div class="wrap">
    <Ad v-if="!$store.state.isSticky" ref="adRef"></Ad>
    <Nav :navType = "navType"></Nav>
    <div class="home-wrap">
      <div class="home-content">
        <!-- 广告 -->
        <!-- 轮播图 -->
        <div class="banner-container">
          <van-swipe :autoplay="3000" indicator-color="#cc3333">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" :src="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- 限时抢 -->
        <div class="xsq" id="xsqList">
          <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .16rem' }">
            <span></span>限时抢
          </van-divider>
          <!-- Xsq -->
          <div class="XsqListWrap">
            <XsqList></XsqList>
          </div>
        </div>
        <!-- 小编精选 -->
        <div class="xbjx">
          <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .16rem' }">
            <span></span>小编精选
          </van-divider>
          <div class="content goto-xbjx" @click="topicClick">
            <img
              src="http://pic1.ymatou.com/G02/M07/86/1B/CgvUBVvrzheAQTFDAAH0yCAeoYw144_15_8_w_o.jpg"
              width="100%"
              alt="CHANEL"
            />
            <div class="desc">
              <div class="text">
                <h2>CHANEL</h2>
                <a class="btn-more">查看更多</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 洋货集 -->
        <div class="yhj">
          <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .16rem' }">
            <span></span>洋货集
          </van-divider>
          <div class="content"></div>
        </div>
        <!-- good list -->
        <!-- <div class="good-list" id="goodProductList">
        <div class="list">
          <a class="pic-main" activity_id="5104">
            <img
              src="http://pic1.ymatou.com/G02/M08/33/68/CgvUBVkP7EOABUlaAAB-l5cHTQM159_15_8_w_o.jpg"
              alt
            />
          </a>
          <div class="product">
            <ul>
              <li>
                <a
                  target="product"
                  activity_id="5104"
                  sproductid="4d3dc1a7-3883-4989-b97c-5e6a79f92de6"
                >
                  <div
                    class="img lazyload"
                    alt="HABA鲨烷美容油精纯15ml/30ml 无添加温和锁水 保湿修护 "
                    style="background-image: url(&quot;http://pic1.ymatou.com/G02/shangou/M07/2B/C4/CgvUBVs8iSeAdnx_AALXeIDjdIM861_1_1_n_w_o.jpg&quot;);"
                  ></div>
                  <div class="title">HABA鲨烷美容油精纯15ml/30ml 无添加温和锁水 保湿修护</div>
                  <div class="price">
                    ￥
                    <i>122</i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>-->
        <!-- 猜你喜欢 -->
        <div class="interested">
          <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .16rem' }">
            <span></span>猜你喜欢
          </van-divider>
          <!-- 猜你喜欢列表 -->
          <CnxhList :cnxhType = "cnxhType"></CnxhList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import XsqList from "components/home/XsqList";
import CnxhList from "components/home/CnxhList";
import Ad from "components/common/ad.vue";
import Nav from 'components/common/nav'
import BScroll from "better-scroll";
import { Swipe, SwipeItem, Lazyload, Divider } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Divider);
export default Vue.extend({
  data() {
    return {
      images: [
        "http://pic1.ymatou.com/G02/M06/DE/4C/CgzUDF3OS9uAQFB1AAHLBy1_jzE039_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/57/C4/CgzUB13MB-OAbx2FAAJH18ZGof4731_375_128_o.png",
        "http://pic1.ymatou.com/G01/M00/5D/18/CgzUCV3NOHGAd25eAAPqbqJGD2I375_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/5D/DF/CgzUCF3NUjqAejmKAANqovF1BC0297_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/5E/4C/CgzUB13NXSmAcTHOAALLSLHFNLo405_375_128_o.jpg",
        "http://pic1.ymatou.com/G01/M01/5E/4F/CgzUB13NXbuAbcjwAAFdteowL-E310_375_128_o.jpg",
        "http://pic1.ymatou.com/G01/M03/64/C9/CgzUBl3Or56AdkrkAAM-dZSqkrE826_375_128_o.png",
        "http://pic1.ymatou.com/G01/M02/5E/79/CgzUB13NYmGAaBkgAAQHFIEswMw461_375_128_o.png"
      ],
      navType:'home',
      cnxhType:'home-wrap'
    };
  },
  methods: {
    topicClick() {
      this.$router.push("/topic");
    }
  },
  components: {
    XsqList,
    Ad,
    CnxhList,
    Nav
  },
  mounted() {
    let bScroll = new BScroll(".XsqListWrap", {
      click: true,
      probeType: 2,
      scrollX: true
      // scrollbar: {
      //   fade: true,
      //   interactive: false // 1.8.0 新增
      // },
    });
  }
});
</script>

<style lang = "stylus" scoped>
.wrap
  width 100%
  height 100%
  .home-wrap
    width 100%
    height 100%
    font-size 0.16rem
    overflow hidden
  
    .banner-container
      height 1.1rem
      width 100%
      .van-swipe img
        height 1.1rem
    .xsq
      width 100%
      overflow hidden
      .bt-title
        width 100%
        height 0.4rem
      .van-divider
        height 0.4rem
        margin 0
        background #f5f5f5
        span
          background-image url('~assets/images/time.png')
          background-repeat no-repeat
          background-position center center
          background-size 100% 100%
          margin-right 0.08rem
          height 0.16rem
          width 0.16rem
      .XsqListWrap
        width 100%
        overflow hidden
    .xbjx
      .van-divider
        height 0.4rem
        margin 0
        background #f5f5f5
        span
          background-image url('~assets/images/xbjx.png')
          background-repeat no-repeat
          background-position center center
          background-size 100% 100%
          margin-right 0.08rem
          height 0.16rem
          width 0.16rem
      .content
        border 0.10562222rem solid #fff
        background #fff
        position relative
        overflow hidden
        font-size 0
        img
          display inline-block
          width 100%
        .desc
          position absolute
          left 0
          top 0
          width 100%
          height 100%
          background rgba(0, 0, 0, 0.6)
          .text
            width 80%
            position absolute
            top 50%
            left 10%
            overflow hidden
            transform translate(0, -50%)
            text-align center
            color #fff
            h2
              font-weight 400
              font-size 17px
              padding-bottom 0.25rem
            a
              display inline-block
              padding 0.066666665rem 0.2666666665rem 0.066666665rem 0.3rem
              border-radius 0.1333333334rem
              border 1px solid #fff
              color #fff
              margin 1px
              position relative
              font-size 13px
              &:after
                content ''
                position absolute
                top 50%
                width 0.08rem
                height 0.08rem
                border-width 2px
                border-style solid
                border-color #fff #fff transparent transparent
                transform translate(0, -50%) rotate(45deg)
    .yhj
      width 100%
      overflow hidden
      background #f5f5f5
      .van-divider
        height 0.4rem
        margin 0
        background #f5f5f5
        span
          background-image url('~assets/images/yhj.png')
          background-repeat no-repeat
          background-position center center
          background-size 100% 100%
          margin-right 0.08rem
          height 0.16rem
          width 0.16rem
      .content
        height 0.24rem
        background #fff
    .good-list
      width 100%
      overflow hidden
      .list
        width 100%
        display inline-block
        overflow hidden
        background #fff
        border-top 0.21333333rem solid #f5f5f5
        font-size 0
        .pic-main
          display inline-block
          width 100%
          /* background-image: url(../images/placeholder-bb7773481a.png); */
          overflow hidden
          position relative
          img
            width 100%
            display block
            padding 0
            margin 0
            overflow hidden
        .product
          padding 0.1rem 0 0
          overflow hidden
          position relative
          ul
            width 100%
            white-space nowrap
            overflow hidden
            overflow-x auto
            padding 0 0.13rem
            font-size 0
            list-style-type none
            li
              width 1.08rem
              margin-right 0.1rem
              display inline-block
              height 1.58rem
              overflow hidden
          /* 猜你喜欢 */
    .interested
      width 100%
      overflow hidden
      background #f5f5f5
      .van-divider
        height 0.4rem
        margin 0
        background #f5f5f5
        span
          background-image url('~assets/images/cnxh.png')
          background-repeat no-repeat
          background-position center center
          background-size 100% 100%
          margin-right 0.08rem
          height 0.16rem
          width 0.16rem
</style>

