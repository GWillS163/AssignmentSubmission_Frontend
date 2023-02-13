<template>

  <div class="col mb-xxl-0 pb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
    <div :class="'card border-' + statusClass "
         type="button"
    >
      <h5 class="text-light-50  card-header "
          :class="'text-bg-' + statusClass + ' border-' + statusClass"
      >{{ assignStatus }}</h5>
      <div class="card-body pb-xxl-0">
        <div class="row">
          <div class="col">
            <h4>{{ assign.name }}<br></h4>
            <h6 class="text-muted mb-2">DDL: {{ assign.ddl }}<br></h6>
          </div>
          <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
            <div class="d-flex flex-fill justify-content-end me-auto">
              <img alt="avatar" class="rounded-circle flex-shrink-0 me-3 fit-cover"
                   height="50"
                   src="../../../public/favicon.ico" width="50">
              <div>
                <p class="fw-bold text-primary mb-0">{{ assign.releaseTeacher }}</p>
                <p class="text-muted mb-0"> {{ assign.releaseTime }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row align-content-center align-self-center my-auto">
<!--          <div class="col-3">-->
<!--&lt;!&ndash;            set the p label not change line&ndash;&gt;-->
<!--          </div>-->
          <div class="col-9" >
            <label
              class="form-label align-self-center my-auto text-wrap">收集进度：</label>
            <progress-bar :progress="progress" :style="'bg-' + statusClass"/>
          </div>
          <div class="col-3 ">
            <button :class="'btn-' + statusClass" class="btn  mt-xxl-2 mb-xxl-1 ms-xxl-2"
                    type="button"
                    @click="uploadFile(this.assign.id)"
                    :disabled="statusClass==='secondary'"
            >
              选定1文件
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
import ProgressBar from "@/components/management/progressBar.vue";

export default {
  name: "studentUploadCard",
  components: {ProgressBar},
  props: {
    assign: {
      type: Object,
      default: {
        id: 1,
        assignName: '第五次数据结构 1',
        ddl: '2023-02-12 18:00',
        releaseTime: '2022-11-13 18:00',
        releaseTeacher: 'KissesJun',
      }
    }
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      return now.getTime();
    },
    getCardStyles() {
      let defaultStyles = ['success', "无截止期"]
      let current = this.getCurrentTime();
      if (!this.assign.ddl){ return defaultStyles }
      let dueTime = new Date(this.assign.ddl).getTime();
      let lastTime = dueTime - current;
      // console.log("current: " + current + "ms" + ",namely: " + new Date(current).toLocaleString())
      // console.log("dueTime: " + dueTime + "ms" + ",namely: " + new Date(dueTime).toLocaleString())
      // turn lastTime to days, and then to hours, minutes, show them in console
      // console.log("lastTime: " + lastTime, "remained:" + lastTime / 86400000 + "days")
      if (lastTime < 0) {
        // console.log("overdue")
        return ["secondary", "已过期"]
      } else if (lastTime < 86400000 * 3) {
        // console.log("less than 1 day")
        return ["warning", "即将过期"]
      } else if (lastTime > 86400000 * 3) {
        // console.log("less than 3 days")
        return ['success', "正在进行"]
      } else {
        // console.log("more than 3 days")
        return defaultStyles
      }
    },
    uploadFile(assignId) {
      console.log("尝试提交作业" + assignId)
    }
  },
  data() {
    const {proxy} = getCurrentInstance();
    const progress = ref();
    const statusClass = ref();
    const assignStatus = ref();
    const getAssignProgressData = async () => {
      const res = proxy.$api.getAssignProgress(this.assign.id);
      progress.value = res.progress
      // console.log("id:" + this.assign.id + ", progress: " + progress);
    };
    onMounted(() => {
      getAssignProgressData();
      [statusClass.value, assignStatus.value] = this.getCardStyles();
      // console.log("statusClass: " + statusClass.value + ", assignStatus: " + assignStatus.value)
    })
    return {
      progress,
      assignStatus,
      statusClass,
    }
  }
}
</script>

<style scoped>

</style>