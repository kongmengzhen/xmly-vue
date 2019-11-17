<template>
  <div class="swiper-container swiper-container-initialized swiper-container-horizontal" :class="type">
    <div  class="swiper-wrapper">    
      <div  
       v-for="focusImage in focusImages"
      :key="focusImage.adFocusPictureDetail.adId" 
      class="swiper-slide">
        <img alt="" id="slider" :src="focusImage.adFocusPictureDetail.cover" class="_wwk">
      </div> 
        
    </div>  
  </div>
</template>
<script>
import { get } from "untils/http.js";
import Swiper from "swiper";
export default {
   props: ["pathnm",'type'],
   data() {
     return {
       focusImages:[],
       pathnm1: this.pathnm,
    

     }
   },
  watch: {
    $route: {
      handler: async function(val, oldVal) {
        // console.log(val.name);
        let result = await get({
       url:
        "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=" +val.name        
       });
       this.focusImages=result.data.moduleContent.focusImages
      },
    } 
     
  },
 async mounted() {  
    let result = await get({
      url:
      "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey="+this.pathnm1
      });
     this.focusImages=result.data.moduleContent.focusImages
       this.$nextTick(()=>{     
      new Swiper(".swiper-container", {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: '22%',
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 2000          
      },   
    });
   })
  },
 /*  updated() {
    this.$nextTick(
      ()=>{
         new Swiper(".swiper-container", {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: '22%',
      centeredSlides: true,
      loop: true,
      autoplay: {
          delay: 2000          
      },   
    });
      }
    )
  }, */
};
</script>


<style lang='stylus' scoped>
@import '~assets/swiper.min.css'
.swiper-container     
    width 100%;
    height 150px;
    padding: 20px 0px 10px 0
  .swiper-slide 
    width 100%;
    border-radius 10px    
    >img 
      width 100%
      height 100px
      border-radius 10px
  .swiper-slide-active
    transform scale(2,1.2)
</style>
