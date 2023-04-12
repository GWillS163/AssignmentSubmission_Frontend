<script setup>
import AssignForm from "@/components/management/teacher/AssignForm.vue";
import SubmitTable from "@/components/management/filesTable.vue";
import PublicViewPage from "@/components/public/PublicViewPage.vue";</script>
<template>
{{titleBanner}}
  {{assigns}}
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">教师中心</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6">
        <div class="btn-group float-end" role="group"  aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="cardMode" id="cardMode" autocomplete="off"
          :checked="viewMode === 'card'" @click="viewMode = 'card'"
          >
          <label class="btn btn-outline-primary" for="cardMode">卡片模式</label>
          <input type="radio" class="btn-check" name="tableMode" id="tableMode" autocomplete="off"
          :checked="viewMode === 'table'" @click="viewMode = 'table'"
          >
          <label class="btn btn-outline-primary" for="tableMode">列表模式</label>

        </div>
      </div>
    </div>


  <public-view-page  v-if="titleBanner.length" title="" :banner="titleBanner"/>

    <!--    if viewMode is table, show table, if not, show card-->
    <!--    use the if syntax of vue-->

    <div v-show="viewMode === 'card'">
      <b-card no-body class="shadow mb-4">
        <b-card-header class="d-flex justify-content-between align-items-center">
          <h6 class="text-primary fw-bold m-0">作业详情</h6>
          <div class="dropdown no-arrow">
            <button aria-expanded="false" class="btn btn-link btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                    type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
          </div>
        </b-card-header>
        <b-card-body>
            <ul class="nav nav-tabs" role="tablist">
              <li v-for="assign in assigns" class="nav-item" role="presentation">
                <a :class="{active: assign.formData.id === assigns[0].formData.id}"
                   :href="'#' + assign.formData.id"
                   aria-controls="tab-1" aria-selected="true" class="nav-link" data-bs-toggle="tab"
                   role="tab">{{ assign.formData.name }}</a>
              </li>

              <li class="nav-item" role="presentation">
                <a aria-controls="tab-1"
                   aria-selected="true" class="nav-link"
                   data-bs-toggle="tab" href="#add"
                   role="tab">
                  <i class="fas fa-plus" style="color: #007bff;"></i>
                </a>
              </li>
            </ul>
            <!-- Tab panes -->
            <div v-for="assign in assigns" class="tab-content">
              <div :id="assign.formData.id"
                   :class="{active: assign.formData.id === assigns[0].formData.id}"
                   class="tab-pane show"
                   role="tabpanel">

                <div class=" justify-content-center">
                  <a aria-controls="collapseExample" aria-expanded="false"
                     class="btn btn-primary" data-bs-toggle="collapse"
                     href="#collapseExample" role="button">
                    <i class="fas fa-expand-alt"></i>
                    展示详情
                  </a>
                </div>
                <div id="collapseExample" class="collapse">
                  <div class="card card-body">
                    <AssignForm :assign="assign.formData" :ownClazz="ownClazz"></AssignForm>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">收集进度</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <div class="progress flex-fill" style="margin-top: 9px;">
                      <div :aria-valuenow="assign.progress" :style="'width:' + assign.progress +'%;'"
                           aria-valuemax="100"
                           aria-valuemin="0"
                           class="progress-bar bg-success">{{ assign.progress }}%
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">最近上交</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <p>{{ assign.recentSubmit }}</p>
                  </div>
                </div>
                <div class="mb-3"></div>
                <SubmitTable :files="assign.files"></SubmitTable>
              </div>
              <div class="tab-content">
                <div id="add" class="tab-pane show" role="tabpanel">
                  <!--              pass the param isEditing to component-->
                  <AssignForm :assign="newDataForm" :ownClazz="ownClazz" :isAdd="true"/>
                </div>
              </div>
            </div>
        </b-card-body>
      </b-card>
    </div>
    <div v-show="viewMode === 'table'">
      <b-table style="margin-bottom: 20px">
        <b-card-header class="py-3">
          <div class="row table-topper align-items-center">
            <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0;padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">作业列表</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0;padding: 5px 15px;"></div>
          </div>
        </b-card-header>
        <b-table no-body>
<!--           btnMaterial btn-flat success semicircle-->
<!--        btn btnMaterial btn-flat primary semicircle  -->
        </b-table>
      </b-table>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
export default {
  name: "center",
  methods: {
    handleViewMode(mode) {
      this.viewMode = mode;
    },
  },

  // export to the global scope
  data: function () {
    const userInfo = {
      name: "张三",
      id: 127,
      role: "teacher",
    }
    const {proxy} = getCurrentInstance();
    const ownClazz = ref([]);
    const assigns = ref([]);
    const flags = ref([]);
    // const newDataForm = ref([]);
    const getFlags = async () => {
      flags.value = await proxy.$api.getFlags();
    } ;
    const getOwnClazz = async () => {
      ownClazz.value = await proxy.$api.getOwnClazz();
    };
    const getAssigns = async () => {
      // console.log(await proxy.$api.getAssigns())
      assigns.value = await proxy.$api.getTeacherCenterAssigns(userInfo.id).then((res) => {
          console.log("teacher assign",res);
        return res.data
      });
    };
    const getTitleBanner = async () => {
      this.titleBanner = await proxy.$api.getTitleAssignBanner(userInfo.id).then(res => res.data);
    };
    onMounted(() => {
      // getOwnClazz();
      // getAssigns();
      // getTitleBanner();
      // getFlags();
    })
    const titleBanner = [];
    const viewMode = "card";
    const newDataForm= {
        name: "",
        id: "",
        clazz: "",
        desc: "",
        formatStr: " ",
        ddl: "",
        forClazz: [ ],
        isPermitAny: true,
        isPermitLate: true,
        isPermitMulti: true,
        isVarifyName: true,
        isPermitChange: true,
      }
    return {
      titleBanner,
      ownClazz: [{
                id: 1909, name: "1909班", teacher: "KissesJun",
            }, {
                id: 1910, name: "1910班", teacher: "KissesJun"
            }, {
                id: 1911, name: "1911班", teacher: "KissesJun"
            },],
      viewMode,
      newDataForm,
      assigns: {
                    isEditing: this.isEditing,
                    name: "第一次作业",
                    id: "tab-1",
                    clazz: "1909班,1908班",
                    desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
                    formatStr: "数据结构-<班级>-<学号>.docx",
                    ddl: "2022-07-02T17:52",
                    forClazz: [1909, 1910],
                    isPermitAny: true,
                    isPermitLate: true, // isPermitMulti: true,
                    isVarifyName: true,
                },
      flags,
      formData: {},
    };
  }
}
</script>

<style scoped>

</style>