<template>
  <div id="app">
    <containerHeader :userlist="userlist" v-show="Header"></containerHeader>
    <containerTop v-show="Top"></containerTop>
    <router-view @headershow="changeHeader" @topshow="changeTop"></router-view>
  </div>
</template>

<script>
import header from './components/Header'
import top from './components/Top'

export default {
  name: 'App',
  components: {
    containerHeader:header,
    containerTop:top,
  },
  data(){
    return {
      userlist:{
        name:'李晓杰',
      },//用户个人信息
      Header:true,//页面顶部是否显示
      Top:true,//页面上部是否显示
    }
  },
  methods:{
    changeHeader(data){
      this.Header = data
    },
    changeTop(data){
      this.Top = data
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
</style>
