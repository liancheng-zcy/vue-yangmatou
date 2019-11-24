<template>
  <div class="warp">
    <div class="commpent-wrap">
      <div class="commpent-content">
        <!-- 总评 -->
        <div class="rate-nav">
          <div class="title">
            <span class="name">商品评分</span>
            <span class="rate">
              <i class="full" v-for="(i,index) in Math.ceil(evaluation)" :key="(index+i)"></i>
            </span>
            <span class="num">{{evaluation}}</span>
          </div>
          <div class="tag-wrap">
            <div class="tag-list">
              <span
                class
                v-for="(filterVal,index) in filterList"
                :key="(index+filterVal)"
              >{{filterVal}}</span>
            </div>
          </div>
        </div>
        <!-- 评论 -->
        <div class="rate-list">
          <div class="rate-list">
            <div
              class="seller-show-list"
              v-for="(value,index) in list"
              :key="(value.id + value + index)"
            >
              <div class="info">
                <div class="seller-item" :posterId="value.posterId">
                  <img :src="value.posterAvatar" class="avatar" />
                  <div class="name-info">
                    <span class="name">
                      {{value.posterName}}
                      <i class="grade lever3">v{{value.posterLevel}}</i>
                    </span>
                    <span class="date">{{value.joinTime}}加入洋码头</span>
                  </div>
                </div>
                <div class="desc">
                  <span class="rate">
                    <i
                      class="full"
                      v-for="(i,key,index) in Math.ceil(value.evaluation)"
                      :key="(index)"
                    ></i>
                    <i
                      class="disabled"
                      v-for="(i,key,index) in (5 - Math.ceil(value.evaluation))"
                      :key="(index)"
                    ></i>
                  </span>
                  <span class="time">{{value.postTime}}</span> <span>{{value.catalogInfo}}</span>
                </div>
              </div>
              <div class="character">{{value.content}}</div>
              <div onclick class="switch show-all" style="display: none;">查看全部</div>
              <div class="picture-wrapper">
                <div
                  class="pic"
                  v-for="(pic,index) in value.picList"
                  :key="index+pic"
                  @click="picClick(value.picList)"
                >
                  <div
                    onclick
                    class="picture lazyload transition"
                    :style="{'backgroundImage':'url(' + pic + ')'}"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <van-loading v-if="lodaing" class="product-loading" color="#1989fa"></van-loading>
      </div>
    </div>
    <!-- 图片查看器 -->
    <van-image-preview
      v-model="show"
      :images="images"
      @change="onChange"
      :maxZoom="5"
      :loop="false"
    >
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import Vue from "vue";
import { post } from "utils/http.js";
import BScroll from "better-scroll";
import { format } from "timeago.js";
import moment from "moment";
import { Toast, Loading, ImagePreview } from "vant";
Vue.use(Toast)
  .use(Loading)
  .use(ImagePreview);

export default Vue.extend({
  data() {
    return {
      filterList: [],
      list: [],
      evaluation: 0,
      lodaing: "",
      show: false,
      index: 0,
      images: []
    };
  },
  methods: {
    picClick(pic) {
      this.show = true;
      this.images = pic;
    },
    onChange(index) {
      this.index = index;
    }
  },
  async mounted() {
    let queryResult = this.$route.query;
    let evaluationid = queryResult.evaluationid;
    let productId = queryResult.productId;
    let result = await post({
      method: "post",
      url: "/ajax/item/api/getProductNote",
      data: {
        pagesize: 1,
        filter: "",
        timeFormat: [],
        evaluationid: evaluationid,
        isprod: 2,
        userid: "",
        id: productId
      }
    });
    this.filterList = [
      result.data.filterList[0].desc,
      result.data.filterList[1].desc,
      result.data.filterList[2].desc
    ];
    this.list = result.data.list;
    this.evaluation = result.data.evaluation;
    let B = moment(1572072825000).format("YYYY-MM-DD");
    this.timeFormat = this.list.map(function(v, i) {
      return {
        joinTime: moment(v.joinTime).format("YYYY-MM-DD"),
        postTime: moment(v.postTime).format("YYYY-MM-DD")
      };
    });
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].postTime = this.timeFormat[i].postTime;
      this.list[i].joinTime = this.timeFormat[i].joinTime;
    }
    console.log(this.list);
    let bScroll = new BScroll(".commpent-wrap", {
      pullUpLoad: true,
      click: true,
      probeType: 2
    });
    let num = 2;
    let size = 10;
    bScroll.on("pullingUp", async () => {
      if (~~result.data.total >= size) {
        let moreResult = await post({
          method: "post",
          url: "/ajax/item/api/getProductNote",
          data: {
            pagesize: 1,
            filter: "",
            evaluationid: evaluationid,
            isprod: num,
            userid: "",
            id: productId
          }
        });
        num++;
        size = size + 10;
        this.list = [...this.list, ...moreResult.data.list];
        this.timeFormat = this.list.map(function(v, i) {
          return {
            joinTime: moment(v.joinTime).format("YYYY-MM-DD"),
            postTime: moment(v.postTime).format("YYYY-MM-DD")
          };
        });
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].postTime = this.timeFormat[i].postTime;
          this.list[i].joinTime = this.timeFormat[i].joinTime;
        }
        console.log(this.list);
        await this.$nextTick();
        bScroll.refresh();
        this.lodaing = "true";
      } else {
        Toast({
          message: "我也是有底线的~",
          position: "bottom",
          duration: 1000
        });
        this.lodaing = "false";
      }
      bScroll.finishPullUp();
      this.lodaing = "false";
    });
  }
});
</script>

