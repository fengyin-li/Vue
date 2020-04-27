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
            <div class="goods_view" v-for="(item,index) in goodlist" :key="index" @click="goGoodView(item.id)">
                <img :src="item.img">
                <p>{{item.goodname}}</p>
                <div class="price">
                    <p>￥{{item.price}}</p>
                    <del>￥{{item.lastprice}}</del>
                </div>
            </div>
        </div>
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
            goodlist:[
                {
                    img:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=23729408,3616211550&fm=26&gp=0.jpg",
                    id:1,
                    goodname:"珍视明 四味珍层冰硼滴眼液 15ml支装KA01",
                    price:20.8,
                    lastprice:28.8
                },
                {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587705410503&di=951e554bd62feb4b26658d50719f4cf2&imgtype=0&src=http%3A%2F%2Fimage.jianke.com%2Fsuo%2Fupload%2Fprodimage%2F201012%2F201012415512172%2521320x320.jpg",
                    id:2,
                    goodname:"999 小儿感冒颗粒 6g*10袋",
                    price:11.8,
                    lastprice:19.8
                }
            ]
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
            this.$emit('topshow',true);
            this.$emit('rightshow',true)
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
            border-top: 1px solid #19A3F5;
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
