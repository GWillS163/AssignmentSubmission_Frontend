import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import ('../views/manage/Main.vue'),
        redirect: '/',
        name: 'index',
        children: []
    },

    {
        path: '/manage',
        component: () => import ('../views/manage/Main.vue'),
        redirect: '/manage/index',
        name: 'manage',
        children: []
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router