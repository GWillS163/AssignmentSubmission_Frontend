<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的学生</h3>
      </div>

      <div class=" col-7 col-sm-6 col-md-6 ">
        <div class="pull-right row " style="margin-right: 20px">
            <button type="button"
                    class="col-6 col-xl-6 btn btn-primary "
                  data-bs-target="#addStudent" data-bs-toggle="modal" >
              <i class="fa fa-plus"></i> 新增学生
            </button>
            <usecsv-button class="col-6 col-xl-6"
                           importerKey="4bbfb06a-c55e-4c25-bdd4-29ed68873317" v-slot="slotProps"
                         :user="'{userId: 19852331}'"
                         :metadata="'{classId: 1}'"
          >
              <button class="btn btn-outline-primary "  @click="slotProps.openModal()" style="width: 120%" >
                <i class="fa fa-file-excel"></i>
                批量新增</button>
        </usecsv-button>
        </div>
      </div>
    </div>

<!--    <div id="usecsv-importer-inline-wrapper" />-->
<!--  <add-batch-student :classes="classes"/>-->
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
                <td style="width: 168px;">{{ Student.name }}</td>
                <td>{{ Student.id }}</td>
                <td style="width: 119px;">{{ Student.class }}</td>
                <td>{{ Student.qq }}</td>
                <td style="width: 118px;">{{ Student.mail }}</td>
                <td>{{ Student.phone }}</td>
                <td>{{ Student.lastLogin }}</td>
                <td style="width: 333px;">{{ Student.registerTime }}</td>
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
import {getCurrentInstance, onMounted, ref} from "vue";
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
    },
    onData: function (data) {
      console.log(data);
    },
    onClose: function () {
      console.log("Import window close");
    }
  },
  data () {

    const { proxy } = getCurrentInstance();
    const students = [];
    const classData = ref();
    const getStudents = async () => {
      const res = await proxy.$api.getStudentsByTeacherId(127);
      this.students = res.students;
    };
    onMounted(() => {
      getStudents();
    })
    return {
      classData,
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