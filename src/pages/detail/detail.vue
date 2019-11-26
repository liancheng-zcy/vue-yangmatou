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
              <span class="name">{{productDetail.name}}</span>
            </div>
            <div class="product-price">
              <span class="interval-price">
                <i>¥&nbsp;</i>
                {{productDetail.price}}
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
          <!-- sku弹出层 -->
        </div>
        <!-- 用户评价 -->

        <!-- 用户评价后续 -->
        <!-- <div class="note-list">
          <div class="note-list-content">
            <div class="note-item">
              <div class="content">
                <div class="info">
                  <div class="buyer">
                    <div class="avg">
                      <img src="http://staticontent.ymatou.com/app/userlogo/mj.jpg" />
                    </div>
                    <div class="name">我**哒</div>
                    <div class="grade lever2"></div>
                  </div>
                  <div
                    class="desc"
                  >用了几天才来评价，很不错，用了之后头发很光滑，质感值得购买，很好用，能能舒缓头发干枯毛躁。之后头发很滋润，有一股淡淡的香味挺好闻的。</div>
                </div>
                <div class="pic lazyload transition" style="opacity: 1;">
                  <img
                    src="http://pic1.ymatou.com/G02/M08/ED/FA/CgzUC13LbAKAavCZAAIV_5eYzvA76_1_1_w_l.jpeg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="note-item">
              <div class="content">
                <div class="info">
                  <div class="buyer">
                    <div class="avg">
                      <img src="http://staticontent.ymatou.com/app/userlogo/mj.jpg" />
                    </div>
                    <div class="name">我**哒</div>
                    <div class="grade lever2"></div>
                  </div>
                  <div
                    class="desc"
                  >用了几天才来评价，很不错，用了之后头发很光滑，质感值得购买，很好用，能能舒缓头发干枯毛躁。之后头发很滋润，有一股淡淡的香味挺好闻的。</div>
                </div>
                <div class="pic lazyload transition" style="opacity: 1;">
                  <img
                    src="http://pic1.ymatou.com/G02/M08/ED/FA/CgzUC13LbAKAavCZAAIV_5eYzvA76_1_1_w_l.jpeg"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="note-more">
              <span>查看全部</span>
              <span>MORE</span>
            </div>
          </div>
        </div>-->
        <noteList></noteList>
        <!-- 店铺评分 -->
        <div class="seller-wrap">
          <div class="seller-info">
            <div
              class="pic lazyload transition"
              :style="{ 'backgroundImage':' url(' + sellerInfo.avatarUrl +')'}"
            ></div>
            <div class="info">
              <div class="name">{{sellerInfo.name}}</div>
              <div class="type-coutry">
                <span class="selle-type">
                  <i>超级买手</i>
                  <i class="num hign">{{point}}</i>
                </span>
                <span class="contry">
                  <img :src="sellerInfo.countryIconUrl" />
                  {{sellerInfo.countryName}}
                </span>
              </div>
            </div>
            <div class="btn-follow">
              <i class="tag follow"></i>未关注
            </div>
          </div>
          <div class="seller-point">
            <div class="item">
              <span class="name">最近销量</span>
              <span class="val">12312</span>
            </div>
            <div class="item">
              <span class="name">粉丝</span>
              <span class="val">37703</span>
            </div>
            <div class="item">
              <span class="name">综合评分</span>
              <span class="torst hign">4.7</span>
              <span class="torst-pop hign">高于平均4.87%</span>
            </div>
            <div class="item">
              <span class="keyval">
                <i class="key">买家评分</i>
                <i class="val hign">4.8</i>
              </span>
              <span class="keyval">
                <i class="key">物流服务</i>
                <i class="val hign">4.7</i>
              </span>
              <span class="keyval">
                <i class="key">客户服务</i>
                <i class="val hign">4.8</i>
              </span>
            </div>
          </div>
          <div class="seller-btn" :seller-id="sellerInfo.id">
            <a href="//m.ymatou.com/sellerhome/forBuyerApp/sellerHome?SellerId=20927755">进店看看</a>
          </div>
        </div>
        <div class="zhengpin">
          <img src="//s1.ymatou.com/itemm/static/img/zhengpin.855bfb9.png" />
        </div>
        <div class="image-text-wrap">
          <van-divider :style="{ color: '#9999a4;', borderColor: '#ccc', padding: '0 .8rem',}">详情</van-divider>
          <div class="title">
            <span class="chinese">图文详情</span>
          </div>
          <div class="list">
            <div class="item" v-if="buyer.length > 0">
              <van-divider
                :style="{ color: '#646464;', borderColor: '#e4450c', padding: '0 .8rem',background:'#fff'}"
              >{{buyer[0].title}}</van-divider>
              <div class="text">{{buyer[0].text}}</div>

              <div
                class="pics"
                v-for="(picValue,index) in buyer[0].picList"
                :key="index + picValue"
              >
                <img
                  data-src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                  :src="picValue"
                  style="opacity: 1;"
                  class="lazyload transition"
                />
              </div>
            </div>
            <div class="item" v-if="parameter.length > 0">
              <van-divider
                :style="{ color: '#646464;', borderColor: '#e4450c', padding: '0 .8rem',background:'#fff'}"
              >{{parameter[0].title}}</van-divider>
              <div
                class="keylist"
                v-for="(keyListValue,index) in parameter[0].propertyList"
                :key="index + keyListValue"
              >
                <div class="keyitem">
                  <span class="key">{{keyListValue.key}}</span>
                  <span class="value">{{keyListValue.value}}</span>
                </div>
              </div>
            </div>
            <div class="item" v-if="introduction.length > 0">
              <van-divider
                :style="{ color: '#646464;', borderColor: '#e4450c', padding: '0 .8rem',background:'#fff'}"
              >{{introduction[0].title}}</van-divider>
              <div class="text">{{introduction[0].text}}</div>
              <div class="pics" v-for="(pic,index) in introduction[0].picList" :key="index + pic">
                <img
                  :src="pic"
                  data-src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                  style=" opacity: 1;"
                  class="lazyload transition"
                />
              </div>
            </div>
            <div class="item" v-if="handBuyer.length > 0">
              <van-divider
                :style="{ color: '#646464;', borderColor: '#e4450c', padding: '0 .8rem',background:'#fff'}"
              >{{handBuyer[0].title}}</van-divider>
              <div class="text">{{handBuyer[0].text}}</div>
              <div class="pics" v-for="(pic,index) in handBuyer[0].picList" :key="pic+index">
                <img
                  :src="pic"
                  data-src="http://pic1.ymatou.com/G01/M03/87/C0/CgzUB13VYE2AEzv1AAU5Y0_2qiA74_105_108_w_o.jpeg"
                  style=" opacity: 1;"
                  class="lazyload transition"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="likeproduct">
          <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .16rem' }">
            <span></span>猜你喜欢
          </van-divider>
          <div class="likeproduct-content">
            <CnxhList :cnxhType="cnxhType"></CnxhList>
          </div>
        </div>
      </div>
    </div>
    <div class="operate-wrap notIphoneX">
      <div class="left">
        <span class="collection">
          <i class="icon icon-collect"></i>
          <i class="text">收藏</i>
        </span>
      </div>
      <div class="right">
        <span class="addCart">加入购物车</span>
        <span class="buy">立即购买</span>
      </div>
    </div>
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
      <div class="server-pop iphonex show" v-if="showType == 'server'">
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
    <van-action-sheet v-model="infoShow" title="已选商品" class="infoShow" close-icon="close">
      <div class="sku-pop">
        <div class="sku-content">
          <div class="sku-info">
            <div class="pic" :style="{ 'backgroundImage':' url(' + productDetail.pic +')'}"></div>
            <div class="desc">
              <span class="price">
                <i>¥&nbsp;</i>
                {{productDetail.price}}
              </span>
              <span class="stock">库存充足</span>
              <span class="choosed">已选择: {{productDetail.name}}</span>
            </div>
          </div>
          <div class="spec-wrap">
            <div class="spec">
              <div class="title">规格分类</div>
              <div class="options" @click="selectedType">
                <span :class="selected == true ? 'selected':'sku'">血橙面膜-1盒=30片</span>
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
              <input type="button" value="-" onclick class="btn-minus" @click="btnMinus" />
              <span class="num">{{startNum}}</span>
              <input type="button" value="+" onclick class="btn-plus" @click="btnPlus" />
            </div>
          </div>
        </div>
        <div class="preorder-pop-layer preorder-pop-layer-active"></div>
        <div class="spec-confirm">
          <span class="half" @click="addCart(productDetail.name,productDetail.price)">加入购物车</span>
          <span class="half">立即购买</span>
        </div>
        <div class="close"></div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { get } from "utils/http.js";
