<template>
  <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6">
                            <h3 class="text-dark mb-4">作业视图</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary" role="button"><i class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
                    </div>
                    <div class="card" id="TableSorterCard" style="margin-bottom: 19px;"></div>
                    <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 41px;">
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
                                    <p class="mb-0">总提交率</p>
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
                    <div class="row d-grid">
                        <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                            <div class="card" type="button" style="border-style: solid;border-color: var(--bs-red);">
                                <h5 class="text-black-50 text-bg-warning border-warning card-header">即将截止</h5>
                                <div class="card-body" style="padding-top: 0px;box-shadow: 0px 0px;">
                                    <div class="row" style="padding-top: 13px;">
                                        <div class="col">
                                            <h4>第五次数据结构<br></h4>
                                            <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                                        </div>
                                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                                            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="../../../backendAssets/img/AssginImg.png">
                                                <div>
                                                    <p class="fw-bold text-primary mb-0">KissesJun</p>
                                                    <p class="text-muted mb-0">2022-12-15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">班级</th>
                                                    <th class="text-center">进度</th>
                                                    <th>提交详情</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1909</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div>
                                                        </div>
                                                    </td>
                                                    <td colspan="2">
                                                        <div><a class="btn btn-primary btn-sm" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" href="#collapse-1" role="button">展示详情</a>
                                                            <div class="collapse" id="collapse-1">
                                                                <div style="width: 100%;">
                                                                    <p>未提交： 张三，李四，</p>
                                                                    <p>已提交： 王五， 赵六</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 152.234px;">1910</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-success" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">90%</div>
                                                        </div>
                                                    </td>
                                                    <td style="width: 352.469px;">
                                                        <div class="flex-fill" style="width: 200.047px;"><a class="btn btn-primary btn-sm" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-3" href="#collapse-3" role="button">展示详情</a>
                                                            <div class="collapse show flex-fill" id="collapse-3">
                                                                <div class="flex-fill" style="width: 100%;">
                                                                    <p>未提交： 张三，李四，</p>
                                                                    <p class="pe-xxl-0">已提交： 王五， 赵六</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                            <div class="card" type="button" style="border-style: solid;border-color: rgb(44,203,69);">
                                <h5 class="text-black-50 text-bg-success card-header">收集中</h5>
                                <div class="card-body" style="padding-top: 0px;box-shadow: 0px 0px;">
                                    <div class="row" style="padding-top: 13px;">
                                        <div class="col">
                                            <h4>第五次数据结构<br></h4>
                                            <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                                        </div>
                                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                                            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="../../../backendAssets/img/AssginImg.png">
                                                <div>
                                                    <p class="fw-bold text-primary mb-0">KissesJun</p>
                                                    <p class="text-muted mb-0">2022-12-15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">班级</th>
                                                    <th class="text-center">进度</th>
                                                    <th>提交详情</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1909</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">50%</div>
                                                        </div>
                                                    </td>
                                                    <td colspan="2">
                                                        <div><a class="btn btn-primary btn-sm" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-6" href="#collapse-6" role="button">展示详情</a>
                                                            <div class="collapse" id="collapse-6">
                                                                <div style="width: 100%;">
                                                                    <p>未提交： 张三，李四，</p>
                                                                    <p>已提交： 王五， 赵六</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="width: 152.234px;">1910</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-info" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100" style="width: 34%;">34%</div>
                                                        </div>
                                                    </td>
                                                    <td style="width: 352.469px;">
                                                        <div class="flex-fill" style="width: 200.047px;"><a class="btn btn-primary btn-sm" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapse-7" href="#collapse-7" role="button">展示详情</a>
                                                            <div class="collapse show flex-fill" id="collapse-7">
                                                                <div class="flex-fill" style="width: 100%;">
                                                                    <p>未提交： 张三，李四，</p>
                                                                    <p class="pe-xxl-0">已提交： 王五， 赵六</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-xxl-0" style="padding-bottom: 26px;padding-top: 19px;">
                            <div class="card" type="button" style="border-style: solid;border-color: rgb(44,203,69);">
                                <h5 class="text-black-50 text-bg-success card-header">收集中</h5>
                                <div class="card-body" style="padding-top: 0px;box-shadow: 0px 0px;">
                                    <div class="row" style="padding-top: 13px;">
                                        <div class="col">
                                            <h4>Week8 大作业<br></h4>
                                            <h6 class="text-muted mb-2">DDL: 2022-12-15 18:00<br></h6>
                                        </div>
                                        <div class="col d-xxl-flex justify-content-end justify-content-xxl-end" style="display: flex;">
                                            <div class="d-flex"><img class="rounded-circle flex-shrink-0 me-3 fit-cover" width="50" height="50" src="../../../backendAssets/img/octocat-23.png">
                                                <div>
                                                    <p class="fw-bold text-primary mb-0">张夜光</p>
                                                    <p class="text-muted mb-0">2022-12-15</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">班级</th>
                                                    <th class="text-center">进度</th>
                                                    <th>提交详情</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style="width: 152.234px;">匿名</td>
                                                    <td>
                                                        <div class="progress">
                                                            <div class="progress-bar bg-success" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">90%</div>
                                                        </div>
                                                    </td>
                                                    <td style="width: 352.469px;">
                                                        <div class="flex-fill" style="width: 200.047px;"><a class="btn btn-primary btn-sm" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-5" href="#collapse-5" role="button">展示详情</a>
                                                            <div class="collapse flex-fill" id="collapse-5">
                                                                <div class="flex-fill" style="width: 100%;">
                                                                    <p>未提交： 张三，李四，</p>
                                                                    <p class="pe-xxl-0">已提交： 王五， 赵六</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>