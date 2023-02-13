<template>
  <div :style="cardStyle"
       class="card"
       type="button">
    <h5 :class="cardClass"
        class="text-light-50 card-header"
    >
      {{ cardStatus }}
    </h5>
    <div class="card-body" style="padding-top: 0;">
      <div class="row" style="padding-top: 13px;">
        <div class="col">
          <h4>{{ assignment.assignName }}<br></h4>
          <h6 class="text-muted mb-2">DDL: {{ assignment.ddl }} (now:{{ timeStr }})<br></h6>
        </div>
        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
          <div class="d-flex">
            <img alt="avatar" class="rounded-circle flex-shrink-0 me-3 fit-cover"
                 height="50"
                 src="../../../../public/favicon.ico" width="50">
            <div>
              <p class="fw-bold text-primary mb-0">{{ assignment.releaseTeacher }}</p>
              <p class="text-muted mb-0">{{ assignment.releaseTime }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th colspan="2" class="text-center">班级</th>
            <th colspan="4" class="text-center">进度</th>
            <!--            show th label if submits[0].detail is not empty-->

            <th colspan="6" v-if="isShowDetailColumn(submits)" class="text-center">提交详情</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="clazz in submits">
            <td colspan="1" class="text-center" >{{ clazz.clazz }}</td>
            <td colspan="4">
              <div class="progress">
                <div :aria-valuenow="clazz.progress" :class="clazz.progress === 100 ? 'bg-success' : 'bg-primary'" :style="'width: ' + clazz.progress +'%;'" aria-valuemax="100"
                     aria-valuemin="0"
                     class="progress-bar">{{ clazz.progress }}%
                </div>
              </div>
            </td>
            <td colspan="6" v-if="isShowDetailColumn(submits)"  >
              <div><a aria-expanded="false"
                      class="btn btn-primary btn-sm" data-bs-toggle="collapse"
                      role="button"
                      :href="'#collapse-1-' + clazz.clazz + '-' + assignment.id"
                      :aria-controls="'#collapse-1-' + clazz.clazz + '-' + assignment.id"
              >展示</a>
                <div :id="'collapse-1-' + clazz.clazz + '-' + assignment.id" class="collapse">
                  <div >
                    <p v-if="clazz.detail.notSubmit">未提交： {{ ' '.concat(clazz.detail.notSubmit) }}</p>
                    <p v-else> 无未提交 </p>
                    <p v-if="clazz.detail.submit">已提交： {{ ' '.concat(clazz.detail.submit) }}</p>
                    <p v-else> 无已提交 </p>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "assignViewCard",
  props: {
    assignment: {
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
  methods: {
    getCurrentTime() {
      const now = new Date();
      return now.getTime();
    },
    getCardStyles() {
      let defaultStyles = ["border-color: var(--bs-grey);", 'text-bg-secondary border-secondary', "无截止期"]
      let current = this.getCurrentTime();
      if (!this.assignment.ddl){ return defaultStyles }
      let dueTime = new Date(this.assignment.ddl).getTime();
      let lastTime = dueTime - current;
      // console.log("current: " + current + "ms" + ",namely: " + new Date(current).toLocaleString())
      // console.log("dueTime: " + dueTime + "ms" + ",namely: " + new Date(dueTime).toLocaleString())
      // turn lastTime to days, and then to hours, minutes, show them in console
      // console.log("lastTime: " + lastTime, "remained:" + lastTime / 86400000 + "days")
      if (lastTime < 0) {
        // console.log("overdue")
        return ["border-color: var(--bs-red);", 'text-bg-danger border-danger', "已过期"]
      } else if (lastTime < 86400000 * 3) {
        // console.log("less than 1 day")
        return ["border-color: var(--bs-yellow);", 'text-bg-warning border-warning', "即将过期"]
      } else if (lastTime > 86400000 * 3) {
        // console.log("less than 3 days")
        return ["border-color: var(--bs-green);", 'text-bg-success border-success', "正在进行"]
      } else {
        // console.log("more than 3 days")
        return defaultStyles
      }
    },
    isShowDetailColumn(submits) {
      if (!this.submits) {
        return false;
      }
      for (let i = 0; i < submits.length; i++) {
        if (this.submits[i].detail) {
          return true;
        }
      }
      return false;
    }
  },
  data() {
    const timeStr = this.getCurrentTime();
    const {proxy} = getCurrentInstance();
    const cardStyle = ref();
    const cardClass = ref();
    const cardStatus = ref();
    const submits = ref();
    const getSubmits = async () => {
      const res = await proxy.$api.getSubmitsByAssignId(this.assignment.id);
      submits.value = res;
    }
    onMounted(() => {
      [cardStyle.value, cardClass.value, cardStatus.value] = this.getCardStyles();
      getSubmits();

    })
    return {
      timeStr, cardStyle, cardClass, cardStatus, submits
    }
  }
}
</script>

<style scoped>
.card {
  border-style: solid;
}
</style>