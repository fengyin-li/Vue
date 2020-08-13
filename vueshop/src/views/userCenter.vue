<template>
    <div class="container">
        <el-tabs tab-position="left"  v-model="name">
            <el-tab-pane label="用户中心" name="0">用户中心</el-tab-pane>
            <el-tab-pane label="订单中心" name="1">
                <order></order>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import {home} from '../mixins/home'
import order from './user-center/Order'
export default {
    name: 'userCenter',
    components:{order},
    mixins:[home],
    data(){
        return {
           name:"0",
        }
    },
    mounted(){
        let id = this.$route.params.id;
        this.name = id ? id : "0";
    },
    watch:{
        $route(val){
           this.name = val.params.id
        },
    },
    methods:{
        
    },
}
</script>
<style lang="scss" scoped>
    .container{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        padding: 16px;
    }
</style>