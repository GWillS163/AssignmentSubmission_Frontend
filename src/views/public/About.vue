<template>
  <Header/>
  <div>
    <h1>About Page</h1>
    <p>
      本项目是一个基于Vue3 + SpringBoot + MySQL的在线作业提交系统，主要功能包括：
      ...


    </p>
    <h1>相关项目</h1>
    <p>
      Python 版本...
      需要教师修改后构建为包，用户下载后即可使用。

    </p>
  </div>
  <publicFooter/>
</template>

<script>
import Header from "../../components/public/PublicHeader.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
export default {
  name: "about",
  components: {
    Header,
    PublicFooter
  },
}
</script>

<style scoped>

</style>