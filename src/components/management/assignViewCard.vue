<template>

<!--  <div style="padding-bottom: 26px;padding-top: 19px;">-->
<!--    <div class="card" style="border-style: solid;border-color: var(&#45;&#45;bs-red);" type="button">-->
<!--      <h5 :class="-->
<!--          'text-bg-warning' + ' border-warning'"-->
<!--          class="text-black-50 card-header"-->
<!--      >-->
<!--        即将截止-->
<!--      </h5>-->
<!--      <div class="card-body" style="padding-top: 0;">-->
<!--        <div class="row" style="padding-top: 13px;">-->
<!--          <div class="col">-->
<!--            <h4>{{ assignment.assignName }}<br></h4>-->
<!--            <h6 class="text-muted mb-2">DDL: {{ assignment.ddl }}<br></h6>-->
<!--          </div>-->
<!--          <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">-->
<!--            <div class="d-flex">-->
<!--              <img alt="avatar" class="rounded-circle flex-shrink-0 me-3 fit-cover"-->
<!--                   height="50"-->
<!--                   src="" width="50">-->
<!--              <div>-->
<!--                <p class="fw-bold text-primary mb-0">{{ assignment.releaseTeacher }}</p>-->
<!--                <p class="text-muted mb-0">{{ assignment.releaseTime }}</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="table-responsive">-->
<!--          <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--              <th class="text-center">班级</th>-->
<!--              <th class="text-center">进度</th>-->
<!--              <th>提交详情</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr>-->
<!--              <td>1909</td>-->
<!--              <td>-->
<!--                <div class="progress">-->
<!--                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar"-->
<!--                       style="width: 50%;">50%-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td colspan="2">-->
<!--                <div><a aria-controls="collapse-1" aria-expanded="false" class="btn btn-primary btn-sm"-->
<!--                        data-bs-toggle="collapse" href="#collapse-1" role="button">展示详情</a>-->
<!--                  <div id="collapse-1" class="collapse">-->
<!--                    <div style="width: 100%;">-->
<!--                      <p>未提交： 张三，李四，</p>-->
<!--                      <p>已提交： 王五， 赵六</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td style="width: 152.234px;">1910</td>-->
<!--              <td>-->
<!--                <div class="progress">-->
<!--                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" class="progress-bar bg-success"-->
<!--                       style="width: 90%;">90%-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--              <td style="width: 352.469px;">-->
<!--                <div class="flex-fill" style="width: 200.047px;"><a aria-controls="collapse-3"-->
<!--                                                                    aria-expanded="true"-->
<!--                                                                    class="btn btn-primary btn-sm"-->
<!--                                                                    data-bs-toggle="collapse" href="#collapse-3"-->
<!--                                                                    role="button">展示详情</a>-->
<!--                  <div id="collapse-3" class="collapse show flex-fill">-->
<!--                    <div class="flex-fill" style="width: 100%;">-->
<!--                      <p>未提交： 张三，李四，</p>-->
<!--                      <p class="pe-xxl-0">已提交： 王五， 赵六</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
<!--            </tr>-->
<!--            <tr></tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--        </div>-->
<!--        <p class="card-text"></p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

      <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;"
        v-for="assignment in [
            {id: 1, assignName: '第五次数据结构', ddl:'2022-12-15 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',
            }
        ]"
           :key="assignment.id">
      >
        <div class="card"
              type="button"
             :style="getBorderColor()">
          <h5 class="text-black-50 card-header"
          :class="getTitleClass()"
          >
            即将截止
          </h5>
          <div class="card-body" style="padding-top: 0;">
            <div class="row" style="padding-top: 13px;">
              <div class="col">
                <h4>{{ assignment.assignName }}<br></h4>
                <h6 class="text-muted mb-2">DDL: {{ assignment.ddl }}<br></h6>
              </div>
              <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                <div class="d-flex">
                  <img class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50"
                                         src=""
                                         width="50" alt="avatar">
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
                  <th class="text-center">班级</th>
                  <th class="text-center">进度</th>
                  <th>提交详情</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1909</td>
                  <td>
                    <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar"
                           style="width: 50%;">50%
                      </div>
                    </div>
                  </td>
                  <td colspan="2">
                    <div><a aria-controls="collapse-1" aria-expanded="false" class="btn btn-primary btn-sm"
                            data-bs-toggle="collapse" href="#collapse-1" role="button">展示详情</a>
                      <div id="collapse-1" class="collapse">
                        <div style="width: 100%;">
                          <p>未提交： 张三，李四，</p>
                          <p>已提交： 王五， 赵六</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="width: 152.234px;">1910</td>
                  <td>
                    <div class="progress">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="90"
                      class="progress-bar bg-success"
                           style="width: 90%;">90%
                      </div>
                    </div>
                  </td>
                  <td style="width: 352.469px;">
                    <div class="flex-fill" style="width: 200.047px;"><a aria-controls="collapse-3"
                                                                        aria-expanded="true"
                                                                        class="btn btn-primary btn-sm"
                                                                        data-bs-toggle="collapse" href="#collapse-3"
                                                                        role="button">展示详情</a>
                      <div id="collapse-3" class="collapse show flex-fill">
                        <div class="flex-fill" style="width: 100%;">
                          <p>未提交： 张三，李四，</p>
                          <p class="pe-xxl-0">已提交： 王五， 赵六</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr></tr>
                </tbody>
              </table>
            </div>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
