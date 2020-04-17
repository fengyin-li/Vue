<template>
  <div id="app">
    <containerHeader :userlist="userlist" v-show="Header"></containerHeader>
    <router-view @headershow="changeHeader"></router-view>
  </div>
</template>

<script>
import header from './components/Header'

export default {
  name: 'App',
  components: {
    containerHeader:header
  },
  data(){
    return {
      userlist:{
        name:'李晓杰',
      },
      Header:true,
    }
  },
  methods:{
    changeHeader(data){
      this.Header = data
      console.log(this.Header)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
}
</style>
