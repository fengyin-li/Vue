<template>
<div>
   <router-link to="/index">这是注册页面去首页</router-link>
</div>
</template>

<script>
export default {
    name: 'login',
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.$store.commit('changeHeader',false)
            this.$store.commit('changeTop',false)
            this.$store.commit('changeRight',false)
            // this.$emit('headershow',false)
            // this.$emit('topshow',false)
            // this.$emit('rightshow',false)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
