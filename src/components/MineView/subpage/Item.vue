<template>
    <li :to='path'  class='item'  @click='clickHandler'>
        <img :src="src" alt="">
        <span ref='text'>{{ titles }}</span>
        <div class='arrow_img'></div>
    </li>
</template>

<script>
export default {
    name: 'Item',
    data(){
        return{
            
        }
    },
    props: {
        titles:{
            type: String,
            default: '偶粉App'
        },
        src: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: '/'
        }
    },
    methods: {
        clickHandler(){
            if(this.$refs.text.innerHTML === '关于偶粉'){
                this.$router.push('/aboutfan');
            }else if(this.$refs.text.innerHTML === '意见反馈'){
                this.$router.push('/feedback');
            }else if(this.$refs.text.innerHTML === '我要认证'){
                this.$emit('getchange', true);
            }
        }
    }
}
</script>

<style lang="less" scoped>
@background: '../../../assets/images/36/';
.item{
    margin-left: 6%;
    font-size: 16px;
    background-color: white;
    // border-top: 1px solid  #d1cbdc;
    border-left: 0;
    border-right: 0;
    line-height: 0.43rem;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.2rem 0;

}
.item img{
    width: 20px;
    vertical-align: middle;
    position: relative;
    top: -0.05rem;
}
.item span{
    display: inline-block;
    margin-left: 2%;
}
.arrow_img{
    float: right;
    width: 20px;
    height: 20px;
    background: url("@{background}/dynamic_right_arrow_normal.png") no-repeat;
    background-size: contain;
    margin-right: 4%;
}
</style>


