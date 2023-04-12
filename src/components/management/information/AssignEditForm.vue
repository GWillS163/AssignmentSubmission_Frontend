<template>

  <b-form>
    <b-row>
      <b-col md="4" v-show="editMethod ==='edit'">
        <b-form-group id="input-group-1" label="数据ID" label-for="input-1">
          <b-form-input id="input-1" v-model="formData.id" disabled required></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4" v-show="editMethod ==='edit'">
        <b-form-group id="input-group-8" label="创建日期" label-for="input-8" type="datetime-local">
          <b-form-input type="date" v-model="formData.createdDate" disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4" v-show="editMethod ==='edit'">
        <b-form-group id="input-group-8" label="创建时间" label-for="input-8" type="datetime-local">
          <b-form-input type="time" v-model="formData.createdTime" disabled></b-form-input>
        </b-form-group>
      </b-col>
      <b-col  md="4">
        <b-form-group id="input-group-5" label="所属班级" label-for="input-5">
            <b-form-select v-model="formData.clazzId"  type="number" :options="classes" :disabled="judgeDisable()"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="8">
        <b-form-group id="input-group-2" label="简名" label-for="input-2">
          <b-form-input id="input-2" v-model="formData.briefName" required  :disabled="judgeDisable"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="input-group-5" label="所属教师" label-for="input-5"  >
            <b-form-select  v-model="formData.teacherId"  type="number"  :disabled="judgeDisable()">
                <b-form-select-option  v-for="(name, id) in teachers" :value="id" :key="id">{{name}}</b-form-select-option>
            </b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="4" >
        <b-form-group id="input-group-8" label="截止日期" label-for="input-8" type="datetime-local" >
          <b-form-input type="date" v-model="formData.ddlDate" :disabled="judgeDisable">22</b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4" >
        <b-form-group id="input-group-8" label="截止时间" label-for="input-8" type="datetime-local" >
          <b-form-input type="time" v-model="formData.ddlTime" :disabled="judgeDisable"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group  label="文件名格式" label-for="input-10">
          <b-form-input   v-model="formData.fileNameRule" required :disabled="judgeDisable"></b-form-input>
        </b-form-group>
      </b-col>
<!--        hr line -->
<!--      <b-col md="12">-->
<!--        <hr>-->
<!--      </b-col>-->
      <b-col md="4" >
        <b-form-group label="作业公开" label-for="input-4">
          <b-form-checkbox v-model="formData.permitAnonymous"  size="lg" switch  :disabled="judgeDisable()"></b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="4" >
        <b-form-group  label="文件名校验" label-for="input-4">
          <b-form-checkbox v-model="formData.fileNameVerify"  size="lg" switch :disabled="judgeDisable()"></b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="4" >
        <b-form-group  label="过时可交" label-for="input-4">
          <b-form-checkbox v-model="formData.timeoutSubmit"  size="lg" switch :disabled="judgeDisable()"  ></b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group id="input-group-10" label="描述" label-for="input-10">
          <b-form-input id="input-10" v-model="formData.description" required :disabled="judgeDisable"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
export default {
  name: "assignEditForm",
  props: {
    isOnlyView: {
      type: Boolean,
      default: false
    },
    formData: {
      type: Object,
      default: function () {
        return {
          id: 0,
          briefName: '',
          clazzId: 0,
          teacherId: 0,
          ddlDate: '',
          ddlTime: '',
          fileNameRule: '',
          permitAnonymous: false,
          fileNameVerify: false,
          timeoutSubmit: false,
          description: '',
          createdDate: '',
          createdTime: ''
        }
      }
    },
    editMethod: {
      type: String,
      default: 'add'
    },
    classes: {
      type: Object,
      default: function () {
        return []
      }
    },
    teachers: {
      type: Object,
      default: function () {
        return []
      }
    }
  },
  methods: {
    // editDisable() {
    //   if (this.editMethod === 'add' || this.isOnlyView || this.editMethod) {
    //     return false
    //   } else {
    //     return true
    //   }
    // },
    judgeDisable() {
      if (this.isOnlyView) {
        return true
      } else if (this.editMethod === 'add') {
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>