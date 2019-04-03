<template>
    <div>
        <div class='linkitem'>
            <ul>
                <!-- item组件 -->
                <Item v-for='(item, index) in title' 
                :key='index' 
                :titles='item.value' 
                :src='item.src' 
                :path='item.path'
                @getchange='getMes'
                />
            </ul>
        </div>
        <div style='height: 1.0rem'></div>
        <div class='modal' v-show='flag'>
            <div class='option'>
                <!-- 跳转到明星认证页面 -->
                <router-link tag='div' to='/identify/staridentify' class='star'>
                    <img :src="imgsrc[0]" alt="">
                    <p>明星认证</p>
                </router-link>
                <!-- 跳转到制片方认证页面 -->
                <router-link tag='div' to='/identify/produceridentify' class='producer'>
                    <img :src="imgsrc[1]" alt="">
                    <p>制片方认证</p>
                </router-link>
            </div>
            <div class='undo' @click='undoHandler'>
                取消
            </div>
        </div>
    </div>
</template>

<script>
import Item from './subpage/Item'
export default {
    name: 'LinkItem',
    components: {
        Item
    },
    data(){
        return{
            flag: false,
            title : [
                {
                    value: '关于偶粉',
                    src: require('../../assets/images/47/profile_about_icon.png'),
                    path: '/aboutfan'
                },
                {
                    value: '意见反馈',
                    src: require('../../assets/images/47/profile_feedback_icon.png'),
                    path: '/feedback'
                },
                {
                    value: '我要认证',
                    src: require('../../assets/images/47/profile_cerify_icon.png'),
                    path: '/identify'
                }
            ],
            imgsrc: [
                require('../../assets/images/48/明星-1.png'),
                require('../../assets/images/48/制片-1.png')
            ]
                
        }
    },
    methods: {
        getMes(data){
            this.flag = true;
        },
        undoHandler(){
            this.flag = false;
        }
    }
}
</script>

<style lang="less" scoped>
@background: '../../assets/images/48';
.linkitem{
    width: 100%;
    background-color: white;
    border-top: 1px solid  #d1cbdc;
    border-bottom: 1px solid  #d1cbdc;
}
.linkitem li{
    border-bottom: 1px solid  #d1cbdc;
}
.linkitem li:nth-child(3){
    border-bottom: none;
}
.modal{
    box-sizing: border-box;
    // margin: 2.5%;
    position: fixed;
    z-index: 333;
    left: 0;
    bottom: 0;
    right: 0;
    background: url("@{background}/弹出半透明.png") no-repeat;
    div{
        border-radius: 6px;
        background-color: #ffffff;
        margin: 0 2.5%;
        margin-bottom: 1.5%;
    }
    .undo{
        padding: 0.2rem;
        margin-bottom: 2%;
        text-align: center;
        font-size: 18px;
        line-height: 1.5;
        box-sizing: border-box;
        color: #a54de8;
    }
}
.modal .option{
    overflow: hidden;
    div{
        width: 50%;
        float: left;
        margin: 0;
        padding: 0.2rem;
        box-sizing: border-box;
        text-align: center;
        img{
            width: 60px;

        }
        p{
            margin-top: 8%;
            color: #434343;
        }
    }
}
</style>


