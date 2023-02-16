import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [

    {path: '/public', component: () => import ('../views/public/Main.vue'),
        name: 'public', children: [
            {path: '/public/', component: () => import ('../views/public/Home.vue'),  children: []},
            {path: '/about', component: () => import ('../views/public/About.vue'),  children: []},
        ]},
    // {path: '/about', component: () => import ('../views/public/About.vue'),
    //     name: 'about', children: []},
    { path: '/login', name: 'login',
        component: () => import ('../views/manage/others/Login.vue')
    },
    { path: '/register', name: 'register',
        component: () => import ('../views/manage/others/Register.vue')
    },
    { path: '/forgotPassword', name: 'forgotPassword',
        component: () => import ('../views/manage/others/ForgotPassword.vue')
    },
    // add a route object which is redirect '/' TO '/public'
    { path: '/', redirect: '/public' },

    // {
    //     path: '/admin',
    //     component: () => import ('../views/manage/test.vue'),
    //     name: 'adminMain',
    //     children: []
    // },
    {
        path: '/manage',
        component: () => import ('../views/manage/Main.vue'),
        // redirect: '/manage',
        name: 'manage',
        children: [
            {
                path: '/manage/dashboard',
                name: 'dashboard',
                component: () => import ('../views/manage/admin/Dashboard.vue'),
                children: []
            },
            {
                path: '/manage/notice',
                name: 'manageNotice',
                component: () => import ('../views/manage/Notice.vue'),
                children: []
            },
            {
                path: '/manage/history',
                name: 'manageHistory',
                component: () => import ('../views/manage/History.vue'),
                children: []
            },
            {

                path: '/manage/teacher/',
                redirect: '/manage/teacher/center'
            },
            {
                path: '/manage/teacher/center',
                name: 'manageTeacherCenter',
                component: () => import ('../views/manage/teacher/Center.vue'),
                children: [

                ]
            },
            {
                path: '/manage/teacher/assignView',
                name: 'manageTeacherAssignView',
                component: () => import ('../views/manage/teacher/AssignView.vue'),
                children: []
            },{
                path: '/manage/teacher/classView',
                name: 'manageTeacherClassView',
                component: () => import ('../views/manage/teacher/ClassView.vue'),
                children: []

            },{
                path: '/manage/student/assigns',
                name: 'manageStudentCanUploads',
                component: () => import ('../views/manage/student/assigns.vue'),
                children: []
            },{
                path: '/manage/student/files',
                name: 'manageStudentFiles',
                component: () => import ('../views/manage/student/files.vue'),
                children: []
            },{
                path: '/manage/assignment/assign',
                name: 'manageAssignmentAssign',
                component: () => import ('../views/manage/assignment/assign.vue'),
                children: []
            },{
                path: '/manage/assignment/file',
                name: 'manageAssignmentFile',
                component: () => import ('../views/manage/assignment/file.vue'),
                children: []
            },
            {
                path: '/manage/information/teacher',
                name: 'manageInformationTeacher',
                component: () => import ('../views/manage/information/teacher.vue'),
                children: []
            },
            {
                path: '/manage/information/student',
                name: 'manageInformationStudent',
                component: () => import ('../views/manage/information/student.vue'),
                children: []
            },
            {
                path: '/manage/information/class',
                name: 'manageInformationClass',
                component: () => import ('../views/manage/information/class.vue'),
                children: []
            },
            {
                path: '/manage/profile',
                name: 'manageProfile',
                component: () => import ('../views/manage/Profile.vue'),
                children: []
            },
            {
                path: '/404',
                name: '404',
                component: () => import ('../views/manage/others/404.vue'),
                children: []
            },
            {
                path: '/blank',
                name: 'blank',
                component: () => import ('../views/manage/others/Blank.vue'),
                children: []
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes
})

export default router

