<template>
  <b-container fluid>
    <b-row>
      <b-col col="12" sm="6" md="6">
        <h3 class="text-dark mb-4">教师管理</h3>
      </b-col>
      <b-col col="12" sm="6" md="6" class="text-end"
             style="margin-bottom: 30px; margin-right: 0;">
        <a class="btn btn-primary"
           data-bs-target="#addTeacher"
           data-bs-toggle="modal"
           role="button">
          <i class="fa fa-plus"></i> 新增教师
        </a>
      </b-col>
    </b-row>
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
    <b-row>
          <b-col>
            <div id="TableSorterCard-1" class="card">

              <b-card-header>
                <b-row>
                  <b-col col="12" sm="5" md="6" class="text-start" style=" padding: 5px 15px;">
                    <p class="text-primary m-0 fw-bold">
                      教师列表</p>
                  </b-col>
                  <b-col col="12" sm="7" md="6" class="text-end" style=" padding: 5px 15px;">
                    <b-button variant="primary" class="btn  btn-sm" @click="downNewTeacher" style="margin: 2px;" type="button">
                      <i class="fa fa-download" ></i>
                      下载教师信息
                    </b-button>
                  </b-col>
                </b-row>
              </b-card-header>

              <div class="table-responsive">
                <b-table
                  sticky-header="true"
                  bordered="true"
                  striped="true"
                  :current-page="currentPage"
                  :fields="fields"
                  :filter="filter"
                  :filter-included-fields="filterOn"
                  :items="teachers"
                  :per-page="perPage"
                  :sort-by.sync="sortBy"
                  :sort-desc.sync="sortDesc"
                  :sort-direction="sortDirection"
                  @filtered="onFiltered"
                  show-empty
                  stacked="md"
                  empty-filtered-text="条件太多了，未查询到教师"
                  empty-text="还没有教师哦"
                    >

            <template #cell(actions)="row">
                    <b-button class="mr-1 " variant="outline-primary" size="sm" @click="editClazz(row.item)">
                      编辑
                    </b-button>
                    <b-button size="sm" variant="outline-secondary" @click="row.toggleDetails">
                      {{ row.detailsShowing ? '隐藏' : '展示' }}详情
                    </b-button>
                    <b-button class="mr-1 " variant="outline-danger" size="sm" @click="deleteClazz(row.item)">
                      删除
                    </b-button>
                  </template>

                  <template #row-details="row">
                    <b-card>
                      <table class="detailTable">
                        <tr >
                          <th v-for="(value, key) in row.item">
                          {{ key}}
                          </th>
                        </tr>
                        <tr >
                          <td v-for="(value, key) in row.item">
                          {{ value}}
                          </td>
                        </tr>
<!--                                      <tr>-->
<!--                                        <td>Details showing:</td>-->
<!--                                        <td>{{ row.detailsShowing ? 'true' : 'false' }}</td>-->
<!--                                      </tr>-->
                      </table>
                    </b-card>
                  </template>
                </b-table>

              </div>
              <div class="row">
                <div class="col-12">
                  <div class="table-responsive">
                    <table id="ipi-table" class="table table-striped table tablesorter" >
                      <thead class="thead-dark">
                      <tr>
                        <th class="text-center" style="width: 124px;">姓名</th>
                        <th class="text-center">工号</th>
                        <th class="text-center" style="width: 101.5px;">班级(多选fk)</th>
                        <th>qq</th>
                        <th>mail</th>
                        <th>电话</th>
                        <th style="width: 192px;">最近登陆</th>
                        <th>注册时间</th>
                        <th class="text-center filter-false sorter-false">操作</th>
                      </tr>
                      </thead>
                      <tbody class="text-center">
                      <tr v-for="teacher in teachers">
                        <td style="width: 168px;">{{ teacher.name }}</td>
                        <td>{{ teacher.id }}</td>
                        <td style="width: 119px;">{{ teacher.class }}</td>
                        <td>{{ teacher.qq }}</td>
                        <td style="width: 118px;">{{ teacher.mail }}</td>
                        <td>{{ teacher.phone }}</td>
                        <td>{{ teacher.lastLogin }}</td>
                        <td style="width: 333px;">{{ teacher.registerTime }}</td>
                        <td class="text-center align-middle" style="max-height: 60px;height: 60px;width: 748px;">
                          <a
                              class="btn btnMaterial btn-flat primary semicircle" @click="viewTeacher(Teacher)" role="button"><i
                            class="far fa-eye"></i>
                        </a>
                          <a class="btn btnMaterial btn-flat success semicircle"
                                                          @click="editTeacher" role="button">
                            <i class="fas fa-pen"></i>
                          </a>
                          <a  @click="deleteTeacher"
                            class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover"
                            style="margin-left: 5px;"><i
                            class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
    </b-row>


  </b-container>
<!--  <div class="container-fluid">-->
<!--    <div class="col">-->
<!--      <div id="TableSorterCard" class="card">-->
<!--        <div class="row">-->
<!--          <div class="col">-->

