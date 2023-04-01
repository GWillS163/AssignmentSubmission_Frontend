<template>

  <b-modal
      v-model="modal"
      :title="editMethod ==='edit' ? '编辑学生' : '新增学生'"
      cancel-title="取消"
      ok-title="确认"
      @ok="submit"
  >

    <b-form>
      <b-row>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-1" label="数据ID" label-for="input-1">
            <b-form-input id="input-1" v-model="formData.userId" disabled required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col :md="editMethod ==='edit' ? 4 : 6">
          <b-form-group id="input-group-2" label="姓名" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.username" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col :md="editMethod ==='edit' ? 4 : 6">
          <b-form-group id="input-group-5" label="所属班级" label-for="input-5">
              <b-form-select v-model="formData.clazzId" :options="classes"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-5" label="学号" label-for="input-5">
            <b-form-input  v-model="formData.studentId" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-5" label="邮箱" label-for="input-5">
            <b-form-input   v-model="formData.mail" required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">

          <b-form-group id="input-group-5" label="密码" label-for="input-5">
            <b-form-input required type="password"
             v-model="formData.password"
            :state="lifeNameState"
            aria-describedby="input-live-help input-live-feedback"
            ></b-form-input>
          </b-form-group>
          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Enter at least 3 letters
          </b-form-invalid-feedback>

        </b-col>
        <b-col md="6">
          <b-form-group  label="密码确认" label-for="input-5">
            <b-form-input v-model="passwordAgain" required type="password"


            :state="lifeNameState"></b-form-input>
          </b-form-group>
        </b-col>

<!--        hr line -->
        <b-col md="12">
          <hr>
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
          <b-form-group id="input-group-9" label="作业数" label-for="input-9">
            <b-form-input id="input-9" v-model="formData.filesCount" disabled></b-form-input>
          </b-form-group>
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
        <h3 class="text-dark mb-4">学生管理 ({{ students.length}})</h3>
      </b-col>

      <b-col class="text-end" col="12" md="6" sm="6">
        <div class="pull-right row " style="margin-right: 20px">
          <a class="col-6 col-xl-6 btn btn-primary "
             type="button"
             @click="addNew"
          >
            <i class="fa fa-plus"></i> 新增学生
          </a>
          <usecsv-button v-slot="slotProps"
                         :metadata="'{classId: 1}'" :user="'{userId: 19852331}'"
                         class="col-6 col-xl-6"
                         importerKey="4bbfb06a-c55e-4c25-bdd4-29ed68873317"
          >
            <button class="btn btn-outline-primary " style="width: 120%" @click="slotProps.openModal()">
              <i class="fa fa-file-excel"></i>
              批量新增
            </button>
          </usecsv-button>
        </div>
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
                  学生信息管理</p>
              </b-col>
              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">
                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"
                          @click="downStudents">
                  <i class="fa fa-download"></i>
                  下载学生信息
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
                :items="students"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                bordered="true"
                empty-filtered-text="条件太多了，未查询到学生"
                empty-text="还没有学生哦"
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
                <b-button class="mr-1 " size="sm" variant="outline-danger" @click="deleteStudent(row.item)">
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


</template>

<script>
import {computed, getCurrentInstance, onMounted, ref} from "vue";
import PageSpliter from "@/components/management/PageSpliter.vue";
import editStudentForm from "@/components/management/information/EditStudentForm.vue";

import AddBatchStudent from "@/components/management/information/AddBatchStudent.vue";

