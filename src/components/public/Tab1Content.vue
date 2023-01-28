<template>

  <div class="row mb-5" style="margin-bottom: -4px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>公共作业提交页面</h2>
      <p class="w-lg-50">在这里，不登录也可以进行作业提交，但每次需手动指定作业所属的身份信息。<br>⚠️注意此处提交后无法撤回！
      </p>
    </div>
  </div>
  <div v-if="assigns.length === 0" class="col">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">暂无作业</h4>
          <p class="card-text">暂无作业</p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div v-for="assign in assigns" class="col-lg-4">
      <!--      TODO：将 收集卡片不同颜色的样式拿过来-->
            <div class="card">
              <h5 class="card-header" style="color: var(--bs-gray-600);">{{ assign.status }}</h5>
              <div class="card-body">
                <h4 class="card-title">{{ assign.title }}<br></h4>
                <h6 class="text-muted card-subtitle mb-2">DDL: {{ assign.ddl }}</h6>
                <p class="card-text" style="margin-bottom: -28px;">小组组长按图示打包，交给负责人<br><br>文件不大于20MB。<br>
                </p><a class="btn btn-primary d-block w-100" href="#" role="button">点击上传</a>
              </div>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
import {ref} from "vue";
// import {props} from "portal-vue/src/components/__mocks__/portal-target";

export default {
  name: "tab-1",
  // receive data from parent component
  props: {
    assigns: Array,
  },
  setup() {
  },
  // define a data object
  data() {
    return {
      // define a message property
    };
  },
}
</script>

<style scoped>

</style>