<template>
  <div class="index-warp">
    <div class="header">
      <header>
        <a class="logo" href="/">
          <svg width="70" height="15" class="icon" style="margin-left: 5px;">
            <svg id="icon-logo" viewBox="0 0 4778 1024">
              <path
                d="M1085.033113 217.006623c0 40.688742-6.781457 88.15894-94.940398 88.15894H0V210.225166h481.483444V135.629139H0V47.470199h481.483444V0h122.066225v47.470199H1085.033113v6.781457c0 40.688742-6.781457 81.377483-94.940398 81.377483H603.549669v67.81457l481.483444 13.562914z m0 434.013245c0 40.688742-6.781457 88.15894-94.940398 88.15894H0V644.238411h196.662252v-61.033113h-47.470199C67.81457 583.205298 6.781457 528.953642 6.781457 467.92053V352.635762h1071.470199v115.284768c0 67.81457-67.81457 115.284768-142.410596 115.284768h-81.377484v61.033113l230.569537 6.781457z m-6.781457 250.913907c0 67.81457-67.81457 115.284768-142.410596 115.284768H149.192053C67.81457 1017.218543 6.781457 962.966887 6.781457 901.933775v-115.284768h1071.470199v115.284768zM325.509934 644.238411h406.887417v-61.033113h-406.887417v61.033113zM162.754967 488.264901h759.523179c20.344371 0 33.907285-13.562914 33.907284-27.125828v-20.344371H135.629139v20.344371c0 20.344371 13.562914 27.125828 27.125828 27.125828z m0 440.794702h759.523179c20.344371 0 33.907285-13.562914 33.907284-27.125828V881.589404H135.629139v20.344371c0 13.562914 13.562914 27.125828 27.125828 27.125828zM4279.099338 339.072848h176.317881V162.754967h-176.317881V339.072848z m0 284.821192h176.317881V447.576159h-176.317881v176.317881z m0 284.821192h176.317881v-176.317881h-176.317881v176.317881zM4563.92053 0v61.033113H4747.019868V67.81457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894V339.072848H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894v176.317881H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894v176.317881H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-488.264901V0h108.503312v61.033113h176.317881V0h108.503311z m-535.7351 176.317881h-210.225165c-33.907285 0-61.033113-6.781457-81.377484-27.125828-27.125828-27.125828-33.907285-67.81457-33.907284-74.596027H4136.688742v773.086093c0 115.284768-33.907285 176.317881-196.662252 176.317881h-40.688742v-108.503311h40.688742c74.596026 0 81.377483-27.125828 81.377484-74.596027V522.172185h-135.62914c-169.536424 0-189.880795-94.940397-189.880794-176.31788V230.569536h108.503311v115.284769c0 54.251656 0 67.81457 81.377483 67.814569h135.62914V176.317881zM3980.715232 542.516556h20.344371l-169.536424 379.76159c-20.344371 54.251656-61.033113 81.377483-169.536424 81.377483l169.536424-372.980132c27.125828-74.596026 81.377483-88.15894 149.192053-88.158941zM1729.271523 840.900662c-33.907285-13.562914-74.596026-20.344371-115.284768-20.344371-189.880795 0-359.417219 128.847682-393.324503 155.97351v-142.410596c115.284768-81.377483 250.913907-128.847682 386.543046-128.847682 27.125828 0 47.470199 0 74.596027 6.781457 115.284768 13.562914 203.443709 67.81457 278.039735 115.284768 54.251656 33.907285 94.940397 61.033113 135.629139 61.033113 81.377483 0 81.377483-33.907285 81.377483-81.377484V644.238411c0-67.81457-20.344371-88.15894-94.940397-88.158941H1234.225166V189.880795H1356.291391v257.695364h739.178808c135.629139 0 210.225166 67.81457 210.225165 203.443709v183.099337c0 122.066225-74.596026 189.880795-196.662251 189.880795-94.940397 0-155.97351-47.470199-223.78808-94.940397-47.470199-33.907285-94.940397-67.81457-155.97351-88.158941zM1335.94702 115.284768c-94.940397 0-108.503311-81.377483-108.503311-108.503311V0h786.649006c176.317881 0 237.350993 61.033113 237.350994 237.350993v135.629139h-128.847683V264.476821c0-142.410596-20.344371-149.192053-149.192052-149.192053h-637.456954zM3092.344371 61.033113V27.125828h115.284768v27.125828H3526.357616c0 61.033113-54.251656 108.503311-115.284768 108.503311h-637.456954V61.033113h318.728477z m-495.046358 0V0h122.066225v840.900662c0 115.284768-67.81457 176.317881-189.880794 176.317881H2441.324503v-101.721854h67.81457c81.377483 0 88.15894-33.907285 88.15894-74.596027V556.07947H2441.324503c0-54.251656 47.470199-101.721854 108.503312-101.721854h47.470198V162.754967H2441.324503c0-54.251656 47.470199-101.721854 108.503312-101.721854h47.470198z m332.291391 806.993377l-108.503311-623.89404h6.781457c81.377483 0 128.847682 33.907285 142.410596 108.503312l67.814569 393.324503c6.781457 33.907285 0 67.81457-27.125828 94.940397-20.344371 13.562914-47.470199 27.125828-81.377483 27.125828z m366.198675 40.688742H3526.357616v6.781457c0 54.251656-54.251656 101.721854-115.284768 101.721854h-637.456954v-108.503311h325.509934c81.377483 0 128.847682-94.940397 162.754967-223.78808 0-13.562914 61.033113-332.291391 61.033112-339.072847 13.562914-74.596026 54.251656-108.503311 142.410596-108.503312h6.781457v6.781457L3390.728477 698.490066c-20.344371 94.940397-33.907285 142.410596-94.940398 210.225166z"
                fill="#FA2800"
              />
            </svg>
          </svg>
        </a>
        <!-- 这里的搜索是div  并不是搜索框 真正的input  是要点击才会进行跳转 -->
        <a href="javascript:0;" class="searchInput">
          <form action="#" 
          class="header-form"        
          >
            <i class="yo-ico">&#xe65e;</i>
            <p>{{seatchKy}}</p>
          </form>
        </a>
        <a class="downloadApp">打开APP</a>
      </header>   
       <div class="tab-list">
        <ul class="tab-ul">
             <li               
                v-for="(tabitem,i) in tabList"                 
                :key="i"                
                class="tab-item" 
                :class="{active:i==currentIndex}"
                @click="addActive(i,tabitem.paramUrl)" 
              >{{tabitem.tabnm}}</li>          
        </ul>
      </div>       
    </div>   
    <div class="allWarp">
      <div class="allResultList">
        <div class="resultContent">
          <h2 class="title">
            <span>"{{seatchKy}}"相关的主播</span>
            <a class="moreText">
              <span class="moreText">更多               
              </span>
               <i class="yo-ico goMore">&#xe602;</i>
            </a>
          </h2>
          <ul class="userList">
           
            <searchCicle
            class="user-item"
            :userDetail="albumsObj"
            ></searchCicle>
          </ul>          
         </div>

        <div class="resultContent">
            <h2 class="title">
              <span>"{{seatchKy}}"相关的专辑</span>
              <a class="moreText"
                 style="margin:0px"              
              >
                <span>更多               
                </span>
                <i class="yo-ico goMore">&#xe602;</i>
              </a>
            </h2>
            <ul >  
              <searchColitem 
                class="searchColitem"
                 v-for="albumitem in albumsObj.albumViews.albums"
                :key="albumitem.albumInfo.id"
                @click="jumpDetail"
                :detail="albumitem"></searchColitem>            
            </ul>          
         </div>

        <div class="resultContent">
          <h2 class="title">
            <span>"{{seatchKy}}"相关的声音</span>
            <a class="moreText">
              <span>更多               
              </span>
              <i class="yo-ico goMore">&#xe602;</i>
            </a>
          </h2>
          <ul class="trackList">  
              <!-- trackViews -->
            <a class="track-item" 
              v-for="trackitem in albumsObj.trackViews.tracks"
              :key="trackitem.trackInfo.uid"
            >
            <img class="track-cover" :src="trackitem.trackInfo.cover_path" alt="">
            <div>
              <p class="trackTitle">{{trackitem.trackInfo.title}}</p>
              <p class="trackInfo">209.93万</p>
            </div>
            </a>
          </ul>          
        </div>
        <div class="resultContent">
          <h2 class="title">
            <span>"{{seatchKy}}"相关的听单</span>
            <a class="moreText">
              <span>更多               
              </span>
              <i class="yo-ico goMore">&#xe602;</i>
            </a>
          </h2>
          <ul class="trackList">  
              <!-- trackViews -->
            <a class="track-item" 
              v-for="trackitem in albumsObj.trackViews.tracks"
              :key="trackitem.trackInfo.uid"
            >
            <img class="special-cover" :src="trackitem.trackInfo.cover_path" alt="">
            <div>
              <p class="trackTitle">{{trackitem.trackInfo.title}}</p>
              <p class="trackInfo">209.93万</p>
            </div>
            </a>
          </ul>          
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
 import BScroll from 'better-scroll'
 import searchColitem from "components/index/searchColitem";
 import searchCicle from "components/index/searchCicle"
 import {get} from 'untils/http.js'
  import Vue from 'vue'
  export default { 
    data(){
      return{
        seatchKy:this.$route.params.id,
        currentIndex:"",
          
        albumsObj:{},
        tabList:[
          {
            tabnm:'全部',
            paramUrl:''
          },
          {
            tabnm:'专辑',
            paramUrl:'album/'
          },
          {
            tabnm:'声音',
            paramUrl:"sound/"
          },
          {
            tabnm:'主播',
            paramUrl:'zhubo/'
          },
          {
            tabnm:'听单',
            paramUrl:'ting/'
          }]
        
        }
    },  
    methods: {
      addActive(i,paramUrl){
        this.currentIndex=i
        console.log(paramUrl);
        this.$router.push('/search/'+paramUrl+this.seatchKy)
      },
      jumpDetail(i){
        console.log(1);
      }
    },
   async mounted() {
      let result=  await get({
        url:'https://m.ximalaya.com/m-revision/page/search?kw='+this.seatchKy+'&core=all&page=1&rows=5'
      })
      this.albumsObj=result.data  
      console.log(this.albumsList);   
      this.$nextTick(()=>{
        let bScroll=new BScroll('.allWarp',{
          pullUpLoad:true,
          click:true,
          probrType:2,
          mouseWheel:true,
          click: true, 
          tap: true,
          preventDefault:false
    })
      })  
    },
    components:{
      searchColitem,
      searchCicle
    }
  }
