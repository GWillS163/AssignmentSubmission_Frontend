<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">作业管理</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" role="button"
           @click="addAssign"><i
            class="fa fa-plus"></i>&nbsp; 新增作业</a></div>
    </div>
    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div class="row table-topper align-items-center">
          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0;padding: 5px 15px;">
            <p class="text-primary m-0 fw-bold">作业列表</p>
          </div>
          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0;padding: 5px 15px;"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <!--            place a collapse button, there are some content is inside -->

            <table id="ipi-table" class="table table-striped table tablesorter">
              <thead class="thead-dark">
              <tr>
                <th class="text-center"><strong><span
                >作业名称</span></strong><br>
                </th>
                <th class="text-center"><strong><span>班级</span></strong><br>
                </th>
                <th class="text-center"><span>格式化文件名</span><br>
                </th>
                <th class="text-center filter-false sorter-false">操作</th>
              </tr>
              </thead>
              <tbody class="text-center">
              <tr v-for="assign in assigns">
                <td> {{ assign.name }}</td>
                <td> {{ assign.clazz }}</td>
                <td> {{ assign.formatStr }}</td>

                <td class="text-center align-middle" style="max-height: 60px;height: 60px;">
                  <a class="btn btnMaterial btn-flat primary semicircle" href="#" role="button">
                    <i class="far fa-eye"></i></a>
                  <a class="btn btnMaterial btn-flat success semicircle" href="#"
                     role="button"><i class="fas fa-pen"></i></a>
                  <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" data-bs-target="#delete-modal"
                     data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;"><i
                      class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <nav class="d-xl-flex">
            <!--            TODO： 分页部分不会做-->
            <ul class="pagination justify-content-center">
              <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
                  aria-hidden="true">«</span></a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">4</a></li>
              <li class="page-item"><a class="page-link" href="#">5</a></li>
              <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span
                  aria-hidden="true">»</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div class="card shadow mb-4">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h6 class="text-primary fw-bold m-0">作业详情</h6>
        <div class="dropdown no-arrow">
          <button aria-expanded="false" class="btn btn-link btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                  type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>


        </div>
      </div>
      <div class="card-body"></div>
      <div class="card-body">
        <button class="btn text-end" type="button">
          <svg class="bi bi-pencil" fill="currentColor" height="1em" style="font-size: 29px;" viewBox="0 0 16 16"
               width="1em" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
          </svg>
        </button>
        <div>
          <ul class="nav nav-tabs" role="tablist">
            <li v-for="assign in assigns" class="nav-item" role="presentation">
              <a :class="{active: assign.id === '1'}"
                 :href="'#' + assign.id"
                 aria-controls="tab-1" aria-selected="true" class="nav-link" data-bs-toggle="tab"
                 role="tab">{{ assign.name }}</a>
            </li>

            <li class="nav-item" role="presentation"><a class="nav-link" data-bs-toggle="tab" href="" role="tab"
                                                        style="padding: 0;">
              <button class="btn btn-primary" type="button">添加</button>
            </a></li>
          </ul>
          <div v-for="assign in assigns" class="tab-content">
            <div id="{{ assign.id }}"
                 :class="assign.id === assigns[0].id ? 'tab-pane fade show active' : 'tab-pane fade'" role="tabpanel">
              <div>
                <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                  <b-card>
                    <p class="card-text">Collapse contents Here</p>
                    <b-button v-b-toggle.collapse-1-inner size="sm">Toggle Inner Collapse</b-button>
                    <b-collapse id="collapse-1-inner" class="mt-2">
                      <b-card>Hello!</b-card>
                    </b-collapse>
                  </b-card>
                </b-collapse>
              </div>
              <form>
                {{ assign.name }}
                <div class="row flex-fill">
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label" for="username"><strong>作业名</strong><br></label><input
                        id="username" :value="assign.name" class="form-control" name="assignName"
                        placeholder="请输入 作业名称"
                        type="text"></div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3 mb-md-0">
                      <label class="form-label" for="first_name"><strong>截止日期</strong><br></label></div>
                    <input :value="assign.ddl" class="form-control" type="date">
                  </div>
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label"
                                             for="first_name"><strong>格式化文件名</strong></label><input
                        id="first_name-2" :value="assign.formatStr" class="form-control" name="formatFileName"
                        placeholder="请输入 格式化文件名"
                        type="text"></div>
                  </div>
                </div>
                <div class="row flex-fill">
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label"
                                             for="username"><strong>下发对象</strong>(Ctrl多选)<br></label>
                    </div>
                    <select id="dates-field2" class="form-select multiselect-ui form-control" multiple
                    >
                      <!--                      use iteration to generate many options-->
                      <option v-for="clazz in assign.forClazz"
                              :selected="clazz.isSelected"
                              :value="clazz.id">{{ clazz.name }}
                      </option>

                    </select>
                  </div>
                  <div class="col-8">
                    <div class="mb-3"><label class="form-label" for="email"><strong>描述</strong></label></div>
                    <textarea class="form-control" name="assignDesc"
                              placeholder="请输入注明以下内容，文件格式，文件内容规则" rows="4">{{ assign.desc }}
                      </textarea>
                  </div>
                </div>
                <div class="row flex-fill mb-md-2">
                  <div class="col-4">
                    <div class="mb-3"></div>
                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3">
                      <input
                          id="isPermitAny"
                          :checked="assign.isPermitAny"
                          :disabled="isEditing"
                          class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                          style="width: 49px;height: 24px;" type="checkbox"><label class="form-check-label"
                                                                                   for="formCheck-2"
                                                                                   style="font-size: 18px;">
                      <strong>匿名提交</strong><br></label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3"></div>
                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3">
                      <input
                          id="isVarifyName" :checked="assign.isVarifyName"
                          class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                          disabled="" style="width: 49px;height: 24px;" type="checkbox"><label class="form-check-label"
                                                                                               for="formCheck-3"
                                                                                               style="font-size: 18px;">
                      <strong>校验文件</strong><br></label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3"></div>
                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3">
                      <input
                          id="isPermitLate" :checked="assign.isPermitLate"
                          class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                          disabled="" style="width: 49px;height: 24px;" type="checkbox">
                      <label class="form-check-label"
                             for="formCheck-3"
                             style="font-size: 18px;"><strong>超期提交</strong><br></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">收集进度</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <div class="progress flex-fill" style="margin-top: 9px;">
                      <div :aria-valuenow="assign.progress" :style="'width:' + assign.progress +'%;'" aria-valuemax="100"
                           aria-valuemin="0"
                           class="progress-bar bg-success">{{ assign.progress }}%
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">最近上交</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <p>{{ assign.recentSubmit }}</p>
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
                  <tr v-for="file in assign.files">
                    <td>{{ file.name }}</td>
                    <td>{{ file.formatName }}</td>
                    <td>{{ file.size }}</td>
                    <td>{{ file.md5 }}</td>
                    <td>{{ file.submitTime }}</td>
                    <td>删除</td>
                  </tr>
                  </tbody>
                  <tfoot>
                  <tr></tr>
                  </tfoot>
                </table>
              </div>
              <nav class="d-xl-flex justify-content-xl-end">
                <ul class="pagination">
                  <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
                      aria-hidden="true">«</span></a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span
                      aria-hidden="true">»</span></a></li>
                </ul>
              </nav>
            </div>
            <div id="tab-1" class="tab-pane active" role="tabpanel">
              <form>
                <div class="row flex-fill">
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label" for="username"><strong>作业名</strong><br></label><input
                        id="username" class="form-control" name="assignName" placeholder="请输入 作业名称" type="text"
                        value="数据结构第六次作业"></div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3 mb-md-0"><label class="form-label"
                                                     for="first_name"><strong>截止日期</strong><br></label></div>
                    <input class="form-control" type="date">
                  </div>
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label"
                                             for="first_name"><strong>格式化文件名</strong></label><input
                        id="first_name-2" class="form-control" name="formatFileName" placeholder="请输入 格式化文件名"
                        type="text" value="<班级>-<学号>-<姓名>-操作系统第六次作业"></div>
                  </div>
                </div>
                <div class="row flex-fill">
                  <div class="col-4">
                    <div class="mb-3"><label class="form-label" for="username"><strong>下发对象</strong><br></label>
                    </div>
                    <select id="dates-field2" class="form-select multiselect-ui form-control" multiple="">
                      <option selected="" value="12">1909班</option>
                      <option value="13">1909班</option>
                      <option value="14">1911班</option>
                    </select>
                  </div>
                  <div class="col-8">
                    <div class="mb-3"><label class="form-label" for="email"><strong>描述</strong></label></div>
                    <textarea class="form-control" name="assignDesc"
                              placeholder="请输入注明以下内容，文件格式，文件内容规则" rows="4">把第六章作业手抄 + word文档实验，上交 .pdf</textarea>
                  </div>
                </div>
                <div class="row flex-fill mb-md-2">
                  <div class="col-4">
                    <div class="mb-3"></div>
                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input
                        id="formCheck-2" checked="" class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                        disabled="" style="width: 49px;height: 24px;" type="checkbox"><label class="form-check-label"
                                                                                             for="formCheck-2"
                                                                                             style="font-size: 18px;"><strong>允许匿名提交</strong><br></label>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="mb-3"></div>
                    <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input
                        id="formCheck-3" checked="" class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                        disabled="" style="width: 49px;height: 24px;" type="checkbox"><label class="form-check-label"
                                                                                             for="formCheck-3"
                                                                                             style="font-size: 18px;"><strong>校验文件名</strong><br></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">收集进度</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <div class="progress flex-fill" style="margin-top: 9px;">
                      <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" class="progress-bar bg-success"
                           style="width: 90%;">90%
                      </div>
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
                  <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
                      aria-hidden="true">«</span></a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">4</a></li>
                  <li class="page-item"><a class="page-link" href="#">5</a></li>
                  <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span
                      aria-hidden="true">»</span></a></li>
                </ul>
              </nav>
            </div>
            <div id="tab-2" class="tab-pane" role="tabpanel">
              <p>Content for tab 2.</p>
            </div>
            <div id="tab-3" class="tab-pane" role="tabpanel">
              <p>Content for tab 3.</p>
            </div>
            <div id="tab-4" class="tab-pane" role="tabpanel">
              <div class="col-md-6 col-xl-4">
                <div class="card mb-5" style="box-shadow: 8px 7px 20px;">
                  <h1>设置作业规则</h1>
                  <form class="p-3 p-xl-4" method="post">
                    <h4>Desc</h4>
                    <p class="text-muted">你可以在这里修改作业收集规则</p>
                    <div class="mb-3"><label class="form-label" for="name">作业名称</label><input id="name-1"
                                                                                                  class="form-control"
                                                                                                  name="name"
                                                                                                  type="text"></div>
                    <div class="mb-3"><label class="form-label" for="email">下发班级</label><input id="email"
                                                                                                   class="form-control"
                                                                                                   name="email"
                                                                                                   type="email"></div>
                    <div class="mb-3"><label class="form-label" for="message">作业描述</label><textarea
                        id="message" class="form-control" name="message" rows="6"></textarea></div>
                    <label class="form-label" for="name">截止日期</label><input id="name" class="form-control"
                                                                                name="name" type="text">
                    <div class="form-check" style="margin-top: 10px;margin-bottom: 9px;"><input id="formCheck-1"
                                                                                                class="form-check-input"
                                                                                                type="checkbox"><label
                        class="form-check-label" for="formCheck-1">匿名提交</label></div>
                    <div class="mb-3">
                      <button class="btn btn-primary" type="submit">提交</button>
                    </div>
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
  name: "center",
  // define a addAssign function
  methods: {
    addAssign: function () {
      this.assigns.push({
        name: "",
        email: "",
        message: ""
      });
      console.log(this.assigns);
    },
    // define a removeAssign function
    removeAssign: function (index) {
      this.assigns.splice(index, 1);
    }
  },

  // export to the global scope
  data() {
    return {
      addAssign: this.addAssign,
      isEditing: true,
      assigns: [
        {
          name: "第一次作业",
          clazz: "1909班,1908班",
          id: "tab-1",
          desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
          formatStr: "数据结构-<班级>-<学号>.docx",
          ddl: "16/01/2023",//"2022-7-2 17:52:87",
          isPermitAny: true,
          isPermitLate: true,
          isVarifyName: true,
          progress: 90,
          recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",
          switches: [
            {
              id: "isPermitAny",
              name: "允许匿名提交"
            },
            {
              id: "isPermitLate",
              name: "允许迟交"
            }
          ],
          forClazz: [
            {
              name: "1909班",
              isSelected: true
            },
            {
              name: "1908班",
              isSelected: true
            },
            {
              name: "1907班",
              isSelected: false
            }
          ],
          files: [
            {
              name: "孟骏清",
              formatName: "数据结构-1909班-19852333.docx",
              size: "30.23MB",
              md5: "fae0b27c451c728867a567e8c1bb4e53",
              submitTime: "2022-7-2 17:52:87"
            },
            {
              name: "赵云龙",
              formatName: "数据结构-1909班-19852334.docx",
              size: "30.23MB",
              md5: "fae0b27c451c728867a567e8c1bb4e53",
              submitTime: "2022-7-2 17:52:87"
            },
            {
              name: "李翔",
              formatName: "数据结构-1909班-19852335.docx",
              size: "30.23MB",
              md5: "fae0b27c451c728867a567e8c1bb4e53",
              submitTime: "2022-7-2 17:52:87"
            }
          ]
        },
        {
          name: "第二次作业",
          clazz: "1909班,1908班",
          id: "tab-2",
          formatStr: "数据结构-<班级>-<学号>.docx",
        },
        {
          name: "Java第一次作业",
          clazz: "1909班,1908班",
          id: "tab-3",
          formatStr: "Java-<班级>-<学号>.docx",
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>