import Vue from 'vue'
import Vuex from 'vuex'

import state from './states/index';
import mutation from './mutations/index';
import action from './actions/index';
import getter from './getters/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: state,
    mutations: mutation,
    actions: action,
    getters: getter
})
