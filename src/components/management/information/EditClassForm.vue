<template>
  {{clazz}}
  <div id="addClass" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">新增班级</h5>
          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body">

          <form class="row g-3">
            <div class="col-md-4">
              <label class="form-label" for="validationServer01">班级名</label>
              <input id="validationServer01" class="form-control is-valid" required type="text" v-model="clazz.className">
              <div class="valid-feedback">
                看起来不错
              </div>
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer02">ID</label>
              <input id="validationServer02" class="form-control is-valid" required type="text" v-model="clazz.classId" disabled>
<!--              <div class="valid-feedback">-->
<!--                看起来不错-->
<!--              </div>-->
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer04">所属教师</label>
              <select id="validationServer04" aria-describedby="validationServer04Feedback"
                      class="form-select is-invalid" required v-model="clazz.teacherId">
                <option disabled selected value="">请选择...</option>
                <option v-for="teacher in teachers" :value="teacher.id">{{ teacher.name }}</option>
              </select>
              <div id="validationServer04Feedback" class="invalid-feedback">
                请选择有效值
              </div>
            </div>
            <div class="col-md-12">
              <label class="form-label" for="validationServer03">描述</label>
              <input id="validationServer03" aria-describedby="validationServer03Feedback" class="form-control "
                      type="text" v-model="clazz.describe">
            </div>
<!--            <div class="col-12">-->
<!--              <div class="form-check">-->
<!--                <input id="invalidCheck3" aria-describedby="invalidCheck3Feedback" class="form-check-input is-invalid" required-->
<!--                       type="checkbox" value="">-->
<!--                <label class="form-check-label" for="invalidCheck3">-->
<!--                  Agree to terms and conditions-->
<!--                </label>-->
<!--                <div id="invalidCheck3Feedback" class="invalid-feedback">-->
<!--                  You must agree before submitting.-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <div class="col-12 modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">关闭</button>
              <button class="btn btn-primary" @click="submitClass" data-bs-dismiss="modal" type="button">提交</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editClassForm",
  props: {
    clazz: {
      type: Object,
      default: () => {
        return  {
            id: 1909,
            name: "软件工程1909班"
          }
      }
    },
  },
  // formData: {
  //   type: Object,
  //   default: () => {
  //     return {
  //       id: 0,
  //       name: '',
  //       ClassId: '',
  //       classId: '',
  //       teacherId: '',
  //       description: ''
  //     }
  //   }
  // },
  methods: {
    submitClass() {
      console.log(this.clazz)
      this.$emit('addClass', this.clazz)
    }
  },
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: '张三'
        },
        {
          id: 2,
          name: '李四'
        },
        {
          id: 3,
          name: '王五'
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>