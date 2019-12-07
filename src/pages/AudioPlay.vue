<template>
  <div class="awarp">    
    <div class="page" v-show="showContent">
      <div class="desc-top">
        <a class="desc-msg">
          <div class="desc-logo">
            <svg width="36" height="36" class="icon" style="margin-right: 8px;">
              <svg id="icon-loto_top" viewBox="0 0 1024 1024">
                <path
                  d="M819.2 0c113.777778 0 204.8 91.022222 204.8 204.8v614.4c0 113.777778-91.022222 204.8-204.8 204.8H204.8c-113.777778 0-204.8-91.022222-204.8-204.8V204.8C0 91.022222 91.022222 0 204.8 0h614.4z"
                  fill="#FA2800"
                />
                <path
                  d="M403.911111 227.555556H278.755556C250.311111 227.555556 227.555556 250.311111 227.555556 278.755556v435.2c0 28.444444 22.755556 51.2 51.2 51.2h51.2c14.222222-2.844444 25.6-11.377778 25.6-28.444445 0-11.377778-11.377778-25.6-25.6-25.6h-25.6c-14.222222 0-25.6-11.377778-25.6-25.6V304.355556c0-14.222222 11.377778-25.6 25.6-25.6h73.955555c14.222222 0 25.6 11.377778 25.6 25.6v412.444444c0 25.6-17.066667 48.355556-42.666667 51.2h42.666667c28.444444 0 51.2-22.755556 51.2-51.2V278.755556c-2.844444-28.444444-25.6-51.2-51.2-51.2z m187.733333 51.2h182.044445c28.444444 0 51.2-22.755556 51.2-51.2h-261.688889c-28.444444 0-51.2 22.755556-51.2 51.2V796.444444c28.444444 0 51.2-22.755556 51.2-51.2v-284.444444h164.977778V796.444444c28.444444 0 51.2-22.755556 51.2-51.2v-284.444444c22.755556-2.844444 42.666667-25.6 42.666666-51.2h-256v-102.4c0-17.066667 11.377778-28.444444 25.6-28.444444z"
                  fill="#FFFFFF"
                />
              </svg>
            </svg>
          </div>
          <div class="desc-title">
            <svg width="65" height="18" class="icon v-m">
              <svg id="icon-logo" viewBox="0 0 4778 1024">
                <path
                  d="M1085.033113 217.006623c0 40.688742-6.781457 88.15894-94.940398 88.15894H0V210.225166h481.483444V135.629139H0V47.470199h481.483444V0h122.066225v47.470199H1085.033113v6.781457c0 40.688742-6.781457 81.377483-94.940398 81.377483H603.549669v67.81457l481.483444 13.562914z m0 434.013245c0 40.688742-6.781457 88.15894-94.940398 88.15894H0V644.238411h196.662252v-61.033113h-47.470199C67.81457 583.205298 6.781457 528.953642 6.781457 467.92053V352.635762h1071.470199v115.284768c0 67.81457-67.81457 115.284768-142.410596 115.284768h-81.377484v61.033113l230.569537 6.781457z m-6.781457 250.913907c0 67.81457-67.81457 115.284768-142.410596 115.284768H149.192053C67.81457 1017.218543 6.781457 962.966887 6.781457 901.933775v-115.284768h1071.470199v115.284768zM325.509934 644.238411h406.887417v-61.033113h-406.887417v61.033113zM162.754967 488.264901h759.523179c20.344371 0 33.907285-13.562914 33.907284-27.125828v-20.344371H135.629139v20.344371c0 20.344371 13.562914 27.125828 27.125828 27.125828z m0 440.794702h759.523179c20.344371 0 33.907285-13.562914 33.907284-27.125828V881.589404H135.629139v20.344371c0 13.562914 13.562914 27.125828 27.125828 27.125828zM4279.099338 339.072848h176.317881V162.754967h-176.317881V339.072848z m0 284.821192h176.317881V447.576159h-176.317881v176.317881z m0 284.821192h176.317881v-176.317881h-176.317881v176.317881zM4563.92053 0v61.033113H4747.019868V67.81457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894V339.072848H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894v176.317881H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-88.15894v176.317881H4747.019868v6.781457c0 47.470199-6.781457 101.721854-88.158941 101.721854h-488.264901V0h108.503312v61.033113h176.317881V0h108.503311z m-535.7351 176.317881h-210.225165c-33.907285 0-61.033113-6.781457-81.377484-27.125828-27.125828-27.125828-33.907285-67.81457-33.907284-74.596027H4136.688742v773.086093c0 115.284768-33.907285 176.317881-196.662252 176.317881h-40.688742v-108.503311h40.688742c74.596026 0 81.377483-27.125828 81.377484-74.596027V522.172185h-135.62914c-169.536424 0-189.880795-94.940397-189.880794-176.31788V230.569536h108.503311v115.284769c0 54.251656 0 67.81457 81.377483 67.814569h135.62914V176.317881zM3980.715232 542.516556h20.344371l-169.536424 379.76159c-20.344371 54.251656-61.033113 81.377483-169.536424 81.377483l169.536424-372.980132c27.125828-74.596026 81.377483-88.15894 149.192053-88.158941zM1729.271523 840.900662c-33.907285-13.562914-74.596026-20.344371-115.284768-20.344371-189.880795 0-359.417219 128.847682-393.324503 155.97351v-142.410596c115.284768-81.377483 250.913907-128.847682 386.543046-128.847682 27.125828 0 47.470199 0 74.596027 6.781457 115.284768 13.562914 203.443709 67.81457 278.039735 115.284768 54.251656 33.907285 94.940397 61.033113 135.629139 61.033113 81.377483 0 81.377483-33.907285 81.377483-81.377484V644.238411c0-67.81457-20.344371-88.15894-94.940397-88.158941H1234.225166V189.880795H1356.291391v257.695364h739.178808c135.629139 0 210.225166 67.81457 210.225165 203.443709v183.099337c0 122.066225-74.596026 189.880795-196.662251 189.880795-94.940397 0-155.97351-47.470199-223.78808-94.940397-47.470199-33.907285-94.940397-67.81457-155.97351-88.158941zM1335.94702 115.284768c-94.940397 0-108.503311-81.377483-108.503311-108.503311V0h786.649006c176.317881 0 237.350993 61.033113 237.350994 237.350993v135.629139h-128.847683V264.476821c0-142.410596-20.344371-149.192053-149.192052-149.192053h-637.456954zM3092.344371 61.033113V27.125828h115.284768v27.125828H3526.357616c0 61.033113-54.251656 108.503311-115.284768 108.503311h-637.456954V61.033113h318.728477z m-495.046358 0V0h122.066225v840.900662c0 115.284768-67.81457 176.317881-189.880794 176.317881H2441.324503v-101.721854h67.81457c81.377483 0 88.15894-33.907285 88.15894-74.596027V556.07947H2441.324503c0-54.251656 47.470199-101.721854 108.503312-101.721854h47.470198V162.754967H2441.324503c0-54.251656 47.470199-101.721854 108.503312-101.721854h47.470198z m332.291391 806.993377l-108.503311-623.89404h6.781457c81.377483 0 128.847682 33.907285 142.410596 108.503312l67.814569 393.324503c6.781457 33.907285 0 67.81457-27.125828 94.940397-20.344371 13.562914-47.470199 27.125828-81.377483 27.125828z m366.198675 40.688742H3526.357616v6.781457c0 54.251656-54.251656 101.721854-115.284768 101.721854h-637.456954v-108.503311h325.509934c81.377483 0 128.847682-94.940397 162.754967-223.78808 0-13.562914 61.033113-332.291391 61.033112-339.072847 13.562914-74.596026 54.251656-108.503311 142.410596-108.503312h6.781457v6.781457L3390.728477 698.490066c-20.344371 94.940397-33.907285 142.410596-94.940398 210.225166z"
                  fill="#FA2800"
                />
              </svg>
            </svg>
            <span>· 想听啥都有</span>
          </div>
        </a>
        <div class="desc-openApp">打开</div>
      </div>
      <div class="desc-album-page">
        <div 
          style="width:200px"
        >       
        </div>
        <div class="albumInfoWrapper">
          <div class="albumInfo">
            <div class="imgWrapper">
              <div class="xm-album-cover">
                <img
                  :src="'https://imagev2.xmcdn.com/'+detail.albumDetailInfo.albumInfo.cover"                  
                />
                <div class="pay-count">播放量1111亿</div>
              </div>             
            </div>
            <div class="infoWrapper">
              <p class="ellipsis2">{{title}}</p>
            </div>
          </div>
          <div class="xm-bg--blur" :style="'background-image:url(https://imagev2.xmcdn.com/'+detail.albumDetailInfo.albumInfo.cover+')'"></div>
          </div>
       
        <div class="track-list">
          <div class="list-view">
            <div class="list-view-header">
              <h2>节目({{this.programCount}})</h2>
              <span>
                批量下载
                <i class="yo-ico">&#xe602;</i>
              </span>
            </div>
            <ul class="list-view-body">
              <div>    
                  <!--  href="https://fdfs.xmcdn.com/group63/M04/B0/63/wKgMaF0AjEqzchhcAHOQyw-MaWs694.m4a" -->
                  <a                  
                  class="list-view-item" 
                  v-for="programRes in programResArr" 
                  :key="programRes.id"
                  @click="playAudio(programRes)"
                  >
                  <i class="yo-ico onoff">&#xe67f;</i>
                  <p class="titleWrapper ellipsis2">{{programRes.trackInfo.title}}</p>
                  <i class="yo-ico download">&#xe632;</i>
                  </a>
                            
              </div>
              <div class="more-button more-item" @click="loadingMore">
                加载更多
                <i class="yo-ico">&#xe600;</i>
              </div>
            </ul>                      
        </div>
         <div class="detail-box">
              <h2>大咖来了</h2>
              <a href="#">
                <img
                  :src="higherUps.img"
                  alt
                />
              </a>
            </div>
            <div class="list-view-thumbnail">
              <h2>相似专辑</h2>              
              <div class="album-hor">
              <Horitem  v-for="thumbnail in thumbnailArr" :key="thumbnail.id"   :detail="thumbnail"></Horitem>
              </div>
              <div class="new-thumbnail">
                <div class="new-thumbnail-btn" @click="newThumbnail">
                  <i class="yo-ico new-thumbnail-icon">&#xe656;</i><span>换一批</span>
                </div>
                </div>
            </div>
            <div class="list-view-zhubo">
              <h2>主播信息</h2>
              <div class="list-view-zhubo-msg">
              <a href="#" class="avatar">
                <img
                  src="https://imagev2.xmcdn.com/group52/M0B/B6/39/wKgLe1w1axDBWOWJACwzpWA7pjI535.png!op_type=5&device_type=ios&name=web_meduim&upload_type=cover&magick=webp"
                  alt
                />
                <svg width="27" height="16" class="zhubo-level">                 
                  <svg id="icon-individual_blue_V16" viewBox="0 0 1728 1024"><path d="M512 0h704c281.6 0 512 230.4 512 512s-230.4 512-512 512H512c-281.6 0-512-230.4-512-512s230.4-512 512-512z" fill="#36D6FB"></path><path d="M518.4 793.6c-12.8 25.6-25.6 38.4-44.8 38.4-12.8 0-19.2 0-25.6-6.4-6.4-6.4-12.8-19.2-25.6-32L236.8 262.4c0-6.4-6.4-12.8-6.4-19.2v-19.2c0-6.4 6.4-12.8 12.8-12.8 6.4-12.8 12.8-12.8 25.6-19.2h38.4c6.4 0 12.8 6.4 19.2 12.8 6.4 6.4 12.8 12.8 12.8 25.6l134.4 390.4 134.4-390.4c6.4-6.4 6.4-19.2 12.8-19.2 0-12.8 6.4-12.8 12.8-19.2h44.8c32 6.4 38.4 25.6 32 64l-192 537.6zM966.4 800c0 25.6-19.2 32-57.6 32s-57.6-12.8-57.6-32V313.6h-44.8c-12.8 0-19.2-6.4-25.6-12.8-6.4-6.4-6.4-19.2-6.4-44.8 0-19.2 0-38.4 6.4-44.8 6.4-6.4 12.8-12.8 25.6-12.8H896c38.4 0 64 12.8 64 44.8v556.8zM1222.4 416c6.4 0 12.8-6.4 19.2-6.4h12.8c32 0 57.6 6.4 83.2 12.8 25.6 12.8 44.8 25.6 64 44.8 19.2 19.2 32 38.4 38.4 70.4 6.4 25.6 12.8 57.6 12.8 83.2s-6.4 51.2-12.8 76.8-19.2 51.2-38.4 70.4c-19.2 19.2-38.4 38.4-64 51.2-25.6 12.8-51.2 19.2-83.2 19.2s-57.6-6.4-83.2-19.2c-25.6-12.8-44.8-25.6-64-44.8-19.2-19.2-32-44.8-38.4-70.4s-12.8-51.2-12.8-83.2 6.4-57.6 12.8-89.6c6.4-32 12.8-64 25.6-89.6 12.8-32 25.6-57.6 44.8-89.6l57.6-76.8c25.6-25.6 51.2-51.2 70.4-64 12.8-12.8 25.6-19.2 38.4-19.2 6.4 0 19.2 0 25.6 6.4 6.4 6.4 12.8 6.4 19.2 19.2 6.4 6.4 12.8 19.2 12.8 32s-6.4 19.2-12.8 32c-25.6 19.2-44.8 38.4-64 57.6-25.6 12.8-44.8 38.4-64 76.8z m32 320c12.8 0 25.6-6.4 38.4-12.8 12.8-6.4 19.2-12.8 25.6-25.6l19.2-38.4c6.4-12.8 6.4-25.6 6.4-38.4 0-38.4-6.4-64-25.6-83.2-12.8-19.2-38.4-32-64-32s-51.2 12.8-64 32c-12.8 19.2-25.6 44.8-25.6 83.2 0 12.8 0 25.6 6.4 44.8s6.4 25.6 19.2 38.4c6.4 12.8 19.2 19.2 25.6 25.6 12.8 0 25.6 6.4 38.4 6.4z" fill="#FFFFFF"></path></svg>
                </svg>
              </a>
              <div class="zhubo-content">
                <h4 class="zhubo-nickname">有声的紫襟</h4>
                <p class="zhubo-text .ellipsis2">喜马人肉故事机！来呀，等你关注。微博求关注呀：有声的紫襟。</p>
                <p class="fans-info">959.97万</p>
              </div>
              <div class="add-guanzhu">
                <i class='yo-ico add-guanzhu-icon'>&#xe62e;</i>
                <span>加关注</span>
              </div>                        
           </div>     
            <div class="more-button go-zhuye">进入主页 <i class='yo-ico goleft'>&#xe602;</i></div>         
          
          </div>   
           <div class="classify-item">
              <h2>喜马拉雅经典必听</h2> 
              <div class="classify-item-desc">           
               <Colitem 
                  v-for="classify in classifyArr"
                  :key="classify.id"
                  :detail="classify"                   
                ></Colitem>
                </div>
                <div>
                  查看更多  
                </div> 
            </div> 
        </div>
      </div>
    </div>
    <div v-show="!showContent" class="loading">    
      <img  src="~assets/img/load3.gif" alt="">
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { get } from "untils/http.js";
import Horitem from "components/index/Horitem";
import Colitem from "components/index/Colitem";
import Morerecom from "components/index/Morerecom";
export default {
  props:['audioPlay'],
  data() {
    return {
      showContent:false,
      programCount:"",     
      id: this.$route.params.id,
      show: false,
      bScroll: {},
      detail:{},
      programResArr:{},
      programPage:1,
      newThumPage:1,
      higherUps:{},
      thumbnailArr:[],
      zhuboArr:{},
      classifyArr:{},
      title:""
      
   };
  },
   
  methods: {
    
      showDetail() {
        this.show = !this.show;
      },
      playAudio(item){
         this.$router.push({
          name:'audioplay',
          params:{
            id:this.id,
            audio:item.id,
            detail:item
            }
        })
      },

      async loadingMore(){
        // console.log(1)
        this.programPage++
        let program = await get({
        url:
          "https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=" +
          this.id +
          "&page="+this.programPage+"&pageSize=10&asc=true"
      });   
  
      this.programResArr=[
        ...this.programResArr,
        ...program.data.trackDetailInfos
      ] 
      
      },

      async newThumbnail(){
        this.newThumPage++
      let thumbnailRes= await get({
        url:
          "https://m.ximalaya.com/m-revision/common/album/queryAlbumRelatedRecommendAlbums?albumId=" +
          this.id +
          "&page="+this.newThumPage+"&pageSize=6"
      });
      console.log(thumbnailRes.data.albumBriefDetailInfos)
      if(thumbnailRes.data.albumBriefDetailInfos.length<=0){
        return
      }
      this.thumbnailArr=thumbnailRes.data.albumBriefDetailInfos
      }
    },

  components:{
     Horitem,
     Colitem   

  },
  beforeRouteEnter (to, from, next) {  
    console.log(to);    
    next(
      vm=>{
        console.log(vm.title=to.params.detail.trackInfo.title);
      }       
    )
  },
 async beforeRouteUpdate (to, from, next) {
       console.log(1);
      // this.title=to.params.detail.trackInfo.title 
    next()
  },
  watch: {
    $route(to,from){    
     this.title=to.params.detail.trackInfo.title
    }
  },
  
  async mounted() {   
   
    let result = await get({
      url: 
        "https://m.ximalaya.com/m-revision/page/album/v2/queryAlbumPage/" +
        this.id +
        "?albumCounts=track"
    });
      if(result!=""){
        this.showContent=true
      }else{
        this.showContent=false
      }
      // console.log(result.data);
      this.detail=result.data

     let program = await get({
      url:
        "https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=" +
        this.id +
        "&page=1&pageSize=10&asc=true"
    });
    this.programCount=program.data.totalCount
    // console.log(program.data.trackDetailInfos);
    this.programResArr=program.data.trackDetailInfos
      
      let higherUpsRes=await get({
      url:
        "https://m.ximalaya.com/m-revision/page/album/queryAlbumPageActivityInfo/" +
        this.id 
    });
      // console.log(higherUpsRes.data.appointActivities[0])
    this.higherUps=higherUpsRes.data.appointActivities[0]

    //专辑
    let thumbnailRes= await get({
      url:
        "https://m.ximalaya.com/m-revision/common/album/queryAlbumRelatedRecommendAlbums?albumId=" +
        this.id +
        "&page=1&pageSize=6"
    });
    // console.log(thumbnailRes.data.albumBriefDetailInfos)
    this.thumbnailArr=thumbnailRes.data.albumBriefDetailInfos

    //主播
    let zhuboRes= await get({
      url:
        "https://m.ximalaya.com/m-revision/common/user/queryUserInfo/" +
        this.id +
        "?userCountKeys=follower"
    });
    // console.log(zhuboRes.data.userInfo);

    //classify classify
    let classifyRes=await get({
      url:
        "https://m.ximalaya.com/m-revision/common/album/queryClassicListenAlbums"
    });
    // console.log(classifyRes.data);
    this.classifyArr=classifyRes.data
    
    
    await this.$nextTick(() => {
      this.bScroll = new BScroll(".awarp", {
        pullUpLoad: true,
        click: true,
        probrType: 2,
        mouseWheel: true,
        click: true,
        tap: true
      });
    });
  }
 
};
</script>

