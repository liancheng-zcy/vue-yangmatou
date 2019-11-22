<template>
  <div class="warp">
    <Ad v-if="!$store.state.isSticky" ref="adRef"></Ad>
    <Nav :navType="navType"></Nav>
    <div class="comDetail-wrap">
      <div class="comDetail-content">
        <!-- 用户头部信息 -->
        <section class="pv-header">
          <section class="user-pannel">
            <div
              class="user-photo"
              style="background-image: url(http://staticontent.ymatou.com/app/userlogo/mj.jpg);"
            ></div>
            <div class="user-detail">
              <div class="user-name-level">
                <span class="user-name">最好的天使</span>
                <span class="user-level user-level-l">
                  V
                  <i>2</i>
                </span>
              </div>
            </div>
            <div class="user-focus" style="display: none;">
              <div class="btn-focus focused hide">
                <span class="focus-text">已关注</span>
              </div>
              <div class="btn-focus unfocused">
                <span class="focus-text">关注</span>
              </div>
            </div>
          </section>
        </section>
        <section class="note-pannel">
          <!--普通/视频文本-->
          <div class="detail-text">
            <p>种草很久，下单后，邮寄平台鉴定，是正品哦！靠谱的店家，以后锁定你家啦！</p>
          </div>
          <!--图片区域(普通)-->
          <div class="new-pic-box">
            <div class="img-wrapper">
              <img
                class
                data-src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                style="opacity: 1;"
              />
            </div>
          </div>
          <!--图片区域(普通)-->
          <div class="new-pic-box">
            <div class="img-wrapper">
              <img
                class
                data-src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                style="opacity: 1;"
              />
            </div>
          </div>
        </section>
        <!-- 商家信息 -->
        <section class="involved-pannel" style="display: block;">
          <div class="invo-main">
            <!--买手信息-->
            <div class="seller-info">
              <div class="seller-photo"></div>
              <div class="seller-detail">
                <div class="seller-name">
                  购自于洋码头买手:
                  <span>优集馆海外专营店</span>
                </div>
              </div>
            </div>
            <!--商品信息-->
            <div class="goods-info">
              <div class="goods-pic">
                <img
                  class
                  data-src="http://pic1.ymatou.com/G02/shangou/M09/39/D2/CgzUDF2NmxuARDkkAAY1itlSlJQ627_1_1_n_w_l.jpg"
                  src="http://pic1.ymatou.com/G02/shangou/M09/39/D2/CgzUDF2NmxuARDkkAAY1itlSlJQ627_1_1_n_w_l.jpg"
                  style="opacity: 1;"
                />
              </div>
              <div class="goods-detail">
                <div class="goods-name">OZWEAR UGG豆豆鞋 防泼水羊毛内里内增高女鞋多色OB300/OZW145</div>
                <div class="goods-price">
                  <div class="price">
                    <i>¥</i>
                    249
                  </div>
                  <div class="involved-collect-btn collect-btn version-1" data-iscollect="false">
                    <i class="like-icon-base like-icon-off"></i>收藏
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 时间 -->
        <div class="publication">
          <div class="c-right">
            <span class="location"></span>
            <span class="date">1天前</span>
          </div>
        </div>
        <!-- 评论 -->
        <section class="discuss-pannel" id="discussPannel" style="display: block;">
          <div class="discuss-title">
            <span class="title-text">评论</span>
          </div>
          <div class="input-box">
            <div class="user-photo-wrapper">
              <img class="user-photo" src="//img.ymatou.com/portal/images/user_02.png" alt />
            </div>
            <div class="input-button">你长这么好看就给我评论吧~</div>
          </div>
          <div class="input-mask" style="display:none">
            <div class="input-body">
              <input class="input-comment" type="text" />
              <div class="sent-comment" type="button">发送</div>
            </div>
          </div>
        </section>
        <!-- 相似商品 -->
        <section class="related-goods-pannel" style="display: block;">
          <div class="rg-title">
            <span>相似商品</span>
          </div>
          <div class="rg-list">
            <div class="scroll-wrapper">
              <ul>
                <li class="product">
                  <div class="product-pic-body">
                    <img
                      class="product-pic"
                      data-src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      style="opacity: 1;"
                    />
                  </div>
                  <div class="product-tip">
                    <p class="product-title">黑五 澳洲Ozwear花语羊毛豆豆鞋O275/Divanna小蜜蜂豆豆鞋DA0032</p>
                    <span>
                      <em>¥</em> 238
                    </span>
                  </div>
                </li>
                <li class="product">
                  <div class="product-pic-body">
                    <img
                      class="product-pic"
                      data-src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      style="opacity: 1;"
                    />
                  </div>
                  <div class="product-tip">
                    <p class="product-title">黑五 澳洲Ozwear花语羊毛豆豆鞋O275/Divanna小蜜蜂豆豆鞋DA0032</p>
                    <span>
                      <em>¥</em> 238
                    </span>
                  </div>
                </li>
                <li class="product">
                  <div class="product-pic-body">
                    <img
                      class="product-pic"
                      data-src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      style="opacity: 1;"
                    />
                  </div>
                  <div class="product-tip">
                    <p class="product-title">黑五 澳洲Ozwear花语羊毛豆豆鞋O275/Divanna小蜜蜂豆豆鞋DA0032</p>
                    <span>
                      <em>¥</em> 238
                    </span>
                  </div>
                </li>
                <li class="product">
                  <div class="product-pic-body">
                    <img
                      class="product-pic"
                      data-src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
                      style="opacity: 1;"
                    />
                  </div>
                  <div class="product-tip">
                    <p class="product-title">黑五 澳洲Ozwear花语羊毛豆豆鞋O275/Divanna小蜜蜂豆豆鞋DA0032</p>
                    <span>
                      <em>¥</em> 238
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Ad from "components/common/ad.vue";
import Nav from "components/common/nav";
import BScroll from "better-scroll";
export default Vue.extend({
  data() {
    return {
      navType: "communityDetail"
    };
  },
  components: {
    Ad,
    Nav
  },
  mounted() {
    let bScroll = new BScroll(`.comDetail-wrap`, {
      pullUpLoad: true,
      probeType: 2,
      preventDefault:false
    });
    bScroll.on("scroll", () => {
     
      if (bScroll.y < -50) {
        this.$store.commit("setSticky", true);
      } else {
        this.$store.commit("setSticky", false);
      }
    });
   
  }
});
</script>

