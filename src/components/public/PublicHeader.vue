<template>
  <nav class="navbar navbar-light navbar-expand-md shadow-sm" style="margin-bottom: -14px;">
    <div class="container"><a class="navbar-brand d-flex align-items-center" href="#">
      <span
          class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg
          xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
          class="bi bi-file-earmark-arrow-up-fill">
                      <path
                          d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707L6.354 9.854z"></path>
                  </svg>
    </span>
      <span
          style="font-family: 'Alfa Slab One', serif;font-style: italic;font-size: 27px;color: var(--bs-table-striped-color);text-shadow: 3px 3px 1px var(--bs-gray-400);"><a
          href="../../../index.html"><strong><span
          style="color: rgb(55, 141, 252);">Assignment Submission&nbsp;</span></strong></a></span></a>
      <button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-2"><span class="visually-hidden">Toggle navigation</span><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navcol-2">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="/about">项目介绍</a></li>
          <li class="nav-item"><a class="nav-link active" href="#">历史版本</a></li>
          <li class="nav-item" href="about.html"><a class="nav-link active" href="#">关于</a></li>
          <li class="nav-item"><a class="nav-link" href="#"><br></a></li>
        </ul>
        <span class="navbar-text" style="margin-left: 11px;"><a href="/#/admin">管理员</a></span>
        <a class="btn btn-primary ms-md-2" role="button" href="/login">登录</a>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>