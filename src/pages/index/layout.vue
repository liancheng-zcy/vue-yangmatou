<template>
  <div class="index-wrap">
      <main>
         <router-view></router-view>
      </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  
  export default{

  }
</script>

<style lang = "stylus" scoped>
  .index-wrap 
    display flex
    height 100%
    flex-direction column
    main 
     width 100%
     height 100%
     flex 1
      /* display flex
      overflow auto */
</style>