<template>
  <b-modal v-model="modal"
           cancel-title="取消"
           ok-title="确认"
           @cancel="cancel"
           @ok="saveClazz"
  >

    <form class="row g-3">
      <div class="col-md-6">
        <label class="form-label" for="validationServer01">班级名</label>
        <input id="validationServer01" v-model="formData.className" class="form-control is-valid" required type="text">
        <div class="valid-feedback">
          看起来不错
        </div>
      </div>
      <div class="col-md-2">
        <label class="form-label" for="validationServer02">ID</label>
        <input id="validationServer02" v-model="formData.classId" class="form-control is-valid" disabled required
               type="text">
        <!--              <div class="valid-feedback">-->
        <!--                看起来不错-->
        <!--              </div>-->
      </div>
      <div class="col-md-4">
        <label class="form-label" for="validationServer04">所属教师</label>
        <select id="validationServer04" v-model="formData.teacherId"
                aria-describedby="validationServer04Feedback" class="form-select is-invalid" required>
          <option disabled selected value="">请选择...</option>
          <option v-for="(teacherName, teacherId) in teachers" :value="teacherId">{{ teacherName }}</option>
        </select>
        <div id="validationServer04Feedback" class="invalid-feedback">
          请选择有效值
        </div>
      </div>
      <div class="col-md-12">
        <label class="form-label" for="validationServer03">描述</label>
        <input id="validationServer03" v-model="formData.describe" aria-describedby="validationServer03Feedback"
               class="form-control " type="text">
      </div>
      <!--            <div class="col-12">-->
      <!--              <div class="form-check">-->
      <!--                <input id="invalidCheck3" aria-describedby="invalidCheck3Feedback" class="form-check-input is-invalid" required-->
      <!--                       type="checkbox" value="">-->
      <!--                <label class="form-check-label" for="invalidCheck3">-->
      <!--                  Agree to terms and conditions-->
      <!--                </label>-->
      <!--                <div id="invalidCheck3Feedback" class="invalid-feedback">-->
      <!--                  You must agree before submitting.-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--      <div class="col-12 modal-footer">-->
      <!--        <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">关闭</button>-->
      <!--        <button class="btn btn-primary" data-bs-dismiss="modal" type="button" @click="submitClass">提交</button>-->
      <!--      </div>-->
    </form>
  </b-modal>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>

      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的班级</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <!--         data-bs-target="#addClass" data-bs-toggle="modal"-->
        <!--           data-bs-whatever="@mdo"-->
        <a id="addClassBtn" class="btn btn-primary"
           role="button"
           @click="addClazz">
          <i class="fa fa-plus"></i> 新增班级 </a>
      </div>


      <!--      <b-col class="my-1" lg="6">-->
      <!--        <b-form-group-->
      <!--            class="mb-0"-->
      <!--            label="Filter"-->
      <!--            label-align-sm="right"-->
      <!--            label-cols-sm="3"-->
      <!--            label-for="filter-input"-->
      <!--            label-size="sm"-->
      <!--        >-->
      <!--          <b-input-group size="sm">-->
      <!--            <b-form-input-->
      <!--                id="filter-input"-->
      <!--                v-model="filter"-->
      <!--                placeholder="Type to Search"-->
      <!--                type="search"-->
      <!--            ></b-form-input>-->

      <!--            <b-input-group-append>-->
      <!--              <b-button :disabled="!filter" @click="filter = ''">清除</b-button>-->
      <!--            </b-input-group-append>-->
      <!--          </b-input-group>-->
      <!--        </b-form-group>-->
      <!--      </b-col>-->

      <!--      <b-col class="my-1" lg="6">-->
      <!--        <b-form-group-->
      <!--            v-slot="{ ariaDescribedby }"-->
      <!--            v-model="sortDirection"-->
      <!--            class="mb-0"-->
      <!--            description="取消所有勾选以展示所有数据"-->
      <!--            label="Filter On"-->
      <!--            label-align-sm="right"-->
      <!--            label-cols-sm="3"-->
      <!--            label-size="sm"-->
      <!--        >-->
      <!--          <b-form-checkbox-group-->
      <!--              v-model="filterOn"-->
      <!--              :aria-describedby="ariaDescribedby"-->
      <!--              class="mt-1"-->
      <!--          >-->
      <!--            <b-form-checkbox value="className">班级名称</b-form-checkbox>-->
      <!--            <b-form-checkbox value="teacher">创建教师</b-form-checkbox>-->
      <!--            <b-form-checkbox value="isActive">是否启用</b-form-checkbox>-->
      <!--          </b-form-checkbox-group>-->
      <!--        </b-form-group>-->
      <!--      </b-col>-->

    </b-row>
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


    <b-row>
      <div class="card">

        <b-card-header>

          <b-row>
            <div class="col-12 col-sm-5 col-md-6 text-start" style=" padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">
                班级列表</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style=" padding: 5px 15px;">
              <button class="btn btn-primary btn-sm reset"
                      style="margin: 2px;"
                      type="button" @click="downloadClass">
                <i class="fa fa-download"></i>
                列表下载
              </button>
            </div>
          </b-row>
        </b-card-header>
        <b-card-body>
          <b-table
              :current-page="currentPage"
              :fields="fields"
              :filter="filter"
              :filter-included-fields="filterOn"
              :items="classes"
              :per-page="perPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              show-empty
              small
              stacked="md"
              @filtered="onFiltered"
          >
            <template #cell(name)="row">
            </template>


            <template #cell(actions)="row">
              <b-button class="mr-1 " size="sm" @click="editClazz(row.item)">
                <!--                    <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">-->
                编辑
              </b-button>
              <b-button size="sm" @click="row.toggleDetails">
                {{ row.detailsShowing ? '隐藏' : '展示' }}详情
              </b-button>
              <b-button class="mr-1 " size="sm" @click="deleteClazz(row.item)">
                删除
              </b-button>
            </template>

            <template #row-details="row">
              <b-card>
                <table>
                  <tr v-for="(value, key) in row.item">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                  </tr>
                  <!--              <tr>-->
                  <!--                <td>Details showing:</td>-->
                  <!--                <td>{{ row.detailsShowing ? 'true' : 'false' }}</td>-->
                  <!--              </tr>-->
                </table>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </div>
    </b-row>
  </b-container>

  <!--  <EditClassForm :clazz="formData"/>-->

