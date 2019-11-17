<template>
  <div id="load-banner" class="loadbanner">
      <span class="loadbanner-bgcover">
        <img src="http://pic1.ymatou.com/G02/M06/47/B9/CgvUBVpv7eSAWJr4AAB3io7qxQM413_15_2_o.png" />
      </span>
      <span class="loadbanner-close" id="load-banner-close">
        <i class="loadbanner-close-btn">&nbsp;</i>
      </span>
      <div class="loadbanner-main">
        <a class="loadbanner-download-btn" id="loadbanner-download-btn">&nbsp;</a>
      </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default Vue.extend({
    
  })
</script>

<style lang = "stylus" scoped>
  .loadbanner
    line-height 1px
    width 100%
    padding 0rem 0
    position relative
    top 0
    z-index 5
    overflow hidden
    .loadbanner-bgcover
      width 100%
      opacity 1
    .loadbanner-bgcover img
      width 100%
      border 0px
      height 0.4rem
    .loadbanner-close
      position absolute
      top 0
      left 0
      width 8%
      height 100%
      text-align center
      .loadbanner-close-btn
        position absolute
        right 0
        bottom 0
        top 0
        left 0
        margin auto
        height 0.5rem
        width 0.4rem
        color white
        font-size 29px
        font-style normal
        cursor pointer
</style>