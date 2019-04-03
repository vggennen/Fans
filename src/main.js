import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'


Vue.use(ElementUI);
import Axios from 'axios'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



import Tabs from "./components/Tabs"


Vue.prototype.$axios = Axios;
Vue.prototype.HOST = "/api";





Vue.use(Tabs);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
