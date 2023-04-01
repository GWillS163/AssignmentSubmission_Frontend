<template>

  {{ formData.assignId }}
  {{ formData.userId }}
  <b-modal
      v-model="modal"
      :title="editMethod ==='edit' ? '编辑作业' : '新增作业'"
      cancel-title="取消"
      ok-title="确认"
      @ok="submit"
  >

    <b-form>
      <b-row>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-1" label="数据ID" label-for="input-1">
            <b-form-input id="input-1" v-model="formData.fileId" disabled required></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-8" label="上传日期" label-for="input-8" type="datetime-local">
            <b-form-input type="date" v-model="formData.uploadedDate" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" v-show="editMethod ==='edit'">
          <b-form-group id="input-group-8" label="上传时间" label-for="input-8" type="datetime-local">
            <b-form-input type="time" v-model="formData.uploadedTime" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col  md="6">
          <b-form-group id="input-group-5" label="所属作业" label-for="input-5">
              <b-form-select v-model="formData.assignId"  type="number" :options="assigns"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-5" label="所属用户" label-for="input-5">
              <b-form-select v-model="formData.userId"  type="text" :options="users"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="8" v-show="editMethod ==='edit'">
          <b-form-group  label="原文件名" label-for="input-4">
            <b-form-input v-model="formData.rawName"  disabled ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col :md="editMethod ==='edit' ? 4 : 12">
          <b-form-group id="input-group-2" label="上传文件" label-for="input-2">
            <input type="file" @change="onFileChange" ref="file"  class="form-control" placeholder="请上传文件">
          </b-form-group>
        </b-col>
        <b-col md="12" >
          <b-form-group  label="格式化文件名" label-for="input-4">
            <b-form-input v-model="formData.formatName"  switch ></b-form-input>
          </b-form-group>
        </b-col>
<!--        hr line -->
        <b-col md="12">
          <hr>
        </b-col>
        <b-col md="4" >
          <b-form-group id="input-group-8" label="最后编辑日期" label-for="input-8" type="datetime-local">
            <b-form-input type="date" v-model="formData.lastEditedDate" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group id="input-group-8" label="最后编辑时间" label-for="input-8" type="datetime-local">
            <b-form-input type="time" v-model="formData.lastEditedTime" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group id="input-group-2" label="文件大小" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.fileSize" disabled></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="8">
<!--          add a button that can copy value by click -->
          <b-form-group id="input-group-2"   label="Hash" label-for="input-2">
            <b-form-input id="input-2" v-model="formData.hash"  @click="copyHash"  disabled></b-form-input>
            <!--          add a prompt it can be copied by click -->
            <b-form-text target="input-2" triggers="hover" placement="bottom">
              点击复制
            </b-form-text>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group label="类型" label-for="input-4">
            <b-form-input v-model="formData.type" ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4" >
          <b-form-group label="云路径" label-for="input-4">
            <b-form-input v-model="formData.savePath"  disabled ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
  </b-modal>

  <b-container>
    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4">文件管理 ({{ files.length}})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
<!--        <a class="btn btn-primary"-->
<!--           role="button"-->
<!--           @click="addNew">-->
<!--          <i class="fa fa-plus"></i> 新增作业-->
<!--        </a>-->
      </b-col>

    </b-row>
    <!--    Pagination-->
    <b-row>
      <b-col class="my-1" md="2" sm="5">
        <b-form-group
            class="mb-0"
            label="Per page"
            label-align-sm="right"
            label-cols-lg="3"
            label-cols-md="4"
            label-cols-sm="6"
            label-for="per-page-select"
            label-size="sm"
        >
          <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col class="my-1" md="9" sm="7">
        <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            align="fill"
            class="my-0"
            first-text="⏮"
            last-text="⏭"
            next-text="⏩"
            prev-text="⏪"
            size="sm"
        ></b-pagination>
      </b-col>
    </b-row>


    <!--    List Card-->
    <b-row>
      <b-col>
        <div id="TableSorterCard-1" class="card">
          <b-card-header>
            <b-row>
              <b-col class="text-start" col="12" md="6" sm="5" style=" padding: 5px 15px;">
                <p class="text-primary m-0 fw-bold">
                  作业格式管理</p>
              </b-col>
              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">
                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"
                          @click="downAssigns">
                  <i class="fa fa-download"></i>
                  下载作业格式
                </b-button>
              </b-col>
            </b-row>
          </b-card-header>
          <div class="table-responsive">
            <b-table
                :current-page="currentPage"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                :items="files"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                bordered="true"
                empty-filtered-text="条件太多了，未查询到作业"
                empty-text="还没有作业哦"
                show-empty
                stacked="md"
                sticky-header="true"
                striped="true"
                @filtered="onFiltered"
            >

              <template #cell(actions)="row">
                <b-button class="mr-1 " size="sm"
                          variant="outline-primary"
                          @click="edit(row.item)"
                > 编辑
                </b-button>
                <b-button size="sm" variant="outline-secondary" @click="row.toggleDetails">
                  {{ row.detailsShowing ? '隐藏' : '展示' }}更多
                </b-button>
                <b-button class="mr-1 " size="sm" variant="outline-danger" @click="deleteAssign(row.item)">
                  删除
                </b-button>
              </template>

              <template #row-details="row">
                <b-card>
                  <table class="detailTable">
                    <tr>
                      <th v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">
                        {{ key }}
                      </th>
                    </tr>
                    <tr>
                      <td v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">
                        {{ value }}
                      </td>
                    </tr>
                  </table>
                </b-card>
              </template>
            </b-table>

          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";
