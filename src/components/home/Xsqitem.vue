<template>
  <a class="item">
    <div
      class="pic"
      :style = "{'backgroundImage':'url(' + xsqValue.BannerUrl + ')'}"
    >  
    </div>
   
  </a>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:{
     xsqValue: {
      type: Object
    },
  },
  methods:{
   
  },
  mounted(){
    
  }
});
</script>

<style lang = "stylus" scoped>
.item
  position relative
  display inline-block
  width 2.3rem
  height 1.12rem
  margin 0 0.10522222rem 0 0
  .pic
    width 100%
    height 100%
    background-size 100% 100%
    background-repeat no-repeat
    background-position center center
    border-radius 3%
</style>