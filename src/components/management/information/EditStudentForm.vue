<template>
  <div id="addStudent" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">新增学生</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">

          <form class="row g-3">
            <div class="col-md-4">
              <label class="form-label" for="validationServer01">学生数据ID</label>
              <input id="id" v-model="formData.id" class="form-control is-valid" required type="text">
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer01">学生名</label>
              <input id="validationServer01" v-model="formData.name" class="form-control is-valid" required type="text">
              <div class="valid-feedback">
                看起来不错
              </div>
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer02">学号</label>
              <input id="validationServer02" v-model="formData.studentId" class="form-control is-valid" required
                     type="text">
              <!--              <div class="valid-feedback">-->
              <!--                看起来不错-->
              <!--              </div>-->
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer04">所属班级</label>
              <select id="validationServer04" :value="formData.classId"
                      aria-describedby="validationServer04Feedback" class="form-select is-invalid" required>
                <option disabled selected>请选择...</option>
                <option v-for="clazz in classes" :value="clazz.id">{{ clazz.name }}</option>
              </select>
              <div id="validationServer04Feedback" class="invalid-feedback">
                请选择有效班级
              </div>
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
              <label class="form-label" for="validationServer03">描述</label>
              <input id="validationServer03" aria-describedby="validationServer03Feedback" class="form-control "
                     type="text">
            </div>
            <div class="col-12 modal-footer">
              <div aria-label="Basic example" class="btn-group" role="group">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">关闭</button>
                <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="addStudent">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editStudentForm",
  props: {
    classes: {
      type: Array,
      default: () => {
        return [
          {
            id: 1909,
            name: "软件工程1909班"
          },]
      }
    },
  },
  // formData: {
  //   type: Object,
  //   default: () => {
  //     return {
  //       id: 0,
  //       name: '',
  //       studentId: '',
  //       classId: '',
  //       teacherId: '',
  //       description: ''
  //     }
  //   }
  // },
  methods: {
    addStudent() {
      console.log(this.formData)
      this.$emit('addStudent', this.formData)
    }
  },
  data() {
    return {
      teachers: [],
      formData: {
        id: 0,
        name: '',
        studentId: '',
        classId: '',
        teacherId: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>

</style>