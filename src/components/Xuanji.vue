<template>
    <div class="list_box">
        <ul>
            <li v-for="item in xuanjiData.xuanji" :key="item.id">
                <div class="img_box">
                    <img :src="item.img" alt="">
                </div>
                <div>
                    <p class="num">{{item.num}}</p>
                    <p class="instrction">简介：{{item.Introduction}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Xuanji",
    props:{
        xuanjiData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    }
}
</script>

<style lang="less">
.list_box{
    li{
        padding: 0.2rem;
        overflow: hidden;
        
        div{
            float:left;
          .num{
            color:#313131;
            font-size: 0.4rem;
            margin:0.1rem 0;
          }
        }
        .img_box{
            margin-right:0.2rem;
        }
        .instrction{
            color:#959595;
            font-size: 0.3rem;
        }
    }
}
</style>


