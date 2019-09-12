import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
// 字体图标
import './assets/fonts/iconfont.css'
// 引入 ElementUI 插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')