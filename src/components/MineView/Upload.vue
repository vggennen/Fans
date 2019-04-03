<template>
    <div class='upload'>
        <span class='img_div'>
            <span class='img' v-for="(item, index) in imgBase" :key='index'>
                <img :src="item" alt="">
            </span>
            <span v-show='flag'>照片集空空的,快点添加吧~^_^</span>
        </span>
        <div type='file' class='add'>
            <input type="file" @change='getImgBase'>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Upload',
    data(){
        return{
            //存储img base64的值传给后端处理
            imgBase: [],
            flag: true
        }
    },
    methods: {
        //获取图片base64实现预览
        getImgBase(){
            var _this = this;
            var event = event ||window.event;
            var file = event.target.files[0];  //可得到长度为1的FileList数组
            var reader = new FileReader();
            console.log(file);
            reader.onload = function(event){
                // console.log(event.target.result);
                _this.imgBase.push(event.target.result);
                // console.log(_this.imgBase);
                _this.flag = false;
            }
            reader.readAsDataURL(file);
        }
    }
}
</script>

<style lang='less' scoped>
@background: '../../assets/images/55';
.upload{
    margin: 2.5%;
    height: 2rem;
    background-color: #ffffff;
    border: 1px solid #d1cbdc;
    padding: 2.0%;
    box-sizing: border-box;
    line-height: 1.6rem;
    letter-spacing: 0.01rem;
    font-size: 17px;
    color: #d1cbdc;
    overflow: hidden;
    .add{
        display: block;
        outline: none;
        border: 0;
        width: 25%;
        height: 100%;
        float: right;
        background-color: lightblue;
        background: url("@{background}/j-2.png") no-repeat;
        background-position: center;
        border: 1px solid #d1cbdc;
        box-sizing: border-box;
        input{
            display: block;
            float: left;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
    .img_div{
        img{
            display: inline-block;
            margin-right: 0.5%;
            width: 25%;
            height: 100%; 
        }
        
    }
}
</style>

