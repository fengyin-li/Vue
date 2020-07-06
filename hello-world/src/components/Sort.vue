<template>
    <div class="container">
        <div class="container_goods" v-if="goodtrue">
        
        </div>
        <div class="container_nogoods" v-else>
            <p>暂无商品</p>
        </div>
    </div>
</template>
<script>
import {home} from '../mixins/home'
export default {
    name: 'sort',
    mixins:[home],
    data(){
        return {
            goodlist:[],
            goodtrue:false,
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
        width: 100%;
        height: 100%;
        .container_nogoods,.container_goods{
            width: 1200px;
            height:auto;
            margin: 0 auto;
        }
    }
</style>