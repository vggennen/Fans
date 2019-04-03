<template>
    <div>
        <input type="text" v-model="text" placeholder="请输入查询关键字" @change="setFlags" >
        <router-link tag="div" class="text" @click="setFlag" :to="'/search?id='+getSearchUrl">
            <span>搜索</span>
        </router-link>
    </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
    name:"SearchInput",
    data(){
        return{
            text:"",
            flag:""
        }
    },
    methods:{
        ...mapActions(["SEARCHACTION","SETSEARCHACTION"]),
        setFlag(){
            this.flag = true
            this.SEARCHACTION(this.flag)
           
            //var that = this
            // this.$axios.get(this.HOST+"/list",{
            //     params:{
            //         id:this.getSearchUrl
            //     }
            // })
            // .then(res => {
            //     console.log(res)
            // })
            // .catch(error =>{
            //     console.log(error)
            // })
        },
        setFlags(event){
            this.flag = true
            this.SEARCHACTION(this.flag)
            this.SETSEARCHACTION(this.text)
            // console.log(this.text)
             //var that = this
            // this.$axios.get(this.HOST+"/list",{
            //     params:{
            //         id:this.getSearchUrl
            //     }
            // })
            // .then(res => {
            //     console.log(res)
            // })
            // .catch(error =>{
            //     console.log(error)
            // })
        },
        
    },
    computed:{
        ...mapGetters(["getSearchUrl"])
    },
    mounted(){
        if(this.text == ""){
            this.flag = false
            this.SEARCHACTION(this.flag)
        }
        
    }
}
</script>

<style lang="less" scoped>
div{
    input{
        width: 75%;
        height: 0.7rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
        background-color: #eee;
        display: inline-block;
        margin-right: 0.2rem;
        outline: none;
        padding-left: 0.2rem;
        box-sizing: border-box;
        font-size: 0.4rem;
    }
    p{
        width: 65%;
        border: 1px solid #ccc;
        position: absolute;
        left: 22px;
        font-size: 0.36rem;
        z-index: 88;

    }
    .text{
        height: 0.5rem;
        display: inline-block;
        position: absolute;
        top: 78px;
        font-size: 22px;
        right: 30px;
        color:#a519e8;
    }
}


</style>


