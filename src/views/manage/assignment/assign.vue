<template>
  <b-container fluid>
    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4">作业管理 ({{ assigns.length}})</h3>
      </b-col>

      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <a class="btn btn-primary"
           role="button"
           @click="addNew">
          <i class="fa fa-plus"></i> 新增作业
        </a>
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
                :items="assigns"
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
                <b-button class="mr-1 " size="sm" variant="outline-danger" @click="deleteStudent(row.item)">
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
import {computed, getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "assign",
  methods: {
    addNew() {
      this.editMethod = "add";
      this.modal = !this.modal // toggle modal
    },
    edit(student) {
      this.editMethod = "edit";
      this.modal = !this.modal
      this.formData = student
      this.formData.filesCount = student.files.length
      this.passwordAgain = student.password

    },
    submit() {
      console.log("submit");
      console.log(this.formData);
      this.modal = !this.modal

      delete this.formData.clazzInfo;
      delete this.formData.files;
      if (this.editMethod === "add") {
        this.postStudent(this.formData);
      } else {
        this.putStudent(this.formData);
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
  },
  data() {
    const assigns = [];
    const {proxy} = getCurrentInstance();
    const totalRows = 0;
    const userInfo = {
      type: 'admin',
      id: 1
    }
    const getAssigns = async () => {
      let res;
      if (userInfo.type === 'admin') {
         res = await proxy.$api.getAssignsByAdmin();
      } else if (userInfo.type === 'teacher') {
         res = await proxy.$api.getAssignsByTeacher(userInfo.id);
      }
        this.assigns = res.data;
      console.log("更新作业格式", res)
      // set &lt; &gt; to < >
      res.forEach(assign => {
        assign.format = assign.format.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      })
      this.assigns = res.data;
    }
    onMounted(() => {
      getAssigns();
      console.log("assign mounted", this.assigns)
    })
    return {
      assigns: [
        {
          "id": 1,
          "name": "作业1",
          "format": "<p>作业1</p>",
          "deadline": "2021-06-01 00:00:00",
          "teacherId": 127,
          "courseId": 1,
          "createTime": "2021-05-31 00:00:00",
          "updateTime": "2021-05-31 00:00:00"
        },
        {
          "id": 2,
          "name": "作业2",
          "format": "<p>作业2</p>",
          "deadline": "2021-06-01 00:00:00",
          "teacherId": 127,
          "courseId": 1,
          "createTime": "2021-05-31 00:00:00",
          "updateTime": "2021-05-31 00:00:00"
        },
        {
          "id": 3,
          "name": "作业3",
          "format": "<p>作业3</p>",
          "deadline": "2021-06-01 00:00:00",
          "teacherId": 127,
          "courseId": 1,
          "createTime": "2021-05-31 00:00:00",
          "updateTime": "2021-05-31 00:00:00"
        },
        {
          "id": 4,
          "name": "作业4",
          "format": "<p>作业4</p>",
          "deadline": "2021-06-01 00:00:00",
          "teacherId": 127,
          "courseId": 1,
          "createTime": "2021-05-31 00:00:00",
          "updateTime": "2021-05-31 00:00:00"
        },
        {
          "id": 5,
          "name": "作业5",
          "format": "<p>作业5</p>",
          "deadline": "2021-06-01 00:00:00",
          "teacherId": 127,
          "courseId": 1,
          "createTime": "2021-05-31 00:00:00",

        }
      ],

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
      // classes,
      formData: {
        userId: 0,
        clazzInfo: [],
        username: "孟骏清",
        password: "234234",
        studentId: 19852331,
        clazzId: 1909,
        qq: "123456789",
        mail: "gwills@qq.com",
        phone: "123456789",
        description: "",
        files: [],
        registerTime: "",
        lastLoginTime: "",
      },

      fields: [
        // {key: 'user_id', label: '数据ID', sortable: true},
        {key: 'username', label: '姓名', sortable: true},
        {
          key: 'clazzInfo', label: '班级', sortable: true,
          formatter: (value) => {
            if (!value) {
              return "-"
            }
            // else if ( value.clazzName === null) {
            //   return "-"
            // }
            return value.clazzName
          }
        },
        {key: 'phone', label: '手机号', sortable: true},
        {key: 'mail', label: '邮箱', sortable: true},
        {
          key: 'files', label: '作业数', sortable: true,
          formatter: (value) => {
            if (!value) {
              return "-"
            }else if (value.length === 0) {
              return "-"
            }
            return value.length
          },
        },
        {key: 'description', label: '备注', sortable: true},
        // {key: 'qq', label: 'QQ', sortable: true},
        // {key: 'phone', label: '电话', sortable: true},
        {key: 'actions', label: '操作', sortable: false}
      ],
    }
  }
}
</script>

<style scoped>

</style>