</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
import EditClassForm from "@/components/management/information/EditClassForm.vue";
import axios from "axios";

export default {
  components: {EditClassForm},
  compatConfig: {MODE: 3},
  data() {
    const {proxy} = getCurrentInstance();
    const classes = [];
    const isModalOpen = ref(false)
    const teachers = ref({})
    const formData = {className: "default",
                      classId: 0,
                      teacherId: 0,
                      describe: " "
                    }
    const postData = () => {
      // 发送 POST 请求到 /api/data 接口
      axios.post('/api/data', formData).then((res) => {
        console.log(res.data.message);
      });
    };
    const putClazz = () => {
      // 发送 PUT 请求到 /api/data 接口
      axios.put('/api/data', formData).then((res) => {
        console.log(res.data.message);
      });
    };
    const deleteClazz = (clazz) => {
      // 发送 DELETE 请求到 /api/data 接口
      axios.delete('/api/data', {data: clazz}).then((res) => {
        console.log(res.data.message);
      });
    };

    const getClassesData = async () => {
      const res = await proxy.$api.getClassesByTeacherId(127);
      this.classes = res.data;
      // console.log("请求到的数据", res.data)
    };
    const getTeacherData = async () => {
      const res = await proxy.$api.getAllTeachers();
      console.log(res)
      this.teachers = res.teachers;
      this.teachers = {
        127: "孟老师",
        128: "李四",
        0: "王五"
      }
    }
    onMounted(() => {
      // postData();
      // putClazz();
      // deleteClazz(formData);

      console.log('onMounted')
      getClassesData();
      getTeacherData();
      this.totalRows = this.classes.length;
    })
    return {
      editMethod: "edit",
      modal: isModalOpen,
      teachers,
      formData,
      classes,
      fields: [
        {key: 'id', label: '班级id', sortable: true},
        {key: 'className', label: '班级名', sortable: true},
        {
          key: 'teacher_id', label: '创建教师', sortable: true,
          formatter: (value) => {
            return this.teachers[value]
          },
        },
        // { key: 'describe', label: '班级描述', sortable: true },
        {key: 'actions', label: '操作', sortable: false}
      ],

      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return {text: f.label, value: f.key}
          })
    }
  },
  methods: {
    addClazz() {
      this.editMethod = "add";
      this.modal = !this.modal
      // document.getElementById("addClassBtn").click();
    },
    editClazz(row) {
      this.editMethod = "edit";
      console.log(row);
      this.modal = !this.modal
      this.formData = row;
      // document.getElementById("addClassBtn").click();

      // axios.put(`/api/clazz/${this.clazz.id}`, this.clazz)
      //     .then(response => {
      //       const index = this.clazzes.findIndex(c => c.id === response.data.id)
      //       this.clazzes.splice(index, 1, response.data)
      //       this.clazz = {id: null, name: '', description: ''}
      //       this.editing = false
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })

    },
    saveClazz() {
      if (this.editMethod === "add") {
        // console.log("add");
        this.createClazz(this.formData);
      } else {
        // console.log("edit");
        this.updateClazz(this.formData);
      }
      // console.log(this.formData);
      // this.clear();
    },
    // CRUD
    createClazz(clazz ) {
      // console.log("create");
      console.log(clazz);
      this.classes.push(clazz);
      console.log(this.classes);
    },
    deleteClazz(clazz) {
      console.log("delete");
      console.log(clazz.classId)

      this.classes.splice(this.classes.indexOf(clazz), 1)

      // axios.delete(`/api/clazz/${clazz.id}`)
      //     .then(response => {
      //       const index = this.clazzes.findIndex(c => c.id === clazz.id)
      //       this.clazzes.splice(index, 1)
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      //   f
    },
    updateClazz(clazz) {
      console.log("update");
      console.log(clazz);
      const res = this.proxy.$api.putClass(clazz);
      // axios.put(`/api/clazz/${clazz.id}`, clazz)
      //     .then(response => {
      //       const index = this.clazzes.findIndex(c => c.id === clazz.id)
      //       this.clazzes.splice(index, 1, response.data)
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
    },
    // Modal clear
    clear() {
      this.formData = {
        classId: null,
        className: '',
        teacherId: null,
        describe: ''
      }
    },
    cancel() {
      // console.log('cancel');
    },
    downloadClass() {
      console.log('downloadClass' + this.classes.length);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>