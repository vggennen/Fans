<template>
    <div>
        <div class="null"></div>
        <Tabs :currentIndex="currentIndex" @changeKey="changeKey">
            <tab tabName="tab1" index="1">标题一</tab>
            <tab  tabName="tab2" index="2">标题二</tab>
        </Tabs>
        lalal
    </div>
</template>

<script>
export default {
    name:"Collect",
     data(){
        return{
        currentIndex:"1"
        }
    },
    methods:{
        changeKey(index){
            console.log("lall")
            this.currentIndex = index
        }
    }
}
</script>

<style scoped>
.null{
    height:2.4rem;
}
</style>