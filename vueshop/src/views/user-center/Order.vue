<template>
    <div class="container-order">
        <div class="title">订单中心</div>
        <div class="screen">
            <span>起止时间：</span>
            <el-date-picker
                v-model="time"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
            
            <span>订单状态：</span>
            <el-select v-model="status" clearable placeholder="请选择">
                <el-option
                v-for="item in orderStatusList"
                :key="item.id"
                :label="item.label"
                :value="item.id">
                </el-option>
            </el-select>
            <span>收货人：</span>
             <el-input
                placeholder="查询收货人"
                v-model="name"
                clearable
                style="width:150px">
            </el-input>
        </div>
        <el-table
        :data="list"
        border
        style="width: 100%">
            <el-table-column
                prop="name"
                label="订单编号"
                align="center">
            </el-table-column>
            <el-table-column
                prop="price"
                label="金额"
                align="center">
            </el-table-column>
            <el-table-column
                prop="name"
                label="收货人"
                align="center">
            </el-table-column>
            <el-table-column
                prop="status"
                label="订单状态"
                align="center">
            </el-table-column>
            <el-table-column
                prop="sumprice"
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="goOrderView(scope.row.id)">查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import {home} from '../../mixins/home'
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
            }],
            time:[],
            status:'',
            name:'',
            orderStatusList:[{
                id:1,
                label:'未支付'
            },{
                id:2,
                label:'已支付'
            },{
                id:3,
                label:'未发货'
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
    .container-order{
        width: 100%;
        height: 100%;
        padding: 16px;
        .title{
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 25px;
            font-weight: bold;
            color: #666;
            margin:0 auto;
        }
        .screen{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 10px;
            span{
                font-size: 15px;
                margin:20px 10px;
            }
        }
    }
</style>