<template>
  <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="https://junqquser.bss.design/">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Admin</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><a class="nav-link" href="../index.html"><i class="fas fa-tachometer-alt"></i><span>&nbsp;Dashboard</span></a><a class="nav-link" href="../../views/manage/others/notice.html"><i class="far fa-comment-dots"></i><span>通知</span></a></li>
                    <li class="nav-item"><a class="nav-link" href="../submitRecord.html"><i class="fas fa-table"></i><span>&nbsp;提交历史</span></a></li>
                    <li class="nav-item">
                        <div><a class="btn btn-link nav-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-4" href="#collapse-4" role="button">&nbsp;<i class="fas fa-chart-area"></i><span>教师中心</span></a>
                            <div class="collapse show" id="collapse-4">
                                <div class="bg-white border rounded py-2 collapse-inner"><a class="collapse-item" href="teacher_center.html">收集总览</a><a class="collapse-item" href="teacher_assignView.html">作业视图</a><a class="collapse-item" href="teacher_classView.html">班级视图</a></div>
                            </div>
                        </div>
                        <div><a class="btn btn-link nav-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-5" href="#collapse-5" role="button">&nbsp;<i class="fas fa-chart-area"></i><span>学生中心</span></a>
                            <div class="collapse show" id="collapse-5">
                                <div class="bg-white border rounded py-2 collapse-inner"><a class="collapse-item" href="student_assigns.html">可交作业</a><a class="collapse-item" href="student_files.html">已交管理</a></div>
                            </div>
                        </div>
                    </li>
                    <hr class="sidebar-divider">
                    <div class="sidebar-heading">
                        <p class="mb-0">数据管理</p>
                    </div>
                    <li class="nav-item">
                        <div><a class="btn btn-link nav-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-1" href="#collapse-1" role="button"><i class="fas fa-cog"></i>&nbsp;<span>作业管理</span></a>
                            <div class="collapse show" id="collapse-1">
                                <div class="bg-white border rounded py-2 collapse-inner">
                                    <h6 class="collapse-header">CUSTOM COMPONENTS:</h6><a class="collapse-item" href="assignMG_assigns.html">作业管理</a><a class="collapse-item" href="assignMG_files.html">文件管理</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div><a class="btn btn-link nav-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-2" href="#collapse-2" role="button"><i class="fas fa-wrench"></i>&nbsp;<span>信息管理</span></a>
                            <div class="collapse show" id="collapse-2">
                                <div class="bg-white border rounded py-2 collapse-inner"><a class="collapse-item" href="infoMG_student.html">学生管理</a><a class="collapse-item" href="infoMG_teacher.html">教师管理</a><a class="collapse-item" href="infoMG_class.html">班级管理</a></div>
                            </div>
                        </div><a class="nav-link" href="../profile.html"><i class="fas fa-info-circle"></i><span>个人信息</span></a>
                    </li>
                    <hr class="sidebar-divider">
                    <div class="sidebar-heading">
                        <p class="mb-0">Addons</p>
                    </div>
                    <li class="nav-item">
                        <div><a class="btn btn-link nav-link" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-3" href="#collapse-3" role="button"><i class="fas fa-folder"></i>&nbsp;<span>测试页面</span></a>
                            <div class="collapse show" id="collapse-3">
                                <div class="bg-white border rounded py-2 collapse-inner"><a class="collapse-item" href="forgot-password.html">Forgot Password</a><a class="collapse-item" href="../../views/manage/others/login.html">login Page</a><a class="collapse-item" href="../../views/manage/others/register.html">Register Page</a>
                                    <h6 class="collapse-header">OTHER PAGES:</h6><a class="collapse-item" href="404.html">404 Page</a><a class="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </div>
                        <div id="collapsePages" class="collapse" aria-labelledby="headingTwo" aria-controls="collapsePages" data-bs-parent="#accordionSidebar">
                            <div class="bg-white border rounded py-2 collapse-inner">
                                <h6 class="collapse-header">LOGIN SCREENS:</h6><a class="collapse-item" href="#">Login</a><a class="collapse-item" href="#">Register</a><a class="collapse-item" href="#">Forgot Password</a>
                                <h6 class="collapse-header">OTHER PAGES:</h6><a class="collapse-item" href="#">404 Page</a><a class="collapse-item" href="#">Blank Page</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <li class="nav-item"></li>
                    <hr class="sidebar-divider">
                </ul>
                <div class="text-center d-none d-md-inline"><button class="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"></li>
                </ul>
            </div>
        </nav>

</template>

<script>
export default {
  name: "navBar"
}
</script>

<style scoped>

</style>