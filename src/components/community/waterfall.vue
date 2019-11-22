<template>
  <vue-waterfall-easy 
  :imgsArr="imgsArr" 
  @scrollReachBottom="getData" 
  :mobileGap="10" 
  @click="clickBtn"
  >
    <div slot="waterfall-head">
      <section class="hot-field">
        <div class="title-bar">
          <div class="title">热门活动</div>
          <a class="more">查看全部</a>
        </div>
        <div class="scroll-wrapper">
          <ul>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M00/83/E5/CgzUCV3VB7mAF7G0AAC4pE5dWAA316_1_1_w_o.jpg"
                src="http://pic1.ymatou.com/G01/M00/83/E5/CgzUCV3VB7mAF7G0AAC4pE5dWAA316_1_1_w_o.jpg"
              />
              <div class="info item">
                <div class="text">黑五种草大赛</div>
                <div class="tag">
                  <span class="tag-person .px9">10922人</span>
                  <span class="tag-note .px9">124篇</span>
                </div>
              </div>
            </li>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M01/10/96/CgzUBl2_mY6AKrXpAAAPZhbvUGU409_1_1_w_o.png"
                src="http://pic1.ymatou.com/G01/M01/10/96/CgzUBl2_mY6AKrXpAAAPZhbvUGU409_1_1_w_o.png"
              />
              <div class="info item">
                <div class="text">我要上推荐</div>
                <div class="tag">
                  <span class="tag-person">1539人</span>
                  <span class="tag-note">44篇</span>
                </div>
              </div>
            </li>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M02/17/F1/CgzUCF3A7QaAKMOrAAA1BfDg3hY186_1_1_w_o.jpg"
                src="http://pic1.ymatou.com/G01/M02/17/F1/CgzUCF3A7QaAKMOrAAA1BfDg3hY186_1_1_w_o.jpg"
              />
              <div class="info item">
                <div class="text">中古直播间</div>
                <div class="tag">
                  <span class="tag-person">1901人</span>
                  <span class="tag-note">2篇</span>
                </div>
              </div>
            </li>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M03/0C/1E/CgzUBl2-iaKAJPvCAAccOeLNI7Y253_124_124_w_o.jpg"
                src="http://pic1.ymatou.com/G01/M03/0C/1E/CgzUBl2-iaKAJPvCAAccOeLNI7Y253_124_124_w_o.jpg"
              />
              <div class="info item">
                <div class="text">我的新衣服</div>
                <div class="tag">
                  <span class="tag-person">1854人</span>
                  <span class="tag-note">7篇</span>
                </div>
              </div>
            </li>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M01/06/AD/CgzUBl29VNSAdOwUAABMjqWsO8o832_1_1_w_o.jpg"
                src="http://pic1.ymatou.com/G01/M01/06/AD/CgzUBl29VNSAdOwUAABMjqWsO8o832_1_1_w_o.jpg"
              />
              <div class="info item">
                <div class="text">口红不嫌多</div>
                <div class="tag">
                  <span class="tag-person">1230人</span>
                  <span class="tag-note">13篇</span>
                </div>
              </div>
            </li>
            <li class="banner-item item">
              <img
                data-src="http://pic1.ymatou.com/G01/M03/0C/25/CgzUBl2-inuAAyytAATICoq1sxY663_1_1_w_o.jpg"
                src="http://pic1.ymatou.com/G01/M03/0C/25/CgzUBl2-inuAAyytAATICoq1sxY663_1_1_w_o.jpg"
              />
              <div class="info item">
                <div class="text">我的梳妆台</div>
                <div class="tag">
                  <span class="tag-person">1364人</span>
                  <span class="tag-note">6篇</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="img-info" slot-scope="props">
      <div class="note-item">
        <p class="note-content">{{props.value.content}}</p>
        <div class="user-info">
          <div class="user-photo">
            <img class="user-logo" :src="props.value.userLogo" />
            <span class="user-name">{{props.value.username}}</span>
          </div>
          <div class="buttons">
            <i class="like-icon-base"></i>
            <span class="collection-num">{{props.value.visitNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </vue-waterfall-easy>
</template>

<script>
import Vue from "vue";
import vueWaterfallEasy from "vue-waterfall-easy";
import { get } from "utils/http.js";
export default Vue.extend({
  data() {
    return {
      imgsArr: [],
      page: 0, // 当前加载的加载图片的次数
      pullDownDistance: 0
    };
  },
  components: {
    vueWaterfallEasy
  },

  async mounted() {
   
  },
  methods: {
    getData() {
      get({
        url: "/ajax/note/api/GetSocialDiscoverList?",
        params: {
          Page: this.page,
          pageSize: 10,
          AccessToken: "",
          UserID: "",
          Cookieid: "",
          yid: ""
        }
      }).then(res => {
        this.page++;
        let resData = res.data.Result;
        let img_arr = resData.map(function(v, i) {
          let allPic = v.NoteInfo.TagImage
          return {
            src: v.NoteInfo.TagImage[0].Pic,
            noteId: v.NoteInfo.NoteId,
            content: v.NoteInfo.Content,
            addTime: v.NoteInfo.AddTime,
            username: v.UserInfo.UserName,
            userId: v.UserInfo.UserId,
            userLogo: v.UserInfo.UserLogo,
            visitNum: v.ExtInfo.VisitNum,
            allPic:allPic
          };
        });
        this.imgsArr = this.imgsArr.concat(img_arr);
      });
    },
    clickBtn(event, { index, value }){
      event.preventDefault()
      this.$router.push({
        name:`communityDetail`,
        params:{ 
          id: value.noteId,
          content:value.content, 
          allPic:value.allPic,
          noteId:value.noteId,
          userId:value.userId,
          username:value.username,
          userLogo:value.userLogo
        },
        // query:{
        //   noteId:value.noteId,
        //   userId:value.userId,
        //   username:value.username,
        //   },
        })
    }
  },
  created() {
    this.getData();
  }
});
</script>

<style lang = "stylus" scoped>
  .note-item
    width 100%
    /* min-height 1.8rem */
    background-color #fff
    border 1px solid #f1f1f1
    .note-img
      width 100%
      min-height 1.15rem
      img
        width 100%
        height 100%
    .note-content
      padding-top 0.1rem
      padding 0.1rem 0.13rem 0 0.13rem
      max-height 0.37rem
      color #292929
      font-size 0.12rem
      line-height 0.14rem
      letter-spacing 0.005rem
      display -webkit-box
      white-space normal
      word-break break-word
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp 2
      -webkit-box-orient vertical
      word-wrap break-word
      word-break break-all
    .user-info
      margin-top 0.06rem
      display flex
      flex-flow row nowrap
      justify-content space-between
      align-items flex-start
      height 0.25rem
      .user-photo
        width 0.9rem
        height 0.21rem
        padding 0 0.1rem
        display flex
        flex-flow row nowrap
        justify-content flex-start
        align-items center
        .user-logo
          /* height 0.17rem */
          width 0.17rem
          display block
          border-radius 50%
          border 1px solid #e6e6e6
        .user-name
          width 1.6rem
          margin-left 0.04rem
          color #666
          font-size 0.12rem
          display -webkit-box
          white-space normal
          word-break break-word
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 1
          -webkit-box-orient vertical
          word-wrap break-word
          word-break break-all
      .buttons
        display flex
        align-items center
        vertical-align middle
        width 0.5rem
        height 0.25rem
        margin-right 0.1rem
        padding-top 0.01rem
        .like-icon-base
          width 0.13rem
          height 0.08rem
          background url('~assets/images/baiyanjing.png') center center no-repeat
          background-size cover
          margin-right 0.04rem
        .collection-num
          font-size 0.12rem
          color #666
.hot-field
  /* margin-top 0.1rem */
  background white
  overflow hidden
  .title-bar
    padding 0.08rem
    display flex
    justify-content space-between
    background white
    .title
      position relative
      padding-left 0.13rem
      font-size 0.12rem
      &:before
        top 0.04rem
        left 0
        position absolute
        display inline-block
        width 0.1rem
        height 0.1rem
        content ''
        background url('~assets/images/huo.png') no-repeat
        background-size contain
    .more
      position relative
      font-size 0.1rem
      color #9B9B9B
      padding-right 0.133333rem
      display inline-block
      &:after
        top 0.085rem
        right 0.013rem
        content ''
        display block
        position absolute
        width 0.08rem
        height 0.08rem
        border-width 2px
        border-style solid
        border-color #9B9B9B #9B9B9B transparent transparent
        transform translate(0, -50%) rotate(45deg)
.scroll-wrapper
  padding-bottom 0.13rem
  overflow-x auto
  overflow-y hidden
  ul
    width 100%
    height 0.85rem
    white-space nowrap
    li:first-child
      margin-left 0.13rem
    li
      display inline-block
      height 0.85rem
      position relative
      margin 0 0.06rem
      img
        width 1.28rem
        height 0.85rem
        opacity 1
      .info
        position absolute
        left 50%
        top 50%
        transform translate(-50%, -50%)
        width 1.2rem
        height 0.38rem
        padding 0.02rem 0.05rem 0.08rem 0.05rem
        background white
        opacity 0.8
        background-position center
        background-size 100% 100%
        color #646464
        .text
          width 100%
          font-weight bold
          font-size 0.14rem
          line-height 0.16rem
          display -webkit-box
          white-space normal
          word-break break-word
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 1
          -webkit-box-orient vertical
          word-wrap break-word
          word-break break-all
          text-align center
        .tag
          margin-top 0.06rem
          width 100%
          line-height 0.14rem
          overflow hidden
          text-align center
          .tag-person
            padding-right 0.1rem
            &:after
              background-image url('~assets/images/huiyanjing.png')
          .tag-note
            &:after
              background-image url('~assets/images/biji.png')
          span
            display inline-block
            color #646464
            padding-left 0.1rem
            min-width 0.38rem
            position relative
            font-size 0.1rem
            &:after
              width 0.06rem
              height 0.06rem
              position absolute
              left 0
              top 0.03rem
              content ''
              background-position center
              background-size 100% 100%
</style>