<template>
    <div class="container">
        <div class="center">
            <h1>订单结算</h1>
            <div class="title">收货地址</div>
            <div class="adress">
                <p>详细地址：</p>
                <el-input placeholder="请输入详细地址" v-model="adress"  clearable style="width:300px;"></el-input>
                <span>*</span>
            </div>
            <div class="adress">
                <p>联系人：</p>
                <el-input placeholder="请输入联系人" v-model="name"  clearable style="width:300px;"></el-input>
                <span>*</span>
            </div>
            <div class="adress">
                <p>联系电话：</p>
                <el-input placeholder="请输入联系电话" type="tel" v-model="tel"  clearable style="width:300px;" @blur="checkNumber"></el-input>
                <span>*</span>
            </div>
            <div class="adress">
                <p>备注：</p>
                <el-input placeholder="请输入备注信息" v-model="remarks"  clearable style="width:300px;"></el-input>
            </div>
            <div class="title">商品清单</div>
            <div class="header">
                <p style="width:300px">商品名称</p>
                <p>价格</p>
                <p>数量</p>
                <p>优惠</p>
                <p>小计</p>
            </div>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <p class="name" :title="item.name">{{item.name}}</p>
                    <p>{{item.price}}</p>
                    <p>{{item.num}}</p>
                    <p>{{item.disprice}}</p>
                    <p>{{item.sumprice}}</p>
                </li>
            </ul>
            <div class="title">订单汇总</div>
            <div class="someprice">
                <span>￥{{price.payprice}}</span>
                <p>实付金额：</p>
                <span>￥{{price.disprice}}</span>
                <p>订单优惠金额：</p>
                <span>￥{{price.orderprice}}</span>
                <p>商品总金额：</p>
                <span>￥{{price.postage}}</span>
                <p>邮费：</p>
            </div>
            <div class="button">
                <p @click="goOrder">提交订单</p>
                <p @click="goBuyCar">返回购物车</p>
            </div>
        </div>
    </div>
</template>
<script>
import {home} from '../mixins/home'
import {checkTel} from '../js/common'
export default {
    name: 'pay',
    mixins:[home],
    data(){
        return {
            adress:'',//详细地址
            name:'',
            tel:'',
            remarks:'',
            list:[{
                name:'四味珍层冰硼滴眼液(珍视明滴眼液)',
                price:'23.00',
                num:1,
                disprice:'3.00',
                sumprice:'20.00',
            }],
            price:{
                postage:"包邮",
                orderprice:23.00,
                disprice:3.00,
                payprice:20.00
            }
        }
    },
    mounted(){
        this.changeOK()
    },
    methods:{
        checkNumber(){
            if (!checkTel(this.tel)) {
              this.$message('联系方式输入不正确！')
                this.tel = '';
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        .center{
            width: 1200px;
            height: 100%;
            overflow: hidden;
            margin: 0 auto;
            padding-top: 20px;
            h1{
                height: 35px;
                font-size: 20px;
                line-height: 35px;
                color: #333;
                font-weight: bold;
            }
            .title{
                width: 1200px;
                height: 44px;
                line-height: 44px;
                background: #F2F2F2;
                overflow: hidden;
                color: #0094D0;
                margin: 10px 0;
                font-size: 16px;
                padding-left: 10px;
                font-weight: bold;
            }
            .adress{
                width: 1200px;
                height: 40px;
                overflow: hidden;
                display: flex;
                margin: 15px 0;
                line-height: 40px;
                font-size: 14px;
                color: #000;
                padding-left: 15px;
                p{
                    width: 70px;
                    text-align: right;
                }
                span{
                    color: red;
                    margin-left: 5px;
                }
            }
            .header{
                width: 900px;
                height: 40px;
                line-height: 40px;
                display: flex;
                background: #0094D0;
                margin:0 auto;
                p{
                    font-size: 16px;
                    color:#fff;
                    width: 150px;
                    text-align: center;
                }
            }
            ul{
                overflow: hidden;
                width: 898px;
                margin:0 auto;
                border: 1px solid #ccc;
                border-top: none;
                border-bottom: none;
                li{
                    height: 35px;
                    line-height: 35px;
                    display: flex;
                    border-bottom: 1px solid #ccc;
                    p{
                        font-size: 14px;
                        color:#333;
                        width: 150px;
                        text-align: center;
                        overflow: hidden;
                    }
                    .name{
                        width: 300px;
                    }
                }
            }
            .someprice{
                width: 1200px;
                height: 50px;
                line-height: 50px;
                display: flex;
                flex-direction: row-reverse;
                overflow: hidden;
                p{
                    font-size: 14px;
                    color: #000;
                }
                span{
                    font-size: 25px;
                    margin-right: 15px;
                    color: red;
                    font-weight: bold;
                    line-height: 47px;
                }
            }
            .button{
                width: 1200px;
                height: 40px;
                line-height: 42px;
                display: flex;
                flex-direction: row-reverse;
                overflow: hidden;
                margin-bottom: 20px;
                p{
                    margin-left: 40px;
                    width: 120px;
                    height: 40px;
                    background: #0094D0;
                    color: #fff;
                    border-radius: 5px;
                    text-align: center;
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
    }
</style>