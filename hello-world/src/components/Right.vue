<template>
    <div class="container_right">
        <div class="news">
            <i class="iconfont iconxiaoxi" title="消息中心"></i>
        </div>
        <div class="center">
            <div class="main">我的订单</div>
            <div class="main">个人中心</div>
            <div class="main" @click="goBuyCar">
                <i class="iconfont icongouwuchekong"></i>
                <p>购物车</p>
                <div class="buycarnum">1</div>
            </div>
        </div>
        <div class="gotop">
            <i class="iconfont iconshangjiantou"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'containerRight',
    data(){
        return {
            
        }
    },
    mounted(){

    },
    methods:{
        goBuyCar(){
            this.$router.push({path:'/buycar'})
        }
    },
}
</script>
<style lang="scss" scoped>

</style>