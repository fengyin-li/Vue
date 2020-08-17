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
        <div class="goods_title">为 · 你 · 推 · 荐</div>
        <div class="goods_main">
            <div class="goods_view" v-for="(item,index) in goodlist" :key="index" @click="goGoodView(item.goodid)">
                <img :src="item.img">
                <p>{{item.goodname}}</p>
                <div class="price">
                    <p>￥{{item.price}}</p>
                    <del>￥{{item.oldprice}}</del>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper';
import {getIndex,getSwiper} from '../js/api'
import {home} from '../mixins/home'
export default {
    name: 'index',
    mixins:[home],
    data(){
        return {
            list:[],
            goodlist:[]
        }
    },
    mounted(){
        this.getSwiper();
        this.getFoller()
        new Swiper ('.swiper-container', {
            loop: true,
            speed: 500, 
            pagination: {
                el: '.swiper-pagination',
                clickable: true,  
            },
        })      
    },
    methods:{
        getFoller(){
            getIndex()
            .then((res)=>{
                // console.log(res)
                if (res.code === 1) {
                    this.goodlist = res.data
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        getSwiper(){
            getSwiper()
            .then((res)=>{
                // console.log(res)
                if (res.code === 1) {
                    this.list = res.data
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        goImgLink(link){
            window.open(link,'_blank');
        },
        goGoodView(id){
            this.$router.push({path:'/good',query:{id:id}})
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
            z-index: 1;
        }
        .goods{
            width:1200px;
            height: 450px;
            margin: 0 auto;
            .goods_title{
                width:1200px;
                height: 150px;
                line-height: 150px;
                text-align: center;
                font-size: 22px;
                color:#131313;
            }
            .goods_main{
                width:1200px;
                height: 300px;
                display: flex;
                .goods_view{
                    width: 285px;
                    height:350px;
                    border: 1px solid #E2E2E2;
                    border-radius:6px;
                    cursor: pointer;
                    margin-right: 20px;
                    img{
                        width: 182px;
                        height: 182px;
                        margin: 30px 51px;
                    }
                    p{
                        width:240px;
                        height: 38px;
                        line-height: 16px;
                        font-size: 14px;
                        color:#444444;
                        text-align: center;
                        overflow: hidden;
                        margin: 0 auto;
                        margin-bottom: 6px;
                    }
                    .price{
                        width: 240px;
                        height: 25px;
                        line-height: 25px;
                        display: flex;
                        justify-content:center;
                        margin: 0 auto;
                        p{
                            width: auto;
                            height: 25px;
                            color:#F2322D;
                            font-size: 18px;
                            margin-left: 0;
                            margin-right: 8px;
                        }
                        del{
                            color: #706D6B;
                            font-size: 14px;
                            line-height: 18px;
                        }
                    }
                }
                .goods_view:hover{
                    border: 1px solid #EC60D9;
                }
            }
        }
    }
</style>
