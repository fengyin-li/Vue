<template>
  <div id="app">
    <containerHeader v-show="this.$store.state.header" :name="userlist.name"></containerHeader>
    <containerTop v-show="this.$store.state.top"></containerTop>
    <containerRight v-show="this.$store.state.right"></containerRight>
    <router-view @changename="changename"></router-view>
  </div>
</template>

<script>
import header from './components/Header'
import top from './components/Top'
import right from './components/Right'

export default {
  name: 'App',
  components: {
    containerHeader:header,
    containerTop:top,
    containerRight:right,
  },
  data(){
    return {
      userlist:{//用户个人信息
        name:'root',
      },
    }
  },
  mounted(){
    window.addEventListener('unload',this.saveState)
  },
  methods:{
    saveState(){
      localStorage.setItem("state",JSON.stringify(this.$store.state))
    },
    changename(val){
      this.userlist.name = val
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
