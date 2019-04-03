<template>
    <div>
        <ul v-show="getSearchFlag">            
             <router-link :to="'/play?title='+item.title" tag="li" v-for="item in peopleData.people" :key="item.id" v-show="index==1"> 
                <div class="touImg img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="list_text list_texts">
                    <p class="title">{{item.title}}</p>
                    <p class="instrction">简介:{{item.Introduction}}</p>
                </div>     
            </router-link>
            
            <router-link :to="'/play?title='+item.title" tag="li"  v-for="item in listData.list" :key="item.id"  v-show="index==2">

                    <div class="img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="list_text">
                        <p class="title">{{item.title}}</p>
                        <p class="instrction">简介:{{item.Introduction}}</p>
                    </div>

                       
            </router-link>    

            <!-- <router-link to="/play" tag="li" v-for="item in peopleData.people" :key="item.id" v-show="index==1"> -->
                  
        </ul>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"List",
    data(){
        return{
            //flag:false
            
        }
    },
    methods:{
        
    },
    computed:{
        ...mapGetters(["getSearchFlag"])
        
    },
    props:{
        index:{
            type:[Number,String],
            default:1
        },
        listData:{
            type:Object,
            default:function(){
                return {}
            }
        },
        peopleData:{
            type:Object,
            default:function(){
                return {}
            }
        }
    },
    // mounted(){
    //     console.log(this.index)
    // }
}
</script>

<style lang="less" scoped>
div{
    ul{
    width:100%;
        li{
            width:100%;
            box-sizing: border-box;
            padding:0.2rem;
            overflow: hidden;
            border-bottom: 1px solid #ccc;
            div{
                float:left;
                // overflow: hidden;
            }
            .img{
                width:27%;
                height:2.8rem;
                border-bottom: 1px solid #ccc;
                img{
                    width: 100%;
                    height:100%;
                }
            }
            .list_text{
                margin-left: 0.2rem;
                width:70%;
                .title{
                    color:#313131;
                    font-size: 0.4rem;
                    margin:0.1rem 0;
                }
                .instrction{
                    color:#959595;
                    font-size: 0.3rem;
                    overflow:hidden; 
                    text-overflow:ellipsis;
                    display:-webkit-box; 
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:4; 
                }
            }
            .touImg{
                height: 1.9rem;
                border-radius: 50%;
            }
            .list_texts{
                margin-top: 0.4rem;
            }
        } 
    }
}


</style>


