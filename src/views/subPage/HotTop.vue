<template>
    <div class="box">
        <swiper  ref="mySwiper" :options="swiperOption" v-if="swiperData.banners">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperData.banners" :key="index">
                <img :src="item" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <div v-else>正在加载...</div>
        <ul class="list" v-if="listData">
            <router-link :to="'/play'+item.id" tag="li" v-for="(item,index) in listData.song_list" :key="item.artist_id" :class="{active:index%2 != 0}">
                <img :src="item.pic_radio" alt="">
                <p>{{item.album_title}}</p>
                <p class="author">{{item.author}}</p>
            </router-link>
        </ul>
        <div v-else>正在加载...</div>
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name:"HotTop",
    data(){
        return{
            swiperData:{},
             swiperOption:{
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                },
                // navigation: {
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev"
                // }
            },
            listData:{}
        }
    },
    mounted(){
     /*    this.$axios.get(this.HOST+"/banner")
        .then(res => {
            console.log(res.data)
            this.swiperData = res.data
        })
        .catch(error => {
            console.log(error)
        }), */
        const that = this;
        function getSwiperAccount(){
            return that.$axios.get(that.HOST+"/banner")
        }
        function getListData(){
            return that.$axios.get("http://www.wwtliu.com/sxtstu/music/baidu/list.php",{
                params:{
                    type:1,
                    count:8,
                    offset:0
                }
            })
        }

        this.$axios.all([getSwiperAccount(),getListData()])
        .then(this.$axios.spread(function(acct,perms){
            that.swiperData = acct.data
            that.listData = perms.data
            // console.log(acct.data);
            // console.log(perms.data);
            // console.log(perms);
        }))

        //console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(3, 1000, false)
    },
    components:{
        swiper, 
        swiperSlide
    },
     computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

}
</script>

<style lang="less" scoped>
.box{
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
}
.swiper-slide {
    // height:3.3rem;
    // width:100%;
    img{
        // height:100%;
        width:100%;
    }
}
.list{
    overflow: hidden;
    li{
        width:45%;
        // margin-top:0.2rem;
        float: left;
        margin:0.2rem 3.33% ;
        img{
            width:100%;
        }
        p{
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            font-size: 0.4rem;
        }
        .author{
            color:#ccc
        }
    }
    .active{
        margin-left:0;
    }
}

</style>