<script setup>
import PublicViewPage from "@/components/public/PublicViewPage.vue";
import AssignEditForm from "@/components/management/information/AssignEditForm.vue";</script>
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" md="6" sm="6">
        <h3 class="text-dark mb-4">教师中心 （{{teacherName}}）</h3>
      </b-col>
      <b-col cols="12" md="6" sm="6">
        <div aria-label="Basic radio toggle button group" class="btn-group float-end" role="group">
          <input id="cardMode" :checked="viewMode === 'card'" autocomplete="off" class="btn-check" name="cardMode"
                 type="radio" @click="viewMode = 'card'"
          >
          <label class="btn btn-outline-primary" for="cardMode">卡片模式</label>
          <input id="tableMode" :checked="viewMode === 'table'" autocomplete="off" class="btn-check" name="tableMode"
                 type="radio" @click="viewMode = 'table'"
          >
          <label class="btn btn-outline-primary" for="tableMode">列表模式</label>

        </div>
      </b-col>

    </b-row>

    <public-view-page v-if="titleBanner.length" :banner="titleBanner" title=""/>

    <!--    if viewMode is table, show table, if not, show card-->
    <!--    use the if syntax of vue-->

    <b-card v-show="viewMode === 'card'" class="shadow mb-4" no-body>
      <b-card-header class="d-flex justify-content-between align-items-center">
        <h6 class="text-primary fw-bold m-0">作业详情</h6>

        <b-button class="text-end" size="sm"
                  :variant="isShowAssignDetail ? 'primary' : 'outline-primary' "
                  @click="showAssignDetail">
          <i class="fa fa-file"></i>
        </b-button>
      </b-card-header>
     <b-container>
        <b-row>
          <b-col cols="12" md="6" sm="6">
      </b-col>
        </b-row>
      </b-container>
     <b-spinner v-if="!assigns.length" label="加载中..."
               style="width: 10rem;height:10rem; align-self: center; "
                variant="primary"></b-spinner>

      <!--      <b-card-header>-->
      <b-tabs v-model="activeTab">
        <b-tab v-for="assign in assigns" :active="activeTab"
               :title="assign.briefName + getFilesLength(assign.files)"
               class="p-3">

          <b-list-group no-body>
            <b-list-group-item v-show="isShowAssignDetail">
              <assign-edit-form
                  :classes="classes"
                  :formData="assign"
                  :isOnlyView="true"
                  :teachers="teachers"
                  @submit="submit"
              ></assign-edit-form>
            </b-list-group-item>
            <b-list-group-item>
              <b-progress :value="assign.progress">
              </b-progress>
            </b-list-group-item>
          </b-list-group>

          <b-table
              :fields="fileFields"
              :filter-included-fields="filterOn"
              :items="assign.files"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              class="table table-hover table-striped table-bordered"
              empty-text="暂无提交"
              hover
              responsive
              show-empty
              striped
          ></b-table>
        </b-tab>
      </b-tabs>
    </b-card>

    <!--    TODO: 改成作业+ 样式的展示形式.-->
    <b-card v-show="viewMode === 'table'" no-body>

      <b-card-header class="d-flex justify-content-between align-items-center">
        <h6 class="text-primary fw-bold m-0">作业列表</h6>
      </b-card-header>
      <b-card-body>
        <!--    Pagination-->
        <b-row>
          <b-col class="my-1" md="3" sm="5">
            <b-form-group
                class="mb-0"
                label="Per page"
                label-align-sm="end"
                label-cols-lg="3"
                label-cols-md="4"
                label-cols-sm="6"
                label-for="per-page-select"
                label-size="sm"
            >
              <b-form-select
                  id="per-page-select"
                  v-model="perPage"
                  :options="pageOptions"
                  size="sm"
              ></b-form-select>
            </b-form-group>
          </b-col>

          <b-col class="my-1" md="9" sm="7">
            <b-pagination
                v-model="currentPage"
                :per-page="perPage"
                :total-rows="totalRows"
                align="fill"
                class="my-0"
                first-text="⏮"
                last-text="⏭"
                next-text="⏩"
                prev-text="⏪"
                size="sm"
            ></b-pagination>
          </b-col>
        </b-row>

        <!--    List Card-->
        <div class="table-responsive">
          <b-table
              :current-page="currentPage"
              :fields="fields"
              :filter-included-fields="filterOn"
              :items="assigns"
              :per-page="perPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              empty-filtered-text="条件太多了，未查询到作业"
              empty-text="还没有作业哦"
              show-empty
              stacked="md"
              sticky-header="true"
              striped="true"
              @filtered="onFiltered"
          >

            <template #cell(actions)="row">
              <b-button size="sm" variant="outline-secondary" @click="row.toggleDetails">
                {{ row.detailsShowing ? '缩略' : '展示' }}
              </b-button>
            </template>

            <template #row-details="row">
              <div class="table-responsive">
                <b-table
                    :current-page="currentPage"
                    :fields="fileFields"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    :items="row.item.files"
                    :per-page="perPage"
                    bordered="true"
                    empty-text="还没有文件提交哦"
                    show-empty
                    stacked="md"
                    sticky-header="true"
                    striped="true"
                    @filtered="onFiltered"
                >
                </b-table>
              </div>


            </template>
          </b-table>

        </div>
      </b-card-body>
    </b-card>

  </b-container>

