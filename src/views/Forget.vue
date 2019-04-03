<template>
    <div class='forget'>
        <img :src="src[0]" alt="" class='arrow' @click="backTo">
        <img :src="src[1]" alt="" class='forget_logo'>
        <p class='forget_title'>忘记密码</p>
        <div class='forget_phone'>
            <img :src="src[2]" alt="">
            <input type="text" class='forget_phonenum' placeholder='请输入手机号'>
        </div>
        <div class='forget_code'>
            <div class='forget_code_input_div'>
                <input type="text" class='forget_code_input' placeholder='请输入验证码'>
            </div>
            <div class='get_code'>獲取驗證碼</div>
        </div>
        <div class='forget_lock'>
            <img :src="src[3]" alt="">
            <input type="text" class='forget_locknum' placeholder='请输入新密码'>
        </div>
        <div class='forget_lock'>
            <img :src="src[3]" alt="">
            <input type="text" class='forget_locknum' placeholder='再次確認新密碼'>
        </div>
        <div class='btn' @click='clickHandler'>
            提&nbsp;交
        </div>
    </div>
</template>

<script>
export default {
    name: 'Forget',
    data(){
        return{
            src: [
                require('../assets/images/f-1.png'),
                require('../assets/images/login_logo.png'),
                require('../assets/images/login_phone_icon.png'),
                require('../assets/images/login_pwd_icon.png')
            ]
        }
    },
    methods: {
        //点击箭头跳转回登录页面
        backTo(){
            this.$router.push('/login');
        },
        clickHandler(){
            this.$router.push('/login');
        }
    }
}
</script>

<style lang='less' scoped>
@background: '../assets/images';
.forget{
    width: 100%;
    height: 100%;
    background-image: url("@{background}/login_bg.png");
    background-size: cover;
    overflow: hidden;
}
.forget .arrow{
    display: block;
    position: relative;
    left: 5.3%;
    top: 0.65rem;
    width: 15px;
}
.forget .forget_logo{
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 3.0rem;
}
.forget .forget_title{
    color: #c0adcd;
    margin-top: 0.14rem;
    margin: 0 auto;
    font-size: 0.4rem;
    text-align: center;
    padding-bottom: 0.1rem;
    width: 24.92%;
    border-bottom: 2px solid rgb(165, 75, 232);
    margin-top: 70/100rem;
}
.forget .forget_phone, .forget .forget_lock{
    border-bottom: 1px solid rgb(165, 75, 232);
    width: 68.8%;
    color: #ebd5fb;
    padding: 0 0 0 15.0%;
    margin: 0 auto;
    margin-top: 0.6rem;
    box-sizing: border-box;
    position: relative;
}
.forget .forget_phonenum, .forget .forget_locknum, .forget_code_input{
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0.2rem 0;
    font-size: 0.35rem;
    width: 80%;
}
.forget_phonenum, .forget_locknum, .forget_code_input::-webkit-input-placeholder{
    text-align: center;
    font-size: 0.35rem;
}
.forget_phone img, .forget_lock img{
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
    margin: 0 auto;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.35rem;
    margin-top: 0.4rem;
}
.forget_code{
    color: #ebd5fb;
    margin: 0 auto;
    margin-top: 0.6rem;
    box-sizing: border-box;
    position: relative;
    padding: 0;
    overflow:hidden;
    width: 68.8%;
    box-sizing: border-box;
    position: relative;
}
.forget_code>.forget_code_input_div{
    box-sizing:border-box;
    float:left;
    width: 52.27%;
    border-bottom: 1px solid rgb(165, 75, 232);
}
.forget_code_input{
    width: 100%;
    display: inline-block;
}
.get_code{
    width: 44.0%;
    height: 0.82rem;
    line-height: 0.42rem;
    box-sizing: border-box;
    padding: 0.2rem 0;
    background-color: rgb(165, 75, 232);
    text-align: center;
    float: right;
}
</style>


