<template>
<div class="good_container">
    <div class="nav">
        <p @click="goHome">首页</p>
        <i class="iconfont iconyoujiantou1"></i>
        <span class="shop_color">珍视明</span>
    </div>
    <div class="main">
        <div class="imgs">
            <img :src="list.img ? list.img : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597687188562&di=3cabdcdaead76adfbfbb229012321eac&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2F20170729%2F9cd1-fyiphwc3656919.jpg'">
        </div>
        <div class="goodview">
            <div class="title">{{list.goodname}}</div>
            <div class="title_view">{{list.suit}}</div>
            <div class="good_view">
                <span>通用名称：</span>
                <p>{{list.goodname}}</p>
            </div>
            <div class="good_view">
                <span>产品编号：</span>
                <p>{{list.factoryId}}</p>
            </div>
            <div class="good_view">
                <span>批准文号：</span>
                <p>{{list.approvalId}}（国家食药总局查询）</p>
            </div>
            <div class="good_view">
                <span>抢购价格：</span>
                <p class="price">￥{{specs.oneprice}}</p>
            </div>
            <div class="good_view">
                <span>产品规格：</span>
                <ul class="good_specs">
                    <li :class="{active:specsActive == index}" v-for="(item,index) in list.specs" :key="index" @click="checkSpec(index)">{{item.specs}}</li>
                </ul>
            </div>
            <div class="good_view">
                <span>生产厂家：</span>
                <p>{{list.company}}</p>
            </div>
            <div class="good_view">
                <span>库 存：</span>
                <p>{{specs.nums}}</p>
            </div>
            <div class="good_view">
                <span>购买数量：</span>
                <div class="good_num">
                    <div class="reduce" @click="reduceNum">-</div>
                    <input type="tel" v-model="num">
                    <div class="add" @click="addNum">+</div>
                </div>
            </div>
            <div class="good_button">
                <div class="buy" @click="goBuyCar">立即购买</div>
            </div>
        </div>
    </div>
    <div class="good_suit">
        <div class="title">
            <ul>
                <li :class="{active:index == goodsuit}" v-for="(item,index) in goodtitle" :key="index" @click="checkSuit(index)">{{item}}</li>
            </ul>
        </div>
        <div class="main">
            <ul>
                <li v-for="(item,index) in goodviewlist" :key="index" v-show="index == goodsuit">{{item}}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
