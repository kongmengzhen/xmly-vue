<template>
  <div id='search' >
     <a class="user-item" 
        v-for="useritem in userDetail.userViews.users"
        :key="useritem.userInfo.uid"      
      >
      <img class="user-cover" :src="useritem.userInfo.smallPic" alt="">
      <div>
        <p class="userTitle">{{useritem.userInfo.nickname}}</p>
        <p class="userInfo">209.93万</p>
      </div>
      </a>
  </div>

</template>

<script>
  export default{
  props:['userDetail'],
  }
</script>

<style lang='stylus' scoped>
#search
  margin 0
.user-item
    flex-shrink 0
    display flex
    align-items center
    margin-right 30px
    .user-cover
      width 40px
      height 40px
      margin-right: 5px;
      border-radius 50%
    .userTitle
      padding-bottom: 4px;        
      line-height: 20px;          
      font-weight: 500;
      font-size: 14px;
      color: #40404c;
    .userInfo     
      font-size: 12px;
      color: #a3a3ac;
      line-height: 16px;
</style>
