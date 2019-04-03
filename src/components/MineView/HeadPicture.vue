<template>
    <div class='headpictrue' :style="{ backgroundImage:'url('+personal.imgUrl+')' }">
        <!-- 头像区域 -->
        <router-link to='/setting' tag='div' class='set'>
            <img :src="src[0]" alt="">
        </router-link>
        <div class='avatar_div'>
            <div class='avatar' :style="{ backgroundImage:'url('+personal.imgUrl+')' }"></div>
            <p class='uname'>{{ personal.username }}</p>
            <p class='id'>ID：{{ personal.ID }}</p>
        </div>
        <div class='per_sign'>
            个人签名：{{ personal.Introduction }}
        </div>
        <div class='toolbar'>
            <ul>
                <router-link to='/ercode' tag='li' class='ercode'>
                    <img :src="src[1]" alt="">
                    我的二维码
                </router-link>
                <router-link to='profile' tag='li' class='profile'>
                    <img :src="src[2]" alt="">
                    编辑资料
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HeadPictrue',
    data(){
        return{
            src: [
                require('../../assets/images/47/profile_set_icon_normal.png'),
                require('../../assets/images/47/profile_erweima_icon.png'),
                require('../../assets/images/47/profile_edit_icon.png')
            ]
        }
    },
    computed: {
        //读取登录信息
        ...mapGetters(['getLoginInfo'])
    },
    props: {
        personal:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style scoped>
.headpictrue{
    width: 100%;
    height: 53%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}
.headpictrue:before{
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(0.15rem);
    /* padding: 0; */
}
.set{
    position: absolute;
    top: 0.45rem;
    right: 4.5%;
}
.set img{
    display: block;
    float: right;
    width: 30px;
    /* margin-right: 4.5%; */
}
.avatar_div{
    position: absolute;
    top: 11%;
    left: 35%;
}
.avatar_div .avatar{
    width: 100px;
    height: 100px;
    border: 3px solid white;
    background-size:contain;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 13%;
}
.avatar_div p{
    margin-top: 7%;
    text-align: center;
    font-size: 18px;
    color: white;
    font-weight: 500;
}
.avatar_div .id{
    text-align: center;
    color:  rgb(200, 195, 191);
    font-size: 16px;
}
.per_sign{
    margin: 0 auto;
    margin-top: 3.0%;
    width: 81.25%;
    font-size: 16px;
    color: rgb(200, 195, 191);
    line-height: 1.5;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 10%;
}
.toolbar{
    width: 100%;
    height: 1.5rem;
    background-color: rgba(0, 0, 0, .3);
    padding: 0.2rem;
    box-sizing: border-box;
    margin-top: 11%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.toolbar li{
    float: left;
    width: 50%;
    text-align: center;
    line-height: 1.1rem;
    font-size: 16px;
    color: white;
    box-sizing: border-box;
}
.toolbar li img{
    width: 30px;
    vertical-align: middle;
    position: relative;
    top: -0.04rem;
    display: inline-block;
    margin-right: 8%;
}
.toolbar .ercode{
    border-right: 1px solid rgba(0, 0, 0, .2);  
}
.toolbar .profile{
    margin: 0;
}
</style>