<!--      <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">-->
<!--        <div class="card" style="border-style: solid;border-color: rgb(44,203,69);" type="button">-->
<!--          <h5 class="text-black-50 text-bg-success card-header">收集中</h5>-->
<!--          <div class="card-body" style="padding-top: 0px;box-shadow: 0px 0px;">-->
<!--            <div class="row" style="padding-top: 13px;">-->
<!--              <div class="col">-->
<!--                <h4>第五次数据结构<br></h4>-->
<!--                <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>-->
<!--              </div>-->
<!--              <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">-->
<!--                <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50"-->
<!--                                         src="../../../backendAssets/img/AssginImg.png"-->
<!--                                         width="50">-->
<!--                  <div>-->
<!--                    <p class="fw-bold text-primary mb-0">KissesJun</p>-->
<!--                    <p class="text-muted mb-0">2022-12-15</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="table-responsive">-->
<!--              <table class="table">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                  <th class="text-center">班级</th>-->
<!--                  <th class="text-center">进度</th>-->
<!--                  <th>提交详情</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td>1909</td>-->
<!--                  <td>-->
<!--                    <div class="progress">-->
<!--                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50" class="progress-bar"-->
<!--                           style="width: 50%;">50%-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td colspan="2">-->
<!--                    <div><a aria-controls="collapse-6" aria-expanded="false" class="btn btn-primary btn-sm"-->
<!--                            data-bs-toggle="collapse" href="#collapse-6" role="button">展示详情</a>-->
<!--                      <div id="collapse-6" class="collapse">-->
<!--                        <div style="width: 100%;">-->
<!--                          <p>未提交： 张三，李四，</p>-->
<!--                          <p>已提交： 王五， 赵六</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                  <td style="width: 152.234px;">1910</td>-->
<!--                  <td>-->
<!--                    <div class="progress">-->
<!--                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="34" class="progress-bar bg-info"-->
<!--                           style="width: 34%;">34%-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td style="width: 352.469px;">-->
<!--                    <div class="flex-fill" style="width: 200.047px;"><a aria-controls="collapse-7"-->
<!--                                                                        aria-expanded="true"-->
<!--                                                                        class="btn btn-primary btn-sm"-->
<!--                                                                        data-bs-toggle="collapse" href="#collapse-7"-->
<!--                                                                        role="button">展示详情</a>-->
<!--                      <div id="collapse-7" class="collapse show flex-fill">-->
<!--                        <div class="flex-fill" style="width: 100%;">-->
<!--                          <p>未提交： 张三，李四，</p>-->
<!--                          <p class="pe-xxl-0">已提交： 王五， 赵六</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr></tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--            <p class="card-text"></p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">-->
<!--        <div class="card" style="border-style: solid;border-color: rgb(44,203,69);" type="button">-->
<!--          <h5 class="text-black-50 text-bg-success card-header">收集中</h5>-->
<!--          <div class="card-body" style="padding-top: 0px;box-shadow: 0px 0px;">-->
<!--            <div class="row" style="padding-top: 13px;">-->
<!--              <div class="col">-->
<!--                <h4>Week8 大作业<br></h4>-->
<!--                <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>-->
<!--              </div>-->
<!--              <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">-->
<!--                <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50"-->
<!--                                         src="../../../backendAssets/img/octocat-23.png"-->
<!--                                         width="50">-->
<!--                  <div>-->
<!--                    <p class="fw-bold text-primary mb-0">张夜光</p>-->
<!--                    <p class="text-muted mb-0">2022-12-15</p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="table-responsive">-->
<!--              <table class="table">-->
<!--                <thead>-->
<!--                <tr>-->
<!--                  <th class="text-center">班级</th>-->
<!--                  <th class="text-center">进度</th>-->
<!--                  <th>提交详情</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody>-->
<!--                <tr>-->
<!--                  <td style="width: 152.234px;">匿名</td>-->
<!--                  <td>-->
<!--                    <div class="progress">-->
<!--                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" class="progress-bar bg-success"-->
<!--                           style="width: 90%;">90%-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td style="width: 352.469px;">-->
<!--                    <div class="flex-fill" style="width: 200.047px;"><a aria-controls="collapse-5"-->
<!--                                                                        aria-expanded="false"-->
<!--                                                                        class="btn btn-primary btn-sm"-->
<!--                                                                        data-bs-toggle="collapse" href="#collapse-5"-->
<!--                                                                        role="button">展示详情</a>-->
<!--                      <div id="collapse-5" class="collapse flex-fill">-->
<!--                        <div class="flex-fill" style="width: 100%;">-->
<!--                          <p>未提交： 张三，李四，</p>-->
<!--                          <p class="pe-xxl-0">已提交： 王五， 赵六</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                <tr></tr>-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--            <p class="card-text"></p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
</template>

<script>
import { ref } from "vue";
export default {
  name: "assignViewCard",
  props: {
      assignment: {
        type: Object,
        default: function () {
          return {
          id: 1, assignName: '第五次数据结构', ddl:'2022-12-15 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',
            }
        }
      },
  },
  methods: {
    judgeCardStatus (time) {
    //   calc the time span with now
      // 1. get now time

    },
    getBorderColor(time) {
      switch (time) {

      }
      return "border-color: var(--bs-blue);"
    },
    getTitleClass() {
      return 'text-bg-warning' + ' border-warning'
    }
  },
  data() {
    const timeStr = ref();
    return {
    }
  }
}
</script>

<style scoped>
.card {
  border-style: solid;
}
</style>