<template>
  <div class="align-content-end">

    <button :class="{'btn-success': isEditing, 'btn-primary': !isEditing}" class="btn"
            type="button"
            @click="handleEdit()">
      <!--    if isEditing is true show save, if not, show edit-->
      {{ isEditing ? '保存' : '编辑' }}

    </button>
  </div>
  <form>
    <div class="row flex-fill">
      <div class="col-4">
        <div class="mb-3"><label class="form-label" for="username"><strong>作业名</strong><br></label><input
            id="username" :disabled="!isEditing" :value="assign.name" class="form-control"
            name="assignName"
            placeholder="请输入 作业名称"
            type="text"></div>
      </div>
      <div class="col-4">
        <div class="mb-3 mb-md-0">
          <label class="form-label" for="first_name"><strong>截止日期</strong><br></label></div>
        <input :disabled="!isEditing" :value="assign.ddl" class="form-control"
               type="datetime-local">
      </div>
      <div class="col-4">
        <div class="mb-3">
          <label class="form-label"
                 for="first_name"><strong>格式化文件名</strong></label><input
            id="first_name-2" :disabled="!isEditing" :value="assign.formatStr" class="form-control"
            name="formatFileName"
            placeholder="请输入 格式化文件名"
            type="text"></div>
      </div>
    </div>
    <div class="row flex-fill">
      <div class="col-4">
        <div class="mb-3"><label class="form-label"
                                 for="username">
          <strong>下发对象</strong>(Ctrl多选)<br></label>
        </div>
        <select id="dates-field2" :disabled="!isEditing" class="form-select multiselect-ui form-control"
                multiple
        >
          <!--                      use iteration to generate many options-->
          <option v-for="clazz in assign.forClazz"
                  :selected="clazz.isSelected"
                  :value="clazz.id">{{ clazz.name }}
          </option>

        </select>
      </div>
      <div class="col-8">
        <div class="mb-3"><label class="form-label" for="email"><strong>描述</strong></label></div>
        <textarea :disabled="!isEditing" class="form-control"
                  name="assignDesc"
                  placeholder="请输入注明以下内容，文件格式，文件内容规则" rows="4">{{ assign.desc }}
                      </textarea>
      </div>
    </div>
    <div class="row flex-fill mb-md-2">
      <div v-for="switchBtn in assign.switches" class="col-4">
        <div class="mb-3"></div>
        <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3">
          <input
              :id="switchBtn.id"
              :checked="switchBtn.value"
              :disabled="!isEditing"
              class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
              style="width: 49px;height: 24px;" type="checkbox">
          <label class="form-check-label" for="formCheck-3"
                 style="font-size: 18px;">
            <strong>{{ switchBtn.name }}</strong><br></label>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import {ref} from "vue";

export default {
  name: "assignForm",
  isEditing: ref(false),
  // write a function to handle the click event
  // when the button is clicked, change the value of isEditing
  // if isEditing is true, show save, if not, show edit
  methods: {
    handleEdit() {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
    },
  },
  // return function to use
  data() {
    return {
      isEditing: false,
    }
  },

  props: {
    assign: {

      // name: '第一次作业',
      // id: 'tab-1',
      // clazz: '1909班,1908班',
      // desc: '把第六章作业手抄 + word文档实验，上交 .pdf',
      // formatStr: '数据结构-<班级>-<学号>.docx',
      // ddl: '2022-07-02',
      // isPermitAny: true,
      // isPermitLate: true,
      // isVarifyName: true,
    },

  },
}
</script>

<style scoped>

</style>