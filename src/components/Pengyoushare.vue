<template>
    <div class="friend_circle">
        <div class="top">
            <router-link tag="div" to="/circletext" class="left">
                <img :src="FriendCircleData.hearderimg" alt="">
                
            </router-link>
            <div class="right">
                <div class="information">
                    <span class="heardertitle">{{FriendCircleData.heardertitle}}</span>
                     <p class="headertime">{{FriendCircleData.headertime}}</p>                     
                    <span class="zan">
                        <img src="../assets/images/11/zan_btn_normal.png" alt="">
                        <span>506</span> 
                    </span>                    
                </div>               
               <div class="disc">
                   <div>{{FriendCircleData.content}}</div>
                   <p v-for="(item,index) in FriendCircleData.contentimg" :key="index">                      
                       <img class="images" :src="item" alt="">
                   </p>
               </div>
                
            </div> 
            <router-link to="circles" class="comment" >
                <img src="../assets/images/25/f-1.png" alt=""> 
            </router-link>           
          
          <div class="bottom"></div>
        </div>
    </div>
</template>
<script>

export default {
    name:"Pengyoushare",
    data(){
        return{
            flag:false,
            FriendCircleData:{}
        }
    },
    mounted(){
        this.$axios.get(this.HOST+'/circles')
        .then(res=>{
            this.FriendCircleData = res.data;
        
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>
.top{
    margin: 20px 24px 0 20px;
    position: relative;

}

.left{
    display: inline-block;
    width: 14%;
    vertical-align:top;
}
.left img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.right{
    display: inline-block;
    /* position: relative; */
    width: 85%;
    vertical-align:top;
    box-sizing: border-box;
    padding-left:15px ;
}
.information{
    position: relative;
    /* top:-30px; */
    /* height: 50px; */
}
.heardertitle{
    line-height: 40px;
    font-size: 20px;
    color:blueviolet
}
.headertime{
    color: #999;
    margin-bottom: 0.2rem
}
.Positioning{
    margin: 0;
    padding: 0;
}
.zan{
    position: absolute;
    top:0;
    right:0;
    font-size: 17px;
   
}
.zan img{
    width: 20px;
}
.zan span{
    line-height: 40px;
    color: #999;
}
.disc{
    font-size: 20px;
}
.disc p{
    display: inline-block;
    width: 32%;
    height: 1.7rem;
    margin-top: 0.2rem;
    margin-right: 1%;
    overflow: hidden;
}
.comment{
    position: absolute;
    bottom: 13px;
    right: 0;

}
.comment img{
    width: 0.4rem;
}
.bottom{
    border-bottom: solid 1px #999;
    margin-top: 50px;
}
</style>
