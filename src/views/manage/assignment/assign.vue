<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我下发的作业</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"
                                                                                     role="button"><i
          class="fa fa-plus"></i>&nbsp;聚合查询</a></div>
    </div>
    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div class="row table-topper align-items-center">
          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
            <p class="text-primary m-0 fw-bold">作业列表</p>
          </div>
          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
            <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">筛选</button>
<!--            <button id="zoom_in" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-plus"></i></button>-->
<!--            <button id="zoom_out" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-minus"></i></button>-->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table id="ipi-table" class="table table-striped table tablesorter">
              <thead class="thead-dark">
              <tr>
                <th class="text-center text-light">
                  <strong> 作业名称 </strong>
                </th>
                <th class="text-center text-light">
                  <strong> 班级 </strong>
                </th>
                <th class="text-center text-light">
                  <strong> 格式化文件名 </strong>
                </th>
                <th class="text-center filter-false sorter-false">操作</th>
              </tr>
              </thead>
              <tbody class="text-center">
              <tr v-for="assign in assigns">
                <td>{{ assign.name }}<br></td>
                <td>{{ assign.classes }}<br></td>
                <td>{{ assign.format }}<br></td>
                <td class="text-center align-middle" style="max-height: 60px;height: 60px;">
                  <a
                    class="btn btnMaterial btn-flat primary semicircle" href="#" role="button"><i
                    class="far fa-eye"></i></a>
                  <a class="btn btnMaterial btn-flat success semicircle" href="#"
                                                  role="button">
                    <i class="fas fa-pen"></i></a>
                  <a
                    class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" data-bs-target="#delete-modal"
                    data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;"><i
                    class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i>
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <page-spliter/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";

export default {
  name: "assign",
  components: {PageSpliter},
  data() {
    const assigns = [];
    return {
      assigns: [
        {
          id:1,
          name: "第一次作业",
          classes: "1909,1910",
          format: "数据结构-&lt;班级&gt;-&lt;姓名&gt;.docx"
        },
        {
          id: 2,
          name: "第二次作业",
          classes: "1909,1910",
          format: "数据结构3-&lt;班级&gt;-&lt;姓名&gt;.docx"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>