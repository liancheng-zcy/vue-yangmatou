<template>
  <ul>
    <NoteProductItem
    v-for="(proValue,index) in noteProducts"
    :key = "index"
    :proValue = "proValue"
    ></NoteProductItem>
  </ul>
</template>

<script>
import Vue from "vue";
import NoteProductItem from "components/community/noteProductItem"
import { get } from "utils/http.js"
export default Vue.extend({
  data(){
    return{
       newDeatil:{},
       noteProducts:[]
    }
  },
  components: {
    NoteProductItem
  },
 async mounted () {
    this.newDeatil = this.$route.query
    let NoteId = this.newDeatil.noteId
    let noteProduct = await get({
      url:'/ajax/note/api/GetSimilarProductAndNoteAsync?',
      params:{
        Page:'0',
        pageSize:'20',
        NoteId:NoteId,
        Channel:'3',
        'NoteType':'1'
      }
    })
    this.noteProducts = noteProduct.data.Result.Products
  }
});
</script>

<style lang = "stylus" scoped>
ul
  width 100%
  white-space nowrap
  .product:first-child
    margin-left 0.08rem
</style>