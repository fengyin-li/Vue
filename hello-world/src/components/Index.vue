<template>
<div class="index_container">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index" @click="goImgLink(item.link)"><img :src="item.img"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    </div>
    <div class="goods">

    </div>
</div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name: 'index',
    data(){
        return {
            list:[
                {img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587638516469&di=bc0b860ea82d284bd63d9e7c1ed11d7c&imgtype=0&src=http%3A%2F%2Fwww.gzdexian.com%2Fuploads%2Fimage%2F20180821%2F1534852254.jpg',
                link:'https://cn.vuejs.org/',
            },{
                img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587638607723&di=c7777856796d26eca697b0fe9992ac52&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F18%2F13%2F49%2F8de0e7638e7c21adb34ed67a5a9521a7.jpg',
                link:'https://www.baidu.com/',
            }],
            // imgshow:0,
        }
    },
    mounted(){
        this.init();
        new Swiper ('.swiper-container', {
            loop: true,
            speed: 500, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,  
            },
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },
        })      
    },
    methods:{
        init(){
            this.$emit('headershow',true);
            this.$emit('topshow',true)
        },
        goImgLink(link){
            window.open(link,'_blank');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .index_container{
        .swiper-container{
            width:100%;
            height:440px;
            overflow: hidden;
            border-top: 1px solid #19A3F5;
            z-index: 1;
        }
        .goods{
            width:1200px;
            height: 450px;
            margin: 0 auto;
        }
    }
</style>
