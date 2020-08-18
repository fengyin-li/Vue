<template>
<div class="container_header">
  <div class="container_header_main">
    <div class="left">
      <div class="iosdown cp">
        <span @click="showApp">APP</span>
        <div class="APP_pop" v-show="appimg">
          <img src="../image/APP_pop.jpg">
        </div>
        <i class="iconfont iconjiantou9"  @click="showApp" v-if="appdown"></i>
        <i class="iconfont iconshangjiantou"  @click="showApp" v-else></i>
        <i class="iconfont iconshouye_shugang_shijiantixing"></i>
      </div>
      <div class="needlogin" v-if="name == ''">
        <span class="shop_color" @click="goLogin">登录</span>
        <span @click="goRegister">注册</span>
      </div>
      <div class="logining" v-else>
        <span>{{name}}</span>
        <i class="iconfont iconshouye_shugang_shijiantixing shop_color"></i>
        <span class="exit_color cp" @click="goLogin">退出</span>
      </div>
    </div>
    <div class="center">您好~欢迎来到时空一站式购药网！</div>
    <div class="right">
      <p @click="goWhere">求购专区</p>
      <p>投诉</p>
      <div class="complaint_tel">1392874923734</div>
    </div>
  </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
import {delLoca} from '../js/common'
export default {
  name: 'containerHeader',
  props:{
    name:{
      type: String,
      default: function () {
        return name
      }
    },
  },
  mixins:[home],
  data(){
    return {
      appimg:false,
      appdown:true,
    }
  },
  mounted(){
    
  },
  methods:{
    goLogin:function(){
      delLoca('userName')
      delLoca('userId')
      this.$router.push("/login");
    },
    showApp:function(){
      this.appimg = this.appdown
      this.appdown = !this.appdown
    },
    goRegister(){
      this.$router.push({name:'register'})
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
