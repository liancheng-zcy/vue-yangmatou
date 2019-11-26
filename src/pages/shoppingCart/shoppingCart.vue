<template>
  <div class="warp">
    <Nav :navType="navType"></Nav>
    <div class="shopingCar-wrap">
      <div class="shopingCar-content">
        <div class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>
        <div class="shop">
          <div class="empty" v-if="false">
            <img src="~assets/images/bgCar.png" alt />
            <span>购物车空空如也，赶快去选购吧...</span>
          </div>
          <div class="shopItem-wrap">
            <div class="seller" v-for="(sellerVlue,index) in cartInfo" :key="sellerVlue.id">
              <div class="seller-info">
                <div class="checkbox-box">
                  <input
                    type="checkbox"
                    :sellerId="index"
                    class="sellerChecked"
                    @click="sellerChecked($event,index)"
                  />
                  <!-- <i class = "switch" :class="{'active':isSellerchecked}" @click="sellerChecked($event,index,isSellerchecked)"></i> -->
                  <!-- <van-checkbox v-model="Sellerchecked"></van-checkbox> -->
                </div>
                <div class="info">
                  <div class="head-img">
                    <span
                      class="img lazyload transition"
                      :style="{ 'backgroundImage':' url(' + sellerVlue[0].sellerInfo.avatarUrl +')'}"
                    ></span>
                  </div>
                  <div class="desc">
                    <span class="name">{{sellerVlue[0].sellerInfo.name}}</span>
                    <span class="country">
                      <img :src="sellerVlue[0].sellerInfo.countryIconUrl" class="img" />
                      {{ sellerVlue[0].sellerInfo.countryName}}
                    </span>
                  </div>
                </div>
                <div class="spacing"></div>
              </div>
              <!-- <van-checkbox-group v-model="result" ref="checkboxGroup" @change = "checkboxGroupChange"> -->
              <div class="promotion-wrap" v-for="proValue in sellerVlue" :key="proValue.proId">
                <div class="promotion">
                  <div class="product-list">
                    <div class="product">
                      <div class="content">
                        <span class="checkbox-box">
                          <input
                            type="checkbox"
                            :sellerId="proValue.sellerInfo.id"
                            :productId="proValue.proId"
                            @click="proChecked($event,proValue.sellerInfo.id,cartInfo)"
                            class="proRef"
                            ref="proRef"
                          />
                          <!-- <i :class="proitemActive ? 'switch' : 'active'" @click="proitemChecked"></i> -->
                          <!-- <van-checkbox  :name="proValue.proId" checked-color = "#cc3333"></van-checkbox> -->
                        </span>
                        <div class="prod-warp">
                          <div class="prod-info">
                            <div class="pic">
                              <img
                                class="lazyload transition"
                                :src="proValue.proImg"
                                style="opacity: 1;"
                              />
                            </div>
                            <div class="desc">
                              <div class="name">
                                <i class="tag-taxes">包邮包税</i>
                                <span>{{proValue.proName}}</span>
                              </div>
                              <div class="sku">规格分类:30片 1盒</div>
                              <div class="preadd-desc">黑五狂欢价 8小时后恢复原价</div>
                              <div class="serve">
                                <span class="tag-py">拼邮</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="operation">
                          <div class="price">¥ {{proValue.price}}</div>

                          <div class="tag-price tag-activity">活动价</div>
                          <div class="amount">
                            <span class="mini disabled">一</span>
                            <span class="num">{{proValue.itemAllNum}}</span>
                            <span class="plus">+</span>
                          </div>
                          <div
                            module_name="delete_product"
                            module_index
                            sproductid="p1446299"
                            class="delete"
                          >
                            <i></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- </van-checkbox-group> -->
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
    <div class="operate-wrap">
      <!-- <div class="operate notIphoneX">
        <div class="btn-choose">
          <span class="checkbox-box">
            <i class="switch active"></i>
          </span>
          <span class="text">全选</span>
        </div>
        <div class="desc">
          <span class="price">
            总价：
            <i>¥ 0</i>
          </span>
          <span class="carriage">
            (
            不含运费)
          </span>
        </div>
        <div class="btn-goorder disabled">
          去结算
          <i>1</i>
        </div>
      </div>-->
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
        <van-checkbox v-model="Allchecked" checked-color="#cc3333" @click="checkedAll">全选</van-checkbox>
        <!-- <span slot="tip">
          你的收货地址不支持同城送,
          <span>修改地址</span>
        </span>-->
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import Nav from "components/common/nav";
import { ActionSheet, Toast, SubmitBar, Checkbox, CheckboxGroup } from "vant";
import CnxhList from "components/home/CnxhList";
Vue.use(ActionSheet)
  .use(Toast)
  .use(SubmitBar)
  .use(Checkbox)
  .use(CheckboxGroup);
