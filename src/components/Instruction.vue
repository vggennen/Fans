<template>
    <div class="list_box">
        <div>
            <p class="title">官方机构</p>
            <ul>
                <li v-for="item in instructionData.institution" :key="item.id">
                    <div class="img_box">
                        <img :src="item.img" alt="" class="circle">
                    </div>
                    <div>
                        <p class="num">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <p  class="title">主要演员</p>
            <ul>
                <li v-for="item in instructionData.actor" :key="item.id">
                    <div class="img_box">
                        <img :src="item.img" alt=""  class="circle">
                    </div>
                    <div>
                        <p class="num">{{item.name}}</p>
                        <p class="instrction">饰 &nbsp; {{item.jiaose}}</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:"Instruction",
    props:{
        instructionData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    }
}
</script>
<style lang="less" scoped>
.list_box{
    .title{
        font-size: 0.35rem;
        margin: 0.4rem;
        border-left: 3px solid;
        padding-left: 0.2rem;
        
    }
   .circle{
            border-radius: 50px;
        }
}
</style>


