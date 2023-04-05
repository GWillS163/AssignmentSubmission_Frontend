<template>
<!--  <div>-->
<!--    <table>-->
<!--      <tr v-for="(key, index) in addStyle">{{index }} - {{key}}</tr>-->
<!--    </table>-->
<!--  </div>-->
  <b-alert  v-model="dismissibleAlert"
            @click="dismissibleAlert = false"
            :variant="response.style" dismissible>{{ response.message }}</b-alert>

  <b-card
      no-body
      header-text-variant="white"
      :border-variant="addStyle.style"
      style="margin-bottom: 20px;"
      :header="addStyle.status + '  (剩余' + getRemainedTime(assign.ddl) + ' )'"
      :header-class="'text-white bg-' + addStyle.style"

  >
    <b-card-text align="left">
      <b-card-body class="pb-xxl-0">
        <b-row>
          <b-col cols="8">
            <h4> {{ assign.briefName }} </h4>
            <h6 v-show="assign.ddl"
                class="text-muted mb-2">
              DDL: {{ assign.ddl }}
            </h6>
            <p> </p>
          </b-col>

          <b-col cols="4" class="justify-content-end" style="display: flex">
            <b-row class="justify-content-end">
                {{assign.teacherId }}
                <p class="text-muted mb-0 text-end" size="sm"> {{ assign.createTime }}</p>
<!--&lt;!&ndash;                <img :src="assign.avatar" alt="avatar"&ndash;&gt;-->
<!--&lt;!&ndash;                     class="rounded-circle flex-shrink-0 me-3 fit-cover"&ndash;&gt;-->
<!--&lt;!&ndash;                     height="50" width="50">&ndash;&gt;-->
<!--              </b-col>-->
            </b-row>
          </b-col>
        </b-row>
        <b-row>
            <b-list-group no-body>
              <b-list-group-item>文件名：{{ assign.fileNameRule }}</b-list-group-item>
              <b-list-group-item>描述： {{assign.description}}</b-list-group-item>
            </b-list-group>
        </b-row>

<!--&lt;!&ndash;        原始的Html 上传代码&ndash;&gt;-->
<!--&lt;!&ndash;    <input type="file" />233&ndash;&gt;-->
<!--&lt;!&ndash;    <button class="primary" @click="uploadFile(assign.id)">上传文件</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <a class="btn btn-primary d-block w-100" @click="handleUploadFile" role="button" >点击上传</a>&ndash;&gt;-->
      </b-card-body>
      <b-card-footer>
        <div v-if="footerType === 'upload'">
          <b-row  v-if="assign.uploadEnable">
            <b-col cols="8">
              <input type="file" @change="onFileChange($event, assign)" ref="file"  class="form-control" placeholder="请上传文件">
            </b-col>
            <b-col cols="4">
              <b-button :variant="assign.style">提交</b-button>
            </b-col>
          </b-row>
        </div>
        <div v-else-if="footerType === 'progress'">
          {{files.length}} - {{ clazzCount}}
<!--          add a progress label-->

<!--          <b-progress-bar :label-html="files.length + '/' + clazzCount" >-->
<!--          <b-form-floating-label :label-html="files.length + '/' + clazzCount" class="mb-3"/>-->
            <b-progress :variant="assign.style" :value="files.length" :max="clazzCount"></b-progress>
<!--          </b-progress-bar>-->
        </div>
        <div v-else></div>
        <slot>
        <!--  可能会有Table 和详情 -->
        </slot>
      </b-card-footer>

    </b-card-text>
  </b-card>

</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
import handleAssignCard from "@/assets/customed/handleAssignCard.js";

export default {
  name: "assignViewCard",
  handleAssignCard: [handleAssignCard],
  props: {
    footerType: {
      type: String,
      default: 'default'
    },
    assign: {
      type: Object,
      default: function () {
        return {
          id: 0,
          assignName: '默认作业',
          ddl: '2023-2-13 18:00',
          releaseTime: '2023-11-13 18:00',
          releaseTeacher: 'KissesJun',
        }
      }
    }
  },
  computed: {
    addStyle() {
      return handleAssignCard.addStyle(this.assign)
    }
  },
  methods: {
    progress() {

    },
    // getTitle(assign.ddl, assign.uploadEnable) 需要实现这个方法 TODO
    onFileChange(e, assign) {
      console.log("OnFileChange", e)
      const file = e.target.files[0];
      console.log("On文件", file);
      console.log(assign);
      //   TODO: post的时候信息没有填写完整，需要补充
      const formData = {
        fileData: file,
        assignId: assign.id,
        userId: this.userInfo.id
      }
      console.log("formData", formData)
      this.dismissibleAlert = true;
      this.response = {
        message: "正在上传" + formData.fileData.name,
        style: "info"
      }


      this.$api.postFile(formData).then(res => {
        // console.log(res);
        if (res.status === 200) {
          this.response = {
            message: formData.fileData.name + "上传成功",
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
    getRemainedTime() {
      return handleAssignCard.getRemainedTime(this.assign.ddl);
    },
  },
  data() {
    // const timeStr = handleAssignCard.getCurrentTime();
    // const {proxy} = getCurrentInstance();
    // let cardHeaderStatus;
    // const cardStyle = ref();
    // const cardClass = ref();
    // const cardStatus = ref();
    // const submits = ref();
    const files = [];
    const clazzCount = ref(0);
    const {proxy} = getCurrentInstance();
    const getAssignProgress = () => {
      // proxy.$api.getAssignProgress(this.assign.id).then(res => {
      proxy.$api.getAssignFiles(this.assign.id).then(res => {
        // console.log("getAssignFiles", res);
        if (res.status === 200) {
          this.files = res.data;
        }
      })
    }
    const getAssignClazzCount = () => {
      proxy.$api.getAssignClazzCount(this.assign.clazzId).then(res => {
        // console.log(res);
        if (res.status === 200) {
          for (let i in res.data) {this.clazzCount += 1}
          if (this.clazzCount === 0 ) { this.clazzCount = 1}
        }
      })
    }
    onMounted(() => {
      getAssignProgress();
      getAssignClazzCount();
    })
    const dismissibleAlert = ref(false);
    const response = {
      style: 'dark',
      message: '暂无数据'
    };
    return {
      files,
      clazzCount,

      response,
      dismissibleAlert,
      userInfo: {
        name: "张三",
        avatar: "https://avatars.githubusercontent.com/u/10731096?v=4",
        role: "学生",
        id: 1
      },
    }
  }
}
</script>

<style scoped>
.card {
  border-style: solid;
}
</style>