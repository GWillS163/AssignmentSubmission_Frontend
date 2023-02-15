<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的班级</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"
                                                                                     role="button"><i
          class="fa fa-plus"></i> 新增班级 </a></div>
    </div>
    <div class="col">
      <div id="TableSorterCard" class="card">
        <div class="card-header py-3">
          <div class="row table-topper align-items-center">
            <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">
                班级列表</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
              <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">
                <i class="fa fa-download"></i>
                列表下载
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="ipi-table" class="table table-striped table tablesorter">
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
                    <a class="btn btnMaterial btn-flat primary semicircle" href="#" role="button">
                      <i class="far fa-eye"></i>
                    </a>
                    <a class="btn btnMaterial btn-flat success semicircle" href="#"
                       role="button">
                      <i class="fas fa-pen"></i>
                    </a>
                    <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover"
                        data-bs-target="#delete-modal"
                        data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;">
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
</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";
import {getCurrentInstance, onMounted} from "vue";

export default {
  name: "class",
  components: {PageSpliter},
  data() {
    const { proxy } = getCurrentInstance();
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
    }
  }
}
</script>

<style scoped>

</style>