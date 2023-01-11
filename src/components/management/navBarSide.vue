<template>
  <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
    <div class="container-fluid d-flex flex-column p-0"><a
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="/public">
      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
      <div class="sidebar-brand-text mx-3"><span>{{ userName }}</span></div>
    </a>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <li class="nav-item">
          <a class="nav-link" href="/#/manage/dashboard"><i class="fas fa-tachometer-alt"></i>
            <span>&nbsp;Dashboard</span></a>
          <a class="nav-link" href="/#/manage/notice"><i
              class="far fa-comment-dots"></i><span>通知中心</span></a>
        </li>

        <li class="nav-item"><a class="nav-link" href="/#/manage/history">
          <i class="fas fa-table"></i><span>&nbsp;提交历史</span></a>
        </li>

        <li class="nav-item">
          <div><a aria-controls="collapse-4" aria-expanded="true" class="btn btn-link nav-link"
                  data-bs-toggle="collapse" href="#collapse-4" role="button">&nbsp;<i
              class="fas fa-chart-area"></i><span>教师中心</span></a>
            <div id="collapse-4" class="collapse show">
              <div class="bg-white border rounded py-2 collapse-inner">
                <a class="collapse-item" href="/#/manage/teacher/center">收集总览</a>
                <a class="collapse-item" href="/#/manage/teacher/assignView">作业视图</a>
                <a class="collapse-item" href="/#/manage/teacher/classView">班级视图</a>
              </div>
            </div>
          </div>
          <div><a aria-controls="collapse-5" aria-expanded="true" class="btn btn-link nav-link"
                  data-bs-toggle="collapse" href="#collapse-5" role="button">&nbsp;<i
              class="fas fa-chart-area"></i><span>学生中心</span></a>
            <div id="collapse-5" class="collapse show">
              <div class="bg-white border rounded py-2 collapse-inner">
                <a class="collapse-item" href="/#/manage/student/assigns">可交作业</a>
                <a class="collapse-item" href="/#/manage/student/files">已交管理</a>
              </div>
            </div>
          </div>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          <p class="mb-0">数据管理</p>
        </div>
        <li class="nav-item">
          <div>
            <a aria-controls="collapse-1" aria-expanded="true" class="btn btn-link nav-link"
                  data-bs-toggle="collapse" href="#collapse-1" role="button"><i
              class="fas fa-cog"></i>&nbsp;<span>作业管理</span></a>
            <div id="collapse-1" class="collapse show">
              <div class="bg-white border rounded py-2 collapse-inner">
                <h6 class="collapse-header">精细化管理:</h6>
                <a class="collapse-item" href="/#/manage/assignment/assign">作业管理</a><a
                  class="collapse-item" href="/#/manage/assignment/file">文件管理</a>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div><a aria-controls="collapse-2" aria-expanded="false" class="btn btn-link nav-link"
                  data-bs-toggle="collapse" href="#collapse-2" role="button"><i class="fas fa-wrench"></i>&nbsp;<span>信息管理</span></a>
            <div id="collapse-2" class="collapse show">
              <div class="bg-white border rounded py-2 collapse-inner">
                <a class="collapse-item" href="/#/manage/information/student">学生管理</a>
                <a class="collapse-item" href="/#/manage/information/teacher">教师管理</a>
                <a class="collapse-item" href="/#/manage/information/class">班级管理</a>
              </div>
            </div>
          </div>
          <a class="nav-link" href="/#/manage/profile"><i class="fas fa-info-circle"></i>
            <span>个人信息</span></a>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          <p class="mb-0">Addons</p>
        </div>
        <li class="nav-item">
          <div><a aria-controls="collapse-3" aria-expanded="false" class="btn btn-link nav-link"
                  data-bs-toggle="collapse" href="#collapse-3" role="button"><i class="fas fa-folder"></i>&nbsp;<span>测试页面</span></a>
            <div id="collapse-3" class="collapse show">
              <div class="bg-white border rounded py-2 collapse-inner">
                <a class="collapse-item" href="/#/forgotPassword">Forgot Password</a>
                <a class="collapse-item" href="/#/login">login Page</a>
                <a class="collapse-item" href="/#/register">Register Page</a>
                <h6 class="collapse-header">OTHER PAGES:</h6>
                <a class="collapse-item" href="/#/404">404 Page</a><a
                    class="collapse-item" href="/#/blank">Blank Page</a>
              </div>
            </div>
          </div>
          <div id="collapsePages" aria-controls="collapsePages" aria-labelledby="headingTwo" class="collapse"
               data-bs-parent="#accordionSidebar">
            <div class="bg-white border rounded py-2 collapse-inner">
              <h6 class="collapse-header">LOGIN SCREENS:</h6><a class="collapse-item" href="#">Login</a><a
                class="collapse-item" href="#">Register</a><a class="collapse-item" href="#">Forgot Password</a>
              <h6 class="collapse-header">OTHER PAGES:</h6><a class="collapse-item" href="#">404 Page</a><a
                class="collapse-item" href="#">Blank Page</a>
            </div>
          </div>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item"></li>
        <li class="nav-item"></li>
        <hr class="sidebar-divider">
      </ul>

      <div class="text-center d-none d-md-inline">
        <button id="sidebarToggle" class="btn rounded-circle border-0" type="button"></button>
      </div>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <li class="nav-item"></li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "navBar",
  // export data
  data() {
    return {
      // data
      userName: "Admin",
    };
  },

}
</script>

<style scoped>

</style>