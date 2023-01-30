<template>
  <div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>以班级视图查看收集进度</h2>
    </div>
  </div>
  <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 40px;">
    <div class="row justify-content-center">
      <div class="col" v-for="title in titleBanner">
        <div class="p-3">
          <h4 class="display-5 fw-bold text-white mb-0">{{ title.value }}</h4>
          <p class="mb-0">{{ title.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="classViews.length === 0" class="col">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">暂无作业</h4>
          <p class="card-text">暂无作业</p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center">
    <div class="col" v-for="classView in classViews">
      <div>
        <div class="card">
          <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"
               style="border-radius: 5px;border-width: 3px;border-color: var(--bs-blue);font-weight: bold;margin-top: 0px;padding-top: 14px;">
            <div class="flex-fill">
              <h4>{{ classView.className }}</h4>
              <h6 class="text-muted mb-2">{{ classView.teacher }}</h6>
            </div>
            <hr>
            <div style="width: 84px;">
              <button class="btn btn-primary d-flex ms-auto" type="button"
              @click="viewClassAssignDetail(classView.detailUrl)"
              >详情</button>
            </div>
          </div>
          <div class="table-responsive" style="border-color: rgb(100,129,217);">
            <table class="table table-striped">
              <tbody>
              <tr v-for="detailData in classView.progressData">
                <td>{{ detailData.name }}</td>
                <td colspan="3">
                  <div class="progress">
                    <div :class="detailData.colorClass" class="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                         :style="{width: detailData.value}">{{ detailData.value }}
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>
        </div>
      </div>
    </div>

  </div>
    </div>
</template>

<script>
export default {
  name: "tab3Content",
  // define a function
  methods: {
    viewClassAssignDetail(url) {
      // this.$router.push({name: "classAssignDetail"});
      alert("developing" + url);
    }
    },
  props: {
    titleBanner: {
      type: Array,
      default: () => []
    },
    classViews: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped>

</style>