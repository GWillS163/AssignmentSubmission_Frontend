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
            <tr>
              <td>赵玉龙</td>
              <td>大数据2</td>
              <td>3.2MB</td>
              <td>2022-12-16 18:40:58</td>
              <td>1909</td>
            </tr>
            <tr>
              <td>马策</td>
              <td>大数据4</td>
              <td>390KB</td>
              <td>2022-12-16 18:41:01</td>
              <td>1910</td>
            </tr>
            <tr>
              <td>李国成</td>
              <td>Java习题抄写</td>
              <td>40MB</td>
              <td>2022-12-16 18:41:04</td>
              <td>1909</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar4.jpeg"
                       width="30">Bradley Greer
              </td>
              <td>London</td>
              <td>Cell 3</td>
              <td>2022-12-16 18:41:10</td>
              <td>1909</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar5.jpeg"
                       width="30">Brenden Wagner
              </td>
              <td>2022-12-16 18:41:13</td>
              <td>Cell 3</td>
              <td>San Francisco</td>
              <td>28</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar1.jpeg"
                       width="30">Brielle Williamson
              </td>
              <td>Integration Specialist</td>
              <td>Cell 3</td>
              <td>New York</td>
              <td>61</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar2.jpeg"
                       width="30">Bruno Nash<br></td>
              <td>Software Engineer</td>
              <td>Cell 3</td>
              <td>London</td>
              <td>38</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar3.jpeg"
                       width="30">Caesar Vance
              </td>
              <td>Pre-Sales Support</td>
              <td>Cell 3</td>
              <td>New York</td>
              <td>21</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar4.jpeg"
                       width="30">Cara Stevens
              </td>
              <td>Sales Assistant</td>
              <td>Cell 3</td>
              <td>New York</td>
              <td>46</td>
            </tr>
            <tr>
              <td><img class="rounded-circle me-2" height="30" src="../../../backendAssets/img/avatars/avatar5.jpeg"
                       width="30">Cedric Kelly
              </td>
              <td>Senior JavaScript Developer</td>
              <td>Cell 3</td>
              <td>Edinburgh</td>
              <td>22</td>
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
            <p id="dataTable_info" aria-live="polite" class="dataTables_info" role="status">正在展示 1 - 10 条，共 27
              页</p>
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
  name: "History"
}
</script>

<style scoped>

</style>