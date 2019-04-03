<template>
    <div>
        <SearchTitle :title="title"/>
        <div class="null"></div>
        <Tabs @ongetIndexEvent="getIndex"/>
        <List :listData="listData" :index="currentindex" :peopleData="peopleData"/>    
    </div>         
</template>

<script>
import SearchTitle from "./subPage/SearchTitle"
import Tabs from "../components/Tabs"
import List from "../components/List"
import {mapGetters} from "vuex"

export default {
    name:"Search",
    components:{
        SearchTitle,
        Tabs,
        List
    },
    data(){
        return{
            listData:{},
            currentindex:1,
            peopleData:{},
            title:"搜索"
        }
    },
    methods:{
       getIndex(index){
           console.log(index)
           this.currentindex = index
       }
    },
    mounted(){
        var that = this
        this.$axios.get(this.HOST+"/list",{
            params:{
                id:that.getSearchUrl
            }
        })
        .then(res => {
            this.listData = res.data
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        this.$axios.get(this.HOST+"/people",{
            params:{
                id:that.getSearchUrl
            }
        })
        .then(res => {
            this.peopleData = res.data
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    },
    computed:{
        ...mapGetters(['getSearchUrl'])
    }
}
</script>

<style lang="less" >
.null{
    margin-top: 1.2rem;
}
.el-tabs__header,.el-tabs__nav-wrap,.el-tabs__nav-scroll,.el-tabs__nav{
    width:100%;
    display: flex;

}
.el-tabs__item{
    flex-grow: 1;
    text-align: center;

}


</style>


