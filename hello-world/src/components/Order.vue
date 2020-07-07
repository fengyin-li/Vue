<template>
    <div class="container">
        <div class="title">订单中心</div>
        <div class="header">
            <p>订单编号</p>
            <p>金额</p>
            <p>收货人</p>
            <p>订单状态</p>
            <p>操作</p>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p>{{item.id}}</p>
                <p>{{item.price}}</p>
                <p>{{item.name}}</p>
                <p>{{item.status}}</p>
                <p class="button" @click="goOrderView(item.id)">查看详情</p>
            </li>
        </ul>
    </div>
</template>
<script>
import {home} from '../mixins/home'
export default {
    name: 'order',
    mixins:[home],
    data(){
        return {
            list:[{
                id:'001',
                price:'20',
                name:'李三',
                status:'未支付'
            }]
        }
    },
    mounted(){
        this.changeOK()
    },
    methods:{
        goOrderView(id){
            this.$router.push({path:'/orderview',query:{id:id}})
        }
    },
}
</script>
<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
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
            width: 1000px;
            height: 40px;
            line-height: 40px;
            display: flex;
            background: #0094D0;
            margin:0 auto ;
            p{
                font-size: 16px;
                color:#fff;
                width: 200px;
                text-align: center;
            }
        }
        ul{
            width: 1000px;
            height:auto;
            margin:0 auto;
            overflow: hidden;
            li{
                width: 998px;
                height: 35px;
                line-height: 35px;
                display: flex;
                color:#333;
                margin:0 auto;
                border:1px solid #0094D0;
                p{
                    font-size: 14px;
                    width: 200px;
                    text-align: center;
                }
                .button{
                    cursor: pointer;
                }
                .button:hover{
                    color:red;
                }
            }
        }
    }
</style>