import { createStore } from 'vuex';
import Cookie from 'js-cookie'

const store = createStore({
  state: {
      userInfo: {name:"test"},
      token: "", //localStorage.getItem('token'),
        state: {
          menus: [
            {name: "Home", url: "Home", icon: "fa fa-home"},
        ]
    },
  },
  mutations: {
    setUser(user) {
      this.state.userInfo = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    cleanMenu() {
      // state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('menu');
    },
      getUserInfo() {
            this.state.userInfo = {name:"test"}
            return {name:"test"}
      },

    setMenu(state, payload) {
        state.menu = payload
        localStorage.setItem('menu', JSON.stringify(payload))
    },
    // 每次刷新页面，从本地获取menu
    addMenu(state, router) {
        if (!localStorage.getItem("menu")) {
            return
        }
        let menu = JSON.parse(localStorage.getItem("menu"))
        state.menu = menu

        const menuArray = []

        menu.forEach(item => {

            if (item.children) {
                item.children = item.children.map(item => {
                    item.component = () => import(`../views/${item.url}.vue`)
                    // use require to import
                    // item.component = (resolve) => require([url], resolve)
                    return item
                })
                menuArray.push(...item.children)
            } else {
                item.component = () => import(`../views/${item.url}.vue`)
                    // use require to import
                    // item.component = (resolve) => require([url], resolve)
                menuArray.push(item)
            }
        })

        menuArray.forEach(item => {
            router.addRoute('home1', item)
        })
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
  //   q: 这里怎么取出menu?
    //   a: 通过state.menu
  //     写一个函数取出menu
      menu() {
            return this.state.menu
          // q: 这里的state是什么？
            // a: state是store中的state
      },
      userInfo() {
            return this.state.userInfo
      },

  },
  actions: {
    async login({ commit }, credentials) {
      console.log("login", credentials);
      // 存储用户信息
      localStorage.setItem('userInfo', credentials );
      // 发送登录请求，获取 token
      // const token = await api.login(credentials);
      // 将 token 存储到 Vuex state 和 localStorage 中
      commit('setToken', credentials);
      // commit('setToken', token);

    },
    logout({ commit }) {
      // 清除 Vuex state 和 localStorage 中的 token
      console.log("logout")
      commit('removeToken');
    }
  }
  // q: 把信息存进了store， 那么怎么取出来呢？
    // a: 通过getters
});

export default store;