export default Vue.extend({
  data() {
    return {
      navType: "shopingCar",
      cnxhType: "shopingCar-wrap",
      Allchecked: false,
      cartInfo: [],
      result: [],
      CheckAll: false,
      Sellerchecked: false,
      isSellerchecked: false,
      len: 0
      // sellerActive:false,
      // proitemActive:false
    };
  },
  components: {
    Nav,
    CnxhList
  },
  methods: {
    onSubmit() {},
    // 店铺状态

    sellerChecked($event, index, isSellerchecked, e) {
      Vue.nextTick(() => {
        let pro = document.getElementsByClassName("proRef");
        let seller = document.getElementsByClassName("sellerChecked");
        if ($event.target.checked == true) {
          for (let i = 0; i < pro.length; i++) {
            if (pro[i].getAttribute("sellerid") == index) {
              pro[i].checked = true;
            }
          }
        } else {
          for (let i = 0; i < pro.length; i++) {
            if (pro[i].getAttribute("sellerid") == index) {
              pro[i].checked = false;
            }
          }
        }
        let sellerArr = [];
        for (let i = 0; i < seller.length; i++) {
          sellerArr.push(seller[i].checked);
        }
        let fal = [];
        let sure = [];
        sellerArr.forEach((currentValue, index, arr) => {
          if (currentValue == false) {
            fal.push(currentValue);
            if (0 < fal.length <= arr.length) {
              this.Allchecked = false;
            }
          }
          if (currentValue == true) {
            sure.push(currentValue);
            if (sure.length == arr.length) {
              this.Allchecked = true;
            }
          }
        });
      });
    },

    proChecked($event, sellerId, carInfo) {
      Vue.nextTick(() => {
        let pro = document.getElementsByClassName("proRef");
        let seller = document.getElementsByClassName("sellerChecked");
        if ($event.target.checked == true) {
          for (let i in carInfo) {
            if (sellerId == i) {
              this.len++;
              if (this.len == carInfo[i].length) {
                for (let i = 0; i < seller.length; i++) {
                  if (seller[i].getAttribute("sellerid") == sellerId) {
                    seller[i].checked = true;
                  }
                }
                var len2 = this.len;
                console.log(len2);
                this.len = 0;
              } else {
                //  ....
              }
              console.log(carInfo[i].length, this.len);
            }
          }
        } else {
          if (this.len == 0) {
            //解决重复点击的bug
            this.len = 0;
          } else {
            this.len--;
          }
          for (let i = 0; i < seller.length; i++) {
            if (seller[i].getAttribute("sellerid") == sellerId) {
              seller[i].checked = false;
            }
          }
        }
        let proArr = [];
        for (let i = 0; i < pro.length; i++) {
          proArr.push(pro[i].checked);
        }
        let fal = [];
        let sure = [];
        proArr.forEach((currentValue, index, arr) => {
          if (currentValue == false) {
            fal.push(currentValue);
            if (0 < fal.length <= arr.length) {
              this.Allchecked = false;
            }
          }
          if (currentValue == true) {
            sure.push(currentValue);
            if (sure.length == arr.length) {
              this.Allchecked = true;
            }
          }
        });
      });
    },
    // 总全选反选
    checkedAll() {
      Vue.nextTick(() => {
        this.Allchecked = !this.Allchecked;

        let pro = document.getElementsByClassName("proRef");
        let seller = document.getElementsByClassName("sellerChecked");
        for (let i = 0; i < seller.length; i++) {
          if (this.Allchecked) {
            seller[i].checked = true;
          } else {
            seller[i].checked = false;
          }
        }
        for (let i = 0; i < pro.length; i++) {
          if (this.Allchecked) {
            pro[i].checked = true;
          } else {
            pro[i].checked = false;
          }
        }
      });
    }
  },
  mounted() {
    let cart = this.$store.state.Car.cart;
    let result = _.groupBy(cart, function(value) {
      return value.sellerInfo.id;
    });
    this.cartInfo = result;
  }
});
</script>

