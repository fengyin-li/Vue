<template>
<div class="buycar_container">
    <div class="title">
        <div class="name">商品名称</div>
        <div class="price">价格</div>
        <div class="num">数量</div>
        <div class="disprice">优惠金额</div>
        <div class="sumprice">小计</div>
        <div class="del">操作</div>
    </div>
    <div class="goods">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <div class="chose" :class="{active:item.status}" @click="checkOne(index)"></div>
                <img :src="item.img" alt="">
                <div class="name">{{item.name}}</div>
                <div class="price">{{item.price}}</div>
                <div class="num">
                    <div class="reduce" @click="reduceNum(index)">-</div>
                    <input type="tel" v-model="item.num">
                    <div class="add" @click="addNum(index)">+</div>
                </div>
                <div class="disprice">{{item.disprice}}</div>
                <div class="sumprice">{{ getSumprice(index) }}</div>
                <div class="del">删除</div>
            </li>
        </ul>

    </div>
    <div class="goods_chose">
        <div class="left">
            <div class="chose" :class="{active:wholestatus}" @click="checkWhole"></div>
            <p>全选</p>
            <p>批量删除</p>
        </div>
        <div class="right">
            <div class="disprice">
                <p>共省：</p>
                <span>￥{{wholeDisprice}}</span>
            </div>
        </div>
    </div>
    <div class="goods_sumprice">
        <div class="left cp" @click="goHome">返回首页</div>
        <div class="right">
            <div class="text">
                <p>一共选择了</p>
                <span>{{wholeNum}}</span>
                <p>件商品 商品总价(不含运费)：</p>
                <span class="finprice">￥{{wholeSumprice}}</span>
            </div>
            <div class="button" @click="giveMoney">去结算</div>
        </div>
    </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
