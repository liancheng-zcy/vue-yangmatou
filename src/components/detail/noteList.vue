<template>
  <div>
    <div class="buyer-rate">
      <van-divider :style="{ color: '#646464;', borderColor: '#cccccc', padding: '0 .5rem' }">
        <span></span>评价
      </van-divider>
      <div class="b-title">
        <span class="name">买家评价</span>
        <span class="rate">
          <i class="full" v-for="(value,index) in Math.ceil(score)"
          :key="index"
          ></i>
        </span>
        <span class="num">{{score}}</span>
        <span class="more">查看全部456条</span>
      </div>
      <div class="tag-content">
        <div class="tag-name">购买过该商品的用户认为</div>
      </div>
    </div>
    <div class="note-list">
      <div class="note-list-content">
        <noteItem v-for="value in commentList" :key="value.id" :noteValue="value"></noteItem>
        <div class="note-more">
          <span>查看全部</span>
          <span>MORE</span>
        </div>
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
  data() {
    return {
      commentList: [],
      score:''
    };
  },
  components: {
    noteItem
  },

  async mounted() {
    let productId = this.$route.params.id;
    let bScroll = new BScroll(".note-list", {
      pullUpLoad: true,
      click: true,
      probeType: 2,
      scrollX: true
      // preventDefault:false
    });

    let result = await post({
      method: "post",
      url: "/ajax/item/api/getProductNote",
      data: {
        id: productId,
        pagesize: 1,
        evaluationid: "",
        isprod: 1,
        userid: ""
      }
    });
    this.commentList = result.data.list;
    this.score = result.data.evaluation
  }
});
</script>

<style lang = "stylus" scoped>
.buyer-rate
  /* padding-left 0.1rem */
  background #fff
  .b-title
    padding-left 0.1rem
    width 100%
    background-color #fff
    padding 0.08rem
    position relative
    overflow hidden
    .name
      display inline-block
      font-size 0.12rem
      padding-right 0.04rem
      font-family STHeitiSC-Medium
      float left
      line-height 0.14rem
      margin-top 0.04rem
    .rate
      display inline-block
      float left
      margin 0 0.03rem
      margin-top 0.02rem
      i
        display inline-block
        width 0.12rem
        height 0.12rem
        margin-right 0.02rem
      .full
        background-size contain
        background-position 50%
        background-repeat no-repeat
        background-image url('~assets/images/wujiao.png')
    .num
      display inline-block
      font-size 0.12rem
      margin-right 0.04rem
      line-height 0.25rem
      font-family STHeitiSC-Medium
      color #e95656
      float left
    .more
      display inline-block
      font-size 0.12rem
      color #999
      float right
      padding-right 0.08rem
      position relative
      line-height 0.25rem
      &:after
        right 0
        top 50%
        content ''
        display block
        position absolute
        width 0.08rem
        height 0.08rem
        border-width 1px
        border-style solid
        border-color #9b9b9b #9b9b9b transparent transparent
        transform translateY(-50%) rotate(45deg)
  .tag-content
    padding 0.07rem 0.07rem 0
    overflow hidden
    background #fff
    .tag-name
      width 100%
      overflow hidden
      font-size 0.12rem
      color #999
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
.van-divider
  height 0.3rem
  margin 0
  background #f5f5f5
</style>