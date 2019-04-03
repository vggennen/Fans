<template>
    <div class="LeftNav" v-show="getFlag">
        <el-row class="tac" >    
            <el-col class="col">
                <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    text-color="#fff"
                    >
                    <img :src="img[0]" alt="" class="menu_logo">
                    
                    <el-menu-item v-for="(item,index) in titleData" :key="item.id" @click="activehandler(index)">  
                        <router-link :to="'/'+item.id"> 
                            <i :class="'iconfont icon-'+item.icon"></i>
                            <span>{{item.title}}</span>
                        </router-link>
                    </el-menu-item> 
                </el-menu>
            </el-col> 
        </el-row> 
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
    name:"LeftNav",
    components:{ 
    },
    data(){
        return{
            img:[
                require("../assets/img/menu_logo.png")
            ],
        }
    },
    methods: {
        ...mapActions(["FLAGACTION"]),
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      activehandler(index){
          this.$emit("onActiveHandler",index),
          this.flag = false
          this.FLAGACTION(this.flag);
          //console.log(getFlag)
      }
    },
    props:{
        titleData:{
            type:Array,
            default:function(){
                return []
            }
        },
        flags:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        //this.flag = this.flags;
        // console.log(this.flag);
        // console.log(this.flags);
       // this.flag = this.$store.state.flag
    },
    computed:{
        ...mapGetters(['getFlag']),
    }
}
</script>

<style lang="less" scoped>
i{
    margin-right:0.1rem;
    font-size: 0.3rem;
}
.LeftNav{
    height:100%;
    position:absolute;
    top:0;
    left:0;
    width: 2.8rem;
    z-index: 88;
}
.tac::before{
    clear: both;
    overflow:hidden;
}
.tac{
    width: 100%;
    height:100% !important;
}
.el-menu-vertical-demo{
    background-image: url("../assets/img/LeftNav_backgroud.png") ;
    background-size: cover;
}
.menu_logo{
    width: 2.5rem;
    height: 1.5rem;
    display: block;
    margin: 1rem auto 0;
}
.col,.el-menu-vertical-demo{
    height: 100%;
    overflow:hidden;
}
el-menu-item{
    margin-top: 2.6rem;
} 
.el-menu-item:focus, .el-menu-item:hover{
    background:blueviolet;
    font-size: 0.5rem;
    i{
        font-size: 0.6rem;
    }
}
</style>


