<template>
    <div class="container">
        <div class="title">订单详情</div>
        <div class="nav">
            <p class="cur" @click="goHome">首页</p>
            <i class="iconfont iconyoujiantou1"></i>
            <p class="cur" @click="goOrder">订单中心</p>
            <i class="iconfont iconyoujiantou1"></i>
            <p>订单详情</p>
        </div>
        <div class="header">订单汇总</div>
        <div class="view">
            <p>订单编号：{{list.id}}</p>
            <p>订单金额：{{list.orderprice}}</p>
            <p>实付金额：{{list.sumprice}}</p>
            <p>收货人：{{list.name}}</p>
            <p>订单优惠金额：{{list.disprice}}</p>
            <p>订单状态：{{list.status}}</p>
        </div>
        <div class="header">订单列表</div>
        <el-table
            :data="list.goodlist"
            border
            style="width: 100%">
            <el-table-column
                prop="name"
                label="商品名称">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格">
            </el-table-column>
            <el-table-column
                prop="num"
                label="数量">
            </el-table-column>
            <el-table-column
                prop="disprice"
                label="优惠">
            </el-table-column>
            <el-table-column
                prop="sumprice"
                label="小计">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {home} from '../../mixins/home'
export default {
    name: 'orderview',
    mixins:[home],
    data(){
        return {
            list:{
                id:'001',
                sumprice:'20.00',
                name:'李三',
                status:'未支付',
                orderprice:'23.00',
                disprice:'3.00',
                goodlist:[{
                    name:'四味珍层冰硼滴眼液(珍视明滴眼液)',
                    price:'23.00',
                    num:1,
                    disprice:'3.00',
                    sumprice:'20.00',
                }]
            }
        }
    },
    mounted(){
        this.changeOK()
    },
    methods:{
        
    },
}
</script>
<style lang="scss" scoped>
    .container{
        width: 1200px;
        height: 100%;
        padding: 16px;
        overflow: hidden;
        margin: 0 auto;
        .title{
            width: 1200px; 
            height: 50px;
            line-height: 50px;
            font-size: 25px;
            font-weight: bold;
            color: #666;
            margin:0 auto;
        }
        .header{
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            margin: 10px auto;
            color: #000;
        }
        .nav{
            width: 1200px;
            height: 40px;
            line-height: 40px;
            display: flex;
            margin: 0 auto;
            border-bottom: 1px solid #666;
            p{
                color: #333;
                margin-right: 3px;
            }
            p:hover{
                color: red;
            }
            i{
                color: #666;
                margin-right: 5px;
            }
            .cur{
                cursor: pointer;
            }
        }
        .view{
            width: 1200px; 
            height: auto;
            line-height: 40px;
            font-size: 16px;
            color: #333;
            margin:0 auto;
            padding-left: 20px;
            p{
                width:1200px;
                height: 40px;
                overflow: hidden;
            }
        }
        .goods{
            width: 900px;
            height: 40px;
            line-height: 40px;
            display: flex;
            background: #999;
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
            margin-bottom: 40px;
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
    }
</style>