<template>
    <div>
        <p>精彩评论</p>
        <Pengyouquan/>
        <div>
            <div>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Pengyouquan from "./Pengyouquan"
export default {
    name:"Comment",
    components:{
        Pengyouquan
    }
}
</script>

<style lang="less" scoped>
div{
    p{
        font-size: 0.35rem;
        margin: 0.4rem;
        border-left: 3px solid;
        padding-left: 0.2rem;
    }
}
</style>


