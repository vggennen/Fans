<template>
    <div class="headers">
            {{title}}
            <router-link :to="path">
                <img src="../assets/images/f-1.png" alt="">
            </router-link>
    </div>
</template>
<script>
export default {
    name:"Headers",
    data(){
        return{
        }
    },
    props:{
        title:{
            type:String,
            default:""
        },
        path:{
            type:String,
            default:""
        }
    }
}
</script>
<style lang="less" scoped>
.headers{
    position: relative;
    height: 100/2/568*667/50rem;
    line-height: 100/2/568*667/50rem;
    text-align: center;
    background-color: #A54BE8;
    font-size: 36/2/568*667/50rem;
    color: #ffffff;
    img{
        position: absolute;
        left: 50/2/568*667/50rem;
        top: 34/2/568*667/50rem;
        width: 20/2/568*667/50rem;
        height: 30/2/568*667/50rem;
    }
}
</style>