import PageSpliter from "@/components/management/PageSpliter.vue";

export default {
  name: "files",
  components: {PageSpliter},
  methods: {

    addNew() {
      this.editMethod = "add";
      this.modal = !this.modal // toggle modal
    },
    edit(assign) {
      this.editMethod = "edit";
      this.modal = !this.modal
      this.formData = assign

    },
    submit() {
      console.log("submit");
      console.log(this.formData);
      this.modal = !this.modal

      if (this.editMethod === "add") {
        this.postAssign(this.formData);
      } else {
        this.putAssign(this.formData);
      }
    },
    downAssigns() {
      this.$api.testDownload();
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    copyHash() {
      // TODO: copy hash to clipboard
      console.log("copyHash")
    }
  },
  data() {
    const assigns = [];
    const users = [];
    const teachers = [];
    const totalRows = 0;
    const userInfo = {
      type: 'student',
      id: 10070,
      classId: 1909,
      name: '李四',
    }
    const files = [];
    const {proxy} = getCurrentInstance();
    const getFilesByStudentId = async () => {
      const res = await proxy.$api.getFilesByStudentId(userInfo.id);
      // console.log(res)
      this.files = res.data;
    }
    const getAssignsMapByClassesId = async () => {
      const res = await proxy.$api.getAssignsMapByClassesId(userInfo.classId);
      console.log("可选作业", res.data)
      this.assigns = res.data;
      // this.assigns = res.data.filter(assign => assign);
    }
    const getUsersMapByClassesId = async () => {
      const res = await proxy.$api.getUsersMapByClassesId(userInfo.classId);
      console.log("可选学生", res.data)
      this.users = res.data;
    }
    const postFile = async (file) => {
      file.userId = userInfo.id;
      const res = await proxy.$api.postFile(file);
      console.log(res)
    }
    const putFile = async (file) => {
      file.userId = userInfo.id;
      const res = await proxy.$api.putFile(file);
      console.log(res)
    }
    const deleteFile = async (file) => {
      const res = await proxy.$api.deleteFile(file);
      console.log(res)
    }
    onMounted(() => {
      getFilesByStudentId();
      getAssignsMapByClassesId();
      getUsersMapByClassesId();
    })
    return {
      getAssignsMapByClassesId,
      getFilesByStudentId,
      postFile,
      putFile,
      deleteFile,

      files,
      assigns,
      users,

      editMethod: "edit",
      modal: false,
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
      detailBlockList: ["_showDetails"],

      formData: {
          fileId: 28,
        assignId: 1,
        userId: 1,
        uploadedDate: "2021-05-01",
        uploadedTime: "01:00:00",
        lastEditedDate: "2021-05-01",
        lastEditedTime: "01:00:00",
        rawName: "原名称",
        formatName: "格式化后名称",
        fileSize: 9029,
        hash: "3ca30 sa09f9v09",
        type: "doc",
        savePath: "/upload/",
        fileData: ""


      },

      fields: [
        {key: 'fileId', label: '数据ID', sortable: true},
        {key: 'assignName', label: '作业名', sortable: true,
          formatter: (value) => {
          if (!value) {
            return "-"
          }
          return value;
        }
        },
        {key: 'rawName', label: '原文件名', sortable: true},
        {key: 'uploadTime', label: '提交日期', sortable: true},
        // {
        //   key: 'clazzId', label: '班级', sortable: true,
        //   formatter: (value) => {
        //     if (!value  || !(value in this.classes)) {
        //       return "-"
        //     }
        //     return this.classes[value];
        //   }
        // },
        {key: 'fileSize', label: '文件大小', sortable: true,
          formatter: (value) => {
            if (!value) {
              return "-"
            }
            if (value < 1024) {
              return value + "B"
            } else if (value < 1024 * 1024) {
              return (value / 1024).toFixed(2) + "KB"
            } else if (value < 1024 * 1024 * 1024) {
              return (value / 1024 / 1024).toFixed(2) + "MB"
            } else {
              return (value / 1024 / 1024 / 1024).toFixed(2) + "GB"
            }
          }
        },
        // {key: 'description', label: '描述', sortable: true},
        // {key: 'fileNameRule', label: '文件名规则', sortable: true},
        // {key: 'teacherId', label: '创建的教师', sortable: true,
        //   formatter: (value) => {
        //     if (!value || !(value in this.teachers)) {
        //       return "-"
        //     }
        //     return this.teachers[value];
        //   }
        // },
        {key: 'actions', label: '操作', sortable: false}
      ],
    }
  }
}
</script>

<style scoped>

</style>