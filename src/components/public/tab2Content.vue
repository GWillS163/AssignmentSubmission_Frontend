<template>
    <div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>以作业视图查看进度</h2>
        </div>
      </div>
    <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 41px;">
        <div class="row justify-content-center ">
            <div class="col" v-for=" titleArea in titleBanner">
                <div class="p-3">
                    <h4 class="display-5 fw-bold text-white mb-0">{{ titleArea.num }}</h4>
                    <p class="mb-0">{{ titleArea.name }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center">
      <div v-for="assignView in assignViews">
        <div class="col">
          <div class="card">
              <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3">
                  <h4 class="card-title">{{ assignView.title }}<br></h4>
                  <h6 class="text-muted card-subtitle mb-2">DDL: {{ assignView.ddl }}</h6>
                  <div class="table-responsive">
                      <table class="table">
                          <thead>
                              <tr>
                                  <th class="text-center">班级</th>
                                  <th class="text-center">进度</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="item in assignView.detailData">
                                  <td>{{ item.class }}</td>
                                  <td>
                                      <div class="progress">
<!--                                        set the class value of div , it is {{item.colorClass}}-->
                                          <div class="progress-bar" :class="item.colorClass" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" :style="{width: item.progress}">{{item.progress}}</div>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50"
                                   :src="assignView.detailUrl">
              <div>
                  <p class="fw-bold text-primary mb-0">{{ assignView.releaseTeacher }}</p>
                  <p class="text-muted mb-0">{{ assignView.releaseTime }}</p>
              </div>
<!--            put a button that can call the viewAssignDetail function-->

              <div class="flex-fill"><button class="btn btn-primary d-flex ms-auto"
                                             @click="viewAssignDetail(assignView.detailUrl)" type="button">详情</button></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "tab2Content",
  // export data:
  data() {
    return {
      titleBanner: [
        {
          name: "已交作业",
          num: "123+"
        },
        {
          name: "未交作业",
          num: "123+"
        },
        {
          name: "提交率",
          num: "45%"
        },
        {
          name: "最近DDL",
          num: "3"
        }
      ],
      assignViews: [
        {
          title: "Week8 大作业",
          ddl: "2023-2-15",
          detailData: [
            {
              class: "1909",
              progress: "96%",
              colorClass: "bg-success"
            },
            {
              class: "1910",
              progress: "40%",
              colorClass: "bg-warning"
            }
          ],
          releaseTeacher: "KissesJun",
          releaseTime: "2022-12-15",
          releaseImg: "assets/img/assignmentImg.png",
          detailUrl: "assignment/detail/32933"
        }
      ]
    };
  },

  // export methods:
  //define a function
  methods: {
    viewAssignDetail: function (url) {
      console.log(url);
      alert("[view detail]: " + url + "  \nin the future, and it will be jump to teacher's page");

    }
}
};
</script>

<style scoped>

</style>