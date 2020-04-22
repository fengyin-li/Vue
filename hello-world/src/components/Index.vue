<template>
<div>
    <div class="swiper">
        <img src="../image/swiper_dl.jpg">
    </div>
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
<style scoped lang="scss">
    .swiper{
        width:100%;
        height:440px;
        overflow: hidden;
        border-top: 1px solid #19A3F5;
        img{
            width:100%;
            height:440px;
        }
    }
</style>
