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
            this.$emit('headershow',false)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
