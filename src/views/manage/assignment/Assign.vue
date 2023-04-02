<template>

  <b-modal
      v-model="modal"
      :title="editMethod ==='edit' ? '编辑作业' : '新增作业'"
      cancel-title="取消"
      ok-title="确认"
      @ok="submit"
  >

    <b-form>
      <b-row>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-1" label="数据ID" label-for="input-1">
            <b-form-input id="input-1" v-model="formData.id" disabled required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-8" label="创建日期" label-for="input-8" type="datetime-local">
            <b-form-input type="date" v-model="formData.createdDate" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-8" label="创建时间" label-for="input-8" type="datetime-local">
            <b-form-input type="time" v-model="formData.createdTime" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col  md="4">
          <b-form-group id="input-group-5" label="所属班级" label-for="input-5">
              <b-form-select v-model="formData.clazzId"  type="number" :options="classes"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="8">
          <b-form-group id="input-group-2" label="简名" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.briefName" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="input-group-5" label="所属教师" label-for="input-5">
              <b-form-select v-model="formData.teacherId"  type="number" :options="teachers"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group id="input-group-8" label="截止日期" label-for="input-8" type="datetime-local">
            <b-form-input type="date" v-model="formData.ddlDate" >22</b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group id="input-group-8" label="截止时间" label-for="input-8" type="datetime-local">
            <b-form-input type="time" v-model="formData.ddlTime" ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group  label="文件名格式" label-for="input-10">
            <b-form-input   v-model="formData.fileNameRule" required></b-form-input>
          </b-form-group>
        </b-col>
<!--        hr line -->
        <b-col md="12">
          <hr>
        </b-col>
        <b-col md="4" >
          <b-form-group label="作业公开" label-for="input-4">
            <b-form-checkbox v-model="formData.permitAnonymous"  size="lg" switch ></b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group  label="文件名校验" label-for="input-4">
            <b-form-checkbox v-model="formData.fileNameVerify"  size="lg" switch ></b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group  label="过时可交" label-for="input-4">
            <b-form-checkbox v-model="formData.timeoutSubmit"  size="lg" switch ></b-form-checkbox>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group id="input-group-10" label="描述" label-for="input-10">
            <b-form-input id="input-10" v-model="formData.description" required></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>
  <b-container fluid>
    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4">作业管理 ({{ assigns.length}})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <a class="btn btn-primary"
           role="button"
           @click="addNew">
          <i class="fa fa-plus"></i> 新增作业
        </a>
      </b-col>

    </b-row>
    <!--    Pagination-->
    <b-row>
      <b-col class="my-1" md="2" sm="5">
        <b-form-group
            class="mb-0"
            label="Per page"
            label-align-sm="right"
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
    <b-row>
      <b-col>
        <div id="TableSorterCard-1" class="card">
          <b-card-header>
            <b-row>
              <b-col class="text-start" col="12" md="6" sm="5" style=" padding: 5px 15px;">
                <p class="text-primary m-0 fw-bold">
                  作业格式管理</p>
              </b-col>
              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">
                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"
                          @click="downAssigns">
                  <i class="fa fa-download"></i>
                  下载作业格式
{{ typeof (formData.clazzId) }}
                </b-button>
              </b-col>
            </b-row>
          </b-card-header>
          <div class="table-responsive">
            <b-table
                :current-page="currentPage"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                :items="assigns"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                bordered="true"
                empty-filtered-text="条件太多了，未查询到作业"
                empty-text="还没有作业哦"
                show-empty
                stacked="md"
                sticky-header="true"
                striped="true"
                @filtered="onFiltered"
            >

              <template #cell(actions)="row">
                <b-button class="mr-1 " size="sm"
                          variant="outline-primary"
                          @click="edit(row.item)"
                > 编辑
                </b-button>
                <b-button size="sm" variant="outline-secondary" @click="row.toggleDetails">
                  {{ row.detailsShowing ? '隐藏' : '展示' }}更多
                </b-button>
                <b-button class="mr-1 " size="sm" variant="outline-danger" @click="deleteAssign(row.item)">
                  删除
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <table class="detailTable">
                    <tr>
                      <th v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">
                        {{ key }}
                      </th>
                    </tr>
                    <tr>
                      <td v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">
                        {{ value }}
                      </td>
                    </tr>
                  </table>
                </b-card>
              </template>
            </b-table>

          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
import {getCurrentInstance, onMounted} from "vue";

export default {
  name: "assign",
  methods: {
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
  },
  data() {
    const assigns = [];
    const classes = [];
    const teachers = [];
    const {proxy} = getCurrentInstance();
    const totalRows = 0;
    const userInfo = {
      type: 'admin',
      id: 1
    }
    const getClasses = async () => {
      let res = await proxy.$api.getClassesMap(userInfo);

      console.log(" classesMap", res.data);
      this.classes = res.data;
    };

    const getTeacherData = async () => {
      const res = await proxy.$api.getAllTeachersMapping();
      console.log("TeachersMap:",  res.data)
      this.teachers = res.data;

    }

    const combineTime = (date, time) => {
      if (date && time) {
        return date + " " + time;
      } else if (date) {
        return date;
      } else if (time) {
        return time;
      } else {
        return "";
      }
    }
    const divideTime = (time) => {
      // console.log("time", time)
      if (time) {
        return time.split(" ");
      } else {
        return ["", ""];
      }
    }

    const decorateBeforeSubmit = () => {
      this.formData.ddl = combineTime(this.formData.ddlDate, this.formData.ddlTime);
      this.formData.createTime = combineTime(this.formData.createdDate, this.formData.createdTime);
      delete this.formData.ddlDate;
      delete this.formData.ddlTime;
      delete this.formData.createdDate;
      delete this.formData.createdTime;

      delete this.formData.clazzInfo;
      delete this.formData.files;
    }

    const getAssigns = async () => {
      let res;
      if (userInfo.type === 'admin') {
         res = await proxy.$api.getAssignsByAdmin();
      } else if (userInfo.type === 'teacher') {
         res = await proxy.$api.getAssignsByTeacher(userInfo.id);
      }
        this.assigns = res.data;
      console.log("更新作业格式", res)

      res.data.forEach(assign => {
        if (assign.ddl) {
          const ddlSet = divideTime(assign.ddl);
          assign.ddlDate = ddlSet[0];
          assign.ddlTime = ddlSet[1];
        }
        if (assign.createTime) {
          const createTimeSet = divideTime(assign.createTime);
          assign.createdDate = createTimeSet[0];
          assign.createdTime = createTimeSet[1];
        }
      })

      this.assigns = res.data;
      this.totalRows = res.data.length;
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
    })
    return {
      postAssign,
      deleteAssign,
      putAssign,
      assigns,
      teachers,
      classes,
      editMethod: "edit",
      modal: false,
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
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

      fields: [
        // {key: 'user_id', label: '数据ID', sortable: true},
        {key: 'briefName', label: '简述', sortable: true},
        {
          key: 'clazzId', label: '班级', sortable: true,
          formatter: (value) => {
            if (!value  || !(value in this.classes)) {
              return "-"
            }
            return this.classes[value];
          }
        },
        {key: 'ddl', label: 'DDL', sortable: true},
        {key: 'description', label: '描述', sortable: true},
        {key: 'fileNameRule', label: '文件名规则', sortable: true},
        {key: 'teacherId', label: '创建的教师', sortable: true,
          formatter: (value) => {
            if (!value || !(value in this.teachers)) {
              return "-"
            }
            return this.teachers[value];
          }
        },
        {key: 'actions', label: '操作', sortable: false}
      ],
    }
  }
}
</script>

<style scoped>

</style>