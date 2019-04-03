<template>
    <div class="root">
        <div class="headers">
            <router-link to="/circles" class="left">取消</router-link>
            <div class="mid">发圈子</div>
            <div class="right">发送</div>
        </div>
        <div class="content">
            <textarea placeholder="想和大家说..." class="write" cols="30" rows="10"></textarea>
            <div class="photos" >
                
                    <div @click="playHandler" class="playVideo">
                        <img src="../../assets\images\29-30-34\照片添加-2.png" alt="">
                    </div>
                    <video id='myvideo'  src=''></video>

            </div>
            <div class="bottom">
                <div class="place">
                    <img src="../../assets\images\29-30-34\1-1.png" alt="">
                    插入位置{{msg}}
	                <div id="container"></div>

                    <img @click="placeHandler" class="arrow" src="../../assets\images\29-30-34\插入箭头.png" alt="">
                </div>
                <div class="recording">
                    <img src="../../assets\images\29-30-34\2-1.png" alt="">
                    插入录音
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"CircleSub",
    data(){
        return{
            flag:false,
            flags:false,
            msg:""
        }
    },
    methods:{
        photoHandler(){
            this.flag=true
        },
        addHandler(){
            this.flags=true
        },
        placeHandler(){
            
            var map = new BMap.Map("container");    
            var point = new BMap.Point(116.404, 39.915);    
            map.centerAndZoom(point, 15);    
            window.setTimeout(function(){  
                map.panTo(new BMap.Point(116.409, 39.918));    
            }, 2000);

            var geoc = new BMap.Geocoder();    
            map.addEventListener("click", function(e){        
                var pt = e.point;
                geoc.getLocation(pt, function(rs){
                    var addComp = rs.addressComponents;
                    alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                });        
            })
        },
        playHandler(){
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		//开启用户多媒体设备
		navigator.getUserMedia({
			video:true,
			audio:true
		}, function (stream){
			//让摄像头设备捕捉到的信息，实时加载到video标签中
			// var URL = window.URL || window.webkitURL;
			// myvideo.src = URL.createObjectURL(stream);
			myvideo.srcObject = stream;
			//视频连续展示(播放)
			myvideo.play();

		},function (err){
			console.log(err);
		});
        }
        
   }

   

}
</script>
<style scoped>

#container{
			width: 100%;
			height:600px;
            z-index: 2;
		}
.root{
    background-color: #fff
}
.headers{
    height: 1.174rem;
    background-color: #A54BE8;
     color: white;
     display: flex;
     line-height: 1.174rem;
    font-size: 0.42rem;
    text-align: center
}
.left{
     flex-grow: 1;
     font-size: 0.4rem;

}
.mid{
    flex-grow: 1;
}
.right{
    flex-grow: 1;
    color: #fff100
     
}
.content{
    box-sizing: border-box;
    padding: 20px 20px;
    height: 6.5rem;
}
.write{
     height: 3.6rem;
     width: 100%;
     font-size: 0.4rem;
     color: #7b7781;
}
.photos .playVideo{
    width: 32%;
    height: 2rem;
}
.playVideo img{
    width: 100%
}
.place,.recording{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border: #7b7781 1px solid;
    margin-top: 20px;
    box-sizing: border-box;
    padding: 5px 20px;
    border-radius: 10px;
    font-size: 0.36rem;
    color: #999;
    position: relative; 
}
.place img,.recording img{
    width: 0.3rem;
}
.place .arrow{
    position: absolute;
    right: 0.4rem;
    top:0.2rem;
    width: 0.3rem;
}
.photoshow{
    position: absolute;
    z-index: 1;
    width: 100%;
    background-color: cornsilk
}
.photoshow img{
    width: 31%;
}
</style>

