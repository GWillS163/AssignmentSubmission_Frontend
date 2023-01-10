<template>

    <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0"><a class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="https://junqquser.bss.design/">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>Admin</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item"><a class="nav-link" href="../index.html"><i class="fas fa-tachometer-alt"></i><span>&nbsp;Dashboard</span></a><a class="nav-link" href="../others/notice.html"><i class="far fa-comment-dots"></i><span>通知</span></a></li>
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
                                <div class="bg-white border rounded py-2 collapse-inner"><a class="collapse-item" href="forgot-password.html">Forgot Password</a><a class="collapse-item" href="../others/login.html">login Page</a><a class="collapse-item" href="../others/register.html">Register Page</a>
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
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid"><button class="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i class="fas fa-bars"></i></button>
                        <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ..."><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                        </form>
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown d-sm-none no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i class="fas fa-search"></i></a>
                                <div class="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form class="me-auto navbar-search w-100">
                                        <div class="input-group"><input class="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                            <div class="input-group-append"><button class="btn btn-primary py-0" type="button"><i class="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">3+</span><i class="fas fa-bell fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">alerts center</h6><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-primary icon-circle"><i class="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-success icon-circle"><i class="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="me-3">
                                                <div class="bg-warning icon-circle"><i class="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span class="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a class="dropdown-item text-center small text-gray-500" href="#">查看所有告警</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown no-arrow mx-1">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="badge bg-danger badge-counter">7</span><i class="fas fa-envelope fa-fw"></i></a>
                                    <div class="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                        <h6 class="dropdown-header">通知中心</h6><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../../../backendAssets/img/avatars/avatar5.jpeg">
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>作业已被下载</span></div>
                                                <p class="small text-gray-500 mb-0">自动通知 - 58m</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../../../backendAssets/img/avatars/avatar5.jpeg">
                                                <div class="status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>您有新的 新作业可提交</span></div>
                                                <p class="small text-gray-500 mb-0">自动通知 - 1d</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../../../backendAssets/img/avatars/avatar3.jpeg">
                                                <div class="bg-warning status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span><strong>【未交提醒】过期不候</strong><br></span></div>
                                                <p class="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                            </div>
                                        </a><a class="dropdown-item d-flex align-items-center" href="#">
                                            <div class="dropdown-list-image me-3"><img class="rounded-circle" src="../../../backendAssets/img/avatars/avatar5.jpeg">
                                                <div class="bg-success status-indicator"></div>
                                            </div>
                                            <div class="fw-bold">
                                                <div class="text-truncate"><span>欢迎初次使用AssignmentSubmission</span></div>
                                                <p class="small text-gray-500 mb-0">自动通知 · 2w</p>
                                            </div>
                                        </a><a class="dropdown-item text-center small text-gray-500" href="#">查看所有通知</a>
                                    </div>
                                </div>
                                <div class="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <div class="d-none d-sm-block topbar-divider"></div>
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow"><a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span class="d-none d-lg-inline me-2 text-gray-600 small">JunQingQing</span><img class="border rounded-circle img-profile" src="../../../backendAssets/img/AssginImg.png"></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a class="dropdown-item" href="#"><i class="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a class="dropdown-item" href="#"><i class="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a class="dropdown-item" href="#"><i class="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <h3 class="text-dark mb-4">提交历史</h3>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 fw-bold">作业提交详情</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6 text-nowrap">
                                    <div id="dataTable_length" class="dataTables_length" aria-controls="dataTable"><label class="form-label">显示数量&nbsp;<select class="d-inline-block form-select form-select-sm">
                                                <option value="10" selected="">10</option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>&nbsp;</label></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-md-end dataTables_filter" id="dataTable_filter"><label class="form-label"><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="搜索"></label></div>
                                </div>
                            </div>
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table my-0" id="dataTable">
                                    <thead>
                                        <tr>
                                            <th>姓名</th>
                                            <th>作业</th>
                                            <th>文件大小</th>
                                            <th>提交时间</th>
                                            <th>班级</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>赵玉龙</td>
                                            <td>大数据2</td>
                                            <td>3.2MB</td>
                                            <td>2022-12-16 18:40:58</td>
                                            <td>1909</td>
                                        </tr>
                                        <tr>
                                            <td>马策</td>
                                            <td>大数据4</td>
                                            <td>390KB</td>
                                            <td>2022-12-16 18:41:01</td>
                                            <td>1910</td>
                                        </tr>
                                        <tr>
                                            <td>李国成</td>
                                            <td>Java习题抄写</td>
                                            <td>40MB</td>
                                            <td>2022-12-16 18:41:04</td>
                                            <td>1909</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar4.jpeg">Bradley Greer</td>
                                            <td>London</td>
                                            <td>Cell 3</td>
                                            <td>2022-12-16 18:41:10</td>
                                            <td>1909</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar5.jpeg">Brenden Wagner</td>
                                            <td>2022-12-16 18:41:13</td>
                                            <td>Cell 3</td>
                                            <td>San Francisco</td>
                                            <td>28</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar1.jpeg">Brielle Williamson</td>
                                            <td>Integration Specialist</td>
                                            <td>Cell 3</td>
                                            <td>New York</td>
                                            <td>61</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar2.jpeg">Bruno Nash<br></td>
                                            <td>Software Engineer</td>
                                            <td>Cell 3</td>
                                            <td>London</td>
                                            <td>38</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar3.jpeg">Caesar Vance</td>
                                            <td>Pre-Sales Support</td>
                                            <td>Cell 3</td>
                                            <td>New York</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar4.jpeg">Cara Stevens</td>
                                            <td>Sales Assistant</td>
                                            <td>Cell 3</td>
                                            <td>New York</td>
                                            <td>46</td>
                                        </tr>
                                        <tr>
                                            <td><img class="rounded-circle me-2" width="30" height="30" src="../../../backendAssets/img/avatars/avatar5.jpeg">Cedric Kelly</td>
                                            <td>Senior JavaScript Developer</td>
                                            <td>Cell 3</td>
                                            <td>Edinburgh</td>
                                            <td>22</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td><strong>姓名</strong></td>
                                            <td><strong>作业</strong></td>
                                            <td>文件大小</td>
                                            <td><strong>提交时间</strong></td>
                                            <td><strong>班级</strong></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-md-6 align-self-center">
                                    <p id="dataTable_info" class="dataTables_info" role="status" aria-live="polite">正在展示 1 - 10 条，共 27 页</p>
                                </div>
                                <div class="col-md-6">
                                    <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul class="pagination">
                                            <li class="page-item disabled"><a class="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>Copyright © Brand 2022</span></div>
                </div>
            </footer>
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a>
    </div>
</template>

<script>
export default {
  name: "History"
}
</script>

<style scoped>

</style>