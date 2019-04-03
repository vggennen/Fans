<template>
  <div class="home" > 
    <LeftNav :titleData="titleData"  @onActiveHandler="getIndex"/><!-- :flags="flags"  @onFlagHandler="getFlag"-->
    <div class="container" :class="[getFlag?'move':'']">
      <TopNav :title="titleData[currentIndex].title"/>
      <router-view></router-view>
      <BottomNav />
    </div>

  </div>
 
</template>

<script>
import TopNav from "../components/TopNav"
import LeftNav from "../components/LeftNav"
import BottomNav from '../components/BottomNav'
import {mapGetters} from "vuex"

export default {
  name: 'home',
  components: {
    TopNav,
    LeftNav,
    BottomNav

  },
  data(){
    return{
      titleData:[
        {
          title:"热榜",
          id:"hot",
          icon:"bangdan"
        },
        {
          title:"网剧",
          id:"wang",
          icon:"icon-"
        },
         {
          title:"栏目",
          id:"lanmu",
          icon:"shuqian"
        },
        {
          title:"电影",
          id:"movie",
          icon:"dianying"
        },
         {
          title:"电视剧",
          id:"dianshi",
          icon:"dianshi-"
        },
        {
          title:"真人秀",
          id:"xiu",
          icon:"all"
        },
        {
          title:"收藏",
          id:"collect",
          icon:"unie601"
        }
      ],
      currentIndex:0,
      flags:false
    }
  },
  methods:{
    getIndex(index){
      this.currentIndex = index
    },
    /* getFlag(flag){
      this.flags = flag;
      console.log(flag);
      console.log(this.flags);
    } */
  },
  computed:{
    ...mapGetters(['getFlag'])
  }

}
</script>
<style lang="less" >
.home{
  height:100%;
  position:relative;

}
.container{
    // height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    // left: 50px;
}
// .null{
//     height: 1.2rem;
// }
.move{
  left:140px;
}
</style>




