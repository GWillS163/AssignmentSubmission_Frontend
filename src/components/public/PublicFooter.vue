<template>
  <div class="container" style="width:100%;display: inline;position: sticky;">
      <div class="text-white bg-dark border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-lg-5" style="width:100%;margin: 80px -50px 0 0;padding-left: 0px;margin-left: -1px;margin-right: -34px;display: inline-block;position: static;overflow: visible;margin-top: -2px;">
          <div class="text-center text-lg-start py-3 py-lg-1">
              <h2 class="fw-bold mb-2">留下您的邮箱以及时收到通知！</h2>
              <p class="mb-0">邮件将会在您的作业状态有更改时发送。</p>
          </div>
          <form class="d-flex justify-content-center flex-wrap my-2" method="post">
              <div class="my-2">
                <input class="form-control" type="email" name="email" placeholder="请输入您的邮箱"
                        v-model="subscribeMail"
                      >
              </div>

              <div class="my-2">
                <button class="btn btn-primary ms-sm-2" type="submit" @click="handleSubscribe">请通知我</button>
              </div>
          </form>
      </div>
  </div>
  <div class="container text-center text-muted py-4 py-lg-5">

        <ul class="list-inline">
            <li class="list-inline-item me-4">
                <a class="link-secondary" href="https://jq.qq.com/?_wv=1027&k=o0miuR6d" target="_blank" >
                  <img src="https://img.shields.io/badge/QQ-Group-ff69b4.svg?style=flat-square&logo=tencent-qq&logoColor=white" alt="QQ Group">
                </a>
                <a class="link-secondary" href="#"><i class="bi bi-wechat"></i></a>
            </li>

<!--              add the github icon with link-->
            <li class="list-inline-item me-4">
                <a class="link-secondary" href="#"><i class="bi bi-github"></i></a>
            </li>
        </ul>
        <p class="mb-0">Copyright © 2023 AssignmentSubmission KissesJun</p>
    </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "publicFooter",
  // define ref element
  data() {
    // let subScribeMail = ref('222')
    // subScribeMail = '22'
    return {
      subscribeMail: ref('11')
    }
  },
  methods: {
    handleSubscribe() {
      console.log("subscribe Mail: " + this.subscribeMail);
      this.subscribeMail = ""
    },
  }
}
</script>

<style scoped>

</style>