<style lang='stylus' scoped>
.ellipsis2
  overflow hidden
  display -ms-flexbox
  display flex
  display -webkit-box
  -webkit-line-clamp 2
  -o-text-overflow ellipsis
  text-overflow ellipsis
  -webkit-box-orient vertical
.awarp
  height 100%
  overflow hidden
.loading
  background #fff
  width 100%
  height 100%
  img
    width 30%
    position absolute
    bottom 0 
    top 0
    left 0
    right 0
    margin auto
.yo-ico
  color #f8666c
  font-weight 600
  font-size 16px
.desc-album-page
  background #fff
.desc-top
  box-sizing content-box
  height 36px
  width 100%
  background rgba(34, 35, 37, 0.8)
  padding 10px 15px 10px 8px
  display flex
  justify-content space-between
  align-items center
  .desc-msg
    display flex
    align-items center
    min-width 240px
    flex-shrink 0
    .desc-title
      display flex
      align-items center
      color #fff
      font-weight 400
      white-space nowrap
  .desc-openApp
    width 70px
    background #f86442
    color #fff
    text-align center
    margin-right 20px
    white-space nowrap
    flex-shrink 0
    height 36px
    line-height 36px
    border-radius 36px
.albumInfoWrapper
  position relative
  padding 30px 20px 10px
  background #484a60
  overflow hidden
  z-index 10
  .albumInfo
    display flex
    flex-direction column
    align-items center
    color #fff
    position relative
    z-index 1
  .imgWrapper
    position relative
    .xm-album-cover
      width 95px
      height 95px
      >img
        width 100%
      .pay-count
        position absolute
        top 70px
        right 0
        left 0
        text-align right
        padding 4px 10px 4px 5px
        white-space nowrap
        font-size 12px
        line-height 1.42
        font-weight 700
        color #fff
    >img
      position absolute
      width 24px
      height 95px
      left 95px
      top 0
  .infoWrapper
    margin-left 25px
    font-family PingFangSC-Medium
    font-weight 500
    font-size 17px
    color #fff
    line-height 23px
    position relative
    .infoWrapper-msg
      flex 1
      img
        width 20px
        border-radius 50%
      span
        padding-left 6px
        font-size 12px
        color rgba(255, 255, 255, 0.81)
      ::after
        content ''
        position absolute
        left 0
        right 0
        top 85px
        border-bottom 1px solid rgba(255, 255, 255, 0.4)
        transform scaleY(0.5)
        transform-origin 50% 100%
    .subscribeWrapper
      margin 30px auto 20px 0
      font-family PingFangSC-Regular
      font-size 12px
      color #fff
      a>span
        display inline-block
        padding 0 10px
        height 28px
        line-height 28px
        background #fff
        border-radius 14px
        text-align center
        font-size 14px
        color #000
        font-family PingFangSC-Medium
        font-weight 700
        font-weight 500
      >span
        margin-right 10px
