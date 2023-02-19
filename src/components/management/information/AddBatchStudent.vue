<template>
  <div id="addBatchStudentForm" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">批量新增学生</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">

        </div>
      </div>
    </div>
  </div>
  <form class="row g-3">
    <div class="col-md-3">
      <label class="form-label" for="validationServer04">所属班级</label>
      <select id="validationServer04" :value="formData.classId"
              aria-describedby="validationServer04Feedback" class="form-select is-invalid" required>
        <option disabled selected>请选择...</option>
        <option v-for="clazz in classes" :value="clazz.id">{{ clazz.name }}</option>
      </select>
      <div id="validationServer04Feedback" class="invalid-feedback">
        请选择有效值
      </div>
    </div>
    <div class="col-md-1">
      <label class="form-label" for="validationServer04">新增</label>
      <button class="btn btn-primary" type="button" @click="addClass">
        <i class="fa fa-plus"></i>
      </button>
    </div>
    <!--        <div class="col-md-4">-->
    <!--          <label class="form-label" for="validationServer04">所属教师</label>-->
    <!--          <select id="validationServer04" aria-describedby="validationServer04Feedback"-->
    <!--                  class="form-select is-invalid" required disabled :value="formData.teacherId">-->
    <!--            <option disabled selected value="">请选择...</option>-->
    <!--            <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>-->
    <!--          </select>-->
    <!--          <div id="validationServer04Feedback" class="invalid-feedback">-->
    <!--            请选择有效值-->
    <!--          </div>-->
    <!--        </div>-->
    <div class="col-md-8">
      <label class="form-label" for="validationServer03">统一描述</label>
      <input id="validationServer03" aria-describedby="validationServer03Feedback" class="form-control "
             type="text">
    </div>
    <div class="col-md-11">
      <div class="mb-3">
        <label class="form-label" for="formFile">上传批量花名册</label>
<!--        这里怎么搞解析-->
        <input id="formFile" class="form-control" type="file" :value="chosenFile">
      </div>
    </div>
    <div class="col-md-1">
      <div class="mb-3">
        <label class="form-label" for="analyze"> &nbsp;解析</label><br/>
        <button id="analyze" class="btn btn-primary" type="button" @click="analyzeExcel">
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
<!--    add a table that can show what data has been imported-->
    <div class="col-md-12">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th scope="col">姓名</th>
          <th scope="col">QQ</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="student in batchStudent">
          <td>{{ student.name }}</td>
          <td>{{ student.qq }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 modal-footer">
      <div aria-label="Basic example" class="btn-group" role="group">
        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">关闭</button>
        <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="addBatchStudent" disabled>提交</button>
      </div>
    </div>
  </form>
</template>

<script>
import {ref} from "vue";

export default {
  name: "addBatchStudent",
  methods: {
    addClass() {
      console.log("弹窗新增班级")
    },
    addBatchStudent() {
      console.log("添加批量学生")
    },
    analyzeExcel() {
      console.log("解析Excel" + this.chosenFile)
    },
    handleFileUpload() {
      console.log(this.$refs)
      // this.chosenFile = this.$refs.file[0];
      // console.log(this.chosenFile)
    }
  },
  data() {
    const chosenFile = ref(null);
    return {
      chosenFile,
      formData: {
        classId: '',
        teacherId: '',
        description: ''
      },
      batchStudent: [
        {
          name: "张三",
          qq: "123456789",
        },
        {
          name: "李四",
          qq: "123456789",
        },
        {
          name: "王五",
          qq: "123456789",
        }
      ],

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
      teachers: []
    }
  },
}
</script>

<style scoped>

</style>