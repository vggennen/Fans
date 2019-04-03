<template>
    <div>
        <div class="headers">
            <router-link to="/circles" class="left"> 取消 </router-link>
            <div class="mid">圈子正文</div>
        </div>
        
         <div class="content">
            <Pengyoushare/>
            
        </div>
    </div>
</template>

<script>
import Pengyoushare from '../../components/Pengyoushare'
export default {
    name:"CircleText",

     components: {
        Pengyoushare
    },
    
}
</script>

<style scoped>

.headers{
    height: 1.174rem;
    background-color: #A54BE8;
     color: white;
     display: flex;
     line-height: 1.174rem;
    font-size: 0.42rem;
}
.left{
     flex-grow: 3;
     font-size: 0.4rem;
     margin-left: 0.4rem;

}
.mid{
    flex-grow: 4;
}
</style>