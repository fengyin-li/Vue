<template>
    <div class="container_top">
        <div class="container_top_main">
            <div class="container_top_top">
                <div class="log">
                    <img src="../image/logo.jpg" @click="goHome">
                    <a href="../image/topnews.jpg" target="_blank">药品经营许可证：粤BAS60D30</a>
                </div>
                <div class="search">
                    <div class="search_top">
                        <i class="iconfont iconfangdajing"></i>
                        <input type="text" id="search" placeholder="请输入查询的商品或关键字">
                        <div class="search_button">搜 索</div>
                    </div>
                    <div class="search_bot">
                        <p>热门搜索：</p>
                        <p>lala</p>
                    </div>
                </div>
                <div class="buycar cp" @click="goBuyCar">
                    <i class="iconfont icongouwuchekong"></i>
                    <p>购物车</p>
                    <p>0</p>
                    <p>件</p>
                </div>
            </div>
            <div class="container_top_bot">
                <div class="left">
                    <div class="nav shop_background" @mouseover="navAdd(1)" @mouseleave="navLeave(1)">全部产品分类</div>
                    <ul>
                        <li @click="goHome">
                            <p>首页</p>
                        </li>
                        <li @click="goWhere">
                            <p>家庭常备</p>
                        </li>
                        <li @click="goWhere">
                            <p>领券中心</p>
                        </li>
                        <li @click="goWhere">
                            <p>积分商城</p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <i class="iconfont icondianhua shop_color"></i>
                    <div class="tel">
                        <p class="shop_color">400-668-6688</p>
                        <span>周一至周日 8:30-18:00</span>
                    </div>
                </div>
                <ul class="nav_list" @mouseenter="navAdd(2)" @mouseleave="navLeave(2)" v-show="navlistshow">
                    <li v-for="(item,index) in list" :key="index" @mouseenter="changeNav(index)">
                        <p>{{item.list1}}</p>
                        <p v-for="item1 in item.list2" :key="item1">{{item1}}</p>
                    </li>
                </ul>
                <div class="list_view" @mouseenter="navAdd(3)" @mouseleave="navLeave(3)" v-show="navviewshow">
                    <p>{{navview.list1}}</p>
                    <ul>
                        <li v-for="(item,index) in navview.list2" :key="index" @click="goSort(item)">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {home} from '../mixins/home'
export default {
    name: 'top',
    mixins:[home],
    data(){
        return {
            list:[{
                id:1,
                list1:'神经科药',
                list2:['抑郁症','帕金森']
            },{
                id:2,
                list1:'中科药',
                list2:['饮片','养生']
            }],
            navall:false,
            navlist:false,
            navlistview:false,
            navviewnum:0,
        }
    },
    computed:{
        navlistshow(){
            return (this.navall || this.navlist || this.navlistview)
        },
        navviewshow(){
            return (this.navlist || this.navlistview)
        },
        navview(){
            return this.list[this.navviewnum]
        }
    },
    mounted(){
        // this.init();
    },
    methods:{
        // init(){
        //     this.$emit('topshow',true)
        // },
        navAdd(sum){
            sum == 1 ? this.navall = true
            :sum == 2 ? this.navlist = true
            :sum == 3 ? this.navlistview = true
            : ""
        },
        navLeave(sum){
            setTimeout(() => {
                sum == 1 ? this.navall = false
                :sum == 2 ? this.navlist = false
                :sum == 3 ? this.navlistview = false
                : ""
            }, 80);
        },
        changeNav(num){
            this.navviewnum = num
        },
        goSort(val){
            this.$router.push({
                name:'sort',
                query:{          
                    id:val, 
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
