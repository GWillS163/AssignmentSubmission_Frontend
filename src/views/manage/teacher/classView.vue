<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">班级视图</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"
                                                                                     role="button"><i
          class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
    </div>
    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div class="row table-topper align-items-center">
          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
            <p class="text-primary m-0 fw-bold">作业列表</p>
          </div>
          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
            <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">Borrar Filtros</button>
            <button id="zoom_in" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"
                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-plus"></i></button>
            <button id="zoom_out" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"
                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-minus"></i></button>
          </div>
        </div>
      </div>
      <div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>以班级视图查看收集进度</h2>
        </div>
      </div>
      <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 33px;">
        <div class="row row-cols-2 row-cols-md-4">
          <div class="col">
            <div class="p-3">
              <h4 class="display-5 fw-bold text-white mb-0">123+</h4>
              <p class="mb-0">已交作业</p>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <h4 class="display-5 fw-bold text-white mb-0">45%</h4>
              <p class="mb-0">提交率</p>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <h4 class="display-5 fw-bold text-white mb-0">23+</h4>
              <p class="mb-0">未交文件</p>
            </div>
          </div>
          <div class="col">
            <div class="p-3">
              <h4 class="display-5 fw-bold text-white mb-0">3</h4>
              <p class="mb-0">最近DDL</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center ms-xl-0 me-xl-0 mb-md-5 mt-xl-0 pt-xl-0"
           style="padding-bottom: 0px;margin-top: -25px;padding-top: 0px;">
        <div class="col">
          <div>
            <div class="card">
              <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"
                   style="border-radius: 5px;border-width: 3px;border-color: var(--bs-blue);font-weight: bold;margin-top: 0px;padding-top: 14px;">
                <div class="flex-fill">
                  <h4>1909班</h4>
                  <h6 class="text-muted mb-2">KissesJun</h6>
                </div>
                <hr>
                <div style="width: 84px;">
                  <button class="btn btn-primary d-flex ms-auto" type="button">详情</button>
                </div>
              </div>
              <div class="table-responsive" style="border-color: rgb(100,129,217);">
                <table class="table table-striped">
                  <tbody>
                  <tr>
                    <td>Java基础</td>
                    <td colspan="3">
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="progress-bar bg-success"
                             style="width: 100%;">100%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pe-xl-0 ps-xl-0">Java基础2</td>
                    <td>
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" class="progress-bar bg-danger"
                             style="width: 10%;">10%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr></tr>
                  </tbody>
                </table>
              </div>
              <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card">
              <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"
                   style="border-radius: 5px;border-width: 3px;border-color: var(--bs-blue);font-weight: bold;padding-top: 16px;">
                <div class="flex-fill">
                  <h4>1910班</h4>
                  <h6 class="text-muted mb-2">KissesJun</h6>
                </div>
                <hr>
                <div style="width: 84px;">
                  <button class="btn btn-primary d-flex ms-auto" type="button">详情</button>
                </div>
              </div>
              <div class="table-responsive" style="border-color: rgb(100,129,217);">
                <table class="table table-striped">
                  <tbody>
                  <tr>
                    <td>Java基础</td>
                    <td colspan="3">
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="progress-bar bg-success"
                             style="width: 100%;">100%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pe-xl-0 ps-xl-0">Java基础2</td>
                    <td>
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" class="progress-bar"
                             style="width: 40%;">40%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr></tr>
                  </tbody>
                </table>
              </div>
              <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>
            </div>
          </div>
        </div>
        <div class="col">
          <div>
            <div class="card">
              <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"
                   style="border-radius: 5px;border-width: 3px;border-color: var(--bs-blue);font-weight: bold;padding-top: 18px;">
                <div class="flex-fill">
                  <h4>公共提交</h4>
                  <h6 class="text-muted mb-2">-</h6>
                </div>
                <hr>
                <div style="width: 84px;">
                  <button class="btn btn-primary d-flex ms-auto" type="button">详情</button>
                </div>
              </div>
              <div class="table-responsive" style="border-color: rgb(100,129,217);">
                <table class="table table-striped">
                  <tbody>
                  <tr>
                    <td>Java基础</td>
                    <td colspan="3">
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" class="progress-bar bg-success"
                             style="width: 100%;">100%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="pe-xl-0 ps-xl-0">Java基础2</td>
                    <td>
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" class="progress-bar"
                             style="width: 40%;">40%
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr>
                    <td>Week8结课<br></td>
                    <td>
                      <div class="progress">
                        <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="60" class="progress-bar"
                             style="width: 60%;">60%
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "classView"
}
</script>

<style scoped>

</style>