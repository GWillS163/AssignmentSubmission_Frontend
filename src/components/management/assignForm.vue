<template>
  <div class="mb-3"></div>
  <form>
    <div class="row flex-fill">
      <div class="col-4">
        <div class="mb-3"><label class="form-label" for="username"><strong>作业名</strong><br></label><input
            id="username" v-model="assign.name" :disabled="!isEditing" class="form-control"
            name="assignName"
            placeholder="请输入 作业名称"
            type="text"></div>
      </div>
      <div class="col-4">
        <div class="mb-3 mb-md-0">
          <label class="form-label" for="first_name"><strong>截止日期</strong><br></label></div>
        <input :disabled="!isEditing" v-model="assign.ddl" class="form-control"
               type="datetime-local">
      </div>
      <div class="col-4">
        <div class="mb-3">
          <label class="form-label"
                 for="first_name"><strong>格式化文件名</strong></label><input
            id="first_name-2" :disabled="!isEditing" v-model="assign.formatStr" class="form-control"
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
                v-model="forClazz"
                multiple
        >
          <!--                      use v-model forClazz to generate many options-->
          <option v-for="clazz in assign.forClazz" :value="clazz.name" :selected="clazz.isSelected">{{clazz.name}}</option>
<!--          <option v-for="clazz in assign.forClazz" :selected="clazz.isSelected">{{clazz.name}}</option>-->

        </select>
      </div>
      <div class="col-8">
        <div class="mb-3"><label class="form-label" for="email"><strong>描述</strong></label></div>
        <textarea :disabled="!isEditing" class="form-control"
                  name="assignDesc"
                  v-model="assign.desc"
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
              v-model="switchBtn.value"
              :disabled="!isEditing"
              class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
              style="width: 49px;height: 24px;" type="checkbox">
          <label class="form-check-label" for="formCheck-3"
                 style="font-size: 18px;">
            <strong>{{ switchBtn.name }}</strong><br></label>
        </div>
      </div>
    </div>
    <div class="row flex-fill mb-auto">
      <div class="col-12 d-flex justify-content-center">
        <div class="mb-3"></div>
        <div class="btn-group" role="group">
          <!--    if isEditing is true show save, if not, show edit-->
          <button :class="{'btn-success': isEditing, 'btn-primary': !isEditing}" class="btn"
                  type="button"
                  @click="isAdd ? handleCreate(assign, forClazz) : handleEdit(assign)">
            <a v-if="isAdd">
              {{ isEditing ? '提交' : '' }}
            </a>
            <a v-else-if="!isAdd">
              {{ isEditing ? '保存' : '编辑' }}
            </a>
          </button>
          <button class="btn btn-outline-info" type="button"
                  :disabled="isEditing || isAdd"
                  @click="handleReset(assign)">重置
          </button>
          <button  class="btn btn-danger"
                  type="button"
                   :disabled="isEditing || isAdd"
                  @click="handleDelete()">删除
          </button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>

export default {
  name: "assignForm",
  methods: {
    handleCreate(assign, forClazz) {
      // this.isEditing = !this.isEditing;
      console.log("正在模拟提交");
      console.log(assign);
      console.log(forClazz);
      this.forClazz = [];
      this.handleReset(assign);
    },
    handleEdit(assign) {
      this.isEditing = !this.isEditing;
      console.log(this.isEditing);
      console.log(assign)
      // assign = {
      //       isEditing: this.isEditing,
      //       name: "111",
      //       id: "new",
      //       clazz: "1909班,1908班",
      //       desc: " ",
      //       formatStr: "111",
      //       ddl: "",
      //       forClazz: [
      //         {
      //           name: "1909班",
      //           isSelected: false
      //         },
      //         {
      //           name: "1908班",
      //           isSelected: false
      //         },
      //         {
      //           name: "1907班",
      //           isSelected: false
      //         }
      //       ],
      //       switches: [
      //         {
      //           id: "isPermitAny",
      //           name: "允许匿名提交",
      //           value: true
      //         },
      //         {
      //           id: "isPermitLate",
      //           name: "允许迟交",
      //           value: true
      //         },
      //         {
      //           id: "isVarifyName",
      //           name: "校验名称",
      //           value: true
      //         }
      //       ],
      //     };
    },
    handleReset(assign) {

      // clear all value to default
      assign.name = "已重置";
      assign.forClazz =[
          {
            name: "1909班",
            isSelected: true
          },
          {
            name: "1908班",
            isSelected: true
          },
          {
            name: "1907班",
            isSelected: false
          }
        ];
      assign.desc = "";
      assign.formatStr = "";
      assign.ddl = "";
      console.log("handleReseed");
    },
    handleDelete() {
      console.log("删除");
    },
    // create an auto function that used by life cycle
    beforeCreate: function () {
      console.log("beforeCreate");
    },


    created() {
      // this.assign = this.handleReset(this.assign);
      console.log("created");
    }

  },

  data() {
    const isEditing = false | this.isAdd;
    const forClazz = [];
    return {
      // handleEdit: this.handleEdit,
      isEditing,
      forClazz,
    }
  },

  props: {
    isAdd: {
      type: Boolean,
      default: false
    },
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