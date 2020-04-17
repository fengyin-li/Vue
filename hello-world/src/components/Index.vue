<template>
<div>
    <!-- <containerHeader :userlist="userlist"></containerHeader> -->
    <p>首页</p>
</div>
</template>

<script>

export default {
    name: 'index',
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.$emit('headershow',true)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
