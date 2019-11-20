<template>
  <div class="note-list">
    <div class="note-list-content">
      <noteItem
      v-for="value in commentList"
      :key="value.id"
      :noteValue='value'
      ></noteItem>
      <div class="note-more">
        <span>查看全部</span>
        <span>MORE</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import noteItem from "components/detail/noteItem";
import BScroll from "better-scroll";
import { post } from "utils/http.js";

export default Vue.extend({
  data(){
    return{
      commentList:[]
    }
  },
  components: {
    noteItem
  },

  async mounted(){
    let productId = this.$route.params.id
    let bScroll = new BScroll('.note-list', {
      pullUpLoad: true,
      click: true,
      probeType: 2,
      scrollX:true
      // preventDefault:false
    })

    let result = await post({
      method:'post',
      url:'/ajax/item/api/getProductNote',
      data:{
        id: productId,
        pagesize:1,
        evaluationid:'',
        isprod:1,
        userid:''
      }
    })
    this.commentList = result.data.list
    console.log(this.commentList)

  }
});
</script>

<style lang = "stylus" scoped>
.note-list
  width 100%
  padding 0.12rem 0 0.12rem 0.1rem
  height 1.25rem
  white-space nowrap
  overflow hidden
  background #fff
  vertical-align middle
  display flex
  .note-list-content
    display flex
    .note-more
      display flex
      height 1rem
      width 1rem
      background #fff
      align-items center
      justify-content center
      flex-direction column
      box-shadow 0 0.01rem 0.08rem 0 rgba(0, 0, 0, 0.1)
      span
        color #666
        font-size 0.12rem
</style>