export default {
  name: "student",
  components: {AddBatchStudent, PageSpliter, editStudentForm},
  methods: {
    addNew() {
      this.editMethod = "add";
      this.modal = !this.modal // toggle modal
    },
    edit(student) {
      this.editMethod = "edit";
      this.modal = !this.modal
      this.formData = student
      this.formData.filesCount = student.files.length
      this.passwordAgain = student.password

    },
    submit() {
      console.log("submit");
      console.log(this.formData);
      this.modal = !this.modal

      delete this.formData.clazzInfo;
      delete this.formData.files;
      if (this.editMethod === "add") {
        this.postStudent(this.formData);
      } else {
        this.putStudent(this.formData);
      }
    },
    addNewStudent() {
      console.log("addNewStudent")
    },
    viewStudent() {
      console.log("viewStudent")
    },
    editStudent() {
      console.log("editStudent")
    },
    // deleteStudent() {
    //   console.log("deleteStudent")
    // },

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onData: function (data) {
      console.log(data);
    },
    onClose: function () {
      console.log("Import window close");
    },
    downStudents() {
      console.log("downStudents")
    },
  },
  data() {

    const {proxy} = getCurrentInstance();
    const students = [];
    const classes = [];
    const totalRows = 0;
    const userInfo = {
      type: 'admin',
      id: 1
    }
    const getClasses = async () => {
      let res;
      if (userInfo.type === 'admin') {
        res = await proxy.$api.getClassesByAdmin(userInfo);
        console.log("获取admin classes", res)
      } else if (userInfo.type === 'teacher') {
        res = await proxy.$api.getClassesByTeacherId(userInfo.id);
        console.log("获取teacher classes", res)
      }
      for (let each of res.data) {
        this.classes.push({
          text: each.clazzName,
          value: each.clazzId
        })
      }
      console.log("更新！ classes", classes);
      // this.classes.value = res.data;
    };
    const getStudents = async () => {
      // const res = await proxy.$api.getStudentsByTeacherId(127);
      const res = await proxy.$api.getStudentsByAdmin();
      console.log("更新！ students", res)
      this.students = res.data;
      this.totalRows = this.students.length;
    };
    const postStudent = async (student) => {
      const res = await proxy.$api.postStudent(student);
      // console.log("postStudent", res);
      await getStudents();
    };
    const putStudent = async (student) => {
      const res = await proxy.$api.putStudent(student);
      // console.log("putStudent", res);
      await getStudents();
    };
    const deleteStudent = async (student) => {
      console.log("deleteStudent", student)
      const res = await proxy.$api.deleteStudent(student);
      // console.log("deleteStudent", res);
      await getStudents();
    };

    onMounted(() => {
      getStudents();
      getClasses();
    })
    const lifeName = ref('')
    const passwordAgain = ref('')
    const lifeNameState = computed(() => (
        this.formData.password === passwordAgain.value))
    return {
      getStudents,
      postStudent,
      putStudent,
      deleteStudent,
      lifeName,
      passwordAgain,
      lifeNameState,
      passwordVarify: null,
      students,
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
      classes,
      formData: {
        userId: 0,
        clazzInfo: [],
        username: "孟骏清",
        password: "234234",
        studentId: 19852331,
        clazzId: 1909,
        qq: "123456789",
        mail: "gwills@qq.com",
        phone: "123456789",
        description: "",
        files: [],
        registerTime: "",
        lastLoginTime: "",
      },

      fields: [
        // {key: 'user_id', label: '数据ID', sortable: true},
        {key: 'username', label: '姓名', sortable: true},
        {
          key: 'clazzInfo', label: '班级', sortable: true,
          formatter: (value) => {
            if (!value) {
              return "-"
            }
            // else if ( value.clazzName === null) {
            //   return "-"
            // }
            return value.clazzName
          }
        },
        {key: 'phone', label: '手机号', sortable: true},
        {key: 'mail', label: '邮箱', sortable: true},
        {
          key: 'files', label: '作业数', sortable: true,
          formatter: (value) => {
            if (!value) {
              return "-"
            }else if (value.length === 0) {
              return "-"
            }
            return value.length
          },
        },
        {key: 'description', label: '备注', sortable: true},
        // {key: 'qq', label: 'QQ', sortable: true},
        // {key: 'phone', label: '电话', sortable: true},
        {key: 'actions', label: '操作', sortable: false}
      ],
      detailFields: [

      ]
    }
  }
}
</script>

<style scoped>
#importBtn {
  /*width: 100px;*/
  /*height: 30px;*/
  /*color: #fff;*/
  /*background-color: #027ad6;*/
  /*box-shadow: 0 32px 64px rgba(0, 0, 0, 0.07);*/
  /*font: 200 20px sans-serif;*/
  /*text-align: center;*/
  /*border: none;*/
  /*border-radius: 3px;*/
}
</style>