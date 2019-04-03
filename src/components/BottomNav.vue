<template>
    <div class='bottom-nav'>
        <ul>
            <router-link exact to='/' tag='li' active-class='active'>
                <i class='iconfont icon-hua'></i>
                <p>片花</p>
            </router-link>
            <router-link to='/circles' tag='li' active-class='active'>
                <i class='iconfont icon-quanzi'></i>
                <p>圈子</p>
            </router-link>
            <router-link to='/behavior' tag='li' active-class='active'>
                <i class='iconfont icon-huojian'></i>
                <p>动态</p>
            </router-link>
            <router-link to='/mine' tag='li' active-class='active'>
                <i class='iconfont icon-wode'></i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BottomNav',
    data(){
        return{
        }
    }
}
</script>

<style lang='less' scoped>
.bottom-nav{
    width: 100%;
    padding: 6/100rem 0;  /* 内边距更改 */
    height: 90/100rem;   /* 高度更改 */
    background-color: white;
    color: rgb(160,160,160);
    position: fixed;
    bottom: 0;
    /* left: 0; */
    /* right:0; */
    border-top: 1px solid  rgba(165, 75, 232, .3);
}
.bottom-nav>ul{
    overflow: hidden;
    /* margin-top: 0.43rem; */
}
.bottom-nav li{
    float: left;
    width: 25%;
    text-align: center;
}
.bottom-nav li p{
    margin-top: 10/100rem;  /* 更改 */
    font-size: 14px;
}
.active{
    color: rgb(165, 75, 232);
}
.iconfont{
    font-size: 25px;
    display: block;
}

</style>


