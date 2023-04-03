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
      <assign-list-prompt :assigns="assigns"></assign-list-prompt>
    </div>
</template>

<script>
import {ref} from "vue";
import assignListPrompt from "@/components/others/AssignListPrompt.vue";
// import {props} from "portal-vue/src/components/__mocks__/portal-target";

export default {
  name: "tab-1",
  components: {assignListPrompt},
  // receive data from parent component
  props: {
    assigns: Array,
  },
  setup() {
    const handleUploadFile = () => {
      console.log("handleUploadFi e");
      // open file dialog
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'application/zip';
      input.onchange = e => {
        const file = e.target.files[0];
        console.log(file);
    };
      const uploadFile = (assignId) => {
        console.log("uploadFile");
        // open file dialog
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/zip';
        input.onchange = e => {
          const file = e.target.files[0];
          console.log(file);
        };
        input.click();
      };
    return {
      handleUploadFile: handleUploadFile,
      uploadFile
    }
  }
  }
}
</script>

<style scoped>

</style>