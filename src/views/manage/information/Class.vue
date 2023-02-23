<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的班级</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a id="addClassBtn" class="btn btn-primary" data-bs-target="#addClass" data-bs-toggle="modal" data-bs-whatever="@mdo"
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
              <button class="btn btn-primary btn-sm reset"
                      @click="downloadClass"
                      style="margin: 2px;" type="button">
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
                    <a class="btn btnMaterial btn-flat success semicircle" @click="editClass(clazz)"
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
              <page-spliter :records="classes"/>
<!--             use b-pagination label , generate the page spliter that inject a classes, -->
<!--             and the classes is a array, and the page spliter will split the array to pages-->
              <b-pagination
                v-model="classes"
                :total-rows="classes.length"
                per-page="2"
                aria-controls="my-table"
                class="my-0"
              />



            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <EditClassForm :clazz="formData"/>
</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";
import {getCurrentInstance, onMounted} from "vue";
import EditClassForm from "@/components/management/information/EditClassForm.vue";

export default {

  name: "class",
  components: {EditClassForm, PageSpliter},
  methods:{
    downloadClass() {
      console.log("download class");
    },
    addClass(){
      console.log("add class");
      console.log(this.formData);
    },
    editClass(clazz) {
      // set  show modal the status like data-bs-target="#addClass" data-bs-toggle="modal"
      // set the data to the modal , click the button to open, its id is addClassBtn
      document.getElementById("addClassBtn").click();
      console.log("edit class " + clazz);
      this.formData = clazz;

    },
    deleteClass(id) {
      console.log("delete class " + id);
    }

  },
  data() {

    const {proxy} = getCurrentInstance();
    const classes = [];
    const getClasses = async () => {
      // const res = await proxy.$api.getClassesByTeacherId(127);
      // this.classes = res.classes;
      this.classes = [
        {
          id: 1,
          name: "软件工程1909班",
          teacher: "孟老师"
        },
        {
          id: 2,
          name: "软件工程1908班",
          teacher: "孟老师"
        },
        {
          id: 3,
          name: "软件工程1907班",
          teacher: "孟老师"
        },
        {
          id: 4,
          name: "软件工程1906班",
          teacher: "孟老师"
        }
      ]
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