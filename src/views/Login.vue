<template>
    <div class='login'>
        <img :src="src[0]" alt="" class='arrow' @click='clickHandler'>
        <img :src="src[1]" alt="" class='login_logo'>
        <p class='login_title'>登录</p>
        <div class='login_phone'>
            <img :src="src[2]" alt="">
            <input type="text" class='login_phonenum' placeholder='请输入手机号' ref="login_phonenum">
        </div>
        <div class='login_lock'>
            <img :src="src[3]" alt="">
            <input type="text" class='login_locknum' placeholder='请输入密码' ref="login_locknum">
        </div>
        <div class='btn' @click="submitHandler">
            登&nbsp;录
        </div>
        <!-- 点击忘记密码,赢跳转到找回页面页面,因此为一个链接 -->
        <router-link to='/forget' class='forget' tag='p'>
            忘记密码?
        </router-link>
        <!-- 没有账号,进行注册 -->
        <router-link to='/register' class='regis' tag='p'>
            没有账号吗?我要注册
        </router-link>
        <!-- {{ $route.params.routerPath }} -->
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
import { LOGININFOACTION } from '../store/actions/actionsType'
export default {
    name: 'Login',
    data(){
        return{
            src: [
                require('../assets/images/f-1.png'),
                require('../assets/images/login_logo.png'),
                require('../assets/images/login_phone_icon.png'),
                require('../assets/images/login_pwd_icon.png')
            ],
            login: {}
        }
    },
    methods: {
        clickHandler(){
            //返回按钮返回首页
            this.$router.push('/');
            /* console.log(this.$route.params.routerPath);
            var path = this.$route.path.split(/\%/g);
            console.log(decodeURIComponent('%' + path[1]));
            this.$router.push(`/${ decodeURIComponent('%' + path[1])}`); */
            // this.$router.push(this.$route.params.routerPath);
            
        },
        ...mapActions([LOGININFOACTION]),
        submitHandler(){
            this.login.username = this.$refs.login_phonenum.value;
            this.login.password = this.$refs.login_locknum.value;
            // console.log(this.login);
            //vuex中存放数据
            this.LOGININFOACTION(this.login);
            //登录完成后,带有参数url则跳转到url,否则跳转回首页
            if(this.$route.params.routerPath){
                this.$router.push(this.$route.params.routerPath);
            }else{
                this.$router.push('/')
            }
        }
    }
}
</script>

<style lang='less' scoped>
@background: '../assets/images';
.login{
    width: 100%;
    height: 100%;
    background-image: url("@{background}/login_bg.png");
    background-size: cover;
    overflow: hidden;
}
.login .arrow{
    display: block;
    position: relative;
    left: 5.3%;
    top: 0.65rem;
    width: 15px;
}
.login .login_logo{
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 3.0rem;
}
.login .login_title{
    color: #c0adcd;
    margin-top: 0.14rem;
    margin: 0 auto;
    font-size: 0.4rem;
    text-align: center;
    padding-bottom: 0.1rem;
    width: 10.67%;
    border-bottom: 2px solid rgb(165, 75, 232);
    margin-top: 70/100rem;
}
.login .login_phone, .login .login_lock{
    color: #ebd5fb;
    border-bottom: 1px solid rgb(165, 75, 232);
    width: 68.8%;
    padding: 0 0 0 15.0%;
    margin: 0 auto;
    margin-top: 0.6rem;
    box-sizing: border-box;
    position: relative;
}
.login .login_phonenum, .login .login_locknum{
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0.2rem 0;
    font-size: 0.35rem;
    width: 80%;
    text-align: center;
    color: white;
}
.login_phonenum, .login_locknum::-webkit-input-placeholder{
    // font-weight: 700;
    text-align: center;
    font-size: 0.35rem;
}
.login_phone img, .login_lock img{
    width: 0.4rem;
    position: absolute;
    left: 6%;
    bottom: 0.2rem;
}
.btn{
    width: 68.8%;
    height: 0.9rem;
    background-color: rgb(165, 75, 232);
    color: white;
    margin: 0.4rem auto;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.35rem;
}
.forget{
    font-size: 0.3rem;
    text-align: center;
    // display: block;
    margin: 0 auto;
    margin-top: 0.4rem;
    color: #937f9c;
}
.regis{
    font-size: 0.3rem;
    text-align: center;
    color: #937f9c;
    margin-top: 3rem;
}
.regis>a{
    color:#cebed5;
}
</style>

