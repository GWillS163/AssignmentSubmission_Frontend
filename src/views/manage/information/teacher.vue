<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">教师管理</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary"
           data-bs-target="#addTeacher" data-bs-toggle="modal"
           role="button"><i
          class="fa fa-plus"></i> 新增教师 </a></div>
    </div>
    <div class="col">
      <div id="TableSorterCard" class="card">
        <div class="row">
          <div class="col">
            <div id="TableSorterCard-1" class="card">
              <div class="card-header py-3">
                <div class="row table-topper align-items-center">
                  <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
                    <p class="text-primary m-0 fw-bold">教师信息管理</p>
                  </div>
                  <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
                    <button class="btn btn-primary btn-sm  " @click="downNewTeacher" style="margin: 2px;" type="button">
                      <i class="fa fa-download" ></i>
                      下载教师信息
                    </button>
                  </div>
                </div>
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
                        <th style="width: 192.226px;">最近登陆</th>
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
                        <td style="width: 118.484px;">{{ teacher.mail }}</td>
                        <td>{{ teacher.phone }}</td>
                        <td>{{ teacher.lastLogin }}</td>
                        <td style="width: 333.7656px;">{{ teacher.registerTime }}</td>
                        <td class="text-center align-middle" style="max-height: 60px;height: 60px;width: 748px;">
                          <a
                            class="btn btnMaterial btn-flat primary semicircle"  @click="viewTeacher(teacher)" role="button"><i
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <Edit-teacher-form/>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import EditTeacherForm from "@/components/management/information/EditTeacherForm.vue";

export default {
  name: "teacher",
  components: {EditTeacherForm  },
  methods: {
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
    const getTeachers = async () => {
      // const res = await proxy.$api.getAllTeachers();
      // this.teachers = res.teachers;
      this.teachers = [{
                    name: "孟老师",
                    id: "19852331",
                    class: "1909班",
                    qq: "1274667113",
                    mail: "",
                    phone: "18801002716",
                    lastLogin: "2022-7-15 10:13:43",
                    registerTime: "2022-7-15 10:14:53"
                }, {
                    name: "赵老师",
                    id: "19852333",
                    class: "1909班",
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
      teachers
    }
  }
}
</script>

<style scoped>

</style>