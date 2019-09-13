import Vue from 'vue'
import Router from 'vue-router'
// 导入login组件
import login from '@/components/login'
import home from '@/components/home'

Vue.use(Router)
const router = new Router({
    routes: [{ path: '/', redirect: '/login' }, {
            path: '/login',
            component: login
        }, {
            path: '/home',
            component: home
        }

    ]
})
router.beforeEach((to, from, next) => {
        if (to.path === '/login') return next();
        const token = window.sessionStorage.getItem('token')
        console.log(token)
        if (!token) return next('/login')
        next()
    })
    // 暴露路由
export default router