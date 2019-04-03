<template>
    <div>
        <div class="headers">动态</div>
        <router-link tag="div" to="/comment" class="bg comment">
            <img class="img1" src="../assets/images/36/dynamic_comment_icon.png" alt="">
            评论
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </router-link>
        <router-link tag="div" to="/msg" class="bg msg">
            <img class="img1" src="../assets/images/36/dynamic_msg_icon.png" alt="">
            私信
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </router-link>
        <div class="bg attention">
            <img class="img1" src="../assets/images/36/dynamic_attention_icon.png" alt="">
            关注
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </div>
        <div class="bg history">
             <img class="img1" src="../assets/images/36/dynamic_history_icon.png" alt="">
            播放历史
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </div>
        <div class="bg scan">
             <img class="img1" src="../assets/images/36/dynamic_scan_icon.png" alt="">
            扫一扫
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </div>
        <router-link tag="div" to="/sys" class="bg sys">
             <img class="img1" src="../assets/images/36/dynamic_sys_icon.png" alt="">
            系统消息
            <img class="img2" src="../assets/images/36/dynamic_right_arrow_normal.png" alt="">
        </router-link>
        <BottomNav />
        <router-view></router-view>
    </div>
</template>

<script>
import BottomNav from '../components/BottomNav'

export default {
    name: 'Behavior',
    components: {
        BottomNav,
    },
    data(){
        return{
            // background:[
            //     require("../assets/images/36/dynamic_1_bg.png")
            // ]
        }
    }
}
</script>

<style lang="less" scoped>

.headers{
    height: 100/2/568*667/50rem;
    line-height: 100/2/568*667/50rem;
    text-align: center;
    background-color: #A54BE8;
    font-size: 36/2/568*667/50rem;
    color: #ffffff;
}
.bg{
    position: relative;
    height: 90/2/568*667/50rem;
    background-color: white;
    font-size: 36/2/568*667/50rem;
    color:#1b1b1b;
    line-height: 90/2/568*667/50rem;
    padding-left: 120/2/568*667/50rem;
}
.img1{
        position: absolute;
        left: 50/2/568*667/50rem;
        top: 24/2/568*667/50rem;
        width: 40/2/568*667/50rem;;
        height: 40/2/568*667/50rem;;
    }
    .img2{
        position: absolute;
        right: 50/2/568*667/50rem;
        top: 24/2/568*667/50rem;
        width: 20/2/568*667/50rem;;
        height: 30/2/568*667/50rem;;
    }
.comment{
    margin-top: 30/2/568*667/50rem;
    
    
}
.history{
    margin-top: 40/2/568*667/50rem;
}
.sys{
    margin-top: 40/2/568*667/50rem;
}
</style>