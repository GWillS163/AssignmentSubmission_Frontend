<template>
  <div class="col">
    <div>
      <div class="card">
        <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"
             style="border-radius: 5px;border-width: 3px;border-color: var(--bs-blue);
                   font-weight: bold;margin-top: 0;padding-top: 14px;">
          <div class="flex-fill">
            <h4>{{ clazz.name }}</h4>
            <h6 class="text-muted mb-2">{{ clazz.teacher }}</h6>
          </div>
          <hr>
          <div style="width: 84px;">
            <button class="btn btn-primary d-flex ms-auto" type="button" @click="viewDetail(this.clazz.id)">详情</button>
          </div>
        </div>
        <div class="table-responsive" style="border-color: rgb(100,129,217);">
          <table class="table table-striped">
            <tbody>
            <tr v-if="assigns.length" v-for="assign in assigns">
              <td>{{ assign.name }}</td>
              <td colspan="3">
                <div class="progress">
                  <div :aria-valuenow="assign.progress" :class="assign.progress === 100 ? 'bg-success': 'bg-primary'"
                       :style="'width: '+ assign.progress +'%;'"
                       aria-valuemax="100"
                       aria-valuemin="0"
                       class="progress-bar">{{ assign.progress }}%
                  </div>
                </div>
              </td>
            </tr>
            <tr v-else>暂无作业</tr>
            </tbody>
          </table>
        </div>
<!--        <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "classViewCard",
  props: {
    clazz: {
      type: Object,
      default: {
        id: 1909,
        name: "1909班",
        releaseTeacher: "KissesJun"
      }
    }
  },
  methods: {
    viewDetail(clazzId) {
      // TODO: 实现查看详情的窗口跳转
      console.log("查看班级作业收集详情" +clazzId)
    }
  },
  data() {
    const assigns = ref([]);
    const {proxy} = getCurrentInstance();
    const getAssignByClass= async ()=> {
      assigns.value = await proxy.$api.getAssignsByClass(this.clazz.id);
      console.log(assigns.value)
    }
    onMounted(() => {
      getAssignByClass();
    })
    return {
      assigns,
    }
  }
}
</script>

<style scoped>

</style>