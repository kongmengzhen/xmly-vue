<template>
  <div class="index-warp">
    <div class="header">
      <header>        
        <div href="javascript:0;" class="searchInput">
          <form action="#" class="header-form">
            <i class="yo-ico">&#xe65e;</i>
            <input 
            type="search" 
            class="search-ipt"
            @input="onInput"
            v-model="searchKy"
            />
          </form>
        </div>   
        <button class="search-cancel">取消</button>    
      </header>        
      <div class="tab-list">       
        <ul class="tab-ul">
          <li               
            v-for="(tabitem,i) in tablist"                
            :key="i"
            :to='"/home"'
            class="tab-item" 
            :ref="i"         
            @click="clickIndex(i,tabitem.categoryId)"  
            :cateId="tabitem.categoryId"          
            >{{tabitem.categoryName}}</li>             
             <transition
               type="transition" 
             >            
             <!-- :style="'left:'+ileft+'px;width:'+iwidth+'px'" -->
              <p 
              class="underline_k"
              :style="'left:'+ileft+'px'"
              ></p>
             </transition>
                    
        </ul>
      </div>  
          
    </div>  
    <div class="container"
     v-if="showHotList" >
      <a class="hotWordWrapper" 
      v-for="(hotword,index) in hotWordList.slice(0,20)"
      :key="index"
      :iconcon="hotword.shift"
      @click="jumpSearchList(hotword.word)" 
      >
        <span class="rank rank1">{{index+1}}</span>
        <span class="hotWord">{{hotword.word}}</span>
        <i class="yo-ico "
        :class="{
          'fall-icon':hotword.shift===-1,
          'same-icon':hotword.shift===0,
          'rise-icon':hotword.shift===1,
        }"        
        ></i>
      </a> 
    </div>  
     <div v-else>
      <a
        
         class="hotWordWrapper" 
         v-for="searchitem in searchList.queryResultList"
         :key="searchitem.id" 
         @click="jumpSearchList(searchitem.keyword)"       
      >       
        <span class="hotWord">{{searchitem.keyword}}</span>   
      </a>
      

       
    </div> 
  </div>
</template>
<script>
  import {get} from 'untils/http.js'
  import Vue from 'vue'
  import _ from 'lodash'
  export default { 
    data(){
      return{
        currentIndex:"",       
        tablist:[],       
        moreList:[], 
        listLeft:[],
        listItemWidth:[], 
        ileft:"",
        ipreIndex:"",
        iwidth:"",
        hotWordList:[],
        iconcon:'',
        cateId:"",
        showHotList:true,
        searchKy:"",
        searchList:{}

      }
    }, 
     watch: {
       ipreIndex(val,oldVal){
        oldVal=oldVal===""?0:oldVal      
         this.iwidth=Math.abs(this.listLeft[val]-this.listLeft[oldVal])
         console.log( this.iwidth);       
       }
     },   
                          
    methods: {
     async clickIndex(index,cate){
        console.log(cate);
        this.ipreIndex=index
        this.getWidth()       
        this.ileft=this.listLeft[index]-this.listItemWidth[index]/2-10   
         let reslist=  await get({
        url:'https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId='+cate+'&size=24'
          })   
          console.log(reslist.hotWordResultList);
          this.hotWordList=reslist.hotWordResultList   
     },
    
    async onInput(){ 
       console.log(this.searchKy.length);   
       if(this.searchKy.length==0){
           this.showHotList=true
       }else {
        this.showHotList=false
          let sugSearch=  await get({
          url:'/revision/suggest?kw='+this.searchKy+'&paidFilter=false&scope=all'
        }) 
        this.searchList=sugSearch.data.result
        console.log(this.searchList.queryResultList);       

       }   
     
     },
     jumpSearchList(kyword){
       console.log(kyword);
       this.$router.push('/search/'+kyword)
     },
      getWidth(){
        let width=0
        for(let i=0;i<this.maxLength;i++){
           let iLeft = this.$refs[i][0].getBoundingClientRect().width   
              width += iLeft;
            this.listLeft.push(width);    
            this.listItemWidth.push(iLeft)      
       }
      }
    },
    async mounted(){ 
      
      if(this.$route.query.keyword){
        this.searchKy=this.$route.query.keyword
      }  
    let result=  await get({
        url:'https://m.ximalaya.com/hotWordBillboardCategory'
      })     
      this.tablist=result.category 
      this.maxLength=result.category.length 

      // 
    let reslist=  await get({
    url:'https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24'
  })   
  // console.log(reslist.hotWordResultList);
  this.hotWordList=reslist.hotWordResultList
   } 
  }
</script>
<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';
.index-warp  
  height 100%
  width 100%
  background #fff
  overflow auto
  header   
    padding 0.15rem 0.15rem 0.05rem 0.15rem  
    height 0.44rem
    width 100%
    display flex
    flex-direction row
    align-items center
    justify-content center    
    .searchInput
      flex 1
      display flex
      align-items center
      border-radius 30px
      background rgb(239, 241, 244)
      height 0.3rem
      .header-form
        height .3rem
        width 100%
        display flex
        flex-direction row
        align-items center
        & i
          width 0.12 rem
          margin 0 0.08rem
          color #999
        & .search-ipt
          flex 1
          background: inherit;
          border none
    
    .search-cancel
      border: none;
      padding: 0 0 0 10px;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333;
      background-color: #fff;
      white-space: nowrap;
  .tab-list
    $border(0 0 1px 0)
    width 100%
    height 40px   
    margin-top 5px 
    overflow scroll
    .tab-ul
      height 100%    
      white-space nowrap      
      display flex
      align-items center
      .tab-item
        box-sizing border-box
        height 100%
        padding 7px 12.5px
        color #72727b  
      .underline_k
        left: 225px;
        transform-origin: left center;
        display: block;
        width: 18px;           
        left 15px       
        position: absolute;
        bottom: 1.5px;      
        z-index: 10;
        height: 3px;
        border-radius: 3px;
        background: #f06742;     
        transition: all 0.1s;
    
.hotWordWrapper
  padding: 0 15px 0 27px;
  display flex
  align-items center
  line-height: 45px;
  position: relative;
  .rank
    width 20px
    font-size 16px
    color #DABDA6
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align center
  .rank1     
    color #ff0b0b
  .rank2   
    color #f86442
  .rank3   
    color #f8a642
  .hotWord
    flex 1
    padding-left: 10px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333;
    &::after
      left 57px
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #e8e8e8;
      transform: scaleY(.5); 
      transform-origin: 50% 100%; 
  .rise-icon
    color #e44a3b
    font-size 24px
    &::after
      content '\e92b'    
  .fall-icon
    color #93cc48
    font-size 24px
    &::after
      content '\e603'
  .same-icon
    color #dededf
    font-size 24px
    &::after
      content '\e666'
</style>