</script>
<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';
.index-warp
  display flex
  flex-direction column
  height 100%
  width 100%
  background #fff
  header   
    padding 0.15rem 0.15rem 0.05rem 0.15rem  
    height 0.44rem
    width 100%
    display flex
    flex-direction row
    align-items center
    justify-content center
    .logo
      width 0.8rem
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
        & p
          flex 1
          color: #333;
          font-size 12px
          white-space nowrap
          overflow hidden
    .downloadApp
      margin-left 0.1rem
      width 0.68rem
      height 0.3rem
      line-height 0.12rem
      font-size 12px
      box-sizing border-box
      white-space nowrap
      border 1px solid #f66847
      padding 0.08rem 0.1rem
      border-radius 15px
      color #f66847
  .tab-list
    $border(0 0 1px 0)
    width 100%
    height 40px   
    margin-top 5px 
    .tab-ul
      height 100%
      width 100%
      white-space nowrap
      overflow-x scroll
      display flex
      align-items center
      .tab-item
        flex 1
        box-sizing border-box
        height 100%
        padding 7px 12.5px
        color #72727b  
      .active    
        box-sizing border-box
        position relative    
        font-size 18px    
        height 25px;
        line-height 7px
      .active::after
        display block
        content ''
        height 3px
        width 18px
        background #f06742
        position absolute
        left 35%
        transform translateX(-50%)
        bottom -7px

.allWarp
  height 100%
  overflow hidden
.allResultList
  padding 0 15px
  .title
    display flex
    justify-content space-between
    line-height: 25px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #40404c;
    font-weight: 400;
.resultContent
  padding-top 20px
  .userList
    margin 15px 15px 0 0px
    display flex
    align-items center
    overflow-x: auto
    justify-content space-between
  .trackList
    margin 15px 15px 0 0
    .track-item      
      display flex
      align-items center
      margin-right 30px 
      margin 15px 0
      .special-cover
        width 70px
        height 70px
        margin-right: 5px; 
              
      .track-cover
        width 40px
        height 40px
        margin-right: 5px;
        border-radius 50%
      .trackTitle
        flex 1
        padding-bottom: 4px;        
        line-height: 20px;          
        font-weight: 500;
        font-size: 14px;
        color: #40404c;
      .trackInfo     
        font-size: 12px;
        color: #a3a3ac;
        line-height: 16px;
  .title
    .moreText
      padding-left: 10px;
      line-height: 17px;
      font-size: 12px;
      color: #72727b;
      white-space: nowrap;
      .goMore
        font-size 18px
    
</style>