import {getGood,addBuyCar} from '../js/api'
import {getLoca} from '../js/common'
export default {
    name: 'good',
    mixins:[home],
    data(){
        return {
            id:0,
            num:1,
            specsActive:0,
            list:{
                name:'四味珍层冰硼滴眼液(珍视明滴眼液)',
                nameview:'清热解痉，去翳明目。用于肝阴不足，肝气偏盛所致的不能久视、青少年远视力下降；青少年假性近视、视力疲劳。',
                goodid:'B12000001318',
                symbol:'Z10880003',
                price:'23.00',
                spec:[{
                    name:'15ml',
                    status:true,
                },{
                    name:'21ml',
                    status:false,
                },{
                    name:'10ml',
                    status:false,
                }],
                company:'江西珍视明药业有限公司',
                stock:200,
            },
            goodtitle:['商品介绍','说明书','商品评价'],
            goodsuit:0,
            goodviewlist:['商品介绍','说明书','商品评价'],       
        }
    },
    computed:{
        specs(){
            return this.list.specs ? this.list.specs[this.specsActive]:[]
        },
    },
    watch:{
        specsActive(val){
            this.num = this.list.specs[val].specs;
        },
        num(val){
            // console.log(val)
            let index = this.specsActive;
            isNaN(val) ? this.num = this.list.specs[index].specs :
            !(/(^[1-9]\d*$)/.test(val)) ? this.num = this.list.specs[index].specs:
            ''
        },
    },
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.id = this.$route.query.id;
            this.getGood()
        },
        getGood(){
            let data = {
                id:this.id,
            }
            getGood(data)
            .then((res)=>{
                console.log(res)
                if (res.code === 1) {
                    this.list = res.data.goodList;
                    this.num = this.list.specs[0].specs;
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        goBuyCar(){
            let data = {
                userId:getLoca('userId'),
                goodId:this.list.goodid,
                goodnum:this.num,
                goodspecs:this.list.specs[this.specsActive].specs
            }
            // console.log(data)
            addBuyCar(data)
            .then((res)=>{
                console.log(res)
                if (res.code === 1) {
                    this.$message.success(res.msg);
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        checkSpec(index){
            this.specsActive = index
        },
        checkSuit(num){
            this.goodsuit = num
        },
        addNum(){
            let list = this.list.specs[this.specsActive];
            let newVal = Number(this.num) + Number(list.specs)
            this.num = newVal > list.nums ? this.num : newVal
        },
        reduceNum(){
            let list = this.list.specs[this.specsActive];
            let newVal = Number(this.num) - Number(list.specs)
            this.num = newVal < list.specs ? this.num : newVal
        },
        
    },
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
                height: 480px;
                border:1px solid #DCDCDC;
                padding: 20px;
                img{
                    width: 308px;
                    height: 308px;
                }
            }
            .goodview{
                width:850px;
                height: auto;
                padding: 0 25px;
                .title{
                    height: 26px;
                    margin-bottom: 5px;
                    color:#333;
                    font-size: 20px;
                    font-weight: bold;
                }
                .title_view{
                    height: auto;
                    line-height: 22px;
                    font-size: 14px;
                    color: #757575;
                    border-bottom: 1px solid #E6E6E6;
                }
                .good_view{
                    height: 32px;
                    line-height: 32px;
                    display: flex;
                    font-size: 14px;
                    span{
                        color: #757575;
                        margin-right:5px;
                    }
                    p{
                        color: #333333;
                    }
                    .price{
                        color: #FF3434;
                        font-size: 20px;
                    }
                    .good_specs{
                        height: 32px;
                        display: flex;
                        li{
                            height: 32px;
                            padding: 0 20px;
                            line-height: 32px;
                            color:#666;
                            font-size: 14px;
                            border: 1px solid #DCDCDC;
                            margin-right: 6px;
                            cursor: pointer;
                        }
                        .active{
                            border: 1px solid #FF2E2E;
                        }
                    }
                    .good_num{
                        width: 120px;
                        height: 33px;
                        line-height: 33px;
                        display: flex;
                        color: #818181;
                        text-align: center;
                        font-size: 16px;
                        font-weight: bold;
                        .reduce{
                            width: 29px;
                            height:33px;
                            border:1px solid #D6D6D6;
                            cursor: pointer;
                        }
                        input{
                            width: 60px;
                            height: 31px;
                            border-top: 1px solid #D6D6D6;
                            border-bottom: 1px solid #D6D6D6;
                            text-align: center;
                        }
                        .add{
                            width: 29px;
                            height:33px;
                            border:1px solid #D6D6D6;
                            cursor: pointer;
                        }
                    }
                }
                .good_button{
                    height: 40px;
                    line-height: 39px;
                    margin: 15px 0;
                    display: flex;
                    color: #fff;
                    font-size: 18px;
                    .buy{
                        width: 178px;
                        height: 39px;
                        text-align: center;
                        cursor: pointer;
                        background: #FF5151;
                        border-radius: 4px;
                    };
                }
            }
        }
        .good_suit{
            width:1200px;
            height: auto;
            .title{
                height: 36px;
                line-height:36px;
                font-size: 14px;
                margin-bottom: 10px;
                ul{
                    display: flex;
                    li{
                        border: 1px solid #E1E1E1;
                        color: #444444;
                        cursor: pointer;
                    }
                    .active{
                        color: #0374D4;
                    }
                }
            }
            .main{
                width:1200px;
                height: auto;
                padding: 20px;
            }
        }
    }
</style>
