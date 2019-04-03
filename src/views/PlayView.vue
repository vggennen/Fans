<template>
    <div>
        <Title />
        <div class="null"></div>
        
        <Play />
    </div>
</template>

<script>
import Title from "./subPage/SearchTitle"
import Play from "../components/Play"

export default {
    name:"PlayView",
    components:{
        Play,
        Title
    },
    data(){
        return{
            
        }
    }
}
</script>


<style lang="less" scoped>


</style>