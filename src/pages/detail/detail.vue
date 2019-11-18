<template>
  <div class="wrap">
    <div class="detail-wrap">
      <div class="detail-content">
        <Ad></Ad>
        <!-- nav -->
        <Nav :navType="navType"></Nav>
        <div class="swiper-wrap">
          <div class="product-pic-container">
            <van-swipe @change="onChange">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
              <div class="custom-indicator" slot="indicator">{{ current + 1 }} / {{images.length}}</div>
            </van-swipe>
          </div>
        </div>
        <div class="product-info">
          <div class="productinfo-content">
            <div class="product-name">
              <span class="tag">包邮包税</span>
              <span class="name">【30片】韩国FHD血橙面膜急救补水保湿滋养睡眠修护舒缓收缩毛孔</span>
            </div>
            <div class="product-price">
              <span class="interval-price">
                <i>¥&nbsp;</i>75
              </span>
            </div>

            <div class="product-activity">
              <span class="name">活动价￥65，黑五狂欢价</span>
              <span class="day">11月22日00:00准时开始</span>
            </div>
          </div>

          <div class="seller-coupon">
            <div class="coupon-btn" @click="sellerClick">
              <div class="tag"></div>
              <div class="list">
                <span class="item">
                  <i class="tag-before"></i>满1999减60
                  <i class="tag-after"></i>
                </span>
              </div>
            </div>
            <!-- 弹出层 -->
            <van-action-sheet v-model="show" cancel-text="取消">
              <!-- 买手 -->
              <div class="coupon-pop iphonex" v-if="showType == 'seller'">
                <div class="title">买手优惠券</div>
                <div class="list">
                  <div class="item">
                    <div class="item-cart">
                      <div class="price">
                        ¥
                        <i>60</i>
                      </div>
                      <div class="rule">满1999元可用</div>
                    </div>
                    <div class="info">
                      <div class="name">
                        <span>买手券</span>限买手(小璐全球购)商品
                      </div>
                      <div class="time">2019.11.22-2019.11.25</div>
                      <div class="info-btn">点击领取</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 物流 -->
              <div class="logistics-pop iphonex show" v-if="showType == 'logistics'">
                <div class="item">
                  <div class="name">虚拟发货</div>
                  <div class="desc">支付成功且买手接单后，将自动闪电发货</div>
                </div>
                <div class="pic">
                  <img src="//s1.ymatou.com/itemm/static/img/log-pinyou.e8056fe.png" />
                </div>
              </div>
              <!-- 服务 -->
              <div class="server-pop iphonex show"  v-if="showType == 'server'">
                <div class="server-content">
                  <div class="title">服务说明</div>
                  <div class="list">
                    <div class="service-item">
                      <span class="name tag_jyps">假一赔三</span>
                      <div class="content">100%海外正品，杜绝假货，让您无忧购物</div>
                    </div>
                    <div class="service-item">
                      <span class="name tag_btth">售后无忧</span>
                      <div class="content">商品在退货时买家只需寄回国内退货仓，无需寄回海外。</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 商品信息 -->
            </van-action-sheet>
          </div>
        </div>
        <div class="logistics-freight-server">
          <div class="logistics-wrap" @click="logisticsClick">
            <div class="logistics-info">
              <span class="tag">物流</span>
              <span class="value">
                拼邮
                <i>，韩国发货</i>
              </span>
            </div>
            <div class="logistic-time"></div>
          </div>
          <div class="freight-wrap">
            <span class="tag">运费</span>
            <span class="value">包邮</span>
          </div>
          <div class="server-wrap" @click="serverClick">
            <span class="tag-server">假一赔三</span>
            <span class="tag-server">售后无忧</span>
          </div>
        </div>
        <div class="sku-wrap">
          <div class="sku-btn" @click="infoClick">
            <span class="tag">已选</span>
            <span class="value">血橙面膜-1盒=30片</span>
          </div>
          <van-action-sheet v-model="infoShow" cancel-text="关闭">
            <div class="sku-pop">
              <div class="sku-content">
                <div class="sku-info">
                  <div
                    class="pic"
                    style="background-image: url(&quot;http://pic1.ymatou.com/G02/shangou/M0A/B6/8A/CgzUDF1aPPaAV6rCAAXu_CdOiIE019_1_1_n_w_lb.jpg&quot;);"
                  ></div>
                  <div class="desc">
                    <span class="price">
                      <i>¥&nbsp;</i>75
                    </span>
                    <span class="stock">库存充足</span>
                    <span class="choosed">已选择: 血橙面膜-1盒=30片</span>
                  </div>
                </div>
                <div class="spec-wrap">
                  <div class="spec">
                    <div class="title">规格分类</div>
                    <div class="options">
                      <span class="sku" >血橙面膜-1盒=30片</span>
                      <!-- :class="selected" -->
                    </div>
                  </div>
                </div>
                <div class="purchase-amount">
                  <div class="text">
                    <span class="title">
                      购买数量
                      <br />
                    </span>
                  </div>
                  <div class="amount">
                    <input type="button" value="-" onclick class="btn-minus" />
                    <span class="num">1</span>
                    <input type="button" value="+" onclick class="btn-plus" />
                  </div>
                </div>
              </div>
              <div class="preorder-pop-layer preorder-pop-layer-active"></div>
              <div class="spec-confirm">
                <span class="half">加入购物车</span>
                <span class="half">立即购买</span>
              </div>
              <div class="close"></div>
            </div>
          </van-action-sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Ad from "components/common/ad";