<style lang = 'stylus' scoped>
.warp
  height 100%
  widht 100%
  display flex
  flex-direction column
  .comDetail-wrap
    width 100%
    height 100%
    overflow hidden
    .comDetail-content
      width 100%
      background #f1f1f1
      .pv-header
        background #ffffff
        padding-left 0.1rem
        padding-right 0.1rem
        .user-pannel
          height 0.5rem
          display flex
          flex-flow row nowrap
          justify-content flex-start
          align-items center
          .user-photo
            width 0.34rem
            height 0.34rem
            position relative
            border-radius 50%
            background-size cover
            background-repeat no-repeat
            background-position 50% 50%
            border 1px solid #e6e6e6
          .user-detail
            flex 1
            margin-left 0.05rem
            .user-name-level
              .user-name
                font-size 0.12rem
                color #383838
                margin-right 0.04rem
              .user-level
                font-size 0.1rem
                color #f28f25
                font-weight bold
                i
                  font-weight normal
                  font-style italic
                  font-size 0.12rem
      .note-pannel
        background #ffffff
        padding-top 0.08rem
        .detail-text
          margin 0 0.1rem 0
          font-size 0.14rem
          p
            line-height 0.2rem
            letter-spacing 0.01rem
            color #383838
            word-break break-word
            white-space pre-wrap
        .new-pic-box
          padding 0 0.1rem
          .img-wrapper
            margin-top 0.15rem
            min-height 3.2rem
            width 100%
            background url('~assets/images/ybg.png') center center no-repeat
            background-size contain
            img
              display block
              width 100%
      .involved-pannel
        background #ffffff
        .invo-main
          border-radius 0.04rem
          margin 0 0.11rem
          padding-bottom 0.06rem
          .seller-info
            display flex
            flex-flow row nowrap
            justify-content flex-start
            align-items center
            padding-top 0.15rem
            .seller-photo
              position relative
              width 0.1rem
              height 0.12rem
              background url('~assets/images/gouwu.png') center center no-repeat
              background-size auto 100%
            .seller-detail
              flex 1
              margin-left 0.06rem
              color #646464
              font-size 0.1rem
              line-height 0.16rem
              seller-name
                color #9b9b9b
              span
                margin-left 0rem
                color #3cb5ff
          .goods-info
            display flex
            flex-flow row nowrap
            justify-content flex-start
            align-items flex-start
            margin 0.1rem 0 0
            background #fff
            box-shadow 0rem 0.013rem 0.08rem 0.013rem rgba(199, 199, 199, 0.5)
            .goods-pic
              width 0.94rem
              height 0.94rem
              background url('~assets/images/ybg.png') center center no-repeat
              background-size contain
              img
                width 100%
                height 100%
            .goods-detail
              flex 1
              padding 0.13rem 0.1rem 0.12rem
              .goods-name
                font-size 0.12rem
                font-weight 500
                line-height 0.18rem
                height 0.35rem
                color #383838
                display -webkit-box
                white-space normal
                overflow hidden
                text-overflow ellipsis
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                word-wrap break-word
                word-break break-all
              .goods-price
                margin-top 0.15rem
                display flex
                flex-flow row nowrap
                justify-content space-between
                align-items flex-start
                width 100%
                font-size 0.1rem
                font-weight 500
                color #646464
                line-height 0.14rem
                .price
                  flex 1
                  font-size 0.12rem
                  color #c33
                .involved-collect-btn
                  position relative
                  .like-icon-base
                    display inline-block
                    width 0.14rem
                    height 0.12rem
                    position relative
                    right 0.05rem
                    top 0.01rem
                .version-1
                  .like-icon-off
                    background-image url('~assets/images/baiaixin.png')
                  .like-icon-base
                    background-repeat no-repeat
                    background-size 100% 100%
                    background-position 0 0
                    display inline-block
                    vertical-align middle
      .publication
        background #fff
        padding 0.1rem 0.1rem 0.1rem
        color #9b9b9b
        font-size 0.1rem
        .c-right
          text-align right
          .location
            margin-right 0.05rem
            font-size 0.1rem
      .discuss-pannel
        margin-top 0.08rem
        background #ffffff
        .discuss-title
          height 0.36rem
          line-height 0.36rem
          font-size 0.14rem
          font-weight 600
          letter-spacing 0.02rem
          color #292929
          position relative
          border-bottom 1px solid #eee
          margin-left 0.1rem
        .input-box
          display flex
          align-items center
          padding 0.15rem 0.1rem 0.13rem
          border-bottom 1px solid #eee
          .user-photo-wrapper
            position relative
            width 0.255rem
            height 0.255rem
            margin-right 0.04rem
            .user-photo
              width 100%
              height 100%
              object-fit cover
              border 0.01rem solid #e6e6e6
              border-radius 50%
          .input-button
            color #9b9b9b
            width 2.67rem
            height 0.34rem
            line-height 0.3rem
            padding 0 0.05rem
            background #f8f8f8
            border-radius 0.04rem
      .related-goods-pannel
        background: #ffffff;
        margin-top: .08rem;
        .rg-title 
          height: .36rem;
          line-height: .36rem;
          font-size: .14rem;
          font-weight: 600;
          letter-spacing: .02rem;
          color: #383838;
          position: relative;
          span 
            padding-left: .08rem;
        .rg-list 
          padding-bottom: .11rem;
          overflow: hidden;
          .scroll-wrapper 
            overflow-x: auto;
            overflow-y: hidden;
            ul 
              width: 100%;
              white-space: nowrap;
              .product:first-child 
                 margin-left: .08rem;
              .product 
                position: relative;
                display: inline-block;
                width: 1.12rem;
                margin-right .05rem
                vertical-align: top;
                .product-pic-body 
                  width: 1.12rem;
                  height: 1.12rem;
                  background: url('~assets/images/ybg.png') center center no-repeat;
                  background-size: contain;
                  overflow: hidden;
                  .product-pic 
                    width: 1.12rem;
                .product-tip 
                  text-align: left;
                  .product-title 
                    font-size: .1rem;
                    color: #383838;
                    line-height: .15rem;
                    display: -webkit-box;
                    white-space: normal;
                    word-break: break-word;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-wrap: break-word;
                    word-break: break-all;
                    margin: .05rem 0 .08rem;
                  span 
                    display: block;
                    font-size: .13rem;
                    height: .14rem;
                    line-height: .15rem;
                    color: #c33;







              





    
</style>