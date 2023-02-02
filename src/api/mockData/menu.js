export default {
    getMenuPart1() {
        return {
            code: 200,
            data: [
                {
                    name: 'Dashboard',
                    link: '/manage/dashboard',
                    icon: 'fa-tachometer-alt'
                },
                {
                    name: '通知中心',
                    link: '/manage/notice',
                    icon: 'fa-bell'
                },
                {
                    name: '提交历史',
                    link: '/manage/history',
                    icon: 'fa-history'
                },
                {
                    name: '教师中心',
                    icon: 'fa-chart-area',
                    children: [
                        {
                            name: '收集总览',
                            link: '/manage/teacher/center'
                        },
                        {
                            name: '作业视图',
                            link: '/manage/teacher/assignView'
                        },
                        {
                            name: '班级视图',
                            link: '/manage/teacher/classView'
                        },

                    ]
                },
                {
                    name: '学生中心',
                    icon: 'fa-chart-area',
                    children: [
                        {
                            name: '可交作业',
                            link: '/manage/student/assigns'
                        },
                        {
                            name: '已交管理',
                            link: '/manage/student/files'
                        }
                    ]
                }

            ]
        };
    },
    getMenuDataManage() {
        return {
            code: 200,
            data: [
                {
                    name: '作业管理',
                    icon: 'fa-cog',
                    children: [
                        {
                            name: '作业管理',
                            link: '/manage/assignment/assign',
                        },
                        {
                            name: '文件管理',
                            link: '/manage/assignment/file'
                        },
                    ],

                },
                {
                    name: '信息管理',
                    icon: 'fa-wrench',
                    children: [
                        {
                            name: '学生管理',
                            link: '/manage/information/student',
                        },
                        {
                            name: '教师管理',
                            link: '/manage/information/teacher',
                        },
                        {
                            name: '班级管理',
                            link: '/manage/information/class',
                        }
                    ]
                },
                {
                    name: '个人信息',
                    icon: 'fa-info-circle',
                    link: '/manage/profile'
                }

            ]
        }
    },
    getMenuDebugLink() {
        return {
            code: 200,
            data: [
                {
                    name: '测试页面',
                    children: [
                        {
                            name: 'ForgotPassword',
                            link: '/forgotPassword',
                        },
                        {
                            name: 'Login Page',
                            link: '/login',
                        },
                        {
                            name: 'Register Page',
                            link: '/register'
                        },
                        {
                            name: '404 Page',
                            link: '/404'
                        },
                        {
                            name: 'Blank Page',
                            link: '/blank'
                        }
                    ]
                }
            ]
        }
    }
}