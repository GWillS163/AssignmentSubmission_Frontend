<template>
  <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
    <div class="container-fluid">
<!--      TODO: 升级功能：全局搜索-->
<!--      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle me-3" type="button"><i-->
<!--          class="fas fa-bars"></i></button>-->
<!--      <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">-->
<!--        <div class="input-group"><input class="bg-light form-control border-0 small" placeholder="搜索组件"-->
<!--                                        type="text">-->
<!--          <button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button>-->
<!--        </div>-->
<!--      </form>-->
      <ul class="navbar-nav flex-nowrap ms-auto">
        <li class="nav-item dropdown d-sm-none no-arrow">
          <a aria-expanded="false" class="dropdown-toggle nav-link"
                                                            data-bs-toggle="dropdown" href="#"><i
            class="fas fa-search"></i>
          </a>
          <div aria-labelledby="searchDropdown" class="dropdown-menu dropdown-menu-end p-3 animated--grow-in">
            <form class="me-auto navbar-search w-100">
              <div class="input-group"><input class="bg-light form-control border-0 small" placeholder="Search for ..."
                                              type="text">
                <div class="input-group-append">
                  <button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <div class="nav-item dropdown no-arrow">
            <a aria-expanded="false" class="dropdown-toggle nav-link"
                                                     data-bs-toggle="dropdown" href="#">
            <span v-if="assignStatuses.length"
              class="badge bg-danger badge-counter">{{ assignStatuses.length }}</span>
              <i class="fas fa-bell fa-fw"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
              <h6 class="dropdown-header">收集提醒</h6>
              <a v-if="assignStatuses.length"  v-for="assignStatus in assignStatuses" class="dropdown-item d-flex align-items-center" href="#">
                <div class="me-3">
                  <div class=" icon-circle" :class="assignStatus.bgClass">
                    <i :class=assignStatus.iconClass></i>
                  </div>
                </div>
                <div><span class="small text-gray-500">{{ assignStatus.date }}</span>
                  <p>{{ assignStatus.title }}</p>
                </div>
              </a>
              <a v-else  class="dropdown-item d-flex align-items-center">
                <div class="me-3">
                  <div class="bg-success icon-circle" >
                    <i class="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div><span class="small text-gray-500"> 111 </span>
                  <p> 暂无通知 </p>
                </div>
              </a>

              <a class="dropdown-item text-center small text-gray-500" href="/manage/student/assigns">查看所有作业</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <div class="nav-item dropdown no-arrow">
            <a aria-expanded="false" class="dropdown-toggle nav-link"
                data-bs-toggle="dropdown" href="#">
              <span v-if="notices.length" class="badge bg-danger badge-counter">{{ notices.length }}</span>
              <i  class="fas fa-envelope fa-fw"></i>
            </a>

            <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
              <h6 class="dropdown-header">通知中心</h6>
              <div v-for="notice in notices">
                <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="dropdown-list-image me-3" >
                    <img alt="" class="rounded-circle" :src="notice.avatar">
                    <div class="bg-success status-indicator"></div>
                  </div>
                  <div class="fw-bold">
                    <div class="text-truncate"><span>{{notice.title}}</span></div>
                    <p class="small text-gray-500 mb-0">{{ notice.content }} - {{ notice.time }}</p>
                  </div>
                </a>
              </div>
              <a class="dropdown-item text-center small text-gray-500" href="/manage/notice">查看所有通知</a>

            </div>
          </div>
          <div aria-labelledby="alertsDropdown" class="shadow dropdown-list dropdown-menu dropdown-menu-end"></div>
        </li>
        <div class="d-none d-sm-block topbar-divider"></div>
        <li class="nav-item dropdown no-arrow">
          <div class="nav-item dropdown no-arrow"><a aria-expanded="false" class="dropdown-toggle nav-link"
                                                     data-bs-toggle="dropdown" href="#"><span
              class="d-none d-lg-inline me-2 text-gray-600 small">JunQingQing</span>
            <img  class="border rounded-circle img-profile" src="../../../../public/favicon.ico" alt=""></a>
            <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
              <a v-for="line in userDrops" class="dropdown-item" :href="line.href">
                <i :class="line.iconClass"></i>
                {{ line.title }}
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                登出</a>
            </div>
          </div>

        </li>
        <li>
          <b-button @click="logout">登出</b-button>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "navBarHeader",
  data() {
    const { proxy } = getCurrentInstance();
    const userDrops = [];
    const notices = [];
    const router = useRouter();
    const assignStatuses = [];
    const getUserDrops = async () => {
      this.userDrops = await proxy.$api.getUserNavBarDrops();
    };
    const getNotices = async () => {
      this.notices = await proxy.$api.getNavBarNotices();
    };
    const getAssignStatuses = async () => {
      this.assignStatuses = await proxy.$api.getAssignStatuses();
    };
    const logout = () => {
      router.push({path: '/login'})

    }
    onMounted(() => {
      getUserDrops();
      getNotices();
      getAssignStatuses();
    });
    return {
      userDrops,
      notices,
      assignStatuses,
      logout,
    }
  }
}
</script>

<style scoped>

</style>