import CnxhList from "components/home/CnxhList";
import noteList from "components/detail/noteList";
import Vue from "vue";
import Ad from "components/common/ad";
import Nav from "components/common/nav";
import { Swipe, SwipeItem, Lazyload, ActionSheet, Toast } from "vant";
import { SETCART, COMMITCART } from "store/car/action-type.js";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(ActionSheet)
  .use(Lazyload)
  .use(Toast);
export default Vue.extend({
  components: {
    Ad,
    Nav,
    CnxhList,
    noteList
  },
  data() {
    return {
      navType: "detail",
      current: 0,
      show: false,
      showType: "",
      infoShow: false,
      cnxhType: "detail-wrap",
      images: [],
      buyer: [],
      parameter: [],
      introduction: [],
      handBuyer: [],
      productDetail: [],
      sellerInfo: {},
      point: 0, //评分
      selected: false,
      startNum: 1,
      allPrice: 0
    };
  },
  watch: {
    //解决跳转同一个路由的情况
    $route(to, from) {
      this.$router.go(0);
    }
  },
  async mounted() {
    let productId = this.$route.params.id;
    let result = await get({
      url: `/ajax/item/api/getProductDescriptionInfo?`,
      params: {
        productId: productId
      }
    });
    let detailList = result.data.result.moduleList;
    for (let i = 0; i < detailList.length; i++) {
      if (detailList[i].title == "商品介绍") {
        this.images = detailList[i].picList;
      } else {
        this.images.push(productId.pic);
      }
      if (detailList[i].title == "买家须知") {
        this.buyer.push(detailList[i]);
      }

      if (detailList[i].title == "商品参数") {
        this.parameter.push(detailList[i]);
      }

      if (detailList[i].title == "商品介绍") {
        this.introduction.push(detailList[i]);
      }

      if (detailList[i].title == "买手介绍") {
        this.handBuyer.push(detailList[i]);
      }
    }

    this.productDetail = this.$store.state.Products.productDetail;
    this.sellerInfo = this.$store.state.Products.productDetail.sellerInfo;
    this.point = this.$store.state.Products.productDetail.sellerInfo.sellerDSR.DSRPoint.point;
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    sellerClick() {
      this.show = true;
      this.showType = "seller";
    },
    logisticsClick() {
      this.show = true;
      this.showType = "logistics";
    },
    serverClick() {
      this.show = true;
      this.showType = "server";
    },
    infoClick() {
      this.infoShow = true;
    },
    selectedType() {
      this.selected = !this.selected;
    },
    // 购物车
    btnMinus() {
      if (this.selected == false) {
        Toast("请选择型号");
      } else {
        if (this.startNum > 1) {
          this.startNum--;
        } else {
          Toast("最少选择一件");
        }
      }
    },
    btnPlus() {
      if (this.selected == false) {
        Toast("请选择型号");
      } else {
        if (this.startNum < 20) {
          this.startNum++;
        } else {
          Toast("库存已空");
        }
      }
    },
    addCart(proName, price) {
      let itemInfo = {
        proId: this.$route.params.id,
        proImg: this.productDetail.pic,
        proName: proName,
        price: price,
        sellerInfo: this.sellerInfo,
        itemAllNum: this.startNum
      };

      this.$store.dispatch("Car/" + COMMITCART, itemInfo);
      Toast("成功加入购物车");
      this.infoShow = false;
    }
  }
});
</script>

