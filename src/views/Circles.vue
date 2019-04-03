
<template>
    <div>
        <div class="headers">
            <div class="mid">
                <span class="fonts">圈子</span>
                <img v-show="flag"  @click="updownHandler" src="../assets/images/23/circle_to_down_arrow.png" alt="">
                <img v-show="!flag" @click="updownHandler" src="../assets/images/23/circle_to_up_arrow.png" alt="">
            </div>
            <router-link to="/circlesub" class="right">
                <img src="../assets/images/23/circle_edit_icon_normal.png" alt="">
            </router-link>
        </div>
        <div v-show="!flag" @mouseleave="leaver" class="hidden">
            <Tabs :currentIndex="currentIndex" @changeKey="changeKey">
                <tab tabName="全部" index="1">
                    <!-- <span>全部</span> -->
                </tab>
                <tab tabName="热门" index="2">
                    <!-- <span>热门</span> -->
                </tab>
                <tab tabName="关注" index="3">
                    <!-- <span>关注</span> -->
                </tab>
            </Tabs>
        </div>
        <div class="content">

            <Pengyouquan />
            <Pengyouquan />
            <Pengyouquan />
        </div>
        <!-- <router-view></router-view> -->
        <BottomNav />
        

    </div>
</template>

<script>
import Vue from 'vue'
import CTabs from "../components/CTabs"
import BottomNav from '../components/BottomNav'
import Pengyouquan from '../components/Pengyouquan'

Vue.use(CTabs)
export default {
    name: 'Circles',
    components: {
        BottomNav,
        Pengyouquan
    },
    data(){
        return{
            flag:true,
            currentIndex:"1"
        }
    },
    methods:{  
        updownHandler(){
            this.flag=!this.flag     
        },
        changeKey(index){
            this.currentIndex=index;
        },
        leaver(){
            this.flag=!this.flag     
        }
    }
}
</script>

<style scoped>
.headers{
    height: 1.174rem;
    background-color: #A54BE8;
}
.mid{
    left: 41%;
    top: 0.41rem;
    width: 2rem;
    position: absolute;
    margin: 0 auto;
    display: inline-block;
    font-size: 0.42rem;
    color: white;
}

.mid img{

    top: 0.05rem;
    position: absolute;
    width: 0.36rem;
    margin-left: 0.1rem;
}
.right{
    margin-top: 0.38rem;
    right: 0.55rem;
    position: absolute;
    display: inline-block;
     
}
.right img{
    width: 0.45rem;
}
.hidden{
 z-index: 2;
 width: 100%;
  text-align: center;

}

</style>