</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
import handleAssignCard from "@/assets/customed/handleAssignCard";

export default {
  name: "center",
  methods: {
    handleViewMode(mode) {
      this.viewMode = mode;
    },
    getFilesLength(files) {
      let length = 0
      if (!files) {
        return ""
      } else {
        length = files.length
      }
      return "(" + length + ")"
    },

    addNew() {
      this.editMethod = "add";
      this.modal = !this.modal // toggle modal
    },
    edit(assign) {
      this.editMethod = "edit";
      this.modal = !this.modal
      this.formData = assign
    },
    submit() {
      console.log("submit");
      console.log(this.formData);
      this.modal = !this.modal

      if (this.editMethod === "add") {
        this.postAssign(this.formData);
      } else {
        this.putAssign(this.formData);
      }
    },
    downAssigns() {
      this.$api.testDownload();
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    showAssignDetail() {
      this.isShowAssignDetail = !this.isShowAssignDetail;
    }
  },
  data() {
    const assigns = ref([]);
    const classes = [];
    const teachers = [];
    const {proxy} = getCurrentInstance();
    const totalRows = 0;
    const store = proxy.$store;
    const isShowAssignDetail = true;

    const userInfo = {
      type: 'admin',
      id: 1
    }
    const getUserInfo = () => {
      this.userInfo = store.getters.userInfo;
      console.log("userInfo", this.userInfo)
    }
    const getClasses = async () => {
      let res = await proxy.$api.getClassesMap(userInfo);

      console.log(" classesMap", res.data);
      this.classes = res.data;
    };

    const getTeacherData = async () => {
      const res = await proxy.$api.getAllTeachersMapping();
      console.log("TeachersMap:", res.data)
      this.teachers = res.data;

    }

    const decorateBeforeSubmit = () => {
      this.formData.ddl = handleAssignCard.combineTime(this.formData.ddlDate, this.formData.ddlTime);
      this.formData.createTime = handleAssignCard.combineTime(this.formData.createdDate, this.formData.createdTime);
      delete this.formData.ddlDate;
      delete this.formData.ddlTime;
      delete this.formData.createdDate;
      delete this.formData.createdTime;

      delete this.formData.clazzInfo;
      delete this.formData.files;
    }

    const getFilesByAssignId = async (assignId) => {
      const res = await proxy.$api.getAssignFiles(assignId);
      // console.log("getFilesByAssignId", res.data);
      return res.data;
    }
    const getAssigns = async () => {
      let res;
      if (userInfo.type === 'admin') {
        res = await proxy.$api.getAssignsByAdmin();
      } else if (userInfo.type === 'teacher') {
        res = await proxy.$api.getAssignsByTeacher(userInfo.id);
      }
      console.log("更新作业格式", res)

      res.data.forEach(assign => {
        getFilesByAssignId(assign.id).then(files => {
          if (!files) {
            return assign.files = [];
          }
          assign.files = files;
        })
        getAssignProgress(assign.id).then(progress => {
          assign.progress = progress;
        })
        if (assign.ddl) {
          const ddlSet = handleAssignCard.divideTime(assign.ddl);
          assign.ddlDate = ddlSet[0];
          assign.ddlTime = ddlSet[1];
        }
        if (assign.createTime) {
          const createTimeSet = handleAssignCard.divideTime(assign.createTime);
          assign.createdDate = createTimeSet[0];
          assign.createdTime = createTimeSet[1];
        }
      })
      assigns.value = res.data;
      console.log("更新作业格式", assigns.value)
      this.totalRows = res.data.length;
    }
    const getAssignProgress = async (assignId) => {
      const res = await proxy.$api.getAssignProgress(assignId);
      // console.log("getAssignProgress", res.data);
      return res.data;
    }
    const postAssign = async () => {
      console.log("Post Assign", this.formData);
      decorateBeforeSubmit();
      await proxy.$api.postAssign(this.formData);
      await getAssigns();
    }
    const putAssign = async () => {
      console.log("Put Assign", this.formData);
      decorateBeforeSubmit();
      await proxy.$api.putAssign(this.formData);
      await getAssigns();
    }
    const deleteAssign = async (assign) => {
      console.log("delete", assign);
      const res = await proxy.$api.deleteAssign(assign);
      console.log("delete", res);
      await getAssigns();
    }
    onMounted(() => {
      getAssigns();
      getClasses();
      getTeacherData();
      getUserInfo();
    })
    const titleBanner = [];
    const viewMode = "card"; // card or table
    return {
      activeTab: 0,
      postAssign,
      deleteAssign,
      putAssign,
      getFilesByAssignId,
      detailKeys: ["userName", "fileSize", "uploadTime"],
      isShowAssignDetail,
      titleBanner,
      viewMode,
      assigns,
      teachers,
      classes,
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filterOn: [],
      detailBlockList: ["_showDetails"],
      // classes,
      formData: {
        id: 28,
        clazzId: 1,
        teacherId: 1,
        ddlDate: "2023-03-09",
        ddlTime: "21:26:22",
        createdDate: null,
        createdTime: null,
        ddl: "",
        createTime: "",
        briefName: "级人又信人法",
        description: "土标精后部万则实明会情说更飞。",
        fileNameRule: "强报音质运积子加_第一次作业_今三片则",
        permitAnonymous: true,
        fileNameVerify: false,
        timeoutSubmit: true,
      },
      fileFields: [
        {
          key: 'userName', label: '用户',
          formatter: (value) => {
            return value ? value : '-';
          },
        },
        {key: 'rawName', label: '文件名'},
        {
          key: 'fileSize', label: '大小',
          formatter: (value) => {
            return handleAssignCard.formatFileSize(value);
          }
        },
        {key: 'uploadTime', label: '上传时间', sortable: true},
      ],
      fields: [
        {key: 'actions', label: '操作', sortable: false},
        // {key: 'user_id', label: '数据ID', sortable: true},
        {key: 'briefName', label: '简述', sortable: true},
        {
          key: 'clazzId', label: '班级', sortable: true,
          formatter: (value) => {
            if (!value || !(value in this.classes)) {
              return "-"
            }
            return this.classes[value];
          }
        },
          // progress
        {key: 'progress', label: '进度', sortable: true,
        formatter: (value) => {
          if (!value) {
            return "-"
          }
          return value + "%";
        }},
        {key: 'ddl', label: 'DDL', sortable: true},
        {key: 'description', label: '描述', sortable: true},
        // {key: 'fileNameRule', label: '文件名规则', sortable: true},
        {
          key: 'teacherId', label: '创建的教师', sortable: true,
          formatter: (value) => {
            if (!value || !(value in this.teachers)) {
              return "-"
            }
            return this.teachers[value];
          }
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>