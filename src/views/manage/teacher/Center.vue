<script setup>
import AssignForm from "@/components/management/assignForm.vue";
import SubmitTable from "@/components/management/filesTable.vue";
</script>
<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">作业管理</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6">
        <div class="btn-group float-end" role="group"  aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="cardMode" id="cardMode" autocomplete="off"
          :checked="viewMode === 'card'" @click="viewMode = 'card'"
          >
          <label class="btn btn-outline-primary" for="cardMode">卡片模式</label>

          <input type="radio" class="btn-check" name="tableMode" id="tableMode" autocomplete="off"
          :checked="viewMode === 'table'" @click="viewMode = 'table'"
          >
          <label class="btn btn-outline-primary" for="tableMode">列表模式</label>

        </div>
      </div>
    </div>

    <!--    if viewMode is table, show table, if not, show card-->
    <!--    use the if syntax of vue-->

    <div v-show="viewMode === 'card'">
      <div class="card shadow show mb-4">
        <div class="card-header d-flex justify-content-between align-items-center">
          <h6 class="text-primary fw-bold m-0">作业详情</h6>
          <div class="dropdown no-arrow">
            <button aria-expanded="false" class="btn btn-link btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                    type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
          </div>
        </div>
        <div class="card-body">
          <div>
            <ul class="nav nav-tabs" role="tablist">
              <li v-for="assign in assigns" class="nav-item" role="presentation">
                <a :class="{active: assign.formData.id === assigns[0].formData.id}"
                   :href="'#' + assign.formData.id"
                   aria-controls="tab-1" aria-selected="true" class="nav-link" data-bs-toggle="tab"
                   role="tab">{{ assign.formData.name }}</a>
              </li>

              <li class="nav-item" role="presentation">
                <a aria-controls="tab-1"
                   aria-selected="true" class="nav-link"
                   data-bs-toggle="tab" href="#add"
                   role="tab">
                  <i class="fas fa-plus" style="color: #007bff;"></i>
                </a>
              </li>
            </ul>
            <div v-for="assign in assigns" class="tab-content">
              <div :id="assign.formData.id"
                   :class="{active: assign.formData.id === assigns[0].formData.id}"
                   class="tab-pane show"
                   role="tabpanel">

                <div class=" justify-content-center">
                  <a aria-controls="collapseExample" aria-expanded="false"
                     class="btn btn-primary" data-bs-toggle="collapse"
                     href="#collapseExample" role="button">
                    <i class="fas fa-expand-alt"></i>
                    展示详情
                  </a>
                </div>
                <div id="collapseExample" class="collapse">
                  <div class="card card-body">
                    <AssignForm :assign="assign.formData" :ownClazz="ownClazz"></AssignForm>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2"><label class="col-form-label">收集进度</label></div>
                  <div class="col-auto d-md-flex flex-fill">
                    <div class="progress flex-fill" style="margin-top: 9px;">
                      <div :aria-valuenow="assign.progress" :style="'width:' + assign.progress +'%;'"
                           aria-valuemax="100"
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
                <SubmitTable :files="assign.files"></SubmitTable>
              </div>
              <div class="tab-content">
                <div id="add" class="tab-pane show" role="tabpanel">
                  <!--              pass the param isEditing to component-->

                  <AssignForm :assign="addDataForm" :ownClazz="ownClazz" :isAdd="true"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div v-show="viewMode === 'table'">
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
                  <td> {{ assign.formData.name }}</td>
                  <td> {{ assign.formData.clazz }}</td>
                  <td> {{ assign.formData.formatStr }}</td>

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
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "center",
  methods: {
    handleViewMode(mode) {
      this.viewMode = mode;
    },
  },

  // export to the global scope
  data() {
    const ownClazz = [
      {
        id: 1909,
        name: "1909班"
      },
      {
        id: 1910,
        name: "1910班",
      },
      {
        id: 1911,
        name: "1911班",
      },
    ]

    // const isEditing = ref(false);
    const viewMode = "card";
    return {
      ownClazz,
      // handleEdit: this.handleEdit,
      viewMode,
      // isEditing: [isEditing],
      assignInfo: {
        str: "222",
        email: "",
        message: ""
      },
      addDataForm: {
        name: "",
        id: "",
        clazz: "",
        desc: "",
        formatStr: " ",
        ddl: "",
        forClazz: [
          1909, 1910
        ],
        isPermitAny: true,
        isPermitLate: true,
        // isPermitMulti: true,
        isVarifyName: true,
       },
      // isEditing: true,
      assigns: [
        {
          // name: "第一次作业",
          // id: "tab-1",
          formData: {
            isEditing: this.isEditing,
            name: "第一次作业",
            id: "tab-1",
            clazz: "1909班,1908班",
            desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
            formatStr: "数据结构-<班级>-<学号>.docx",
            ddl: "2022-07-02T17:52",
            forClazz: [
              1909, 1910
            ],
            isPermitAny: true,
            isPermitLate: true,
            // isPermitMulti: true,
            isVarifyName: true,
           },

          progress: 90,
          recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

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
          // name: "第一次作业",
          // id: "tab-1",
          formData: {
            isEditing: this.isEditing,
            name: "抄写作业",
            id: "tab-186",
            clazz: "1909班,1908班",
            desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
            formatStr: "数据结构-<班级>-<学号>.docx",
            ddl: "2022-07-02T17:52",
            forClazz: [
              1909, 1910
            ],
            isPermitAny: false,
            isPermitLate: true,
            // isPermitMulti: true,
            isVarifyName: false,
           },

          progress: 90,
          recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

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
          formData: {
            name: "第2次作业",
            id: "tab-2",
            clazz: "1909班,1908班",
            desc: "把第六章作业手抄 + word文档实验，上交 .pdf",
            formatStr: "数据结构-<班级>-<学号>.docx",
            ddl: "2022-07-02T17:52",
            forClazz: [
              1909, 1910
            ],
            isPermitAny: true,
            isPermitLate: true,
            // isPermitMulti: true,
            isVarifyName: true,
          },

          progress: 30,
          recentSubmit: "赵云龙 2022-7-2 17:52:87 （82秒前）",

          files: [
            {
              name: "孟骏清",
              formatName: "数据结构-1909班-19852333.docx",
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
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>