<template>
<div class="good_container">
    <div class="nav">
        <p @click="goHome">首页</p>
        <i class="iconfont iconyoujiantou1"></i>
        <span class="shop_color">珍视明</span>
    </div>
    <div class="main">
        <div class="imgs"></div>
        <div class="goodview"></div>
    </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
export default {
    name: 'good',
    mixins:[home],
    data(){
        return {
            id:0,
        }
    },
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.id = this.$route.query.id;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .good_container{
        width:1200px;
        height: auto;
        margin: 0 auto;
        .nav{
            display: flex;
            height: 50px;
            line-height: 50px;
            color:#2A2A2A;
            font-size: 12px;
            p,i{
                margin-right: 3px;
            }
            p{
                cursor: pointer;
            }
        }
        .main{
            height: auto;
            display: flex;
            .imgs{
                width: 350px;
            }
        }
    }
</style>
