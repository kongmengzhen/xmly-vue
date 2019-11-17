<template>
  <div id='wrap'>  
      <a class="album-container">
      <div class="album-cover">
        <img class="img-cover" :src="'https://imagev2.xmcdn.com/'+detail.albumInfo.cover" alt="">
        <div class="album-cover-panel">
            <svg width="20" height="20" class="icon">
              <svg id="icon-play_ic_shound" viewBox="0 0 1024 1024"><path d="M512 512m-353.28 0a353.28 353.28 0 1 0 706.56 0 353.28 353.28 0 1 0-706.56 0Z" opacity=".4"></path><path d="M512 896C302.08 896 128 721.92 128 512S302.08 128 512 128 896 302.08 896 512 721.92 896 512 896z m0-706.56C337.92 189.44 194.56 332.8 194.56 506.88s143.36 317.44 317.44 317.44 317.44-143.36 317.44-317.44-143.36-317.44-317.44-317.44z" fill="#FFFFFF" opacity=".4"></path><path d="M471.04 634.88c5.12 0 10.24 0 10.24-5.12l158.72-97.28c5.12-5.12 15.36-10.24 15.36-20.48s-5.12-15.36-10.24-20.48l-153.6-97.28c-5.12-5.12-10.24-5.12-20.48-5.12s-20.48 10.24-20.48 25.6V614.4c0 10.24 10.24 20.48 20.48 20.48z" fill="#FFFFFF"></path></svg>
              <use xlink:href="#icon-play_ic_shound"></use>
              </svg>12.52亿</div>
      </div>
      <div class="album-desc">
        <p class="ellipsis-2">{{detail.albumInfo.title}}</p>
      </div>

    </a>
    </div> 
</template>

<script>
  export default{
    props:['detail'],
   
  
  }
</script>

<style lang='stylus' scoped>
#wrap
  margin 0 3px
  width 100%
  height 100%
.album-cover
  position relative
  width 100%
  height 100%
  .img-cover
    width 100%
    height 100%
    border-radius 4px;
  .album-cover-panel
    position absolute
    height 28px
    line-height 34px
    bottom 0  
    font-size 12px
    color #fff
    >.icon
      display inline-block
      vertical-align middle
.album-desc
  width 80%
  padding: 6px 0 11px 0;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  line-height: 18px;
  height: 53px;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #333;
  letter-spacing: .34px; 
  .ellipsis-2
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  
    

</style>
