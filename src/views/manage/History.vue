<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">提交历史</h3>
    <div class="card shadow">
      <div class="card-header py-3">
        <p class="text-primary m-0 fw-bold">作业提交详情</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 text-nowrap">
            <div id="dataTable_length" aria-controls="dataTable" class="dataTables_length"><label class="form-label">显示数量&nbsp;<select
                class="d-inline-block form-select form-select-sm">
              <option selected="" value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>&nbsp;</label></div>
          </div>
          <div class="col-md-6">
            <div id="dataTable_filter" class="text-md-end dataTables_filter"><label class="form-label"><input
                aria-controls="dataTable" class="form-control form-control-sm" placeholder="搜索" type="search"></label>
            </div>
          </div>
        </div>
        <div id="dataTable" aria-describedby="dataTable_info" class="table-responsive table mt-2" role="grid">
          <table id="dataTable" class="table my-0">
            <thead>
            <tr>
              <th>姓名</th>
              <th>作业</th>
              <th>文件大小</th>
              <th>提交时间</th>
              <th>班级</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="record in records">
              <td>{{ record.name }}</td>
              <td>{{ record.assign }}</td>
              <td>{{ record.size }}</td>
              <td>{{ record.time }}</td>
              <td>{{ record.class }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td><strong>姓名</strong></td>
              <td><strong>作业</strong></td>
              <td>文件大小</td>
              <td><strong>提交时间</strong></td>
              <td><strong>班级</strong></td>
            </tr>
            </tfoot>
          </table>
        </div>
        <div class="row">
          <div class="col-md-6 align-self-center">
            <p id="dataTable_info" aria-live="polite" class="dataTables_info" role="status">
              <a v-if="records.length === 0">没有记录</a>
              <a v-else>显示第 {{ (currentPage - 1) * pageSize + 1 }} 至 {{ currentPage * pageSize }} 项结果，
                共 {{ records.length }} 项</a>
            </p>
          </div>
          <div class="col-md-6">
            <nav class="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
              <ul class="pagination">
                <li class="page-item disabled"><a aria-label="Previous" class="page-link" href="#"><span
                    aria-hidden="true">«</span></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span aria-hidden="true">»</span></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "History",
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      records:[
        {
          name: "赵玉龙",
          assign: "大数据2",
          size: "3.2MB",
          time: "2022-12-16 18:40:58",
          class: "1909"
        },
        {
          name: "马策",
          assign: "大数据4",
          size: "390KB",
          time: "2022-12-16 18:41:01",
          class: "1910"
        },
        {
          name: "李国成",
          assign: "Java习题抄写",
          size: "40MB",
          time: "2022-12-16 18:41:04",
          class: "1909"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>