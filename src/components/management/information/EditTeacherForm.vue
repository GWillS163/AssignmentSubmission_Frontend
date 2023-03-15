<template>
<!--  <div id="teacherModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">-->
<!--    <div class="modal-dialog">-->
<!--      <div class="modal-content">-->
<!--        <div class="modal-header">-->
<!--          <h5 id="exampleModalLabel" class="modal-title">新增教师</h5>-->
<!--          <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>-->
<!--        </div>-->
<!--        <div class="modal-body">-->

  <b-modal v-model="modal"
           cancel-title="取消"
           ok-title="确认"
           @cancel="cancel"
           @ok="submit"
           :title="editMethod ==='edit' ? '编辑班级' : '新增班级'"
  >
          <b-form>
    <b-row>
      <b-col md="4">
        <b-form-group id="input-group-1" label="教师ID" label-for="input-1">
          <b-form-input id="input-1" v-model="formData.id" required disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-2" label="姓名" label-for="input-2">
          <b-form-input id="input-2" v-model="formData.name" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-3" label="工号" label-for="input-3">
          <b-form-input id="input-3" v-model="formData.workId" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-4" label="QQ" label-for="input-4">
          <b-form-input id="input-4" v-model="formData.qq" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-5" label="邮箱" label-for="input-5">
          <b-form-input id="input-5" v-model="formData.mail" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-6" label="电话" label-for="input-6">
          <b-form-input id="input-6" v-model="formData.phone" required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-7" label="最近登陆" label-for="input-7" type="datetime-local">
          <b-form-input id="input-7" v-model="formData.lastLoginTime"  disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-8" label="注册时间" label-for="input-8" type="datetime-local">
          <b-form-input id="input-8" v-model="formData.registerTime"  disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-9" label="拥有班级" label-for="input-9">
          <b-form-input id="input-9" v-model="formData.classIds" disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group id="input-group-10" label="描述" label-for="input-10">
          <b-form-input id="input-10" v-model="formData.description" required></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
<!--          <div class="col-12 modal-footer">-->
<!--            <div aria-label="Basic example" class="btn-group" role="group">-->
<!--              <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">关闭</button>-->
<!--              <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="addTeacher">提交</button>-->
<!--            </div>-->
<!--          </div>-->
  </b-modal>
</template>

<script>
export default {
  name: "editTeacherForm",
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
  //       TeacherId: '',
  //       classId: '',
  //       teacherId: '',
  //       description: ''
  //     }
  //   }
  // },
  methods: {
    addTeacher() {
      console.log(this.formData)
      this.$emit('addTeacher', this.formData)
    }
  },
  data() {
    return {
      teachers: [],
      editMethod: "add",
      formData: {
        id: 0,
        name: '孟老师',
        workId: '29852331',
        classIds: ['1909', '1910'],
        description: '这是一个好老师',
        lastLoginTime: '2023-02-23 20:20:24',
        registerTime: '2023-02-22 20:20:24',
        password: '11112222333',
        qq: "qq123456789",
        mail: 'www@qq.com',
        phone: '18801002716',
      }
    }
  }
}
</script>

<style scoped>

</style>