import { SETLOGININFO,SETFLAG,SETSEARCHFLAG,SETSEARCHURL,STORECHAT,CLEARCHAT,STOREDEFAULTCHATDATA,CLEARDEFAULT } from './mutationType'
export default {
    //mutation函数
    [SETLOGININFO](state, login){
        state.loginInfo = login;
    },
    [SETFLAG](state,flag){
        state.flag = flag;
    },
    [SETSEARCHFLAG](state,flag){
        state.searchFlag = flag
    },
    [SETSEARCHURL](state,url){
        state.searchUrl = url
    },
    [STORECHAT](state,value){
        state.chatData.push(value);
    },
    [CLEARCHAT](state){
        state.chatData = [];
    },
    [STOREDEFAULTCHATDATA](state,value){
        state.defaultChatData = value;
    },
    [CLEARDEFAULT](state){
        state.defaultChatData = {};
    },

}