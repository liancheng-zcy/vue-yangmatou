<template>
    <div id="load-waptopbar" class="loadwaptopbar">
      <div class="loadtopnav">
        <div id="load-ymatou-logo" v-if="navType == 'detail' || navType == 'community' || navType == 'communityDetail'">
          <a>
            <img src="~assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="nav" id="load-nav-content" v-if="navType == 'home'">
          <a @click="homeClick">
            <span id="loadwaptopbar-home" class="active">首页</span>
          </a>
          <a @click="communityClick">
            <span id="loadwaptopbar-community">社区</span>
          </a>
        </div>
        <div class="navRight" id="load-nav-content" v-if="navType == 'community' || navType == 'communityDetail'">
          <a @click="homeClick">
            <span id="loadwaptopbar-home">首页</span>
          </a>
          <a @click="communityClick">
            <span id="loadwaptopbar-community" :class="navType == 'community' ? 'active':''">社区</span>
          </a>
        </div>
        <div class="top-title" v-if="navType == 'shopingCar'">购物车 <i>(2)</i></div>
        <div class="icon-list" v-if="navType == 'detail' || navType == 'home' || navType == 'shopingCar'">
          <a id="load-shopcart-icon" @click="cartClick">
            <img src="~assets/images/car.png" alt="购物车" v-if="navType != 'shopingCar'" />
          </a>
          <a id="load-home-icon" v-if="navType == 'detail' || navType == 'shopingCar'"  @click="homeClick">
            <img src="~assets/images/home.png" alt="首页" />
          </a>
          <a id="load-personal-icon" @click="myClick" >
            <img src="~assets/images/wode.png" alt="个人中心" />
          </a>
        </div>
      </div>
    </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props:["navType"],
  methods:{
    communityClick() {
      this.$router.push("/note/community");
    },
    homeClick() {
      this.$router.push("/");
    },
    myClick() {
      this.$router.push("/myorder");
    },
    cartClick() {
       this.$router.push("/shoppingCart");
    },
  },
  mounted(){
    
  }
});
</script>

<style lang = "stylus" scoped>
  @import '~assets/stylus/border.styl'
    #load-waptopbar
        position relative
        z-index 10
        width 100%
        top 0
        left 0
        background #fff
        $border(0 0 1px 0, #DEDEDE, solid)
        .loadtopnav
          width 100%
          height 0.4rem
          overflow hidden
          #load-ymatou-logo
            a
              img
                height 0.4rem
                display inline-block
                float left
          .nav
            display inline-block
            float left
            margin-right 0.08rem
            a
              display inline-block
              padding 0 0.08rem
            span
              display inline-block
              line-height 0.24rem
              padding-top 0.07rem
              color #646464
              font-size 0.12rem
            span.active
              color #383838
              border-bottom 3px solid #cc3333
          .navRight
            display inline-block
            float right
            margin-right 0.08rem
            a
              display inline-block
              padding 0 0.08rem
            span
              display inline-block
              line-height 0.24rem
              padding-top 0.07rem
              color #646464
              font-size 0.12rem
            span.active
              color #383838
              border-bottom 3px solid #cc3333
          .icon-list
            display inline-block
            float right
            a 
              width: .4rem;
              height: .4rem;
              display: inline-block;
              float: left;
              text-align: center;
              img 
                height: .18rem;
                display: inline-block;
                margin-top: .11rem
          .top-title
            float left
            display inline-block
            width: 2rem;
            height: .4rem;
            color: #515151;
            font-size .16rem
            text-align right 
            line-height .4rem
</style>