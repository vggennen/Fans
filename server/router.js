var express = require("express");
var router = express.Router();
var url = require("url");
var bannerData = require("./data/banner.js");
var circlesData = require("./data/circles.js");
var listData = require("./data/list.js");
var peopleData = require("./data/people.js");
var bannerData = require("./data/banner.js");
var xuanjiData = require("./data/xuanji.js");
var instructionData = require("./data/instruction.js");
var bannerData = require("./data/banner.js")
var circlesData = require("./data/circles.js");
var loginData = require("./data/login.js")
var minecomData = require("./data/commentMinecom");
var msgData = require("./data/msg");
var sysData = require("./data/sys");


router.get("/banner",function(req,res){
    res.send(bannerData)
})

router.get("/list",function(req,res){
    var id = url.parse(req.url,true).query.id;
    console.log(id)
    res.send(listData)
    
    // for(var i=0;i<listData.list.length;i++){
    //     var id = id.split("")
    //     for(var j in id ){
    //         if(listData.list[i].title.indexOf(j)){
    //             return res.send(listData.list[i])
    //         }else{
    //             return res.send("小主，未找到你想要的")
    //         }
    //     }
    // }
})

router.get("/people",function(req,res){
    var id = url.parse(req.url,true).query.id;
    console.log(id)
    res.send(peopleData)
})
router.get("/circles",function(req,res){
  
    res.send(circlesData)
})
router.get("/xuanji",function(req,res){
    // var title = url.parse(req.url,true).query.title;
    // console.log(title)
    res.send(xuanjiData)
})

router.get("/instruction",function(req,res){
  
    res.send(instructionData)
})
router.get("/circles",function(req,res){
    res.send(circlesData)
})
//个人信息页面请求
router.post("/login", function(req,res){
    var phonenum = req.body.phonenum;
    console.log(phonenum);
    if(phonenum){
        console.log(222);
        for(var i = 0 ; i < loginData.userlist.length; i++){
            console.log(i);
            if(phonenum === loginData.userlist[i].phonenum){
                return res.send(loginData.userlist[i]);
            }
        }
    }else{
        return res.send(
            {
                msg:'请求失败'
            }
        );
    }
    
})

router.get("/comment/minecom",function(req,res){
    res.send(minecomData)
})

router.get("/msg",function(req,res){

    res.send(msgData)
})

router.get("/msgid",function(req,res){
    var id = url.parse(req.url,true).query.id;
    
    res.send(msgData.filter(item => {
        return item.id == id;
    }))
})

router.get("/sys",function(req,res){

    res.send(sysData)
})

module.exports = router;