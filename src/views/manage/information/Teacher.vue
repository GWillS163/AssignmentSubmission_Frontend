<template>

  <b-modal
      v-model="modal"
      :title="editMethod ==='edit' ? '编辑教师' : '新增教师'"
      cancel-title="取消"
      ok-title="确认"
      @ok="submit"
  >
    <b-form>
      <b-row>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-1" label="教师ID" label-for="input-1">
            <b-form-input id="input-1" v-model="formData.id" disabled required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col :md="editMethod ==='edit' ? 4 : 8">
          <b-form-group id="input-group-2" label="姓名" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.name" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="input-group-5" label="邮箱" label-for="input-5">
            <b-form-input id="input-5" v-model="formData.mail" required></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-7" label="最近登陆" label-for="input-7" type="datetime-local">
            <b-form-input id="input-7" v-model="formData.lastLoginTime" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-8" label="注册时间" label-for="input-8" type="datetime-local">
            <b-form-input id="input-8" v-model="formData.registerTime" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-9" label="拥有班级" label-for="input-9">
            <b-form-input id="input-9" v-model="formData.classIds" disabled></b-form-input>
          </b-form-group>
        </b-col>
<!--        hr line -->
        <b-col md="12">
          <hr>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-4" label="QQ" label-for="input-4">
            <b-form-input id="input-4" v-model="formData.qq" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-6" label="电话" label-for="input-6">
            <b-form-input id="input-6" v-model="formData.phone" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="input-group-3" label="工号" label-for="input-3">
            <b-form-input id="input-3" v-model="formData.workId" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="8">
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
        <h3 class="text-dark mb-4">教师管理 ({{teachers.length}})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <a class="btn btn-primary"
           role="button"
           @click="addNew">
          <i class="fa fa-plus"></i> 新增教师
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
                  教师列表</p>
              </b-col>
              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">
                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"
                          @click="downNewTeacher">
                  <i class="fa fa-download"></i>
                  下载教师信息
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
                :items="teachers"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                bordered="true"
                empty-filtered-text="条件太多了，未查询到教师"
                empty-text="还没有教师哦"
                show-empty
                stacked="md"
                sticky-header="true"
                striped="true"
                @filtered="onFiltered"
            >

              <template #cell(actions)="row">
                <b-button class="mr-1 " size="sm"
                          variant="outline-primary"
                          @click="editTeacher(row.item)"
                > 编辑
                </b-button>
                <b-button size="sm" variant="outline-secondary" @click="row.toggleDetails">
                  {{ row.detailsShowing ? '隐藏' : '展示' }}详情
                </b-button>
                <b-button class="mr-1 " size="sm" variant="outline-danger" @click="deleteTeacher(row.item)">
                  删除
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <table class="detailTable">
                    <tr>
                      <th v-for="(value, key) in row.item">
                        {{ key }}
                      </th>
                    </tr>
                    <tr>
                      <td v-for="(value, key) in row.item">
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
<!--  <Edit-teacher-form/>-->
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import EditTeacherForm from "@/components/management/information/EditTeacherForm.vue";

export default {
  name: "teacher",
  components: {EditTeacherForm},
  methods: {
    addNew() {
      this.editMethod = "add";
      this.modal = !this.modal

    },
    editTeacher(teacher) {
      this.editMethod = "edit";
      this.modal = !this.modal
      this.formData = teacher
    },
    submit() {
      console.log(this.formData);
      if (this.editMethod === "add") {
        this.postTeacher(this.formData);
      } else {
        this.putTeacher(this.formData);
      }
    },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    downNewTeacher() {
      console.log("downNewTeacher")
      this.$api.testDownload();
    },
  },
  data() {
    const {proxy} = getCurrentInstance();
    const teachers = [];
    const totalRows = 0;
    const editMethod = "";
    const getTeachers = async () => {
      const res = await proxy.$api.getAllTeachers();
      console.log("更新！ Teacher 收到的res", res.data)
      this.teachers = res.data;
      this.totalRows = this.teachers.length;
    };
    const postTeacher = async (teacher) => {
      delete teacher.createTime;
      delete teacher.lastLoginTime;
      const res = await proxy.$api.postTeacher(teacher);
      // console.log("postTeacher 收到的res", res.data)
      await getTeachers();
    };
    const putTeacher = async (teacher) => {
      console.log("触发putTeacher")
      const res = await proxy.$api.putTeacher(teacher);
      // console.log("putTeacher 收到的res", res.data)
      await getTeachers();

    };
    const deleteTeacher = async (teacher) => {
      const res = await proxy.$api.deleteTeacher(teacher.id);
      // console.log("deleteTeacher 收到的res", res.data)
      await getTeachers();
    };
    onMounted(() => {
      getTeachers();
    })
    return {
      getTeachers,
      postTeacher,
      putTeacher,
      deleteTeacher,
      teachers,
      editMethod,
      formData: {
        name: "",
        workId: "",
        ownClasses: "",
        description: "",
        qq: "",
        phone: "",
        createTime: "2023-03-15 16:30:00",
        lastLoginTime: "2023-03-15 16:30:00",
      },

      fields: [
        // {key: 'id', label: '数据ID', sortable: true},
        {key: 'name', label: '姓名', sortable: true},
        {key: 'workId', label: '工号', sortable: true},
        {
          key: 'ownClasses', label: '拥有班级', sortable: true,
          formatter: (value) => {
            if (value === 0) {
              return "管理员"
            } else if (!value in this.teachers) {
              return "不在教师列表中"
            } else if (value === null) {
              return "未知"
            }
            return this.teachers[value]
          },
        },
        {key: 'description', label: '备注', sortable: true},
        // {key: 'qq', label: 'QQ', sortable: true},
        // {key: 'phone', label: '电话', sortable: true},
        {key: 'actions', label: '操作', sortable: false}
      ],
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
    }
  },

}
</script>

<style lang="less" scoped>
.detailTable {
  table, th, td {
    border: 0 solid grey;
    margin: 20px;
  }

  th {
    width: 10%;
  }
}

</style>