<!--            <div id="TableSorterCard-1" class="card">-->
<!--              <div class="card-header py-3">-->
<!--                <div class="row table-topper align-items-center">-->
<!--                  <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0;padding: 5px 15px;">-->
<!--                    <p class="text-primary m-0 fw-bold">教师信息管理</p>-->
<!--                  </div>-->
<!--                  <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0;padding: 5px 15px;">-->
<!--                    <button class="btn btn-primary btn-sm  " @click="downNewTeacher" style="margin: 2px;" type="button">-->
<!--                      <i class="fa fa-download" ></i>-->
<!--                      下载教师信息-->
<!--                    </button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="row">-->
<!--                <div class="col-12">-->
<!--                  <div class="table-responsive">-->
<!--                    <table id="ipi-table" class="table table-striped table tablesorter" >-->
<!--                      <thead class="thead-dark">-->
<!--                      <tr>-->
<!--                        <th class="text-center" style="width: 124px;">姓名</th>-->
<!--                        <th class="text-center">工号</th>-->
<!--                        <th class="text-center" style="width: 101.5px;">班级(多选fk)</th>-->
<!--                        <th>qq</th>-->
<!--                        <th>mail</th>-->
<!--                        <th>电话</th>-->
<!--                        <th style="width: 192.226px;">最近登陆</th>-->
<!--                        <th>注册时间</th>-->
<!--                        <th class="text-center filter-false sorter-false">操作</th>-->
<!--                      </tr>-->
<!--                      </thead>-->
<!--                      <tbody class="text-center">-->
<!--                      <tr v-for="teacher in teachers">-->
<!--                        <td style="width: 168px;">{{ teacher.name }}</td>-->
<!--                        <td>{{ teacher.id }}</td>-->
<!--                        <td style="width: 119px;">{{ teacher.class }}</td>-->
<!--                        <td>{{ teacher.qq }}</td>-->
<!--                        <td style="width: 118.484px;">{{ teacher.mail }}</td>-->
<!--                        <td>{{ teacher.phone }}</td>-->
<!--                        <td>{{ teacher.lastLogin }}</td>-->
<!--                        <td style="width: 333.7656px;">{{ teacher.registerTime }}</td>-->
<!--                        <td class="text-center align-middle" style="max-height: 60px;height: 60px;width: 748px;">-->
<!--                          <a-->
<!--                              class="btn btnMaterial btn-flat primary semicircle" @click="viewTeacher(Teacher)" role="button"><i-->
<!--                            class="far fa-eye"></i>-->
<!--                        </a>-->
<!--                          <a class="btn btnMaterial btn-flat success semicircle"-->
<!--                                                          @click="editTeacher" role="button">-->
<!--                            <i class="fas fa-pen"></i>-->
<!--                          </a>-->
<!--                          <a  @click="deleteTeacher"-->
<!--                            class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover"-->
<!--                            style="margin-left: 5px;"><i-->
<!--                            class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>-->
<!--                      </tr>-->
<!--                      </tbody>-->
<!--                    </table>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <Edit-teacher-form/>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import EditTeacherForm from "@/components/management/information/EditTeacherForm.vue";

export default {
  name: "teacher",
  components: {EditTeacherForm  },
  methods: {

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    addNewTeacher() {
      console.log("addNewTeacher")
    },
    downNewTeacher() {
      console.log("downNewTeacher")
    },
    viewTeacher(id) {
      console.log("viewTeacher" + id)
    },
    editTeacher() {
      console.log("editTeacher")
    },
    deleteTeacher() {
      console.log("deleteTeacher")
    }
  },
  data() {
    const { proxy } = getCurrentInstance();
    const teachers = [];
    const totalRows = 0;
    const getTeachers = async () => {
      // const res = await proxy.$api.getAllTeachers();
      // this.teachers = res.teachers;
      this.teachers = [{
                    name: "孟老师",
                    id:"2",
                    teacherId: "19852331",
                    class: "1909班",
                    qq: "1274667113",
                    mail: "",
                    phone: "18801002716",
                    lastLogin: "2022-7-15 10:13:43",
                    registerTime: "2022-7-15 10:14:53",
        description: "测试老师"
                }, {
                    name: "赵老师",
                    id:"3",
                    teacherId: "19852333",
                    ownClasses: "1909班, 1910",
                    qq: "280324329",
                    mail: "19852331@czjtu.edu.cn",
                    phone: "19901002839",
                    lastLogin: "2022-7-15 10:15:58",
                    registerTime: "2022-7-15 10:16:00"
                }]
    };
    onMounted(() => {
      getTeachers();
    })
    return {
      teachers,

      fields: [
        {key: 'id', label: '数据ID', sortable: true},
        {key: 'teacherId', label: '工号', sortable: true},
        {key: 'ownClasses', label: '拥有班级', sortable: true,
          formatter: (value) => {
            if (value === 0) {
              return "管理员"
            } else if (!value in this.teachers) {
              return "未知"
            }
            return this.teachers[value]
          },
        },
        {key: 'description', label: '备注', sortable: true},
        {key: 'qq', label: 'QQ', sortable: true},
        {key: 'phone', label: '电话', sortable: true},
        {key: 'actions', label: '操作', sortable: false}
      ],

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

<style scoped lang="less">
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