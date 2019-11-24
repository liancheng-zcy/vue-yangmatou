<template>
  <li class="product" :ProductId = "proValue.ProductId" :SellerId = "proValue.SellerId">
    <div class="product-pic-body">
      <img
        class="product-pic"
        data-src="http://pic1.ymatou.com/G02/shangou/M04/06/79/CgzUCl2m4HuAbeWDAA39hUzrwE0922_1_1_n_w_lb.JPG"
        :src="proValue.ProductPic"
        style="opacity: 1;"
      />
    </div>
    <div class="product-tip">
      <p class="product-title">{{proValue.ProductDes}}</p>
      <span>
        <em>¥</em> {{proValue.Price}}
      </span>
    </div>
  </li>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props:['proValue'],
  mounted () {
   
  }

});
</script>

<style lang = "stylus" scoped>
.product
  position relative
  display inline-block
  width 1.12rem
  margin-right 0.05rem
  vertical-align top
  .product-pic-body
    width 1.12rem
    height 1.12rem
    background url('~assets/images/ybg.png') center center no-repeat
    background-size contain
    overflow hidden
    .product-pic
      width 1.12rem
  .product-tip
    text-align left
    .product-title
      font-size 0.1rem
      color #383838
      line-height 0.15rem
      display -webkit-box
      white-space normal
      word-break break-word
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
      word-wrap break-word
      word-break break-all
      margin 0.05rem 0 0.08rem
    span
      display block
      font-size 0.13rem
      height 0.14rem
      line-height 0.15rem
      color #c33
</style>