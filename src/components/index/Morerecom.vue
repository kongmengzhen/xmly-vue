<template>
  <div id='' >
    <div class="album-title">更多推荐</div>    
     <Colitem 
       v-for="recomitem in morerecom"
      :key="recomitem.data.id"
      :detail="recomitem.data"></Colitem>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import Colitem from "components/index/Colitem";
  import { get } from "untils/http.js";
  
  export default{ 
  props:['detail'],
  data() {
    return {
      morerecom:this.detail,
      type:this.$route.name
    }
  },
  watch: {
   async $route(val, oldVal) {       
       this.type=val.name     
       await this.$nextTick(()=>{
       this.bScroll.refresh()  
      })    
      },        
   },   
 async mounted() {
     let moreresult = await get({
        url:
          "https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=youshengshu"         
      });      
      this.morerecom=moreresult.data.materials  
      this.type=this.type==undefined?'tuijian':this.type   
      let scrollWrap = '.main.' + this.type
      let bScroll= new BScroll(scrollWrap,{
          pullUpLoad:true,
          click:true,
          probrType:2,
          mouseWheel:true,
          click: true, 
          tap: true   
    })   
    bScroll.on('pullingUp',async() => {     
     let moreresult = await get({
        url:
          "https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=youshengshu"         
      });      
    //  console.log(moreresult.data.materials)
     this.moreList=moreresult.data.materials
     this.morerecom=[
       ...this.morerecom,
       ...this.moreList
     ]
      bScroll.finishPullUp() 
       await this.$nextTick()
      bScroll.refresh()   
    })            
     
      
  },
  components:{
    Colitem
  },
  
  }
</script>

<style lang='stylus' scoped>
.album-title
  font-size 0.18rem
  color #40404c
  line-height 25px
  margin 17px 0 17px 15px
  font-weight 700

</style>
