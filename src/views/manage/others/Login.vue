<template>

  <!--<div>-->
  <!--    <span v-if="isLogin">{{ token }}</span>-->
  <!--    <button v-if="isLogin" @click="handleLogout">退出</button>-->
  <!--    <button v-else @click="$router.push('/login')">登录</button>-->
  <!--  </div>-->


  <b-container fluid  style="background-color: #e0eff4; height: 53.8em; margin: -100px 0 -0px 0;
        padding-top: 100px; border:0; ">
    <b-row >
      <b-col cols="3" >
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
      <b-col>

      </b-col>
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
      if (res) {
        this.$router.push('/manage/dashboard')
      } else {
        alert("failed")
      }
    },
    teacherLogin() {

    },
    adminLogin() {

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