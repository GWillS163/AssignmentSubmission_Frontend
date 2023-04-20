<template>
  <nav class="navbar navbar-light navbar-expand-md shadow-sm" style="margin-bottom: -14px;">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
<!--      insert a icon-->
<!--      <b-icon icon="paperclip" class="me-2"></b-icon>-->
      <span
          style="font-family: 'Alfa Slab One', serif;font-style: italic;font-size: 27px;color: var(--bs-table-striped-color);text-shadow: 3px 3px 1px var(--bs-gray-400);">
        <router-link to="/public">
          <strong>
          <span style="color: rgb(55, 141, 252);">Assignment Submission&nbsp;</span>
          </strong></router-link>
      </span>
    </a>
      <button class="navbar-toggler" data-bs-target="#navcol-2" data-bs-toggle="collapse"><span class="visually-hidden">Toggle navigation</span><span
          class="navbar-toggler-icon"></span></button>
      <div id="navcol-2" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link active" to="/about">项目介绍</router-link></li>
<!--          <li class="nav-item"><router-link class="nav-link" to="#">历史版本</router-link></li>-->
<!--          <li class="nav-item"><router-link class="nav-link" to="#">关于</router-link></li>-->
<!--          <li class="nav-item"><router-link class="nav-link" to="#"></router-link></li>-->
        </ul>
<!--        <span class="navbar-text" style="margin-left: 11px;"><a href="/#/admin">管理入口（临时）</a></span>-->
        <a class="btn btn-primary ms-md-2" href="/login" role="button">登录</a>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "PublicHeader"
}
</script>

<style scoped>

</style>