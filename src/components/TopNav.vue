<template>
    <div>
        <div class="header_nav">
            <div class="choose_button">    
                 <div @click="showHandler">
                    <img :src="img[0]" alt="" class="menu" >
                 </div>                             
                <p class="header_title">{{title}}</p>
                <router-link to='/search'>
                    <img :src="img[1]" alt="" class="search"> 
                </router-link>   
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"TopNav",
    data(){
        return{
           //flag:false,
           img:[
                require("../assets/img/main_menu_normal.png"),
                require("../assets/img/main_search_normal.png"),
             ]
        }
    },
    props:{
        title:{
            type:String,
            default:"movie"
        }
    },
    methods:{
        ...mapActions(["FLAGACTION"]),
        showHandler(){
            this.flag = true           
            this.FLAGACTION(this.flag);
            //this.$emit("onFlagHandler",this.flag)
        },
    },
    computed:{
        ...mapGetters(["getFlag","getSearchUrl"])
    }
}
</script>

<style>
.header_nav{
    width:100%;
    height:1.2rem;
    background: rgba(165,75,232);
    position:fixed;
    /* left: 0; */
    top:0;
    z-index: 100;
}
.choose_button{
    position:relative;
}
.header_title{
    text-align: center;
    font-size: 0.4rem;
    color:#fff;
    height: 1.2rem;
    line-height: 1.2rem;
}
.menu{
    position: absolute;
    left: 0.6rem;
    top: 0.4rem;
    width: 0.6rem;
    z-index: 10;
}
.search{
    position: absolute;
    left: 6.5rem;
    top: 0.34rem;
    width: 0.5rem;
    z-index: 10;
}
</style>



