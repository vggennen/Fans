<template>
    <div>
        <div class="header_nav">
            <div class="choose_button">
                <div @click="backHandler">
                    <img :src="img" alt="" class="menu">  
                </div>
                <p class="header_title">{{title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"SearchTitle",
    data(){
        return{
            // title:"搜索",
            img:[require("../../assets/images/f-1.png")]
        }
    },
    methods:{
        backHandler(){
            this.$router.push("/")
        }
    },
    props:{
        title:{
            type:String,
            default:""
        }
    }
}
</script>

<style lang="less" scoped>
.choose_button{
    .menu{
        position: absolute;
        left: 0.5rem;
        top: 0.3rem;
        width: 0.3rem;
        z-index: 10;
    }
}

</style>


