
<template>
  <div class="d-sm-flex justify-content-between align-items-center mb-4">
    <h3 class="text-dark mb-0">Dashboard</h3>
    <a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button"
        @click="downloadSubmittedData">
    <i class="fas fa-download fa-sm text-white-50"></i>下载提交数据</a>
  </div>
  <div class="row">
    <div class="col-md-6 col-xl-3 mb-4" v-for="titleCard in titleCards">
      <div class="card shadow border-start-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
<!--              在库作业-->
              <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span>{{ titleCard.name }}</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>{{ titleCard.value }}</span></div>
            </div>
            <div class="col-auto">
              <i class="fas fa-2x text-gray-300"
              :class="titleCard.icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">作业收集进度</h6>
        </div>
        <div class="card-body">
          <div v-for="assign in assignProgress">
            <h4 class="small fw-bold"> {{assign.name }}
              <span class="float-end"> {{ assign.collectStatus }}</span>
            </h4>
            <div class="progress mb-4">
              <div class="progress-bar" aria-valuemin="0" aria-valuemax="100"
                   aria-valuenow="80"
                   :class="assign.collectColor"
                   :style="{width: assign.collectProgress + '%'}">
                <span class="">{{ assign.collectProgress }}%</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">DDL剩余日期</h6>
        </div>
        <div class="card-body">
          <div v-for="assign in assignProgress">
            <h4 class="small fw-bold"> {{assign.name }}
              <span class="float-end"> {{ assign.ddlStatus }} </span>
            </h4>
            <div class="progress mb-4">
              <div class="progress-bar" aria-valuemin="0" aria-valuemax="100"
                   aria-valuenow="80"
                   :class="assign.ddlColor"
                   :style="{width: assign.ddlProgress + '%'}">
                <span class="">{{ assign.ddlProgress }}%</span></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-7 col-xl-8">
      <div class="card shadow mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary fw-bold m-0">作业提交时刻图</h6>
          <div class="dropdown no-arrow">
            <button class="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown"
                    type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
            <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
              <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item"
                                                                            href="#">&nbsp;Action</a><a
                class="dropdown-item" href="#">&nbsp;Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">&nbsp;Something else here</a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas
                data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}]}}}"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-xl-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">Todo List</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">10:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label
                    class="form-check-label" for="formCheck-4"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">11:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"><label
                    class="form-check-label" for="formCheck-5"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">12:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"><label
                    class="form-check-label" for="formCheck-6"></label></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarSide from "@/components/management/navBar/navBarSide.vue";
import NavBarTop from "@/components/management/navBar/navBarTop.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "dashboard",
  components: {
    NavBarSide,
    NavBarTop
  },
  setup() {
    const { proxy } = getCurrentInstance();
    // let cardsData = ref([]);
    let titleCards = ref([]);
    let assignProgress = ref([]);

    const downloadSubmittedData = async () => {
      console.log("downloadSumbittedData");
    };
    const getDashboardData = async () => {
      const data = await proxy.$api.getDashBoardData();
      // console.log("data", data);
      titleCards.value = data["titleCards"];
      assignProgress.value = data["assignProgress"];

      // console.log(assignProgress.value);
      // console.log(titleCards.value);
    };
    onMounted(() => {
      getDashboardData();
    });
    return {
      titleCards,
      assignProgress,
      downloadSubmittedData
    };
  },
});
</script>

<style scoped>

</style>