<template>
  <div id='' >
    <a>
      <router-link :to="'/youshengshu/'" class="col">
        <div class="col-album-cover">
          <img class="cover-image" :src="'http://imagev2.xmcdn.com/'+detail.cover_path_small">
        </div>
        <div class="col-content">
          <h3 class="col-album__title">{{detail.title}}</h3>         
          <div>            
            <span>
               
              <i></i>              
            </span>
            <span>
             {{this.releasedTime}}<span>&nbsp;&nbsp;更新</span>
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
  import moment from 'moment'
  export default{
  props:['detail'],
  data() {
    return {
      releasedTime:''
    }
  },
  mounted() {    
    this.releasedTime = moment(this.detail.released_at).format('YYYY-MM-DD')   
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
    flex 1
    h3      
      font-weight: 400;
      font-size 16px      
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
