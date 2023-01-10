import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import ('../views/public/about.vue'),
        // redirect: '/about',
        name: 'about',
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('../views/manage/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ('../views/manage/Register.vue')
    }
    // {
    //     path: '/manage',
    //     component: () => import ('../views/manage/Main.vue'),
    //     // redirect: '/manage',
    //     name: 'manage',
    //     children: [
    //         {
    //             path: '/manage/login',
    //             name: 'manageLogin',
    //             component: () => import ('../views/manage/Login.vue')
    //         },
    //         {
    //             path: '/manage/register',
    //             name: 'manageRegister',
    //             component: () => import ('../views/manage/Register.vue')
    //         }
    //     ]
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router