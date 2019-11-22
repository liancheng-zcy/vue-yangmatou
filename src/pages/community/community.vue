<template>
  <div class="wrap">
    <Nav :navType="navType"></Nav>
    <div class="community-wrap">
      <div class="community-content">
        <!-- 瀑布流 -->
        <section class="note-field">
          <div class="waterfall note-waterfall">
            <myWaterFall></myWaterFall>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "components/common/nav";
import myWaterFall from 'components/community/waterfall'
export default Vue.extend({
  data() {
    return {
      navType: "community",
    };
  },
  components: {
    Nav,
    myWaterFall
  },

  async mounted() {
   
  },
  methods: {

  },
  created() {
  
  }
});
</script>

<style lang = "stylus" scoped>
.wrap
  width 100%
  height 100%
  display flex
  flex-direction column
  .community-wrap
    width 100%
    height 100%
    overflow-y auto
    .community-content
      width 100%
      height 100%
      .note-field
        width 100%
        height 100%
        .waterfall
          width 100%
          height 100%
          display flex
          flex-flow row nowrap
          align-items flex-start
          background #e8e8e8
          /* padding 0.13rem 0.05rem */
          padding-top 0.1rem
         
  .img-box
    padding 0 !important
</style>
