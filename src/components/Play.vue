<template>
    <div>
        <!-- <div class="null"></div> -->
        <video src="https://www.iqiyi.com/5ff14ad4-8009-4aae-9275-099f47c70e9d" controls class="video"></video>
        <div>
            <Tabs :currentIndex="currentIndex" @changeKey="changeKey" class="tabs">                
                <tab tabName="神评论" index="1">
                    <Comment />
                </tab>
                <tab  tabName="内容简介" index="2">
                    <Instruction :instructionData="instructionData"/>
                </tab>
                <tab  tabName="选集" index="3" >
                    <Xuanji :xuanjiData="xuanjiData"/>
                </tab>                
            </Tabs>
        </div>
    </div>
</template>

<script>
import Comment from "./Comment"
import Xuanji from "./Xuanji"
import Instruction from "./Instruction"
export default {
    name:"Play",
    data(){
        return{
            currentIndex:2,
            xuanjiData:{},
            instructionData:{}
        }
    },
    methods:{
        changeKey(index){
            this.currentIndex = index
        }
    },
    components:{
        Comment,
        Xuanji,
        Instruction
    },
    mounted(){
        //选集的数据
        this.$axios.get(this.HOST+"/xuanji")
        .then(res => {
            
            this.xuanjiData = res.data
            //console.log(this.xuanjiData)
        })
        .catch(error => {
            console.log(error)
        })
        //演员简介的内容
        this.$axios.get(this.HOST+"/instruction")
        .then(res => {
            
            this.instructionData = res.data
            //console.log(this.xuanjiData)
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>


<style lang="less" scoped>
div{
    .video{
        width:100%;
    }
    // .{
    //     .{
            
    //     }       
    // }
}

</style>


