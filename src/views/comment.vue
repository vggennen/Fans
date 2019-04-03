<template>
    <div>
        <Headers title = "评论" path="/behavior"/>
        <div class="mine">
            <router-link to="/comment/minecom" tag="p" active-class="active">我评论的</router-link>
            <router-link to="/comment/formine" tag="p" active-class="active">评论我的</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Headers from "../components/Headers"
export default {
    name:"Comment",
    components:{
        Headers
    }
}
</script>

<style lang="less" scoped>
.mine{
    margin: 0 auto;
    margin-top: 20/2/568*667/50rem;
    width: 93.75%;
    height: 59/2/568*667/50rem;
    
    p{
        float: left;
        width: 50%;
        height: 59/2/568*667/50rem;
        line-height: 59/2/568*667/50rem;
        text-align: center;
        font-size: 26/2/568*667/50rem;
        border: 1/2/568*667/50rem solid #A54BE8;
        box-sizing: border-box;
        color: #A54BE8;
    }
    p:first-child{
        border-radius: 8/2/568*667/50rem 0 0 8/2/568*667/50rem;
    }
    p:nth-child(2){
         border-radius: 0 8/2/568*667/50rem 8/2/568*667/50rem 0;
    }
    .active{
        background-color: #A54BE8;
        color: #ffffff;
    }
}
</style>
