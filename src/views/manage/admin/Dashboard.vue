<template>
<div>
    <span v-if="isLogin">{{ token }}</span>
    <button v-if="isLogin" @click="handleLogout">退出</button>
    <button v-else @click="$router.push('/login')">登录</button>

  </div>

  <div class="d-sm-flex justify-content-between align-items-center mb-4">
    <h3 class="text-dark mb-0">Dashboard</h3>
      <b-button variant="primary" size="sm" @click="downloadSubmittedData">
        <i class="fas fa-download fa-sm text-white-50"></i>下载提交数据
      </b-button>
  </div>
  <b-row>
    <b-col md="6" xl="3" mb="4" v-for="titleCard in titleCards">
      <div class="card shadow border-start-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
<!--              在库作业-->
              <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span>{{ titleCard.name }}</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>{{ titleCard.value }}</span></div>
            </div>
            <div class="col-auto">
              <i class="fas fa-2x text-gray-300"
              :class="titleCard.icon"></i>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
  <b-row style="margin-top:3%">
    <b-col lg="6" mb="4" >
      <b-card shadow no-body>
        <b-card-header>
          <h6 class="text-primary fw-bold m-0">作业提交进度</h6>
        </b-card-header>
          <b-list-group>
            <b-list-group-item v-for="assign in assignProgress" :key="assign.id">
              <h4 class="small fw-bold"> {{ assign.briefName }}
                <span class="float-end"> {{ assign.collected }}/{{assign.total}}</span>
              </h4>
              <b-progress :value=" (assign.collected / assign.total) * 100"
                          variant="primary"
                          height="1rem"></b-progress>
            </b-list-group-item>
          </b-list-group>
      </b-card>
    </b-col>
    <b-col lg="6" mb="4" >

      <b-card shadow no-body>
        <b-card-header>
          <h6 class="text-primary fw-bold m-0">DDL剩余日期</h6>
        </b-card-header>
          <b-list-group>
            <b-list-group-item v-for="assign in assignProgress" :key="assign.id">
              <h4 class="small fw-bold"> {{ assign.briefName }}
                <span class="float-end"> {{ getDDLLastDay(assign.ddlDate)}}</span>
              </h4>
              <b-progress >

                <b-progress-bar :value="getDDLProgress(assign.releaseDate, assign.ddlDate)"
                            variant="primary" :label="getDDLProgress(assign.releaseDate, assign.ddlDate) + '%'"
                            height="1rem">
                </b-progress-bar>
              </b-progress>

            </b-list-group-item>
          </b-list-group>
      </b-card>
    </b-col>
  </b-row>
  <div class="row">
    <div class="col-lg-7 col-xl-8">
      <div class="card shadow mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary fw-bold m-0">作业提交时刻图</h6>
          <div class="dropdown no-arrow">
            <button class="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown"
                    type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
            <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
              <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item"
                                                                            href="#">&nbsp;Action</a><a
                class="dropdown-item" href="#">&nbsp;Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">&nbsp;Something else here</a>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="chart-area">

          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-xl-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">Todo List</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">10:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label
                    class="form-check-label" for="formCheck-4"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">11:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"><label
                    class="form-check-label" for="formCheck-5"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">12:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"><label
                    class="form-check-label" for="formCheck-6"></label></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarSide from "@/components/management/navBar/navBarSide.vue";
import NavBarTop from "@/components/management/navBar/navBarTop.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import {defineComponent} from "vue";
import handleAssignCard from "@/assets/customed/handleAssignCard";
import {useStore} from "vuex";


export default defineComponent({
  name: "dashboard",
  components: {
    NavBarSide,
    NavBarTop
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
    token() {
      const token = this.$store.state.token
      console.log("token", token)
      return token
    }
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout').then(() => {
        // 退出登录成功，跳转到登录页面
        this.$router.push('/login')
      })
    },
    getDDLProgress(start, ddl) {
      return handleAssignCard.getDDLProgress(start, ddl);
    },
    getDDLLastDay(ddl) {
      return handleAssignCard.getRemainedTime(ddl);
    },

  },
  data() {
    const { proxy } = getCurrentInstance();
    const titleCards = ref([]);
    const assignProgress = ref([]);

    const downloadSubmittedData = async () => {
      console.log("downloadSubmittedData");
    };

    const getCardsData = async () => {
      const res = await proxy.$api.getCardsData();
      console.log("getCardsData", res.data);
      this.titleCards = res.data;
    };
    // get assigns data
    const getAssignsData = async () => {
      const res = await proxy.$api.getAssignsData();
      console.log("getAssignsData", res.data);
      this.assignProgress = res.data;
    };


    onMounted(() => {
      getCardsData();
      getAssignsData();

      // q: 这里为什么取不出 menu
      // a: 因为这里的 store 是一个新的 store，不是全局的 store
      //    解决方法：在 main.js 中，将 store 挂载到全局
      // console.log("menu",this.$store.getters.menu(this))


    });
    return {
      titleCards,
      assignProgress,
      downloadSubmittedData
    };
  },
});
</script>

<style scoped>
/* import link */
/*@import url("/src/assets/dashboard/dashboard.css");*/
/*@import url("/src/assets/bootstrap_raw/css/bootstrap.min.css");*/
/*@import url("https://getbootstrap.com/docs/5.3/examples/dashboard/");*/
</style>