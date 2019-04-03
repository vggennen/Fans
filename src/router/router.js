import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Circles from '../views/Circles'
import Behavior from '../views/Behavior'
import Mine from '../views/Mine'
import Login from '../views/Login'
import Register from '../views/Register'
import Forget from '../views/Forget'
//动态里的一级路由
import Comment from "../views/comment"
import Msg from "../views/msg"
import Sys from "../views/sys"
import Chat from "../views/chat"

import LeftNav from "../components/LeftNav"

import HotTop from "../views/subPage/HotTop"
import WangJu from "../views/subPage/Movie"
import LanMu from "../views/subPage/LanMu"
import Movie from "../views/subPage/Movie"
import DianShi from "../views/subPage/DianShi"
import Xiu from "../views/subPage/Xiu"
import Collect from "../views/subPage/Collect"
import PlayView from "../views/PlayView"

import Search from "../views/Search"

//个人中心中跳转路由
import AboutFan from '../views/subPage/MineSub/AboutFan'
import FeedBack from '../views/subPage/MineSub/FeedBack'
import Identify from '../views/subPage/MineSub/Identify'
import StarIdentify from '../views/subPage/MineSub/StarIdentify'
import ProducerIdentify from '../views/subPage/MineSub/ProducerIdentify'
import Setting from '../views/subPage/MineSub/Setting'
import Profile from '../views/subPage/MineSub/Profile'
import Ercode from '../views/subPage/MineSub/Ercode'


import CircleSub from "../views/subPage/CircleSub"
import CircleText from "../views/subPage/CircleText"

//评论二级路由
import Minecom from "../views/subPage/comment/minecom"
import Formine from "../views/subPage/comment/formine"

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			redirect:"/hot",
			children:[
				{
					path:"hot",
					component:HotTop
				},
				{
					path:"wang",
					component:WangJu
				},
				{
					path:"lanmu",
					component:LanMu
				},
				{
					path:"movie",
					component:Movie
				},
				{
					path:"dianshi",
					component:DianShi
				},
				{
					path:"xiu",
					component:Xiu
				},
				{
					path:"collect",
					component:Collect
				}
			]
		},
		{
			path: '/circles',
			name: 'Circles',
			component: Circles,
		},
		{
			path: '/circlesub',
			name: 'CircleSub',
			component: CircleSub,
		},
		{
			path: '/circletext',
			name: 'CircleText',
			component: CircleText,
		},
		{
			path: '/behavior',
			name: 'Behavior',
			component: Behavior,
        },
        //个人中心
		{
			path: '/mine',
			name: 'Mine',
            component: Mine,
        },
        //关于偶粉
        {
            path: '/aboutfan',
            name: AboutFan,
            component: AboutFan
        },
        //反馈信息
        {
            path: '/feedback',
            name: FeedBack,
            component: FeedBack
        },
        //认证
        {
            path: '/identify',
            name: Identify,
            component: Identify,
            children: [
                {
                    path: 'staridentify',
                    name: StarIdentify,
                    component: StarIdentify
                },
                {
                    path: 'produceridentify',
                    name: ProducerIdentify,
                    component: ProducerIdentify
                }
            ]
        },
        //设置
        {
            path: '/setting',
            name: Setting,
            component: Setting
        },
        //编辑资料
        {
            path: '/profile',
            name: Profile,
            component: Profile
        },
        //二维码页面
        {
            path: '/ercode',
            name: Ercode,
            component: Ercode
        },
		{
			path:"/leftnav",
			name:"LeftNav",
			component:LeftNav,
			
		},
        {
            path: '/login/:routerPath?',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: Register,
            component: Register
        },
        {
            path: '/forget',
            name: Forget,
            component: Forget
        },
		{
			path:"/search",
			name:Search,
			component:Search
		},
		{	path:"/comment",
			name:"Comment",
			component:Comment,
			redirect:"/comment/minecom",
			children:[
				{
					path:"minecom",
					name:"Minecom",
					component:Minecom
				},
				{
					path:"formine",
					name:"Formine",
					component:Formine
				}
			]
		},
		{
			path:"/msg",
			name:"Msg",
			component:Msg
		},
		{
			path:"/sys",
			name:"Sys",
			component:Sys
		},
		{
			path:"/chat/:id",
			name:"Chat",
			component:Chat
		},
		{
			path:"/play",
			name:"PlayView",
			component:PlayView
		}
	]
})
