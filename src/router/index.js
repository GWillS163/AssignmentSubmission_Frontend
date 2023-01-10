import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import ('../views/public/Main.vue'),
        name: 'home',
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('../views/manage/others/Login.vue')
    },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: () => import ('../views/manage/others/register.vue')
    // },
    // {
    //     path: '/forgotPassword',
    //     name: 'forgotPassword',
    //     component: () => import ('../views/manage/others/forgot-password.vue')
    // },
    // {
    //     path: '/admin',
    //     component: () => import ('../views/manage/Main.vue'),
    //     name: 'adminMain',
    //     children: []
    // },
    // {
    //     path: '/manage',
    //     component: () => import ('../views/manage/Main.vue'),
    //     // redirect: '/manage',
    //     name: 'manage',
    //     children: [
    //         // {
    //         //     path: '/manage/dashboard',
    //         //     name: 'dashboard',
    //         //     component: () => import ('../views/manage/Dashboard.vue'),
    //         //     children: []
    //         // },
    //         {
    //             path: '/manage/notice',
    //             name: 'manageNotice',
    //             component: () => import ('../views/manage/Notice.vue'),
    //             children: []
    //         },
    //         // {
    //         //     path: '/manage/history',
    //         //     name: 'manageHistory',
    //         //     component: () => import ('../views/manage/History.vue'),
    //         //     children: []
    //         // }
    //     ]
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

