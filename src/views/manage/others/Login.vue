<template>

  <b-container fluid  style="background-color: #e0eff4; height: 53.8em; margin: -100px 0 -0px 0;
        padding-top: 100px; border:0; ">
    <b-row class="align-items-center">
      <b-col lg="4" md="0"></b-col>
      <b-col lg="4" md="12">
        <b-card
          title="登录"
          class="my-3 mx-3 shadow"
          bg-variant="light"
          border-variant="primary"
          text-variant="dark"
        >
          <b-form @submit.prevent="login">
            <b-form-group
              id="input-group-1"
              label="用户名："
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                type="text"
                v-model="loginForm.username"
                required
                placeholder="请输入用户名"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="密码："
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="loginForm.password"
                required
                placeholder="请输入密码"
              ></b-form-input>
            </b-form-group>

          </b-form>
          <b-row ><b-col >
            <b-button-group style="width: 100%;"  >

            <b-button type="submit" variant="primary" @click="studentLogin">学生登录</b-button>
            <b-button type="submit" variant="outline-secondary" @click="teacherLogin">教师登录</b-button>
            <b-button type="submit" variant="outline-info" @click="adminLogin">管理登录</b-button>
            </b-button-group>
          </b-col></b-row>

        </b-card>
      </b-col>
      <b-col lg="4" md="0"></b-col>
    </b-row>
  </b-container>


</template>

<script>


import {getCurrentInstance, ref} from "vue";

export default {
  name: "Login",
  data() {

    const loginForm = ref({
      username: "admin",
      password: "admin"
    })
    const proxy = getCurrentInstance().proxy;
    // const store = useStore();
    // q: 这里怎么使用全局的store
    // const store = useStore();
    // q: 这样是全局的吗？
    const varifyStudent = async () => {
      console.log("front-end", loginForm.value)
      // 发送请求，验证用户名和密码
      return true
    }

    const login = async () => {
          console.log("front-end", loginForm.value)
          localStorage.setItem("username", loginForm.value.username)
          localStorage.setItem("password", loginForm.value.password)
          alert("测试存储后，username" + localStorage.getItem("username"))
          console.log("测试存储后，username", localStorage.getItem("username"))
          console.log("测试存储后，password", localStorage.getItem("password"))
          const res = await proxy.$api.getMenu(loginForm.value);
          console.log("res", res)
          this.$store.commit("setMenu", res.menu)
          console.log("menu", this.$store.getters.menu)
          this.$store.commit("setMenu", res.menu)
          // store.commit("addMenu", router)
          this.$store.commit("setToken", res.token)
          // await this.$router.push("/manage/dashboard")
        },
        anotherLogin = async () => {
          console.log("front-end", loginForm.value)
          const adminData = {
            username: "admin",
            password: "admin",
            token: 'your_token',
            menu: [
              {name: 'dashboard', path: '/manage/dashboard', icon: 'el-icon-s-home'},
            ]
          }
          const teacherData = {
            username: "teacher",
            password: "teacher",
            token: "teacher_token",
            menu: [
              {name: 'dashboard', path: '/manage/dashboard', icon: 'el-icon-s-home'},
              {name: 'course', path: '/manage/course', icon: 'el-icon-s-home'},
            ]
          }
          const studentData = {
            username: "student",
            password: "student",
            token: "student_token",
            menu: [
              {name: 'dashboard', path: '/manage/dashboard', icon: 'el-icon-s-home'},
              {name: 'course', path: '/manage/course', icon: 'el-icon-s-home'},
            ]
          }
          localStorage.setItem("adminData", JSON.stringify(adminData))
          localStorage.setItem("teacherData", JSON.stringify(teacherData))
          localStorage.setItem("studentData", JSON.stringify(studentData))
        }
    return {
      loginForm,
      login,
      varifyStudent,
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    token() {
      return this.$store.state.token
    }
  },
  methods: {
    studentLogin() {
      const res = this.varifyStudent();
      this.setLocalStorage("student", "sss", "student")
      if (res) {
        this.$router.push('/manage/dashboard')
      } else {
        alert("failed")
      }
    },
    teacherLogin() {
      this.setLocalStorage("teacher", "sss", "teacher")
      this.$router.push('/manage/dashboard')
      this.$store.setUser({
        userName: "teacher1",
      })
    },
    adminLogin() {
      this.setLocalStorage("admin", "sss", "admin")
      this.$router.push('/manage/dashboard')
    },
    setLocalStorage(username, password, role ) {
      let menus = [];
      if (role === "admin" ) {
        menus = {
          menuPart1: [
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

            ],
          menuDataManage: [
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
                }

            ]
        }
      } else if (role === "teacher") {
        menus = {
          menuPart1: [
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

            ],
          menuDataManage: [
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
                    ]
                },
                {
                    name: '个人信息',
                    icon: 'fa-info-circle',
                    link: '/manage/profile'
                }

            ]
        }
      } else if (role === "student") {
        console.log("student login ")
        menus = {
          menuPart1: [
                {
                    name: '通知中心',
                    link: '/manage/notice',
                    icon: 'fa-bell'
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

            ],
          menuDataManage: []
        }
      } else {
        alert("role error")
      }
      const userInfo = {
        username: username,
        password: password,
        role: role,
        menus: menus,
        mail: "19852331@czjtu.edu.cn",
        stuId: "19852331",
        clazz: "软件工程1909班",
        phone: "18888888888"
      }
      localStorage.setItem("username", username)
      localStorage.setItem("password", password)
      localStorage.setItem("userInfo", JSON.stringify(userInfo))
      localStorage.setItem("role", role)
      localStorage.setItem("menus", JSON.stringify(menus))

    },

    handleLogin() {
      this.store.dispatch('login')

      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        // 发送登录请求，获取 token
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (this.username === userInfo.username && this.password === userInfo.password) {
          const token = 'your_token';
          // 认为登录成功
          // 登录成功，跳转到首页
          this.$router.push('/manage/dashboard')
        } else {
          // 认为登录失败
          console.log("failed")
          this.$router.push('/login')

        }
      }).catch((error) => {
        // 处理登录失败的情况
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>