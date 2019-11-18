<template>
    <div id="load-waptopbar" class="loadwaptopbar">
      <div class="loadtopnav">
        <div id="load-ymatou-logo" v-if="navType == 'detail'">
          <a>
            <img src="~assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div class="nav" id="load-nav-content" v-if="navType == 'home'">
          <a  c>
            <span id="loadwaptopbar-home" class="active">首页</span>
          </a>
          <a @click="communityClick">
            <span id="loadwaptopbar-community">社区</span>
          </a>
        </div>
        <div class="icon-list">
          <a id="load-shopcart-icon" @click="cartClick">
            <img src="~assets/images/car.png" alt="购物车" />
          </a>
          <a id="load-home-icon" v-if="navType == 'detail'"  @click="homeClick">
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
      alert("我是购物车");
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
</style>