<style lang = "stylus" scoped>
.warp
  height 100%
  widht 100%
  display flex
  flex-direction column
  .commpent-wrap
    width 100%
    height 100%
    overflow hidden
    .commpent-content
      width 100%
      background #f1f1f1
      .rate-nav
        padding 0.1rem 0.08rem
        overflow hidden
        background-color #fff
        margin-bottom 0.08rem
        .title
          width 100%
          overflow hidden
          margin-bottom 0.09rem
          .name
            color #383838
            font-size 0.12rem
            font-family STHeitiSC-Medium
            margin-right 0.04rem
          .rate
            display inline-block
            margin-right 0.02rem
            i
              display inline-block
              width 0.12rem
              height 0.12rem
              margin-right 0.08rem
            .full
              background-size contain
              background-position 50%
              background-repeat no-repeat
              background-image url('~assets/images/wujiao.png')
          .num
            display inline-block
            width 0.1rem
            font-size 0.12rem
            font-family STHeitiSC-Medium
            color #c33
      .tag-wrap
        position relative
        overflow hidden
        max-height 0.3rem
        .tag-list
          span
            display inline-block
            margin-right 0.08rem
            font-size 0.12rem
            font-family PingFangSC-Regular
            line-height 0.18rem
            height 0.18rem
            padding 0 0.05rem
            color #383838
            border-radius 0.1rem
            background-color #ffe6e6
            margin-bottom 0.1rem
      .rate-list
        .seller-show-list
          background-color #fff
          position relative
          overflow hidden
          border-bottom 1px solid #dedede
          padding-bottom 0.08rem
          font-family PingFangSC-Regular
          .info
            margin 0.06rem 0 0
            position relative
            padding 0.04rem 0.08rem
            overflow hidden
            .seller-item
              width 100%
              overflow hidden
              .avatar
                width 0.34rem
                height 0.34rem
                border-radius 50%
                margin-right 0.06rem
                vertical-align middle
                float left
              .name-info
                width 1.5rem
                height 0.34rem
                overflow hidden
                float left
                .name
                  width 100%
                  font-size 0.12rem
                  color #646464
                  float left
                  line-height 0.18rem
                  font-family PingFangSC-Regular
                  .grade
                    margin 0 0 0.04rem
                    /* vertical-align: middle; */
                    width 0.18rem
                    height 0.18rem
                    /* display: inline-block; */
                    overflow hidden
                    font-size 0.1rem
                    color #f49c3f
                .date
                  width 100%
                  font-size 0.1rem
                  color #9b9b9b
                  float left
                  line-height 0.18rem
          .desc
            width 100%
            padding-top 0.08rem
            font-size 0.1rem
            font-family PingFangSC-Regular
            color #9b9b9b
            .rate
              display inline-block
              margin-right 0.02rem
              i
                display inline-block
                width 0.12rem
                height 0.12rem
                margin-right 0.04rem
                background-size contain
                background-position 50%
                background-repeat no-repeat
              .full
                background-image url('~assets/images/wujiao.png')
              .disabled
                background-image url('~assets/images/huiwujiao.png')
          .character
            font-size 0.14rem
            color #646464
            overflow-x hidden
            transition height 0.4s ease
            padding 0 0.08rem
          .picture-wrapper
            width 100%
            padding-left 0.08rem
            overflow hidden
            .pic
              margin-top 0.08rem
              width 33.33%
              overflow hidden
              padding-right 0.08rem
              float left
              .picture
                border 1px solid #dedede
                display inline-block
                width 100%
                height 0.93rem
                background-size cover
.product-loading
  margin-left calc(50% - 0.15rem)
</style>