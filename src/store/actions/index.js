import { LOGININFOACTION,FLAGACTION,SEARCHACTION,SETSEARCHACTION,STORECHATACTION,CLEARCHATACTION,STOREDEFAULTCHATDATAACTION,CLEARDEFAULTACTION } from './actionsType';
import { SETLOGININFO,SETFLAG,SETSEARCHFLAG,SETSEARCHURL,STORECHAT,CLEARCHAT,STOREDEFAULTCHATDATA,CLEARDEFAULT } from '../mutations/mutationType'
export default {
    //触发mutation函数
    [LOGININFOACTION]({ commit }, login){
        commit(SETLOGININFO, login);
    },
    [FLAGACTION]({commit},flag){
        commit(SETFLAG,flag)
    },
    [SEARCHACTION]({commit},flag){
        commit(SETSEARCHFLAG,flag)
    },
    [SETSEARCHACTION]({commit},url){
        commit(SETSEARCHURL,url)
    },
    [STORECHATACTION]({commit},value){
        commit(STORECHAT,value)
    },
    [CLEARCHATACTION]({commit}){
        commit(CLEARCHAT)
    },
    [STOREDEFAULTCHATDATAACTION]({commit},value){
        commit(STOREDEFAULTCHATDATA,value)
    },
    [CLEARDEFAULTACTION]({commit}){
        commit(CLEARDEFAULT)
    }
}