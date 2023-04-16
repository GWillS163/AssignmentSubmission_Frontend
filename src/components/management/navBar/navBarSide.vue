<template>
  <nav
      class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 "
     :class="{'toggled': isToggled}"
  >
    <div class="container-fluid d-flex flex-column p-0">
      <router-link
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        to="/public">
      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
      <div class="sidebar-brand-text mx-3">
        <span> 欢迎，{{ userName }}</span></div>
    </router-link>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <navBarSideRow :menu-part="menuPart1"/>
        <div v-if="menuDataManage.length">

          <hr class="sidebar-divider">
          <div class="sidebar-heading" >
            <p class="mb-0">数据管理</p>
          </div>
          <navBarSideRow :menu-part="menuDataManage"/>
        </div>

        <div v-if="menuDebugLink.length">
          <hr class="sidebar-divider" v-show="menuDebugLink">
          <div class="sidebar-heading">
            <p class="mb-0">Debug Pages</p>
          </div>
          <nav-bar-side-row :menu-part="menuDebugLink"/>
        </div>
      </ul>

      <div class="text-center d-none d-md-inline">
        <button id="sidebarToggle" class="btn rounded-circle border-0" type="button" @click="changeToggle"></button>
      </div>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <li class="nav-item"></li>
      </ul>
    </div>
  </nav>

</template>

<script>
import navBarSideRow from './navBarSideRow.vue';
import {getCurrentInstance, onMounted, ref} from "vue";
export default {
  name: "navBar",
  components:{
    navBarSideRow
  },
  // export data
  data() {
    const {proxy} = getCurrentInstance();
    const isToggled = ref(false);
    const menuPart1 = [];
    const menuDataManage = [];
    const menuDebugLink = [];
    const getMenusByType = async (type) => {
      if (type === "admin") {
        this.menuPart1 = [
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
        this.menuDataManage = [
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
        this.menuDebugLink = [
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
      } else if (type === "teacher") {
        this.menuPart1 = [
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
        this.menuDataManage = [
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
                            name: '班级管理',
                            link: '/manage/information/class',
                        },
                        {
                            name: '教师管理',
                            link: '/manage/information/teacher',
                        }
                    ]
                },
                {
                    name: '个人信息',
                    icon: 'fa-info-circle',
                    link: '/manage/profile'
                }

            ]
      } else if (type === "student") {
        this.menuPart1 = [
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
      }
    };
    onMounted(()=> {
      // getMenusByType("teacher");

      const res =  localStorage.getItem("menus")
      // console.log("menusRes",res)
      const menus = JSON.parse(res)
      // console.log("menus obj",menus)
      this.menuPart1 = menus.menuPart1
      this.menuDataManage = menus.menuDataManage
          //q: 为什么这里的res是字符串，而不是对象？
          //a: 因为localStorage只能存储字符串，所以需要JSON.parse()转换一下

        }
    );
    return {
      // data
      userName: "Admin",
      menuPart1,
      menuDataManage ,
      menuDebugLink,
      isToggled,
      // changeToggle,
      // judgeToggle
    };
  },
  methods:{
    changeToggle() {
      // console.log("toggle", this.isToggled)
      this.isToggled = !this.isToggled;
    }
  }

}
</script>

<style scoped>

</style>