.xm-bg--blur
  background-image url('https://imagev2.xmcdn.com/group63/M01/17/EA/wKgMcl0oVn-BJnb6AANC9-wAMgQ581.jpg!op_type=3&columns=144&rows=144&magick=webp')
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  transform scale(2)
  filter blur(15px)
.xm-bg--blur::after
  content ''
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  background rgba(0, 0, 0, 0.3)
.album-detail
  padding 20px 15px 0
  text-align center
  color rgba(0, 0, 0, 0.8)
  font-size 14px
  font-weight 400
.album-detail-content
  padding 10px 15px 0
.list-view
  padding 15px 15px 0
.list-view-header
  display flex
  justify-content space-between
  align-items center
  >span
    color #f86442
.list-view-item
  display flex
  justify-content space-between
  align-items center
  padding 12px 0
  border-bottom 1px solid #f3f4f5
  color #333
  .onoff, .download
    color #ccc
  .onoff
    font-size 26px
    margin-right 15px
  .titleWrapper
    font-size 16px
    line-height 26px
    margin-right 15px
    text-align left
    flex 1
.more-button
  text-align center
  padding 17px 0
  font-size 15px
  line-height 1.4
  font-weight 700
  color #111
.more-item
   color #f86442
   font-weight 700
.list-view-zhubo
  padding 15px 15px 0
.list-view-zhubo-msg
  display flex
  align-items center  
  .avatar
    display block    
    margin-right 20px
    position relative
    img     
      width 54px
      height 54px
      border-radius 50%
    .zhubo-level
      position absolute
      top 45px
      left 16px
  .add-guanzhu
    display flex
    flex-direction column 
    justify-content center
    align-items center
    width 80px
    .add-guanzhu-icon
      font-size 24px
    span
      color #f86442
  .fans-info
    color #BBB
  .zhubo-text
    color #999
    .goleft
      color #111
    






h2
  font-size 18px
  font-weight 700
.detail-box
  width 100%
  padding: 15px 12px 20px 15px;
  img
    width 100%
.list-view-thumbnail
  padding: 15px 12px 20px 15px;
  width 100%
  .new-thumbnail   
    text-align center      
.album-hor
  display flex
  justify-content space-around  
  width 100%
  flex-wrap wrap
  Horitem
     width 100px
.classify-item
  padding 15px 15px 0
  img
    width 70px !important
    height 70px !important

</style>
