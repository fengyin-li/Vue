<template>
    <div class="container_top">
        <div class="container_top_main">
            <div class="container_top_top">
                <div class="log">
                    <img src="../image/logo.jpg">
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
                <div class="buycar cp">
                    <i class="iconfont icongouwuchekong"></i>
                    <p>购物车</p>
                    <p>0</p>
                    <p>件</p>
                </div>
            </div>
            <div class="container_top_bot">
                <div class="left">
                    <div class="nav shop_background">全部产品分类</div>
                    <ul>
                        <li>
                            <p>首页</p>
                        </li>
                        <li>
                            <p>家庭常备</p>
                        </li>
                        <li>
                            <p>医疗器械</p>
                        </li>
                        <li>
                            <p>领券中心</p>
                        </li>
                        <li>
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
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'index',
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.$emit('headershow',true)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
