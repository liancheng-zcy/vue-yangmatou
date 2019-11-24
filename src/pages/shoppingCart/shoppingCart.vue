<template>
  <div class="warp">
    <Nav :navType="navType"></Nav>
    <div class="shopingCar-wrap">
      <div class="shopingCar-content">
        <div class="notice">海外买手会根据现行国家政策要求，通过不同的物流方式分别发货，其实对你没有影响啦~</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "components/common/nav";
export default Vue.extend({
  data(){
    return{
      navType:'shopingCar'
    }
  },
  components: {
    Nav
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
    // overflow hidden
    overflow-y auto
    .shopingCar-content
      width 100%
      background #f1f1f1
      .notice
        width: 100%;
        padding: .08rem;
        overflow: hidden;
        font-size: .1rem;
        line-height: .14rem;
        color: #9b9b9b;
</style> 

