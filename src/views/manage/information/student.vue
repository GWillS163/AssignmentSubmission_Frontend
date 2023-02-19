<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的学生</h3>
      </div>

      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button type="button" class="btn btn-primary"
                  data-bs-target="#addStudent" data-bs-toggle="modal" >
            <i class="fa fa-plus"></i> 新增学生
          </button>
          <button type="button" class="btn btn-primary"
                  data-bs-target="#addBatchStudentForm" data-bs-toggle="modal" >
            <i class="fa fa-file-excel"></i> 批量新增
          </button>
        </div>
      </div>
    </div>
    <usecsv-button importerKey="your-importer-key">Import Data</usecsv-button>
  <add-batch-student :classes="classes"/>
    <div id="TableSorterCard-1" class="card">
      <div class="card-header py-3">
        <div class="row table-topper align-items-center">
          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
            <p class="text-primary m-0 fw-bold">学生信息管理</p>
          </div>
          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
            <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button"
            @click="addNewStudent"
            >
              <i class="fa fa-download"></i>
              下载学生清单</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table id="ipi-table" class="table table-striped table tablesorter">
              <thead class="thead-dark">
              <tr>
                <th class="text-center" style="width: 124px;">姓名</th>
                <th class="text-center">学号</th>
                <th class="text-center" style="width: 101.5px;">班级(fk)</th>
                <th class="text-center">qq</th>
                <th class="text-center">mail</th>
                <th class="text-center">电话</th>
                <th class="text-center" style="width: 192px;">最近登陆</th>
                <th class="text-center">注册时间</th>
                <th class="text-center filter-false sorter-false">操作</th>
              </tr>
              </thead>
              <tbody class="text-center">
              <tr v-for="student in students">
                <td style="width: 168px;">{{ student.name }}</td>
                <td>{{ student.id }}</td>
                <td style="width: 119px;">{{ student.class }}</td>
                <td>{{ student.qq }}</td>
                <td style="width: 118px;">{{ student.mail }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.lastLogin }}</td>
                <td style="width: 333px;">{{ student.registerTime }}</td>
                <td class="text-center align-middle" style="max-height: 60px;height: 60px;width: 748px;">
                  <a class="btn btnMaterial btn-flat primary semicircle" @click="viewStudent" role="button">
                    <i class="far fa-eye"></i>
                  </a>
                  <a class="btn btnMaterial btn-flat success semicircle" @click="editStudent" role="button">
                    <i class="fas fa-pen"></i>
                  </a>
                  <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover"
                      @click="deleteStudent" role="button" style="margin-left: 5px;">
                    <i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
              <page-spliter/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <edit-student-form :classes="classes"/>
</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";
import editStudentForm from "@/components/management/information/EditStudentForm.vue";
import {getCurrentInstance, onMounted} from "vue";
import AddBatchStudent from "@/components/management/information/AddBatchStudent.vue";

export default {
  name: "student",
  components: {AddBatchStudent, PageSpliter, editStudentForm},
  methods: {
    addNewStudent() {
      console.log("addNewStudent")
    },
    viewStudent() {
      console.log("viewStudent")
    },
    editStudent() {
      console.log("editStudent")
    },
    deleteStudent() {
      console.log("deleteStudent")
    }
  },
  data () {
    const { proxy } = getCurrentInstance();
    const students = [];
    const getStudents = async () => {
      const res = await proxy.$api.getStudentsByTeacherId(127);
      this.students = res.students;
    };
    onMounted(() => {
      getStudents();
    })
    return {
      students,
      classes: [
        {
          id: 1909,
          name: "软件工程1909班"
        },
        {
          id: 1910,
          name: "软件工程1910班"
        },
        {
          id: 127,
          name: "孟老师天才班"
        }
      ],
      teachers: [
        {
          id: 1,
          name: "张三老师"
        },
        {
          id: 2,
          name: "李四老师"
        },
        {
          id: 127,
          name: "孟老师"
        }
      ],
      formData: {
        id: 0,
        name: "孟骏清",
        studentId: 19852331,
        classId: 1909,
        qq: "123456789",
        mail: "gwills@qq.com",
        phone: "123456789"
      }
    }
  }
}
</script>

<style scoped>

</style>