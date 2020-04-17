<template>
<div class="container_header">
  <div class="container_header_main">
    <div class="left">
      <div class="iosdown cp">
        <span>APP</span>
        <i class="iconfont iconjiantou9"></i>
        <i class="iconfont iconshouye_shugang_shijiantixing"></i>
      </div>
      <div class="needlogin" v-if="userlist.userid == ''">
        <span class="shop_color" @click="goLogin">登录</span>
        <span>注册</span>
      </div>
      <div class="logining" v-else>
        <span>{{userlist.name}}</span>
        <i class="iconfont iconshouye_shugang_shijiantixing shop_color"></i>
        <span class="exit_color cp" @click="goLogin">退出</span>
      </div>
    </div>
    <div class="center">您好~欢迎来到时空一站式购药网！</div>
    <div class="right">
      <p>求购专区</p>
      <p>投诉</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'containerHeader',
  props:{
    userlist:{},
  },
  mounted(){
     
  },
  methods:{
    goLogin:function(){
      this.$router.push("/login");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
