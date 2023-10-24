// 用于创建路由实例
import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    // 路由的模式设置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: "/",
            redirect: "/home",
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue'),
        },
        {
            path: "/hospital",
            component: () => import('@/pages/hospital/index.vue')
        }
    ],
    // 此处不太理解
    // 滚动行为,控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0,
        }
    }
})


