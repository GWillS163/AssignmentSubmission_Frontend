<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">历史文件管理</h3>
      </div>
<!--      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"-->
<!--                                                                                     role="button"><i-->
<!--          class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>-->
    </div>
    <div class="card" id="TableSorterCard" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div class="row table-topper align-items-center">
          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
            <p class="text-primary m-0 fw-bold">已交列表</p>
          </div>
          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
            <button class="btn btn-primary btn-sm reset" type="button" style="margin: 2px;">
              <i class="fa fa-download"></i>
              下载所有文件
            </button>
<!--            <button class="btn btn-warning btn-sm" id="zoom_in" type="button" zoomclick="ChangeZoomLevel(-10);"-->
<!--                    style="margin: 2px;"><i class="fa fa-search-plus"></i></button>-->
<!--            <button class="btn btn-warning btn-sm" id="zoom_out" type="button" zoomclick="ChangeZoomLevel(-10);"-->
<!--                    style="margin: 2px;"><i class="fa fa-search-minus"></i></button>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table id="ipi-table" class="table table-striped table tablesorter ">
              <thead class="thead-dark">
              <tr>
                <th class="text-center"></th>
                <th class="text-center">作业名称</th>
                <th class="text-center">科目</th>
                <th class="text-center">截止状态</th>
                <th class="text-center">来源</th>
                <th class="text-center"> 提交日期 </th>
                <th class="text-center">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="file in files">
                <td>
                  <input type="checkbox" class="form-check-input" id="formCheck-1"/>
                </td>
                <td class="text-truncate" style="max-width: 200px;">{{ file.assignName }} <br></td>
                <td class="text-truncate" style="max-width: 200px;">{{ file.subject }}</td>
                <td><span style="color: rgb(231, 139, 100);">{{ file.ddl }}</span></td>
                <td>{{ file.source }}<br></td>
                <td>{{ file.submitTime }}</td>
                <td class="text-center align-middle" style="max-height: 60px;height: 60px;">
                  <a class="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i
                    class="far fa-eye"></i></a>
                  <a class="btn btnMaterial btn-flat success semicircle" role="button"
                                                  href="#"><i class="fas fa-pen"></i></a>
                  <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button"
                    style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#">
                    <i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <page-spliter/>
    </div>
    <div class="card shadow mb-4"></div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import PageSpliter from "@/components/management/PageSpliter.vue";

export default {
  name: "files",
  components: {PageSpliter},
  data() {
    const files = [];
    const {proxy} = getCurrentInstance();
    const getFilesByStudentId = async () => {
      const res = await proxy.$api.getFilesByStudentId(127);
      console.log(res)
      this.files = res.files;
    }
    onMounted(() => {
      getFilesByStudentId();
    })
    return {
      files
    }
  }
}
</script>

<style scoped>

</style>