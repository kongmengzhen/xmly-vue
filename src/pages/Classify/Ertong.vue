<template>
  <div id="main">
    <Swiper :pathnm="pathname" :type="pathname"></Swiper>
    <div class="tomatos">
      <Tomatos :pathnm="pathname"></Tomatos>
    </div>
    <a class="ad">
      <img
        class="amid-banner _kIb"
        alt="bannerImg"
        src="https://imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png"
      />
    </a>

    <div class="album-wrap" v-for="(moduleRankData,i) in moduleRankDatas" :key="i">
      <div class="album-title">{{moduleRankData.moduleInfo.displayName}}</div>

      <div class="album-hor">
        <Horitem
          v-for="albumBriefDetailInfo in moduleRankData.albumBriefDetailInfos.slice(0,3)"
          :key="albumBriefDetailInfo.id"
          :detail="albumBriefDetailInfo"
        ></Horitem>
      </div>
      <div class="album-ver">
        <Colitem
          v-for="albumBriefDetailInfo in moduleRankData.albumBriefDetailInfos.slice(3)"
          :key="albumBriefDetailInfo.id"
          :detail="albumBriefDetailInfo"
        ></Colitem>
      </div>
    </div>   
    <Morerecom></Morerecom>
    <div class="footer">
      <div class="footer-logo"></div>
      <div class="footer-txt">
        <a href="#" class="download-a">
          <span>打开APP，听更多声音</span>
          <i></i>
        </a>
      </div>
      <div class="copyright-txt">
        <p>Copyright © 2014-2019 www.ximalaya.com </p>
        <p>
          <span>lnc.ALL Rights Reserved</span>
        </p>
      </div>
      <div class="footer-nav">

      </div>
    </div> 
  </div>
</template>

<script>
import Tomatos from "components/index/Tomato";
import Swiper from "components/index/Swiper";
import Horitem from "components/index/Horitem";
import Colitem from "components/index/Colitem";
import Morerecom from "components/index/Morerecom";
import { get } from "untils/http.js";
export default {
  props:['moreList'],
  data() {
    return {
      pathname: this.$route.name,
      moduleRankDatas: [],
      morerecom:[]
    };
  },
  async mounted() {
    
    // console.log(this.pathname)
    let result = await get({
      url:
        "https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=" +
        this.pathname
    });
    this.moduleRankDatas = result.data.moduleContent.moduleRankDatas;   
  },

  components: {
    Tomatos,
    Swiper,
    Horitem,
    Colitem,  
    Morerecom  
  }
};
</script>

<style lang='stylus' scoped>
.album-hor
  display flex
  justify-content space-around
  margin 0 15px
  Horitem
    flex 1
.ad
  display block
  margin 18px 0 8px 0
  img
    width 100%
.album-title
  font-size 0.18rem
  color #40404c
  line-height 25px
  margin 17px 0 17px 15px
  font-weight 700
.footer
  border-top: .5px solid #eee;
  max-width: 640px;
  min-width: 320px;
  margin: auto;
  height: 294px;
  background: url('https://s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_bg_2b1fa03.png') no-repeat center;
  background-size: cover;
  .footer-logo
    width: 100%;
    height: 40px;
    background: url('https://s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_logo_f90f028.png') no-repeat center;
    background-size: 160px 40px;
    margin: 34px auto 18px;  
  .footer-txt    
    display flex
    justify-content center
    .download-a
      text-align center
      display block
      width: 292px;
      height: 49px;
      border-radius: 25px;
      border: 1px solid #fa2800;
      color: #fa2800;
      span 
        font-size: 18px;
        font-family: PingFangHK-Regular,PingFangHK;
        font-weight: 400;
        color: #fa2800;
        display: inline-block;
        line-height: 50px;
        margin-right: 8px;
  .copyright-txt
    padding-bottom: 10px;
    font-size: 12px;
    font-family: PingFangSC-Regular,PingFangSC;
    font-weight: 400;
    color: gray;
    line-height: 16px;
    text-align: center;
    margin-top: 15px;

</style>