<style lang = "stylus" scoped>
/* @import '~assets/stylus/border.styl' */
*
  touch-action none
.wrap
  width 100%
  height 100%
  display flex
  flex-direction column
  .detail-wrap
    width 100%
    height 100%
    overflow hidden
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
              width 0.5rem
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
        padding 0.06rem 0.1rem
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
      /* 111111 */
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
      /* info 弹出层 */
      /*  */
      .seller-wrap
        margin-top 0.08rem
        width 100%
        padding 0.12rem 0.1rem
        overflow-x hidden
        background #fff
        .seller-info
          width 100%
          overflow-x hidden
          display flex
          align-items flex-start
          .pic
            margin-right 0.04rem
            width 0.26rem
            height 0.26rem
            overflow-x hidden
            border-radius 100%
            background-size cover
          .info
            flex 1
            padding-right 0.1rem
            overflow hidden
            .name
              width 100%
              text-overflow ellipsis
              -webkit-line-clamp 1
              display box
              overflow hidden
              white-space normal
              font-family STHeitiSC-Medium
              font-size 0.12rem
              color #292929
            .type-coutry
              width 100%
              overflow hidden
              color #999
              font-size 0.12rem
              span
                display inline-block
                margin-right 0.04rem
                line-height 0.16rem
              span i.hign
                color #e95656
              span i.num
                margin-left 0.02rem
              .contry
                font-size 0.12rem
                img
                  width 0.12rem
                  height 0.12rem
                  overflow hidden
                  display inline-block
                  float left
                  border-radius 100%
                  margin 0.04rem 0.04rem 0 0
          .btn-follow
            width 0.6rem
            overflow hidden
            display inline-block
            border 1px solid #c33
            color #c33
            border-radius 0.04rem
            text-align center
            line-height 0.24rem
            font-size 0.13rem
            .follow
              display inline-block
              width 0.085rem
              height 0.085rem
              position relative
              vertical-align text-bottom
              margin-right 0.04rem
              &:before
                content ''
                height 2px
                width 0.085rem
                display block
                background-color #c33
                border-radius 0.02rem
                position absolute
                top 0
                left 0
              &:after
                content ''
                height 0.02rem
                width 0.085rem
                display block
                background-color #c33
                border-radius 0.02rem
                position absolute
                transform rotate(90deg)
                top 0
                left 0
        .seller-point
          margin-top 0.1rem
          width 100%
          overflow hidden
          display flex
          justify-content space-between
          align-items flex-start
          font-family PingFangSC-Regular
          .item
            flex 1
            text-align center
            font-size 0
            position relative
            border-right 1px solid hsla(0, 0%, 87%, 0.5)
            height 0.55rem
            span
              font-size 0.12rem
              width 100%
              display inline-block
              overflow hidden
            .name
              color #999
              line-height 0.18rem
            .val
              color #051b2b
              padding-top 0.04rem
              line-height 0.14rem
            .hign
              color #e95656
            .torst
              font-size 0.12rem
              padding-top 0.04rem
              line-height 0.14rem
              font-family STHeitiSC-Medium
            .torst-pop
              width auto
              height 0.18rem
              /* margin-top: .04rem; */
              display inline-block
              font-size 0.12rem
              padding 0 0.02rem
              border-radius 0.03rem
              background-color #e95656
              color #fff
              position relative
              overflow inherit
              &:after
                content ''
                display inline-block
                width 0
                height 0
                border-left 0.02rem solid transparent
                border-right 0.02rem solid transparent
                position absolute
                top -5px
                left 50%
                transform translate(-50%)
            .keyval
              line-height 0.16rem
              margin-bottom 0.03rem
              font-size 0.12rem
              .key
                display inline-block
                color #666
                padding-right 0.06rem
        .seller-btn
          width 100%
          overflow hidden
          text-align center
          margin 0.15rem 0 0.08rem
          a
            font-family PingFangSC-Regular
            padding 0 0.1rem
            display inline-block
            border-radius 0.05rem
            line-height 0.24rem
            border 1px solid #f28f25
            font-size 0.12rem
            color #f28f25
            text-indent 0.14rem
            position relative
            &:after
              position absolute
              content ''
              width 0.12rem
              height 0.1rem
              background url('~assets/images/dian.png')
              background-size cover
              left 0.1rem
              top 0.08rem
      .zhengpin
        width 100%
        margin 0.08rem 0
        overflow hidden
        font-size 0
        img
          width 100%
          display inline-block
          overflow hidden
      .image-text-wrap
        background-color #fff
        margin-top 0.06rem
        .title
          font-size 0.13rem
          color #292929
          margin-bottom 0.06rem
          padding 0.08rem 0 0.08rem 0.1rem
          border-bottom 1px solid hsla(0, 0%, 87%, 0.5)
          display inline-block
          font-family PingFangSC-Medium
          width 100%
        .list
          width 100%
          overflow hidden
          padding 0 0.1rem
          .text
            word-break break-all
            color #292929
            font-size 0.12rem
            margin-bottom 0.06rem
            display inline-block
            width 100%
          .pics
            width 100%
            overflow hidden
            font-size 0
            img
              width 100%
              display inline-block
              border 0
          .keylist
            width 100%
            overflow hidden
            .keyitem
              width 100%
              overflow hidden
              display flex
              margin-bottom 0.1rem
              .key
                margin-left 0.16rem
                width 0.6rem
                overflow hidden
                font-size 0.12rem
                padding-right 0.08rem
                color #9b9b9b
                line-height 0.16rem
              .value
                flex 1
                overflow hidden
                font-size 0.12rem
                line-height 0.16rem
                word-break break-all
                color #383838
      .likeproduct
        width 100%
        overflow hidden
        .van-divider
          height 0.4rem
          margin 0
          color #646464
          background #f5f5f5
          span
            background-image url('~assets/images/cnxh2.png')
            background-repeat no-repeat
            background-position center center
            background-size 100% 100%
            margin-right 0.08rem
            height 0.16rem
            width 0.16rem
        .likeproduct-content
          width 100%
          overflow hidden
          background #f5f5f5
        /* padding 0 0.625rem */
  .operate-wrap
    width 100%
    height 0.4rem
    background-color #fff
    border-top 1px solid #dedede
    display flex
    .left
      width 40%
      height 0.4rem
      display flex
      .collection
        width 100%
        height 0.4rem
        padding-top 0.04rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        .icon
          width 0.14rem
          height 0.14rem
        .text
          color #999
        .icon-collect
          background-image url('~assets/images/baiaixin.png')
          background-size cover
    .right
      width 60%
      height 0.4rem
      display flex
    span
      width 50%
      height 0.4rem
    .addCart, .buy
      text-align center
      line-height 0.4rem
      color #fff
    .addCart
      background rgba(242, 143, 37, 0.8)
    .buy
      background #c33
