<template>
  <div id='' >
    <a>
      <router-link :to="'/youshengshu/'+detail.albumInfo.id+'/'" class="col">
        <div class="col-album-cover">
          <img class="cover-image" :src="detail.albumInfo.cover_path">
        </div>
        <div class="col-content">
          <h3 class="col-album__title">{{detail.albumInfo.title}}</h3>
          <p                     
          class="col-album__subtitle ellipsis-2">
          {{detail.albumInfo.recommend_reason?detail.albumInfo.recommend_reason:detail.albumInfo.intro}}
          </p>
          <div>            
            <span>
              <i></i>              
            </span>
            <span>
              <i></i>
              <!-- {{playCount}} -->
            </span>
          </div>
        </div>
      </router-link>
    </a>
  </div>

</template>

<script>

  export default{
  props:['detail'],
  computed:{
    playCount(){
      let str=this.detail.statCountInfo.playCount
      // console.log(str)
      let billion=""
      if(parseInt(str/100000000)>0){
       billion= parseFloat(str/100000000).toFixed(2)
       return billion+'亿'
      }else if(parseInt(str/10000)>0){
        // console.log(parseInt(str/10000))
         return parseInt(str/10000)+"万"
        
      }

    }
  },
  mounted() {
    // console.log(this.detail)
  },
  }
</script>

<style lang='stylus' scoped>
.col 
  color #000
  display flex
  padding: 15px 10px 15px 0;
  .col-album-cover
    width 70px
    height 70px    
    margin-right 15px
    img 
      width 70px
      height 70px
      border-radius 4px
  .col-content
    h3
      width 180px
      font-weight: 400;
      font-size 16px 
      overflow: hidden;
      white-space: nowrap;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
    .col-album__subtitle
      height 34px
      margin: 5px 0 7px;
      font-size: 13px;
      line-height: 1.38;
      color #999
    .ellipsis-2
      overflow: hidden;
      display: -ms-flexbox;
      display: flex;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    span 
      color #999
      font-size 12px
    
    

  



</style>
