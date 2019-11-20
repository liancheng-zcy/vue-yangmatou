<template>
  <li class="product-wrapper" :productId = "CnxhValue.id" @click="detailClick" ref="idRef">
    <a>
      <div class="productLog">
        <img :src="CnxhValue.pic" alt />
      </div>
      <div class="info">
        <div class="name">{{CnxhValue.name}}</div>
        <div class="info-tag">
          <span>包邮包税</span>
        </div>
        <div class="info-bottom">
          <div class="price">¥ {{CnxhValue.price}}</div>
          <div class="country">
            <img class="flag" :src="CnxhValue.sellerInfo.countryIconUrl" alt="flag" />
            <span>{{CnxhValue.sellerInfo.countryName}}</span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data(){
    return{

    }
  },
  
  props:["CnxhValue"],
  methods:{
    detailClick(){
      let id = this.CnxhValue.id
      let timestamp = new Date().getTime();//可以用个时间戳解决跳转同一个路由的情况
      this.$router.push({path:`/detail/${id}`})
    }
  }
});
</script>

<style lang = "stylus" scoped>
.product-wrapper:nth-child(2n+1)
  margin-left 0.08rem
.product-wrapper:nth-child(2n)
  margin-left 0.08rem
.product-wrapper
  width 46%
  height 2.54rem
  display flex
  background #fff
  margin-bottom 0.08rem
  a
    height 100%
    widows 100%
    .productLog
      height 1.48rem
      width 100%
      img
        height 100%
        width 100%
    .info
      height 0.78rem
      padding 0.08rem 0
      .name
        width 100%
        height .3rem
        font-size 0.12rem
        color #383838
        line-height 0.14rem
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .info-tag
        margin 0.05rem 0
        span
          display inline-block
          font-size 0.08rem
          border 1px solid #c33
          color #c33
          padding 0.01rem 0.04rem
          margin 1px
          line-height 0.16rem
          border-radius 0.04rem
      .info-bottom
        height 0.16rem
        width 100%
        display flex
        .price
          width 50%
          color #c33
          height 0.16rem
        .country
          width 50%
          text-align right
          img
            height 0.12rem
            width 0.12rem
            margin-right 0.05rem
          span
            font-size 0.12rem
</style>