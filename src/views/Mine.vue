<template>
    <div class='mine'>
        <MineView />
        <BottomNav />
        <!-- <router-view /> -->
    </div>
</template>

<script>
import BottomNav from '../components/BottomNav';
import MineView from './subPage/MineView'
import { mapActions, mapGetters} from 'vuex';
import { LOGININFOACTION } from '../store/actions/actionsType';

export default {
    name: 'Mine',
    components: {
        BottomNav,
        MineView
    },
    data(){
        return{

        }
    },
    mounted(){
        // console.log(this.getLoginInfo);
        //组件加载完成时判断vuex中是否有登录状态,没有登录状态,跳转登录页面
        // console.log(this.$route.path);  // /mine
        // console.log(encodeURIComponent(this.$route.path));  //%2Fmine
        if(!this.getLoginInfo.username){
            //记录前一个路由页面的
          this.$router.push('/login/' + encodeURIComponent(this.$route.path));  
        }
        
    },
    computed: {
        ...mapGetters(['getLoginInfo'])
    }
}
</script>

<style>
.mine{
    width: 100%;
    height: 100%;
}
</style>