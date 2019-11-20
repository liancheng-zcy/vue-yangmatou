<template>
  <div class="note-item">
    <div class="content">
      <div class="info">
        <div class="buyer">
          <div class="avg">
            <img :src="noteValue.posterAvatar" />
          </div>
          <div class="name">{{noteValue.posterName}}</div>
          <div class="grade lever2">
            V{{noteValue.posterLevel}}
          </div>
        </div>
        <div class="desc">{{noteValue.content}}</div>
      </div>
      <div class="pic lazyload transition" style="opacity: 1;">
        <img
          :src="noteValue.picList[0] || 'https://s1.ymatou.com/homem/images/placeholder-bb7773481a.png'"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data(){
    return{
      bg:'https://s1.ymatou.com/homem/images/placeholder-bb7773481a.png'
    }
  },
  props:['noteValue'],
  mounted () {
    // console.log(this.noteValue)
  }
});
</script>

<style lang = "stylus" scoped>
.note-item
  overflow hidden
  width 2.35rem
  height 1rem
  display inline-block
  box-shadow 0 .01rem .08rem 0 rgba(0, 0, 0, 0.1)
  margin-right 0.08rem
  .content
    width 100%
    height 100%
    display flex
    .info
      width 60%
      height 1rem
      padding 0.06rem
      .buyer
        height 0.2rem
        width 100%
        display flex
        align-items center
        .avg
          width 0.2rem
          height 100%
          img
            width 100%
            height 100%
            display inline-block
            margin-right 0.04rem
        .name
          flex 1
          height 0.2rem
          line-height 0.2rem
          margin-left 0.06rem
          text-overflow ellipsis
          -webkit-line-clamp 1
          overflow hidden
          white-space normal
          font-size 0.12rem
          color #666
        .grade.lever2
          width 0.15rem
          height 0.1rem
          text-align center
          line-height .1rem
          font-size .1rem
          color #f6ab5b
          /* background-image url('~assets/images/v2.png') */
          background-size cover
      .desc
        width 100%
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 3
        -webkit-box-orient vertical
        text-overflow ellipsis
        white-space normal
        display box
        color #292929
        margin-top 0.1rem
        height 0.7rem
        font-size 0.12rem
        line-height 0.2rem
    .pic
      width 40%
      height 1rem
      img
        width 100%
        height 100%
</style>