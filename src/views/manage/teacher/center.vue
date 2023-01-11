<template>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6">
                            <h3 class="text-dark mb-4">作业管理</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary" role="button"><i class="fa fa-plus"></i>&nbsp; 新增作业</a></div>
                    </div>
                    <div class="card" id="TableSorterCard" style="margin-bottom: 19px;">
                        <div class="card-header py-3">
                            <div class="row table-topper align-items-center">
                                <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
                                    <p class="text-primary m-0 fw-bold">作业列表</p>
                                </div>
                                <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;"></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-striped table tablesorter" id="ipi-table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th class="text-center"><strong><span style="color: rgb(133, 135, 150); background-color: rgb(255, 255, 255);">作业名称</span></strong><br></th>
                                                <th class="text-center"><strong><span style="color: rgb(133, 135, 150); background-color: rgb(255, 255, 255);">班级</span></strong><br></th>
                                                <th class="text-center"><span style="color: rgb(133, 135, 150); background-color: rgb(255, 255, 255);">格式化文件名</span><br></th>
                                                <th class="text-center filter-false sorter-false">操作</th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-center">
                                            <tr>
                                                <td>第一次作业<br></td>
                                                <td>1909,1910<br></td>
                                                <td>数据结构-&lt;班级&gt;-&lt;姓名&gt;.docx<br></td>
                                                <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a class="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i class="fas fa-pen"></i></a><a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>第二次作业<br></td>
                                                <td>1909,1910<br></td>
                                                <td>数据结构3-&lt;班级&gt;-&lt;姓名&gt;.docx<br></td>
                                                <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a class="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i class="fas fa-pen"></i></a><a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <nav class="d-xl-flex justify-content-xl-end">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item"><a class="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h6 class="text-primary fw-bold m-0">作业详情</h6>
                            <div class="dropdown no-arrow"><button class="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
                                <div class="dropdown-menu dropdown-menu-end shadow animated--fade-in">
                                    <h6 class="dropdown-header text-center"><strong>DROPDOWN HEADER:</strong></h6><a class="dropdown-item" href="#">&nbsp;Action</a><a class="dropdown-item" href="#">&nbsp;Another action</a>
                                    <div class="dropdown-divider"></div><a class="dropdown-item" href="#">&nbsp;Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body"></div>
                        <div class="card-body"><button class="btn text-end" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-pencil" style="font-size: 29px;">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                                </svg></button>
                            <div>
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-1">数据结构第二次作业</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">JAVA8</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" href="#tab-4" style="padding-left: 0px;padding-right: 0px;padding-bottom: 0px;padding-top: 0px;"><button class="btn btn-primary" type="button">添加</button></a></li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" role="tabpanel" id="tab-1">
                                        <form>
                                            <div class="row flex-fill">
                                                <div class="col-4">
                                                    <div class="mb-3"><label class="form-label" for="username"><strong>作业名</strong><br></label><input class="form-control" type="text" id="username" placeholder="请输入 作业名称" name="assignName" value="数据结构第六次作业"></div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3 mb-md-0"><label class="form-label" for="first_name"><strong>截止日期</strong><br></label></div><input class="form-control" type="date">
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3"><label class="form-label" for="first_name"><strong>格式化文件名</strong></label><input class="form-control" type="text" id="first_name-2" placeholder="请输入 格式化文件名" name="formatFileName" value="<班级>-<学号>-<姓名>-操作系统第六次作业"></div>
                                                </div>
                                            </div>
                                            <div class="row flex-fill">
                                                <div class="col-4">
                                                    <div class="mb-3"><label class="form-label" for="username"><strong>下发对象</strong><br></label></div><select class="form-select multiselect-ui form-control" id="dates-field2" multiple="">
                                                        <option value="12" selected="">1909班</option>
                                                        <option value="13">1909班</option>
                                                        <option value="14">1911班</option>
                                                    </select>
                                                </div>
                                                <div class="col-8">
                                                    <div class="mb-3"><label class="form-label" for="email"><strong>描述</strong></label></div><textarea class="form-control" name="assignDesc" placeholder="请输入注明以下内容，文件格式，文件内容规则" rows="4">把第六章作业手抄 + word文档实验，上交 .pdf</textarea>
                                                </div>
                                            </div>
                                            <div class="row flex-fill mb-md-2">
                                                <div class="col-4">
                                                    <div class="mb-3"></div>
                                                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input class="form-check-input pt-xl-0 mt-xl-1 me-xl-3" type="checkbox" id="formCheck-2" style="width: 49px;height: 24px;" checked="" disabled=""><label class="form-check-label" for="formCheck-2" style="font-size: 18px;"><strong>允许匿名提交</strong><br></label></div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3"></div>
                                                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input class="form-check-input pt-xl-0 mt-xl-1 me-xl-3" type="checkbox" id="formCheck-3" style="width: 49px;height: 24px;" checked="" disabled=""><label class="form-check-label" for="formCheck-3" style="font-size: 18px;"><strong>校验文件名</strong><br></label></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2"><label class="col-form-label">收集进度</label></div>
                                                <div class="col-auto d-md-flex flex-fill">
                                                    <div class="progress flex-fill" style="margin-top: 9px;">
                                                        <div class="progress-bar bg-success" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">90%</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2"><label class="col-form-label">最近上交</label></div>
                                                <div class="col-auto d-md-flex flex-fill">
                                                    <p>2023-1-9 00:24:10&nbsp; （89秒前）</p>
                                                </div>
                                            </div>
                                            <div class="mb-3"></div>
                                        </form>
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>姓名</th>
                                                        <th>格式化文件名</th>
                                                        <th>文件大小</th>
                                                        <th>Hash</th>
                                                        <th>提交时间</th>
                                                        <th>操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>孟骏清</td>
                                                        <td>数据结构-1909班-19852331.docx<br></td>
                                                        <td>30.23MB<br></td>
                                                        <td>fae0b27c451c728867a567e8c1bb4e53<br></td>
                                                        <td>2022-7-2 17:43:07<br></td>
                                                        <td>Cell 6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>赵云龙</td>
                                                        <td>数据结构-1909班-19852333.docx<br></td>
                                                        <td>30.23MB<br></td>
                                                        <td>fae0b27c451c728867a567e8c1bb4e53<br></td>
                                                        <td>2022-7-2 17:52:87<br></td>
                                                        <td>Cell 6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>赵云龙</td>
                                                        <td>数据结构-1909班-19852333.docx<br></td>
                                                        <td>30.23MB<br></td>
                                                        <td>fae0b27c451c728867a567e8c1bb4e53<br></td>
                                                        <td>2022-7-2 17:52:87<br></td>
                                                        <td>Cell 6</td>
                                                    </tr>
                                                    <tr>
                                                        <td>赵云龙</td>
                                                        <td>数据结构-1909班-19852333.docx<br></td>
                                                        <td>30.23MB<br></td>
                                                        <td>fae0b27c451c728867a567e8c1bb4e53<br></td>
                                                        <td>2022-7-2 17:52:87<br></td>
                                                        <td>Cell 6</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr></tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <nav class="d-xl-flex justify-content-xl-end">
                                            <ul class="pagination">
                                                <li class="page-item"><a class="page-link" aria-label="Previous" href="#"><span aria-hidden="true">«</span></a></li>
                                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                                <li class="page-item"><a class="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="tab-pane" role="tabpanel" id="tab-2">
                                        <p>Content for tab 2.</p>
                                    </div>
                                    <div class="tab-pane" role="tabpanel" id="tab-3">
                                        <p>Content for tab 3.</p>
                                    </div>
                                    <div class="tab-pane" role="tabpanel" id="tab-4">
                                        <div class="col-md-6 col-xl-4">
                                            <div class="card mb-5" style="box-shadow: 8px 7px 20px;">
                                                <h1>设置作业规则</h1>
                                                <form class="p-3 p-xl-4" method="post">
                                                    <h4>Desc</h4>
                                                    <p class="text-muted">你可以在这里修改作业收集规则</p>
                                                    <div class="mb-3"><label class="form-label" for="name">作业名称</label><input class="form-control" type="text" id="name-1" name="name"></div>
                                                    <div class="mb-3"><label class="form-label" for="email">下发班级</label><input class="form-control" type="email" id="email" name="email"></div>
                                                    <div class="mb-3"><label class="form-label" for="message">作业描述</label><textarea class="form-control" id="message" name="message" rows="6"></textarea></div><label class="form-label" for="name">截止日期</label><input class="form-control" type="text" id="name" name="name">
                                                    <div class="form-check" style="margin-top: 10px;margin-bottom: 9px;"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label" for="formCheck-1">匿名提交</label></div>
                                                    <div class="mb-3"><button class="btn btn-primary" type="submit">提交</button></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
  name: "center"
}
</script>

<style scoped>

</style>