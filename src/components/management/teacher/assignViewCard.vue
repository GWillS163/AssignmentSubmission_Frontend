<template>
  <div>
    <table>
      <tr v-for="(key, index) in addStyle">{{index }} - {{key}}</tr>
    </table>
  </div>
  <b-card
      no-body
      :border-variant="addStyle.style"
      :header="addStyle.title"
      header-bg-variant="success"
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
              DDL: {{ assign.ddl }}
            </h6>
            <p> (剩余 {{ getRemainedTime(assign.ddl) }})</p>
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
        <slot>
          <!--            可能会有Table 和详情 -->
        </slot>

<!--&lt;!&ndash;        原始的Html 上传代码&ndash;&gt;-->
<!--&lt;!&ndash;    <input type="file" />233&ndash;&gt;-->
<!--&lt;!&ndash;    <button class="primary" @click="uploadFile(assign.id)">上传文件</button>&ndash;&gt;-->
<!--&lt;!&ndash;    <a class="btn btn-primary d-block w-100" @click="handleUploadFile" role="button" >点击上传</a>&ndash;&gt;-->
      </b-card-body>

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
    // getTitle(assign.ddl, assign.uploadEnable) 需要实现这个方法 TODO
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
        if (res.status === 200) {
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
    getRemainedTime() {
      return handleAssignCard.getRemainedTime(this.assign.ddl);
    },
  },
  data() {
    const timeStr = handleAssignCard.getCurrentTime();
    const {proxy} = getCurrentInstance();
    let cardHeaderStatus;
    const cardStyle = ref();
    const cardClass = ref();
    const cardStatus = ref();
    const submits = ref();
    const getSubmits = async () => {
      const res = await proxy.$api.getSubmitsByAssignId(this.assign.id);
      submits.value = res;
    }
    onMounted(() => {
      // [cardStyle.value, cardClass.value, cardStatus.value] = handleAssignCard.getCardStyles(this.assign);
      getSubmits();

    })
    return {
      // timeStr, cardStyle, cardClass, cardHeaderStatus
    }
  }
}
</script>

<style scoped>
.card {
  border-style: solid;
}
</style>