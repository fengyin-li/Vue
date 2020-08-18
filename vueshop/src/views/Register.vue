<template>
<div class="container">
    <div class="center">
        <div class="header">B2B小商城注册</div>
        <div class="name">
            <el-input placeholder="请输入账号" v-model="name" clearable ></el-input>
        </div>
        <div class="pas">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <div class="name" style="display:flex;justify-content:space-between;">
            <el-input placeholder="请输入验证码" v-model="code" clearable style="width:150px;"></el-input>
            <el-button :type="codetype" @click="getCode">{{codemsg}}</el-button>
        </div>

        <div class="next" @click="check">确认</div>
        <p @click="goLogin">--登录--</p>
    </div>
</div>
</template>

<script>
import {home} from '../mixins/home'
import {checkMail} from '../js/common'
import {registerCode,register} from '../js/api'
export default {
    name: 'register',
    mixins:[home],
    data(){
        return {
            name:'',
            password:'',
            code:'',
            codetype:'primary',
            codemsg:'获取验证码'
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
        goLogin(){
            this.$router.push({name:'login'})
        },
        getCode(){
            if (this.name == "") {
                this.$message.error('请输入账号！');
                return false
            }
            if (!checkMail(this.name)) {
                this.$message.error('请输入正确格式邮箱！');
                return false
            }
            let data = {
                us:this.name
            }
            registerCode(data)
            .then((res)=>{
                console.log(res)
                if (res.code === 1) {
                    this.codemsg = "验证码已发送！";
                    this.codetype = "warning"
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
        check(){
            if (this.name == "") {
                this.$message.error('请输入账号！');
                return false
            }
            if (this.password == '') {
                this.$message.error('请输入密码！');
                return false
            }
            if (this.code == '') {
                this.$message.error('请输入验证码！');
                return false
            }
            let data = {
                us:this.name,
                ps:this.password,
                code:this.code
            }
            register(data)
            .then((res)=>{
                console.log(res)
                if (res.code === 1) {
                   this.goLogin()
                } else {
                    this.$message.error(res.msg);
                }
            })
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
            height:400px;
            margin: 0 auto;
            margin-top:180px;
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
                margin: 0 auto 10px;
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