import Nav from "components/common/nav";
import { Swipe, SwipeItem, Lazyload, ActionSheet } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(ActionSheet)
  .use(Lazyload);
export default Vue.extend({
  data() {
    return {
      navType: "detail",
      current: 0,
      show: false,
      showType:'',
      infoShow: false,
      images: [
        "http://pic1.ymatou.com/G02/M06/DE/4C/CgzUDF3OS9uAQFB1AAHLBy1_jzE039_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/57/C4/CgzUB13MB-OAbx2FAAJH18ZGof4731_375_128_o.png",
        "http://pic1.ymatou.com/G01/M00/5D/18/CgzUCV3NOHGAd25eAAPqbqJGD2I375_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/5D/DF/CgzUCF3NUjqAejmKAANqovF1BC0297_375_128_o.png",
        "http://pic1.ymatou.com/G01/M01/5E/4C/CgzUB13NXSmAcTHOAALLSLHFNLo405_375_128_o.jpg",
        "http://pic1.ymatou.com/G01/M01/5E/4F/CgzUB13NXbuAbcjwAAFdteowL-E310_375_128_o.jpg",
        "http://pic1.ymatou.com/G01/M03/64/C9/CgzUBl3Or56AdkrkAAM-dZSqkrE826_375_128_o.png",
        "http://pic1.ymatou.com/G01/M02/5E/79/CgzUB13NYmGAaBkgAAQHFIEswMw461_375_128_o.png"
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    sellerClick() {
      this.show = true;
      this.showType = 'seller'
    },
     logisticsClick(){
     this.show = true;
      this.showType = 'logistics'
    },
    serverClick(){
     this.show = true;
     this.showType = 'server'
    },
    infoClick() {
      this.infoShow = true;
    },
   
  },
  components: {
    Ad,
    Nav
  }
});
</script>

<style lang = "stylus" scoped>
/* @import '~assets/stylus/border.styl' */
.wrap
  width 100%
  height 100%
  .detail-wrap
    width 100%
    height 100%
    overflow auto
    .detail-content
      width 100%
      .swiper-wrap
        width 100%
        .product-pic-container
          width 100%
          height 3.11rem
          overflow hidden
          position relative
          background-color #fff
          .van-swipe
            position relative
            .van-swipe__track .van-swipe-item img
              width 100%
              height 3.11rem
            .custom-indicator
              width 0.4rem
              height 0.16rem
              background #252525
              color #fff
              text-align center
              line-height 0.16rem
              margin-right 0.05rem
              border-radius 0.08rem
              position absolute
              bottom 0
              right 0
      .product-info
        width 100%
        overflow hidden
        background-color #fff
        padding 0 0 0 0.1rem
        border-bottom 0.15rem solid #f1f1f1
        .van-action-sheet__cancel
          font-size 16px
          line-height 38px
          color #fff
          background #cc3333
        .productinfo-content
          padding 0.08rem 0.1rem 0.08rem 0
          .product-name
            width 100%
            height 0.36rem
            display inline-block
            line-height 0.18rem
            font-family STHeitiSC-Medium
            font-size 0
            text-overflow ellipsis
            -webkit-line-clamp 2
            display box
            overflow hidden
            white-space normal
            .tag
              display inline-block
              border 1px solid #c33
              font-size 0.12rem
              color #c33
              padding 0 0.04rem
              border-radius 0.05rem
              margin-right 0.08rem
              line-height 0.13rem
              vertical-align middle
            .name
              font-size 0.14rem
              display inline
              letter-spacing 1px
              color #292929
              vertical-align middle
          .product-price
            width 100%
            overflow hidden
            margin-top 0.02rem
            line-height 0.18rem
            .interval-price
              font-family STHeitiSC-Medium
              color #c33
              vertical-align middle
        .product-activity
          margin-top 0.02rem
          display inline-block
          font-size 0.14rem
          line-height 0.18rem
          height 0.18rem
          overflow hidden
          text-align left
          font-family PingFangSC-Regular
          .name
            padding-left 0.04rem
            padding-right 0.04rem
            border-radius 0.02rem
            background #c33
            font-size 0.13rem
            line-height 0.18rem
            height 0.18rem
            color #fff
            max-width 1.55rem
            text-overflow ellipsis
            -webkit-line-clamp 1
            display -ms-flexbox
            overflow hidden
            white-space normal
            float left
          .day
            max-width 1.16rem
            color #c33
            position relative
            text-indent 0.04rem
            line-height 0.18rem
            height 0.2rem
            border-bottom 0.04rem solid #c33
            /* margin-left: -.02rem; */
            font-size 0.12rem
            &:after
              position absolute
              left -0.02rem
              top 0
              content ''
              width 0.1rem
              height 0.18rem
              background-image url('~assets/images/jiao.png')
              background-size cover
        .seller-coupon
          overflow hidden
          background #fff
          .coupon-btn
            padding 0.1rem 0.1rem 0.1rem 0
            overflow hidden
            display flex
            border-top 1px solid #dedede
            position relative
            &:after
              right 0.1rem
              top 50%
              content ''
              display block
              position absolute
              width 0.08rem
              height 0.08rem
              border-width 1px
              border-style solid
              border-color #9b9b9b #9b9b9b transparent transparent
              transform translateY(-50%) rotate(45deg)
            .tag
              display inline-block
              height 0.13rem
              width 0.2rem
              margin-right 0.04rem
              margin-top 0.05rem
              background-image url('~assets/images/juan.png')
              background-size cover
            .list
              display inline-block
              flex 1
              white-space nowrap
              overflow hidden
              overflow-x auto
              margin-right 0.1rem
            .item
              font-size 0.12rem
              display inline-block
              line-height 0.14rem
              border 1px solid #e95656
              color #e95656
              padding 0 0.08rem
              margin-right 0.04rem
              position relative
              z-index 1
          /* 弹出层 */
          .van-popup--bottom.van-popup--round
            border-radius 0 0 0 0
            .van-action-sheet__content
              width 100%
              .coupon-pop
                background-color #fff
                border-top 2px solid #000
                .title
                  width 100%
                  line-height 0.14rem
                  font-size 0.12rem
                  color #292929
                  padding 0.1rem
                .list
                  width 100%
                  overflow hidden
                  padding 0 0.1rem
                  max-height 0.87rem
                  overflow-y auto
                .list .item
                  width 100%
                  overflow hidden
                  height 0.76rem
                  display flex
                  margin-bottom 0.1rem
                  font-family PingFangSC-Regular
                  background #fff
                  position relative
                  .item-cart
                    width 0.89rem
                    overflow hidden
                    height 100%
                    background-color #ffa968
                    text-align center
                    color #fff
                    .price
                      margin-top 0.09rem
                      i
                        font-size 0.28rem
                    .rule
                      font-size 0.12rem
                  .info
                    flex 1
                    height 100%
                    padding-left 0.08rem
                    position relative
                    .name
                      width 100%
                      font-size 0.12rem
                      text-overflow ellipsis
                      -webkit-line-clamp 2
                      display -ms-flexbox
                      overflow hidden
                      white-space normal
                      line-height 0.15rem
                      margin-top 0.1rem
                      margin-bottom 0.15rem
                      span
                        background-color #ffa968
                        border-radius 0.02rem
                        color #fff
                        padding 0 0.04rem
                        margin-right 0.04rem
                        font-size 0.12rem
                    .time
                      font-size 0.12rem
                      color #666
                      display inline-block
                    .info-btn
                      position absolute
                      right 0
                      bottom 0.12rem
                      border 1px solid #e95656
                      padding 0.02rem 0.04rem
                      border-radius 0.06rem
                      font-size 0.12rem
                      color #e95656
                      background #fff
              .logistics-pop.iphonex
                background-color #fff
                .item
                  padding 0.15rem
                  overflow hidden
                  text-align center
                  .name
                    display inline-block
                    font-size 0.14rem
                    color #292929
                    position relative
                    &:before
                      right -0.5rem
                    &:before
                      left -0.6rem
                    &:before
                      position absolute
                      content ''
                      width 0.5rem
                      height 1px
                      background-color #e95656
                      top 50%
                    &:after
                      position absolute
                      content ''
                      width 0.5rem
                      height 1px
                      background-color #e95656
                      top 50%
                  .desc
                    padding-top 0.1rem
                    font-size 0.12rem
                    color #666
                    width 100%
                    display inline-block
                .pic
                  width 100%
                  overflow hidden
                  margin-bottom 0.15rem
                  img
                    display inline-block
                    width 100%
              .server-pop
                background-color #fff
                .server-content
                  padding 0.15rem 0
                  overflow hidden
                  text-align center
                  .title
                    display inline-block
                    font-size 0.14rem
                    color #292929
                    position relative
                    &:before
                      right -0.5rem
                    &:before
                      left -0.6rem
                    &:before
                      position absolute
                      content ''
                      width 0.5rem
                      height 1px
                      background-color #e95656
                      top 50%
                    &:after
                      position absolute
                      content ''
                      width 0.5rem
                      height 1px
                      background-color #e95656
                      top 50%
                  .list
                    width 100%
                    text-align left
                    max-height 1.1rem
                    overflow hidden
                    overflow-y auto
                    padding 0 0.15rem
                    .service-item
                      padding 0 0 0.1rem
                      line-height 0.18rem
                      overflow hidden
                      .name
                        padding-left 0.15rem
                        font-size 0.12rem
                        color #383838
                        position relative
                        &:after
                          position absolute
                          top 0.006rem
                          left 0
                          content ''
                          width 0.14rem
                          height 0.14rem
                          vertical-align middle
                      .tag_btth:after
                        background-image url('~assets/images/pei.png')
                        background-size cover
                      .name.tag_jyps:after
                        background-image url('~assets/images/kefu.png')
                        background-size cover
                      .content
                        padding 0 0.15rem
                        display inline-block
                        width 100%
                        font-size 0.12rem
                        color #9b9b9b
      .logistics-freight-server
        width 100%
        overflow hidden
        margin-bottom 0.1rem
        background #fff
        .logistics-wrap
          margin-left 0.1rem
          overflow hidden
          padding 0.1rem 0.1rem 0.1rem 0
          position relative
          &:after
            right 0.1rem
            top 50%
            content ''
            display block
            position absolute
            width 0.08rem
            height 0.08rem
            border-width 1px
            border-style solid
            border-color #9b9b9b #9b9b9b transparent transparent
            -webkit-transform translateY(-50%) rotate(45deg)
            transform translateY(-50%) rotate(45deg)
          .logistics-info
            width 100%
            overflow hidden
            font-family STHeitiSC-Medium
            color #292929
            font-size 0.12rem
            span
              display inline-block
              line-height 0.16rem
            .tag
              width 0.34rem
              overflow hidden
              float left
            .value
              padding-bottom 0.06rem
          .logistic-time
            width 100%
            overflow hidden
            font-size 0.12rem
            color #999
            margin-left 0.28rem
            padding-bottom 0.03rem
            border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
      .freight-wrap
        margin-left 0.1rem
        padding 0.1rem 0.1rem 0.1rem 0
        width 100%
        overflow hidden
        font-family STHeitiSC-Medium
        color #292929
        font-size 0.12rem
        border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
        position relative
        .tag
          width 0.34rem
          overflow hidden
          float left
          margin-right 0.05rem
      .server-wrap
        margin-left 0.1rem
        padding 0.06rem 0.06rem
        text-overflow ellipsis
        -webkit-line-clamp 1
        display -ms-flexbox
        overflow hidden
        white-space normal
        white-space nowrap
        background #f8f8f8
        overflow-x auto
        span
          display inline-block
          overflow hidden
          font-size 0.12rem
          margin-right 0.12rem
          padding-left 0.15rem
          position relative
          line-height 0.14rem
          &:after
            position absolute
            content ''
            width 0.12rem
            height 0.12rem
            background-image url('~assets/images/dui.png')
            background-size cover
            left 0
            top 60%
            margin-top -0.01rem
            transform translateY(-50%)
      .sku-wrap
        font-family PingFangSC-Regular
        padding-left 0.1rem
        background #fff
        .sku-btn
          width 100%
          overflow hidden
          height 0.34rem
          background #fff
          position relative
          font-family STHeitiSC-Medium
          &:after
            right 0.1rem
            top 50%
            content ''
            display block
            position absolute
            width 0.08rem
            height 0.08rem
            border-width 1px
            border-style solid
            border-color #9b9b9b #9b9b9b transparent transparent
            transform translateY(-50%) rotate(45deg)
          span
            display inline-block
            overflow hidden
            color #292929
            line-height 0.34rem
            font-size 0.12rem
          .tag
            padding 0 0.1rem 0 0.12rem
        .van-popup--bottom.van-popup--round
          border-radius 0 0 0 0
          .van-action-sheet__content
            width 100%
            .sku-pop
              width 100%
              .sku-content
                /* margin-top: .2rem; */
                width: 100%;
                padding: .1rem .15rem 0;
                background: #fff;
                .sku-info
                  width: 100%;
                  display flex
                  height: 1.02rem;
                  margin-bottom: 0.1rem;
                  .pic
                    width: 1.02rem;
                    height: 1.02rem;
                    border: 1px solid #d8d8d8;
                    background: #d8d8d8;
                    border-radius: .02rem;
                    background-size: cover;
                  .desc
                    flex 1
                    display flex
                    flex-direction column
                    span
                      margin-left .1rem
                    .price
                      color: #c33;
                      height .16rem
                      font-size .14rem
                      line-height .16rem
                      margin-top .15rem
                    .stock 
                      color: #646464;
                      height .16rem
                      line-height .16rem
                      font-size .12rem
                      margin-top .1rem
                    .choosed
                      color: #646464;
                      height .16rem
                      line-height .16rem
                      font-size .12rem
                      margin-top .1rem
                .spec-wrap
                  height .76rem
                  .spec
                    padding: .08rem 0;
                    border-top: 1px solid #dedede;
                    border-bottom: 1px solid #dedede;
                    .title
                      font-size: .12rem;
                      color: #646464;
                    .options
                      .selected
                        background-color: #c33;
                        color: #fff;
                        border: none;
                        position: relative;
                        border: 1px solid #c33;
                      .sku
                        display: inline-block;
                        background-color: #fff;
                        padding: 0 .08rem;
                        line-height: .2rem;
                        color: #646464;
                        font-size: .12rem;
                        text-align: center;
                        border: 1px solid #646464;
                        border-radius: .03rem;
                        margin: .1rem .1rem 0 0;
                .purchase-amount 
                  padding: .1rem 0;
                  margin-bottom: .1rem;
                  border-bottom: 1px solid #dedede;
                  height .54rem
                  display flex
                  justify-content center
                  .text
                    width 50%
                    height .25rem
                    line-height .25rem
                    .title
                      font-size: .12rem;
                      color: #646464;
                  .amount
                    display flex
                    width 50%
                    height .25rem
                    justify-content flex-end
                    input
                      height .25rem
                      width .25rem
                    .num
                      width .38rem
                      width .25rem
                      text-align center
                      line-height .25rem
              .spec-confirm 
                margin-left .1rem
                height .38rem
                width 100%
                display flex
                .half
                  width 50%
                  height .38rem
                  line-height .38rem
                  text-align center
                  color #fff
                span:nth-child(1)
                  background #f28f25
                span:nth-child(2)
                  background #cc3333
                                  



          .van-action-sheet__cancel
            font-size 16px
            line-height 38px
            color #fff
            background #c33

</style>