<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的作业</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"
                                                                                     role="button"><i
          class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
    </div>
    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div>
          <ul class="nav nav-tabs nav-fill" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-1" role="tab">班级作业</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link active" data-bs-toggle="tab" href="#tab-2"
                                                        role="tab">公共作业</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-3"
                                                        role="tab">  </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane" role="tabpanel">
              <div class="row d-inline">
                <div class="col mb-xxl-0 pb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                  <div class="card border-warning" type="button">
                    <h5 class="text-black-50 text-bg-warning border-warning card-header">即将截止</h5>
                    <div class="card-body pb-xxl-0" style="padding-top: 0px;box-shadow: 0px 0px;">
                      <div class="row" style="padding-top: 13px;">
                        <div class="col">
                          <h4>第五次数据结构<br></h4>
                          <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                        </div>
                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                          <div class="d-flex flex-fill justify-content-end me-auto"><img
                              class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50" src="../../../backendAssets/img/AssginImg.png"
                              width="50">
                            <div>
                              <p class="fw-bold text-primary mb-0">KissesJun</p>
                              <p class="text-muted mb-0">2022-12-15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row align-content-center align-self-center my-auto">
                        <div class="col d-inline-flex flex-fill align-content-center align-self-center my-auto mt-xxl-3"
                             style="margin-top: 20px;"><label
                            class="form-label align-self-center my-auto">收集进度：</label>
                          <div class="progress flex-fill align-self-center my-auto mt-xxl-0 mb-xxl-0"
                               style="margin-bottom: 36px;">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50"
                                 class="progress-bar bg-warning" style="width: 50%;">50%
                            </div>
                          </div>
                          <button class="btn btn-warning btn-sm mt-xxl-2 mb-xxl-1 ms-xxl-2" type="button">上传文件
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-xxl-0 pb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                  <div class="card border-success" type="button">
                    <h5 class="text-black-50 text-bg-success border-success card-header">正在收集</h5>
                    <div class="card-body pb-xxl-0" style="padding-top: 0px;box-shadow: 0px 0px;">
                      <div class="row" style="padding-top: 13px;">
                        <div class="col">
                          <h4>第五次数据结构<br></h4>
                          <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                        </div>
                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                          <div class="d-flex flex-fill justify-content-end me-auto"><img
                              class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50" src="../../../backendAssets/img/AssginImg.png"
                              width="50">
                            <div>
                              <p class="fw-bold text-primary mb-0">KissesJun</p>
                              <p class="text-muted mb-0">2022-12-15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row align-content-center align-self-center my-auto">
                        <div class="col d-inline-flex flex-fill align-content-center align-self-center my-auto mt-xxl-3"
                             style="margin-top: 20px;"><label
                            class="form-label align-self-center my-auto">收集进度：</label>
                          <div class="progress flex-fill align-self-center my-auto mt-xxl-0 mb-xxl-0"
                               style="margin-bottom: 36px;">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="30"
                                 class="progress-bar bg-success" style="width: 30%;">30%
                            </div>
                          </div>
                          <button class="btn btn-success btn-sm disabled mt-xxl-2 mb-xxl-1 ms-xxl-2" disabled=""
                                  type="button">上传文件
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col mb-xxl-0 pb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                  <div class="card border-success" type="button">
                    <h5 class="text-black-50 text-bg-success border-success card-header">正在收集</h5>
                    <div class="card-body pb-xxl-0" style="padding-top: 0px;box-shadow: 0px 0px;">
                      <div class="row" style="padding-top: 13px;">
                        <div class="col">
                          <h4>第五次数据结构<br></h4>
                          <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                        </div>
                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                          <div class="d-flex flex-fill justify-content-end me-auto"><img
                              class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50" src="../../../backendAssets/img/AssginImg.png"
                              width="50">
                            <div>
                              <p class="fw-bold text-primary mb-0">KissesJun</p>
                              <p class="text-muted mb-0">2022-12-15</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row align-content-center align-self-center my-auto">
                        <div class="col d-inline-flex flex-fill align-content-center align-self-center my-auto mt-xxl-3"
                             style="margin-top: 20px;"><label
                            class="form-label align-self-center my-auto">收集进度：</label>
                          <div class="progress flex-fill align-self-center my-auto mt-xxl-0 mb-xxl-0"
                               style="margin-bottom: 36px;">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="30"
                                 class="progress-bar bg-success" style="width: 30%;">30%
                            </div>
                          </div>
                          <button class="btn btn-success btn-sm disabled mt-xxl-2 mb-xxl-1 ms-xxl-2" disabled=""
                                  type="button">上传文件
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" class="tab-pane active" role="tabpanel">
              <div class="col mb-xxl-0 pb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                <div class="card border-dark" type="button">
                  <h5 class="text-white-50 text-bg-dark border-success card-header">停止收集</h5>
                  <div class="card-body pb-xxl-0" style="padding-top: 0px;box-shadow: 0px 0px;">
                    <div class="row" style="padding-top: 13px;">
                      <div class="col">
                        <h4>期末大数据结课作业<br></h4>
                        <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                      </div>
                      <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                        <div class="d-flex flex-fill justify-content-end me-auto"><img
                            class="rounded-circle flex-shrink-0 me-3 fit-cover" height="50" src="../../../backendAssets/img/AssginImg.png"
                            width="50">
                          <div>
                            <p class="fw-bold text-primary mb-0">KissesJun</p>
                            <p class="text-muted mb-0">2022-12-15</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row align-content-center align-self-center my-auto">
                      <div class="col d-inline-flex flex-fill align-content-center align-self-center my-auto mt-xxl-3"
                           style="margin-top: 20px;"><label
                          class="form-label align-self-center my-auto">收集进度：</label>
                        <div class="progress flex-fill align-self-center my-auto mt-xxl-0 mb-xxl-0"
                             style="margin-bottom: 36px;">
                          <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" class="progress-bar bg-dark"
                               style="width: 30%;">30%
                          </div>
                        </div>
                        <button class="btn btn-dark btn-sm disabled mt-xxl-2 mb-xxl-1 ms-xxl-2" disabled=""
                                type="button">上传文件
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" class="tab-pane" role="tabpanel">
              <p>Content for tab 3.</p>
            </div>
          </div>
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0 justify-content-center">
            <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span aria-hidden="true">«</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span aria-hidden="true">»</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "assigns"
}
</script>

<style scoped>

</style>