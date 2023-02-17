<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的班级</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" data-bs-whatever="@mdo"
           role="button">
          <i class="fa fa-plus"></i> 新增班级 </a>
      </div>
    </div>
    <div class="col">
      <div id="TableSorterCard" class="card">
        <div class="card-header py-3">
          <div class="row table-topper align-items-center">
            <div class="col-12 col-sm-5 col-md-6 text-start" style=" padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">
                班级列表</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style=" padding: 5px 15px;">
              <button class="btn btn-primary btn-sm reset" @click="downloadClass" style="margin: 2px;" type="button">
                <i class="fa fa-download"></i>
                列表下载
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="ipi-table" class="table table-striped table ">
                <thead class="thead-dark">
                <tr>
                  <th class="text-center">班级id</th>
                  <th class="text-center">班级名</th>
                  <th class="text-center">创建教师</th>
                  <th class="text-center filter-false sorter-false">操作</th>
                </tr>
                </thead>
                <tbody class="text-center">
                <tr v-for="clazz in classes">
                  <td>{{ clazz.id }}</td>
                  <td>{{ clazz.name }}</td>
                  <td>{{ clazz.teacher }}</td>
                  <td class="text-center align-middle" style="max-height: 60px;height: 60px;">
                    <a class="btn btnMaterial btn-flat success semicircle" @click="editClass(clazz.id)"
                       role="button">
                      <i class="fas fa-pen"></i>
                    </a>
                    <a class="btn btnMaterial btn-flat accent semicircle "
                       @click="deleteClass(clazz.id)" role="button" style="margin-left: 5px;">
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
  </div>

  <!-- Modal -->
  <div id="exampleModal" aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" tabindex="-1">
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
              <input id="validationServer01" class="form-control is-valid" required type="text" v-model="formData.className">
              <div class="valid-feedback">
                看起来不错
              </div>
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer02">ID</label>
              <input id="validationServer02" class="form-control is-valid" required type="text" v-model="formData.classId" disabled>
<!--              <div class="valid-feedback">-->
<!--                看起来不错-->
<!--              </div>-->
            </div>
            <div class="col-md-4">
              <label class="form-label" for="validationServer04">所属教师</label>
              <select id="validationServer04" aria-describedby="validationServer04Feedback"
                      class="form-select is-invalid" required v-model="formData.teacherId">
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
                      type="text" v-model="formData.describe">
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
              <button class="btn btn-primary" @click="addClass"  data-bs-dismiss="modal" type="button">提交</button>
            </div>
          </form>
        </div>
<!--        <div class="modal-footer">-->
<!--          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>-->
<!--          <button class="btn btn-primary" type="button">Save changes</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";
import {getCurrentInstance, onMounted} from "vue";

export default {

  name: "class",
  components: {PageSpliter},
  methods:{
    downloadClass() {
      console.log("download class");
    },
    addClass(){
      console.log("add class");
      console.log(this.formData);
    },
    editClass(id) {
      console.log("edit class " + id);

    },
    deleteClass(id) {
      console.log("edit class " + id);

    }

  },
  data() {

    const {proxy} = getCurrentInstance();
    const classes = [];
    const getClasses = async () => {
      const res = await proxy.$api.getClassesByTeacherId(127);
      this.classes = res.classes;
    }
    onMounted(() => {
      getClasses();
    })
    return {
      classes,
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
        className: "软件工程1909班",
        classId: 1,
        teacherId: 127,
        describe: "这是一个软件工程1909班"
      }
    }
  }
}
</script>

<style scoped>

</style>