<style lang="stylus" scoped>
.warp
  height 100%
  widht 100%
  display flex
  flex-direction column
  .shopingCar-wrap
    width 100%
    height 100%
    overflow hidden
    // overflow-y hidden
    .shopingCar-content
      width 100%
      background #f1f1f1
      .notice
        width 100%
        padding 0.08rem
        overflow hidden
        font-size 0.1rem
        line-height 0.14rem
        color #9b9b9b
      .shop
        width 100%
        .empty
          width 100%
          font-size 0.14rem
          color #666
          text-align center
          background #fff
          padding 1.2rem 0 2.2rem 0
          img
            display inline-block
            height 0.68rem
          span
            padding-top 0.08rem
            width 100%
            display inline-block
            color #646464
            font-size 0.12rem
        .shopItem-wrap
          width 100%
          background #fff
          .seller
            width 100%
            overflow hidden
            min-height 1.75rem
            padding-bottom 0.06rem
            position relative
            .seller-info
              display flex
              width 100%
              overflow hidden
              padding 0.04rem 0
              height 0.4rem
              border-bottom 1px solid #dedede
              justify-content space-between
              .checkbox-box
                // padding-left: .625rem;
                // padding-top: .5625rem;
                width 0.4rem
                height 0.32rem
                display flex
                align-items center
                justify-content center
                .switch
                  width 0.185rem
                  height 0.185rem
                  border-radius 50%
                  border 1px solid #9b9b9b
                  background-color #fff
                  position relative
                .active
                  border-radius 50%
                  width 0.185rem
                  height 0.185rem
                  background-color #c33
                  border none
                  position relative
                  background #cc3333
                  &:before
                    content ''
                    display block
                    width 0.08rem
                    height 0.04rem
                    border-width 1px
                    border-style solid
                    border-color transparent transparent #fff #fff
                    position absolute
                    left 50%
                    top 38%
                    transform translate(-50%, -50%) rotate(-45deg)
              .info
                flex 1
                display flex
                .head-img
                  width 0.42rem
                  height 0.34rem
                  .img
                    display inline-block
                    width 0.34rem
                    height 0.34rem
                    border-radius 50%
                    overflow hidden
                    background-size cover
                    background-repeat no-repeat
                    border 1px solid #dedede
                .desc
                  position relative
                  height 0.32rem
                  flex 1
                  span.name
                    padding-top 0.02rem
                    font-size 0.1rem
                    color #646464
                    line-height 0.12rem
                    position relative
                    padding-right 0.06rem
                    min-width 0.6rem
                    max-width 1.5rem
                    text-overflow ellipsis
                    -webkit-line-clamp 1
                    display box
                    overflow hidden
                    white-space normal
                    &:before
                      right 0
                      top 0.1rem
                      content ''
                      display block
                      position absolute
                      width 0.07rem
                      height 0.07rem
                      border-width 1px
                      border-style solid
                      border-color #9b9b9b #9b9b9b transparent transparent
                      transform translateY(-50%) rotate(45deg)
                  span.country
                    position absolute
                    left 0
                    bottom 0.02rem
                    padding 0 0 0 0.1rem
                    font-size 0.1rem
                    color #646464
                    line-height 0.1rem
                    vertical-align center
                    text-overflow ellipsis
                    -webkit-line-clamp 1
                    display -ms-flexbox
                    display -o-box
                    display box
                    overflow hidden
                    white-space normal
                    .img
                      margin-right 0.04rem
                      position absolute
                      left 0
                      top 0rem
                      display inline-block
                      width 0.1rem
                      height 0.1rem
                      border-radius 50%
        .promotion-wrap
          .promotion
            width 100%
            overflow hidden
            position relative
            border-bottom 1px solid #dedede
            .product-list
              .product
                width 100%
                overflow hidden
                padding 0.1rem 0 0.06rem
                .content
                  width 100%
                  overflow hidden
                  display flex
                  // height 1.35rem
                  .checkbox-box
                    width 0.4rem
                    height 0.6rem
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center
                    .switch
                      width 0.185rem
                      height 0.185rem
                      border-radius 50%
                      border 1px solid #9b9b9b
                      background-color #fff
                      position relative
                    .active
                      border-radius 50%
                      width 0.185rem
                      height 0.185rem
                      background-color #c33
                      border none
                      position relative
                      background #cc3333
                      &:before
                        content ''
                        display block
                        width 0.08rem
                        height 0.04rem
                        border-width 1px
                        border-style solid
                        border-color transparent transparent #fff #fff
                        position absolute
                        left 50%
                        top 38%
                        transform translate(-50%, -50%) rotate(-45deg)
                  .prod-warp
                    flex 1
                    overflow hidden
                    .prod-info
                      display flex
                      width 100%
                      overflow hidden
                      .pic
                        width 0.6rem
                        margin-right 0.06rem
                        overflow hidden
                        img
                          height 0.6rem
                          width 0.6rem
                      .desc
                        flex 1
                        overflow hidden
                        padding-right 0.04rem
                        .name
                          width 100%
                          height 0.28rem
                          line-height 0.12rem
                          text-overflow ellipsis
                          -webkit-line-clamp 2
                          display -ms-flexbox
                          display box
                          overflow hidden
                          white-space normal
                          font-size 0.1rem
                          color #383838
                          i.tag-taxes
                            vertical-align middle
                            font-size 0.1rem
                            border 1px solid #c33
                            padding 0.001rem 0.02rem
                            margin-right 0.04rem
                            color #c33
                            line-height 0.1rem
                            border-radius 3px
                            display inline-block
                            position relative
                            top -1px
                            margin 1px 0
                        .sku
                          margin 0.04rem 0
                          overflow hidden
                          min-height 0.1rem
                          font-size 0.1rem
                          color #9b9b9b
                        .preadd-desc
                          margin 0.04rem 0
                          min-height 0.1rem
                          font-size 0.08rem
                          color #c33
                          text-overflow ellipsis
                          -webkit-line-clamp 2
                          display -ms-flexbox
                          display -o-box
                          display box
                          overflow hidden
                          white-space normal
                        .serve
                          width 100%
                          overflow hidden
                          font-size 0.1rem
                          span
                            display inline-block
                            line-height 0.1rem
                            padding-left 0.1rem
                            position relative
                            color #646464
                          span.tag-py
                            background-image url('~assets/images/pin.png')
                            background-size contain
                            background-repeat no-repeat
                  .operation
                    width 0.68rem
                    overflow hidden
                    padding-right 0.06rem
                    text-align right
                    .price
                      width 100%
                      text-align right
                      line-height 0.08rem
                      color #c33
                      font-size 0.08rem
                    .tag-price
                      width auto
                      margin-top 0.03rem
                      border-radius 0.04rem
                      color #fff
                      font-size 0.08rem
                      padding 0.008rem 0.02rem
                      line-height 0.1rem
                      text-align center
                      display inline-block
                    .tag-activity
                      background-color #f6934d
                    .amount
                      width 0.76rem
                      margin-top 0.08rem
                      vertical-align middle
                      height 0.2rem
                      display flex
                      span.mini
                        font-size 0.08rem
                        border-top-left-radius 0.02rem
                        border-bottom-left-radius 0.02rem
                        width 0.17rem
                        height 0.2rem
                        display inline-block
                        border 1px solid #cecece
                        text-align center
                        color #cdcdcd
                      span.num
                        width 0.3rem
                        color #383838
                        font-size 0.08rem
                        border-top 1px solid #cecece
                        border-bottom 1px solid #cecece
                        text-align center
                        height 0.2rem
                      span.plus
                        width 0.17rem
                        display inline-block
                        border 1px solid #cecece
                        height 0.2rem
                        font-size 0.08rem
                        text-align center
                        color #cdcdcd
                    .delete
                      width 0.12rem
                      height 0.12rem
                      position relative
                      display inline-block
                      margin 0.05rem 0 0
                      i
                        width 0.1rem
                        height 0.11rem
                        position absolute
                        left 50%
                        top 50%
                        margin-top -0.03rem
                        margin-left -0.03rem
                        background-image url('~assets/images/del.png')
                        background-size contain
                        background-repeat no-repeat
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
  .operate-wrap
    .notIphoneX
      width 100%
      height 0.44rem
      background-color #fff
      display flex
      .btn-choose
        width 0.68rem
        height 0.44rem
        display flex
        .checkbox-box
          width 0.31rem
          height 0.44rem
          display flex
          align-items center
          justify-content center
          .switch
            width 0.185rem
            height 0.185rem
            border-radius 50%
            border 1px solid #9b9b9b
            background-color #fff
            position relative
          .active
            border-radius 50%
            width 0.185rem
            height 0.185rem
            background-color #c33
            border none
            position relative
            background #cc3333
            &:before
              content ''
              display block
              width 0.08rem
              height 0.04rem
              border-width 1px
              border-style solid
              border-color transparent transparent #fff #fff
              position absolute
              left 50%
              top 38%
              transform translate(-50%, -50%) rotate(-45deg)
        .text
          width 0.37rem
          height 0.44rem
          font-size 0.1rem
          color #646464
          text-align center
          line-height 0.44rem
      .desc
        width 1.58rem
        height 0.44rem
        display flex
        padding 0.06rem
        font-size 0.1rem
        flex-wrap wrap
        justify-content flex-end
        .price
          text-align right
          width 100%
          height 0.22rem
          i
            color #c33
        .carriage
          text-align right
          width 100%
          height 0.22rem
      .disabled
        flex 1
        height 0.44rem
        text-align center
        line-height 0.44rem
        color #fff
        background #666
      .btn-goorder
        background-color #c33
        flex 1
        height 0.44rem
        text-align center
        line-height 0.44rem
        color #fff
</style> 