</style>

<style lang="stylus" scoped>
.van-divider
  height 0.3rem
  margin 0
  background #f5f5f5
.van-action-sheet__cancel
  font-size 16px
  line-height 38px
  color #fff
  background #cc3333
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
/* .van-popup--bottom.van-popup--round */
.infoShow
  border-radius 0 0 0 0
  .van-action-sheet__content
    width 100%
    .sku-pop
      width 100%
      .sku-content
        /* margin-top: .2rem; */
        width 100%
        padding 0.1rem 0.15rem 0
        background #fff
        .sku-info
          width 100%
          display flex
          height 1.2rem
          margin-bottom 0.1rem
          .pic
            width 1.02rem
            height 1.02rem
            border 1px solid #d8d8d8
            background #d8d8d8
            border-radius 0.02rem
            background-size cover
          .desc
            flex 1
            display flex
            flex-direction column
            span
              margin-left 0.1rem
            .price
              color #c33
              height 0.16rem
              font-size 0.14rem
              line-height 0.16rem
              margin-top 0.15rem
            .stock
              color #646464
              height 0.16rem
              line-height 0.16rem
              font-size 0.12rem
              margin-top 0.1rem
            .choosed
              color #646464
              height 0.16rem
              line-height 0.16rem
              font-size 0.12rem
              margin-top 0.1rem
        .spec-wrap
          height 0.76rem
          .spec
            padding 0.08rem 0
            border-top 1px solid #dedede
            border-bottom 1px solid #dedede
            .title
              font-size 0.12rem
              color #646464
            .options
              .selected
                background-color #c33
                color #fff
                position relative
                border 1px solid #c33
                display inline-block
                padding 0 0.08rem
                line-height 0.2rem
                font-size 0.12rem
                text-align center
                border-radius 0.03rem
                margin 0.1rem 0.1rem 0 0
              .sku
                display inline-block
                background-color #fff
                padding 0 0.08rem
                line-height 0.2rem
                color #646464
                font-size 0.12rem
                text-align center
                border 1px solid #646464
                border-radius 0.03rem
                margin 0.1rem 0.1rem 0 0
        .purchase-amount
          padding 0.1rem 0
          margin-bottom 0.1rem
          border-bottom 1px solid #dedede
          height 0.54rem
          display flex
          justify-content center
          .text
            width 50%
            height 0.25rem
            line-height 0.25rem
            .title
              font-size 0.12rem
              color #646464
          .amount
            display flex
            width 50%
            height 0.25rem
            justify-content flex-end
            input
              height 0.25rem
              width 0.25rem
              border 0
            .num
              width 0.38rem
              width 0.25rem
              text-align center
              line-height 0.25rem
      .spec-confirm
        height 0.38rem
        width 100%
        display flex
        .half
          width 50%
          height 0.38rem
          line-height 0.38rem
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