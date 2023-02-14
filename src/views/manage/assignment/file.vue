<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我收集的文件</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" role="button"><i
            class="fa fa-download"></i>下载提交记录 </a></div>
    </div>
    <div class="col">
      <div id="TableSorterCard" class="card">
        <div class="card-header py-3">
          <div class="row table-topper align-items-center">
            <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">文件列表</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
              <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">
                <i class="fa fa-download"></i>
                下载文件
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
                  <th class="text-center">姓名</th>
                  <th class="text-center">格式化文件名</th>
                  <th class="text-center">文件大小</th>
                  <th class="text-center">Hash</th>
                  <th class="text-center">提交时间</th>
                  <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="files.length" v-for="file in files">
                  <td class="text-center">{{ file.userName }}</td>
                  <td class="text-center">{{ file.formatFileName }}</td>
                  <td class="text-center">{{ file.size }}</td>
                  <td class="text-center">{{ file.md5 }}</td>
                  <td class="text-center">{{ file.submitTime }}</td>
                  <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a
                      class="btn btnMaterial btn-flat primary semicircle" href="#" role="button"><i
                      class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" href="#"
                                                    role="button"><i class="fas fa-pen"></i></a><a
                      class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" data-bs-target="#delete-modal"
                      data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;"><i
                      class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>

                </tr>
                <tr v-else>
                  <td colspan="6" class="text-center">暂无数据</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";

export default {
  name: "file",
  data() {
    const { proxy } = getCurrentInstance();
    const files = [];
    const getAllFiles = async () => {
      const res = await proxy.$api.getAllFiles(127);
      // console.log(res);
      this.files = res.files;
    }
    onMounted(() => {
      getAllFiles();
    })
    return {
      files,
    }
  }
}
</script>

<style scoped>

</style>