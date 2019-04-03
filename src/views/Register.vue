<template>
    <div class='register'>
        <img :src="src[0]" alt="" class='arrow' @click='clickHandler'>
        <img :src="src[1]" alt="" class='register_logo'>
        <p class='register_title'>验证</p>
        <div class='register_num'>
            <p class='text'>本次注册需要短信验证,已发送验证码至</p>
            <div class='num'>
                <textarea name="" id="" cols="1" rows="1" ref='phonenum'></textarea>
            </div>
        </div>
        <div class='register_code'>
            <div class='register_code_input_div'>
                <input type="text" class='register_code_input' placeholder='请输入验证码'>
            </div>
            <div class='get_code'>獲取驗證碼</div>
        </div>

        <div class='btn' @click='submitHandler'>
            提&nbsp;交
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { LOGININFOACTION } from '../store/actions/actionsType'
export default {
    name: 'Register',
    data(){
        return{
            src: [
                require('../assets/images/f-1.png'),
                require('../assets/images/login_logo.png'),
                require('../assets/images/login_phone_icon.png'),
                require('../assets/images/login_pwd_icon.png')
            ],
            login: {
                
            }
        }
    },
    methods: {
        clickHandler(){
            this.$router.push('/login');
        },
        ...mapActions([LOGININFOACTION]),
        submitHandler(){
            this.login.username = this.$refs.phonenum.value;
            this.LOGININFOACTION(this.login);
            this.$router.push('/mine');
        }
    }
}
</script>

<style lang='less' scoped>
@background: '../assets/images';
.register{
    width: 100%;
    height: 100%;
    background-image: url("@{background}/login_bg.png");
    background-size: cover;
    overflow: hidden;
}
.register .arrow{
    display: block;
    position: relative;
    left: 5.3%;
    top: 0.65rem;
    width: 15px;
}
.register .register_logo{
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 3.0rem;
}
.register .register_title{
    color: #c0adcd;
    margin-top: 0.14rem;
    margin: 0 auto;
    font-size: 0.4rem;
    text-align: center;
    padding-bottom: 0.1rem;
    width: 12.5%;
    border-bottom: 2px solid rgb(165, 75, 232);
    margin-top: 70/100rem;
}
.register_num{
    text-align: center;
    color: #ebd5fb;
    margin: 0.4rem 0;
}
.register_num .num{
    width: 50%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(165, 75, 232);
    margin-top: 0.3rem;
}
.register_num .num textarea{
    width: 100%;
    resize: none;
    background: transparent;
    outline: none;
    border: none;
    height: 0.3rem;
    color: #ffffff;
    text-align:center;
    font-size: 0.3rem;
}
.register_code_input{
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0.2rem 0;
    font-size: 0.35rem;
    width: 80%;
    color: white;
}
.register_code_input::-webkit-input-placeholder{
    text-align: center;
    font-size: 0.35rem;
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
.register_code{
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
.register_code>.register_code_input_div{
    box-sizing:border-box;
    float:left;
    width: 52.27%;
    border-bottom: 1px solid rgb(165, 75, 232);
}
.register_code_input{
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

