<template>
  <div id="cate-wrap">
    <!--  :to="tomato.link" -->
    <routerLink to="/categroy" v-for="tomato in tomatoeslist" :key="tomato.order">
      <div>
        <img :src="tomato.img" alt />
      </div>
      <p>{{tomato.name}}</p>
    </routerLink>
  </div>
</template>

<script>
import { get } from "untils/http.js";
import { async } from 'q';
export default {
  props: ["pathnm"],
  data() {
    return {
      tomatoeslist: [],
      pathnm1: this.pathnm
    };
  },
  watch: {
    $route: {
      handler: async function(val, oldVal) {
        console.log(val.name);
        let result = await get({
       url:
        "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=" +val.name        
       });
        this.tomatoeslist = result.data.moduleContent.tomatoes;
      },      
      deep: true
    }
  },
    async mounted() {
   
      let result = await get({
        url:
          "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=" +
          this.pathnm1
      });
      this.tomatoeslist = result.data.moduleContent.tomatoes;
      // console.log(result.data.moduleContent.tomatoes);
    }
  };
</script>

<style lang='stylus' scoped>
#cate-wrap
  display flex
  width 86%
  margin 15px auto 0
  justify-content space-between
  text-align center
  a
    flex 1
    img
      width 34px
      height 34px
      border-radius 50%
  p
    color #666
    font-size 12px
</style>