import {toDecimal} from '../js/common'
export default {
    name: 'buycar',
    mixins:[home],
    data(){
        return {
            id:0,
            num:1,
            wholestatus:false,
            list:[
                {
                    status:false,
                    name:'四味珍层冰硼滴眼液(珍视明滴眼液)',
                    img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=23729408,3616211550&fm=26&gp=0.jpg',
                    price:'23.00',
                    num:1,
                    disprice:'3.00',
                    // sumprice:'20.00',
                },{
                    status:false,
                    name:'999 小儿感冒颗粒 6g*10袋',
                    img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587705410503&di=951e554bd62feb4b26658d50719f4cf2&imgtype=0&src=http%3A%2F%2Fimage.jianke.com%2Fsuo%2Fupload%2Fprodimage%2F201012%2F201012415512172%2521320x320.jpg',
                    price:'12.00',
                    num:1,
                    disprice:'0.00',
                    // sumprice:'12.00',
                },
            ],
        }
    },
    computed:{
        getSumprice(){
            return (index) =>{
                return toDecimal(this.list[index].num * Number(this.list[index].price) - Number(this.list[index].disprice))
            }
        },
        wholeDisprice(){
            return toDecimal(this.list.filter(item => item.status).reduce(((total,v) => total + Number(v.disprice)),0))
        },
        wholeNum(){
            return this.list.filter(item => item.status).length
        },
        wholeSumprice(){
            return toDecimal(this.list.filter(item => item.status).reduce(((total,v) => total + (v.num * Number(v.price)) - Number(v.disprice)),0))
        },
    },
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.changeOK()
        },
        addNum(index){
            this.list[index].num += 1
        },
        reduceNum(index){
            this.list[index].num >= 2 ? this.list[index].num -= 1 : ''
        },
        checkOne(index){
            this.list[index].status = !this.list[index].status;
            let status = true;
            this.list.map(v =>{ !v.status ? status = false : ""});
            this.wholestatus = status;
        },
        checkWhole(){
            this.wholestatus = !this.wholestatus;
            this.list.map(v=>{v.status = this.wholestatus})
        },
        giveMoney(){
            let data = {
                name:this.list.filter(item => item.status).map(v=> v.name),
                price:this.wholeSumprice,
            };
            data.name != '' && data.price > 0 ? this.$router.push({name:'pay'}) :  this.$notify({
                message: this.$createElement('i', { style: 'color: #0094D0'}, '请选择结算对象！')
            });
            // alert(JSON.stringify(data))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .buycar_container{
        width: 1200px;
        height: auto;
        margin: 0 auto;
        .title{
            width:1200px;
            height: 38px;
            border-top: 2px solid #19A3F5;
            background: #F6F6F6;
            display: flex;
            color: #666666;
            font-size: 14px;
            font-weight: bold;
            line-height: 37px;
            text-align: center;
            margin-bottom: 10px;
            .name{
                width: 450px;
            }
            .price{
                width: 150px;
            }
            .num{
                width: 200px;
            }
            .disprice,.sumprice,.del{
                width: 133px;
            }
        }
        .goods{
            width: 1200px;
            height: auto;
            margin-bottom: 10px;
            background: #F6FCFF;
            border:1px solid #EEEEEE;
            border-bottom: none;
            ul{
                li{
                    width: 1200px;
                    height: 120px;
                    line-height: 120px;
                    text-align: center;
                    display: flex;
                    .chose{
                        width: 16px;
                        height: 16px;
                        border:1px solid #C5C5C5;
                        background: #fff;
                        margin:52px 12px;
                        cursor: pointer;
                    }
                    .active{
                        border: 1px solid #fff;
                        background: #19A3F5;
                    }
                    img{
                        width: 97px;
                        height: 97px;
                        margin:11px 12px 11px 0;
                    }
                    .name{
                        width:300px;
                        height: 120px;
                        color: #666666;
                        font-size: 12px;
                        text-align: left;
                        margin-right: 20px;
                        padding-top: 40px;
                        line-height: 20px;
                    }
                    .price{
                        width: 116px;
                        height: 120px;
                        font-size: 16px;
                        color: #FF2E2E;
                        margin-right: 55px;
                    }
                    .num{
                        width: 120px;
                        margin-right: 49px;
                        display: flex;
                        font-size: 16px;
                        color: #3C3C3C;
                        padding-top:47px;
                        text-align: center;
                        padding-left: 8px;
                        .reduce,.add{
                            width: 22px;
                            height: 22px;
                            margin:2px 2px 2px 0;
                            border: 1px solid #E2E4E6;
                            background: #fff;
                            color: #707070;
                            line-height: 22px;
                            cursor: pointer;
                        }
                        input{
                            width: 60px;
                            height: 26px;
                            border:1px solid #E2E4E6;
                            background: #fff;
                            margin-right: 2px;
                            text-align: center;
                        }
                    }
                    .disprice{
                        width: 120px;
                        margin-right: 10px;
                        color: #FF2E2E;
                        font-size: 16px;
                    }
                    .sumprice{
                        width: 120px;
                        margin-right: 16px;
                        font-size: 18px;
                        color: #3C3C3C;
                    }
                    .del{
                        width: 60px;
                        height: 30px;
                        margin:45px 30px;
                        background: #FF2E2E;
                        color: #fff;
                        line-height: 30px;
                        text-align: center;
                        border-radius: 6px;
                        cursor: pointer;
                    }
                }
            }
        }
        .goods_chose{
            width: 1200px;
            height: 42px;
            line-height: 42px;
            border:1px solid #EEEEEE;
            display: flex;
            justify-content:space-between;
            font-size: 14px;
            color: #666;
            margin-bottom: 9px;
            .left{
                display: flex;
                .chose{
                    width: 16px;
                    height: 16px;
                    border:1px solid #C5C5C5;
                    background: #fff;
                    margin:13px 12px;
                    cursor: pointer;
                }
                .active{
                    border: 1px solid #fff;
                    background: #19A3F5;
                }
                p{
                    margin-right: 30px;
                }
            }
            .right{
                display: flex;
                .disprice{
                    display: flex;
                    margin-right: 10px;
                    p{
                        margin-right: 5px;
                    }
                    span{
                        color: #FE3838;
                        font-size: 16px;
                    }
                }
            }
        }
        .goods_sumprice{
            width: 1200px;
            height: 62px;
            line-height: 62px;
            background: #EEEEEE;
            font-size: 18px;
            color: #666;
            padding: 0 20px;
            display: flex;
            justify-content:space-between;
            .right{
                display: flex;
                .text{
                    display: flex;
                    margin-right: 30px;
                    span{
                        color: #FF2C2C;
                    }
                    .finprice{
                        font-size: 20px;
                    }
                }
                .button{
                    width: 136px;
                    height: 38px;
                    background: #E4393C;
                    color: #fff;
                    font-size: 18px;
                    margin: 12px 0;
                    line-height: 38px;
                    text-align: center;
                    border-radius: 4px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
