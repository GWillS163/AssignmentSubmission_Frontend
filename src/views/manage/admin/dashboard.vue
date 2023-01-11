<script setup>
</script>

<template>
  <div class="d-sm-flex justify-content-between align-items-center mb-4">
    <h3 class="text-dark mb-0">Dashboard</h3><a class="btn btn-primary btn-sm d-none d-sm-inline-block" role="button"
                                                href="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate
    Report</a>
  </div>
  <div class="row">
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span>在库作业</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>28个</span></div>
            </div>
            <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-success py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-success fw-bold text-xs mb-1"><span>在库文件</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>59个 / 99MB</span></div>
            </div>
            <div class="col-auto"><i class="fas fa-database fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-info py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-info fw-bold text-xs mb-1"><span>收集进度</span></div>
              <div class="row g-0 align-items-center">
                <div class="col-auto">
                  <div class="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                </div>
                <div class="col">
                  <div class="progress progress-sm">
                    <div class="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                         style="width: 50%;"><span class="visually-hidden">50%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-auto"><i class="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-start-warning py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col me-2">
              <div class="text-uppercase text-warning fw-bold text-xs mb-1"><span>DDL</span></div>
              <div class="text-dark fw-bold h5 mb-0"><span>18</span></div>
            </div>
            <div class="col-auto"><i class="fas fa-comments fa-2x text-gray-300"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-7 col-xl-8">
      <div class="card shadow mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary fw-bold m-0">作业提交时刻图</h6>
          <div class="dropdown no-arrow">
            <button class="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown"
                    type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
            <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
              <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item"
                                                                            href="#">&nbsp;Action</a><a
                class="dropdown-item" href="#">&nbsp;Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">&nbsp;Something else here</a>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas
                data-bss-chart="{&quot;type&quot;:&quot;line&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Jan&quot;,&quot;Feb&quot;,&quot;Mar&quot;,&quot;Apr&quot;,&quot;May&quot;,&quot;Jun&quot;,&quot;Jul&quot;,&quot;Aug&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;Earnings&quot;,&quot;fill&quot;:true,&quot;data&quot;:[&quot;0&quot;,&quot;10000&quot;,&quot;5000&quot;,&quot;15000&quot;,&quot;10000&quot;,&quot;20000&quot;,&quot;15000&quot;,&quot;25000&quot;],&quot;backgroundColor&quot;:&quot;rgba(78, 115, 223, 0.05)&quot;,&quot;borderColor&quot;:&quot;rgba(78, 115, 223, 1)&quot;}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;},&quot;scales&quot;:{&quot;xAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;],&quot;drawOnChartArea&quot;:false},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}],&quot;yAxes&quot;:[{&quot;gridLines&quot;:{&quot;color&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;zeroLineColor&quot;:&quot;rgb(234, 236, 244)&quot;,&quot;drawBorder&quot;:false,&quot;drawTicks&quot;:false,&quot;borderDash&quot;:[&quot;2&quot;],&quot;zeroLineBorderDash&quot;:[&quot;2&quot;]},&quot;ticks&quot;:{&quot;fontColor&quot;:&quot;#858796&quot;,&quot;fontStyle&quot;:&quot;normal&quot;,&quot;padding&quot;:20}}]}}}"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-xl-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">Todo List</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">10:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label
                    class="form-check-label" for="formCheck-4"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">11:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"><label
                    class="form-check-label" for="formCheck-5"></label></div>
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="row align-items-center no-gutters">
              <div class="col me-2">
                <h6 class="mb-0"><strong>Lunch meeting</strong></h6><span class="text-xs">12:30 AM</span>
              </div>
              <div class="col-auto">
                <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"><label
                    class="form-check-label" for="formCheck-6"></label></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">作业收集进度</h6>
        </div>
        <div class="card-body">
          <h4 class="small fw-bold">高级操作系统<span class="float-end">20%</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
                 style="width: 20%;"><span class="visually-hidden">20%</span></div>
          </div>
          <h4 class="small fw-bold">JAVA8<span class="float-end">40%</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                 style="width: 40%;"><span class="visually-hidden">40%</span></div>
          </div>
          <h4 class="small fw-bold">数据结构第二次<span class="float-end">60%</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                 style="width: 60%;"><span class="visually-hidden">60%</span></div>
          </div>
          <h4 class="small fw-bold">Week9大作业<span class="float-end">Complete!</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                 style="width: 100%;"><span class="visually-hidden">100%</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="text-primary fw-bold m-0">DDL剩余日期</h6>
        </div>
        <div class="card-body">
          <h4 class="small fw-bold">高级操作系统<span class="float-end">3天</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                 style="width: 80%;"><span class="visually-hidden">80%</span></div>
          </div>
          <h4 class="small fw-bold">JAVA8<span class="float-end">5天</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                 style="width: 60%;"><span class="visually-hidden">60%</span></div>
          </div>
          <h4 class="small fw-bold">数据结构第二次<span class="float-end">5天</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                 style="width: 60%;"><span class="visually-hidden">60%</span></div>
          </div>
          <h4 class="small fw-bold">Week9大作业<span class="float-end">完成</span></h4>
          <div class="progress mb-4">
            <div class="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"
                 style="width: 100%;"><span class="visually-hidden">100%</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-primary shadow">
            <div class="card-body">
              <p class="m-0">Primary</p>
              <p class="text-white-50 small m-0">#4e73df</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-success shadow">
            <div class="card-body">
              <p class="m-0">Success</p>
              <p class="text-white-50 small m-0">#1cc88a</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-info shadow">
            <div class="card-body">
              <p class="m-0">Info</p>
              <p class="text-white-50 small m-0">#36b9cc</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-warning shadow">
            <div class="card-body">
              <p class="m-0">Warning</p>
              <p class="text-white-50 small m-0">#f6c23e</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-danger shadow">
            <div class="card-body">
              <p class="m-0">Danger</p>
              <p class="text-white-50 small m-0">#e74a3b</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card text-white bg-secondary shadow">
            <div class="card-body">
              <p class="m-0">Secondary</p>
              <p class="text-white-50 small m-0">#858796</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard"
}
</script>

<style scoped>

</style>