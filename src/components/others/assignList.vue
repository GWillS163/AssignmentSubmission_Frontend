<template>

<!--  &lt;!&ndash;    Pagination&ndash;&gt;-->
<!--  <b-row>-->
<!--    <b-col class="my-1" md="3" sm="5">-->
<!--      <b-form-group-->
<!--          class="mb-0"-->
<!--          label="Per page"-->
<!--          label-align-sm="left"-->
<!--          label-cols-lg="4"-->
<!--          label-cols-md="4"-->
<!--          label-cols-sm="6"-->
<!--          label-for="per-page-select"-->
<!--          label-size="sm"-->
<!--      >-->
<!--        <b-form-select-->
<!--            id="per-page-select"-->
<!--            v-model="perPage"-->
<!--            :options="pageOptions"-->
<!--            size="sm"-->
<!--        ></b-form-select>-->
<!--      </b-form-group>-->
<!--    </b-col>-->

<!--    <b-col class="my-1" md="8" sm="7">-->
<!--      <b-pagination-->
<!--          v-model="currentPage"-->
<!--          :per-page="perPage"-->
<!--          :total-rows="totalRows"-->
<!--          align="fill"-->
<!--          class="my-0"-->
<!--          first-text="⏮"-->
<!--          last-text="⏭"-->
<!--          next-text="⏩"-->
<!--          prev-text="⏪"-->
<!--          size="sm"-->
<!--      ></b-pagination>-->
<!--    </b-col>-->
<!--  </b-row>-->

  <b-alert  v-model="dismissibleAlert"
            @click="dismissibleAlert = false"
            :variant="response.style" dismissible>{{ response.message }}</b-alert>

  <b-card
      v-for="assign in addStyle"
      v-show="isShow(assign)"
      :border-variant="assign.style"
      :header="getTitle(assign.ddl, assign.uploadEnable)"
      :header-bg-variant="assign.style"
      header-text-variant="white"
      style="margin-bottom: 20px;"
  >
    <b-card-text align="left">
      <b-card-body class="pb-xxl-0">
        <b-row>
          <b-col>
            <h4> {{ assign.name }} </h4>
            <h6 v-show="assign.ddl"
                class="text-muted mb-2">
              DDL: {{ assign.ddl }} (剩余 {{ getRemainedTime(assign.ddl) }})
            </h6>
          </b-col>

          <b-col class="justify-content-end" style="display: flex">
            <b-row class="justify-content-end">
              <b-col cols="8">
                <p class="fw-bold text-primary mb-0 text-end">{{ assign.releaseTeacher }}</p>
                <p class="text-muted mb-0 text-end"> {{ assign.releaseTime }}</p>
              </b-col>
              <b-col cols="4">
                <img :src="assign.avatar" alt="avatar"
                     class="rounded-circle flex-shrink-0 me-3 fit-cover"
                     height="50" width="50">
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row v-if="isShowProgress(assign)">
          <b-col cols="9">
            <label class="form-label align-self-center my-auto text-wrap">收集进度：</label>
            <b-progress :value="10" :variant="getBarColor(assign.ddl, assign.uploadEnable)"></b-progress>

          </b-col>
          <b-col class="text-end" cols="3">
            <input ref="file" class="form-control" type="file" @change="onFileChange($event, assign)">
          </b-col>
        </b-row>
      </b-card-body>

    </b-card-text>
  </b-card>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "assignList",
  props: {
    assigns: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    addStyle (){ // 为了触发更新
      return this.assigns.map(
          assign => ({
        ...assign,
            style: this.getBarColor(assign.ddl, assign.uploadEnable),
      //   showProgress: this.isShowProgress(assign),
      //   show: this.isShow(assign)
      }))
        //   assign => {
        // assign.style = this.getBarColor(assign.ddl, assign.uploadEnable);
        //       console.log(assign)
        //   })
    },

  },
  methods: {

    onFileChange(e, assign) {
      const file = e.target.files[0];
      // console.log("文件", file);
      // console.log(assign);
      //   TODO: post的时候信息没有填写完整，需要补充
      const formData = {
        fileData: file,
        assignId: assign.id,
        userId: this.userInfo.id
      }
      console.log(formData)
      this.dismissibleAlert = true;
      this.response = {
        message: "正在上传" + assign.name,
        style: "info"
      }
      this.$api.postFile(formData).then(res => {
        // console.log(res);
        if (res.status === 200 ){
          this.response = {
            message: assign.name + "上传成功",
            style: "success"
          }
        } else {
          this.response = {
            message: assign.name + "上传失败" + res.statusText,
            style: "danger"
          }
        }
      })

    },
    isShowProgress(assign) {
      if (!assign.uploadEnable) {
        return false;
      } else {
        return this.getStatusType(assign.ddl, assign.uploadEnable) !== 4;
      }
    },

    isShow(assign) {
      if (this.viewMode) {
        return true;
      }
      if (!assign.uploadEnable) {
        return false;
      } else {
        return this.getStatusType(assign.ddl, assign.uploadEnable) !== 4;
      }
    },

    getBarColor(ddl, isUploadEnable) {
      switch (this.getStatusType(ddl, isUploadEnable)) {
        case 0:
          return "secondary"  // 未开始
        case 1:
          return "success"  // 进行中
        case 2:
          return "warning" // 即将截止
        case 3:
          return "danger" // 手动结束
        case 4:
          return "dark"  // 自动结束
      }
    },
    getTimeStamp(ddl) {
      const now = new Date();
      const ddlTime = new Date(ddl);
      return ddlTime - now;
    },
    getRemainedTime(ddl) {
      const remainedTime = this.getTimeStamp(ddl);
      if (remainedTime < 86400000) {
        const seconds = Math.floor(remainedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        return hours % 24 + ":" + minutes % 60 + ":" + seconds % 60 + "";
      } else {
        return Math.floor(remainedTime / 86400000) + "天"
      }

    },
    getStatusType(ddl, isUploadEnable) {
      if (ddl.trim() === '' || !ddl) {
        return 0
      }
      const remainedTime = this.getTimeStamp(ddl);
      // console.log("remainedTime: " + remainedTime + " " + ddl + " " + this.getRemainedTime(ddl));
      if (!isUploadEnable) {
        return remainedTime > 0 ? 0 : 4 // 未开始 or 已结束
      }
      if (remainedTime < 0) { // 已结束
        return 4
      } else if (remainedTime < 8640000) {
        return 2  // 即将截止
      } else if (remainedTime < 259200) { // between 1 and 3 days
        return 5
      } else {
        return 1 // 进行中
      }

    },
    getTitle(ddl, isUploadEnable) {
      switch (this.getStatusType(ddl, isUploadEnable)) {
        case 0:
          return "未开始"
        case 1:
          return "进行中"
        case 2:
          return "即将截止"
        case 3:
          return "手动结束"
        case 4:
          return "已结束"
      }
    },
  },
  data() {

    const dismissibleAlert = ref(false);
    const totalRows = 1;
    const response = {
      style: 'dark',
      message: '暂无数据'
    };
  //   return assigns
    return {
      userInfo: {
        name: "张三",
        avatar: "https://avatars.githubusercontent.com/u/10731096?v=4",
        role: "学生",
        id: 1
      },
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
      response,
      dismissibleAlert,
    }
  }
  //
  // }
}
</script>

<style scoped>

</style>