<template>

  <div class="row mb-5" style="margin-bottom: -4px;">
      <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>公共作业提交页面</h2>
          <p class="w-lg-50">在这里，不登录也可以进行作业提交，但每次需手动指定作业所属的身份信息。<br>⚠️注意此处提交后无法撤回！</p>
      </div>
  </div>
  <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">

      <div class="col-lg-4" v-for="assign in assigns">
          <div class="card">
              <h5 class="card-header" style="color: var(--bs-gray-600);">{{ assign.status }}</h5>
              <div class="card-body">
                  <h4 class="card-title">{{ assign.title }}<br></h4>
                  <h6 class="text-muted card-subtitle mb-2">DDL: {{ assign.ddl }}</h6>
                  <p class="card-text" style="margin-bottom: -28px;">小组组长按图示打包，交给负责人<br><br>文件不大于20MB。<br></p><a class="btn btn-primary d-block w-100" role="button" href="#">点击上传</a>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "tab-1",
  // define a data object
  data() {
    return {
      // define a message property
      message: "Hello Vue.js!",
      assigns: [
        {
          title: "Java 第八次作业",
          status: "正在收集",
          ddl: "2022-7-17 20:00",
          content: "将 文字放到 冰箱里分为几步？ 填写相应文字作为答案提交，文件不大于20MB。",
          upload: "/upload/assignment/3289hd90",
        },
        {
          title: "Week4 大数据合作",
          status: "正在收集",
          ddl: "2022-7-17 20:00",
          content: "将 文字放到 冰箱里分为几步？ 填写相应文字作为答案提交，文件不大于20MB。",
          upload: ""
        },

        ]
    };
  },
}
</script>

<style scoped>

</style>