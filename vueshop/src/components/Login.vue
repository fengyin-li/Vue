<template>
<div class="container">
    <div class="center">
        <div class="header">B2B小商城登录</div>
        <div class="name">
            <el-input placeholder="请输入账号" v-model="name" clearable ></el-input>
        </div>
        <div class="pas">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <div class="next" @click="check">确认</div>
        <p @click="goRegister">--注册新用户--</p>
    </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
export default {
    name: 'login',
    mixins:[home],
    data(){
        return {
            name:'',
            password:''
        }
    },
    mounted(){
       this.init();
    },
    methods:{
        init(){
            this.$store.commit('changeHeader',false)
            this.$store.commit('changeTop',false)
            this.$store.commit('changeRight',false)
        },
        goRegister(){
            this.$router.push({name:'register'})
        },
        check(){
            this.name == 'root' && this.password == 123456 ? this.$router.push({name:'index'}) : this.$message('请输入正确用户名或密码！');this.name = '';this.password = ''
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container{
        width:100%;
        height: 100%;
        position: fixed;
        top: 0;
        background: url(../image/login_background.jpg) no-repeat;
        background-size:100% 100%;
        overflow: hidden;
        .center{
            width:400px;
            height: 350px;
            margin: 0 auto;
            margin-top:200px;
            background: #fff;
            padding-top: 40px;
            overflow: hidden;
            border-radius: 4px;
            .header{
                width: 340px;
                height: 48px;
                background: #189F92;
                color: #fff;
                margin: 0 auto;
                line-height: 48px;
                font-size: 16px;
                text-align: center;
                border-radius: 5px;
                margin-bottom: 40px;
            }
            .name{
                width: 340px;
                height: 44px;
                margin: 0 auto 20px;
            }
            .pas{
                width: 340px;
                height: 44px;
                margin: 0 auto 20px;
            }
            .next{
                width: 340px;
                height: 46px;
                line-height: 46px;
                margin: 0 auto 20px;
                border-radius: 4px;
                background: #189F92;
                color: #fff;
                text-align: center;
                font-size: 18px;
                cursor: pointer;
            }
            p{
                text-align: center;
                cursor: pointer;
            }
            p:hover{
                color: #189F92;
            }
        }
    }
</style>
