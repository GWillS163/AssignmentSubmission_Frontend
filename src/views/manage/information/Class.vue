<template>
  <b-modal v-model="modal"
           cancel-title="取消"
           ok-title="确认"
           @cancel="cancel"
           @ok="submit"
           :title="editMethod ==='edit' ? '编辑班级' : '新增班级'"
  >

    <form class="row g-3">
      <div :class="editMethod==='edit' ? 'col-md-6' : 'col-md-8'">
        <label class="form-label" for="validationServer01">班级名</label>
        <b-form-input v-model="formData.className" :state="validation" id="validationServer01" required  type="text"></b-form-input>
        <b-form-invalid-feedback :state="validation">
          Your user Id must be 5-12 characters long.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validation"> Looks Good. </b-form-valid-feedback>
      </div>
      <div class="col-md-2" v-show="editMethod==='edit'">
        <label class="form-label" for="validationServer02">ID</label>
        <input id="validationServer02" v-model="formData.id" class="form-control " disabled
               type="text">
      </div>
      <div class="col-md-4">
        <label class="form-label" for="validationServer04">所属教师</label>
        <select id="validationServer04" v-model="formData.teacherId" :disabled="!isAdmin"
                aria-describedby="validationServer04Feedback" class="form-select is-invalid" required>
          <option selected value="">请选择...</option>
          <option v-for="(teacherName, teacherId) in teachers" :value="teacherId">{{ teacherName }}</option>
        </select>
        <div id="validationServer04Feedback" class="invalid-feedback">
          请选择有效值
        </div>
      </div>
        <b-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          class="mb-6">
          <label for="text-password">系别</label>
          <b-form-input
            type="text"
            id="faculty" v-model="formData.faculty"
          ></b-form-input>
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="4"
          xl="3"
          class="mb-6">
          <label for="text-password">专业</label>
          <b-form-input
            type="text"
            id="major" v-model="formData.major"
          ></b-form-input>
        </b-col>
      <div class="col-md-12">
        <label class="form-label" for="validationServer03">描述</label>
        <input id="validationServer03" v-model="formData.description" aria-describedby="validationServer03Feedback"
               class="form-control " type="text">
      </div>
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

<!-- 筛选框 -->
<!--            <b-col class="my-1" lg="6">-->
<!--              <b-form-group-->
<!--                  class="mb-0"-->
<!--                  label="Filter"-->
<!--                  label-align-sm="right"-->
<!--                  label-cols-sm="3"-->
<!--                  label-for="filter-input"-->
<!--                  label-size="sm"-->
<!--              >-->
<!--                <b-input-group size="sm">-->
<!--                  <b-form-input-->
<!--                      id="filter-input"-->
<!--                      v-model="filter"-->
<!--                      placeholder="Type to Search"-->
<!--                      type="search"-->
<!--                  ></b-form-input>-->

<!--                  <b-input-group-append>-->
<!--                    <b-button :disabled="!filter" @click="filter = ''">清除</b-button>-->
<!--                  </b-input-group-append>-->
<!--                </b-input-group>-->
<!--              </b-form-group>-->
<!--            </b-col>-->

<!--            <b-col class="my-1" lg="6">-->
<!--              <b-form-group-->
<!--                  v-slot="{ ariaDescribedby }"-->
<!--                  v-model="sortDirection"-->
<!--                  class="mb-0"-->
<!--                  description="取消所有勾选以展示所有数据"-->
<!--                  label="Filter On"-->
<!--                  label-align-sm="right"-->
<!--                  label-cols-sm="3"-->
<!--                  label-size="sm"-->
<!--              >-->
<!--                <b-form-checkbox-group-->
<!--                    v-model="filterOn"-->
<!--                    :aria-describedby="ariaDescribedby"-->
<!--                    class="mt-1"-->
<!--                >-->
<!--                  <b-form-checkbox value="className">班级名称</b-form-checkbox>-->
<!--                  <b-form-checkbox value="teacher">创建教师</b-form-checkbox>-->
<!--                  <b-form-checkbox value="isActive">是否启用</b-form-checkbox>-->
<!--                </b-form-checkbox-group>-->
<!--              </b-form-group>-->
<!--            </b-col>-->

    </b-row>
<!--   up^^ Filter-->
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
              sticky-header="true"
              bordered="true"
              striped="true"
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
              stacked="md"
              @filtered="onFiltered"
              empty-filtered-text="你还没有班级哦"
              empty-text="这里还没有班级哦"
          >
            <template #cell(name)="row"> </template>


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
import {getCurrentInstance, onMounted, ref, computed} from "vue";
import EditClassForm from "@/components/management/information/EditClassForm.vue";
import axios from "axios";
import api from "@/api/api";

export default {
  components: {EditClassForm},
  compatConfig: {MODE: 3},
  data() {

    // const userId = ref('')
    // const validation = computed(() => userId.value.length > 4 && userId.value.length < 13)
    const {proxy} = getCurrentInstance();
    const classes = ref([]);
    const totalRows = 0;
    const isModalOpen = ref(false)
    const teachers = ref({})
    const formData = ref({
                      className: "新班级",
                      id: 0,
                      teacherId: 0,
                      description: " ",
                      faculty: '默认系',
                      major: '默认专业',

                    })
    const validation = computed(() => formData.value.className.length > 4 && formData.value.className.length < 13)
    const isAdmin = computed(() =>
        false
        // proxy.$store.state.user.role === "admin"

    )
    const getClassesData = async () => {
      // TODO： 自动根据当前用户的角色获取班级列表
      // const res = await proxy.$api.getClassesByTeacherId(127);
      const res = await proxy.$api.getClassesByAdmin(0);
      console.log("Classes:",  res.data)
      this.classes = res.data;
      this.totalRows = this.classes.length;
      // console.log("请求到的数据", res.data)
    };
    const getTeacherData = async () => {
      const res = await proxy.$api.getAllTeachersMapping();
      console.log("TeachersMap:",  res.data)
      this.teachers = res.data;

    }
    onMounted(() => { // 在组件挂载后执行
      getClassesData(); // 根据用户信息不同获取不同的班级列表
      getTeacherData();
    })
    return {
      isAdmin,
      editMethod: "edit",
      modal: isModalOpen,
      userInfo: {
        type: 'teacher',
        id: 1,
      },
      validation,
      teachers,
      formData,
      classes,
      fields: [
        {key: 'id', label: '班级id', sortable: true},
        {key: 'className', label: '班级名', sortable: true},
        {key: 'description', label: '备注', sortable: true},
        // {key: 'faculty', label: '所属学院', sortable: true},
        // {key: 'major', label: '所属专业', sortable: true},
        {
          key: 'teacherId', label: '创建教师', sortable: true,
          formatter: (value) => {
            if (value === 0) {
              return "管理员"
            } else if (!value in this.teachers) {
              return "未知"
            }
            return this.teachers[value]
          },
        },
        // { key: 'describe', label: '班级描述', sortable: true },
        {key: 'actions', label: '操作', sortable: false}
      ],

      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],

      getClassesData,
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
      this.formData.teacherId = this.userInfo.id;
    },
    editClazz(row) {
      this.editMethod = "edit";
      console.log(row);
      this.modal = !this.modal
      this.formData = row;

    },
    submit() {
      if (this.editMethod === "add")
      { this.createClazz(this.formData); }
      else { this.updateClazz(this.formData); }
      console.log(this.formData);
      this.clear();
    },
    // CRUD
    async createClazz(clazz )  {
      // console.log("create");
      console.log("create:", clazz);
      const res = await api.postClass(clazz)
      console.log("create res: ", res.data)
      await this.getClassesData();
    },
    async deleteClazz(clazz) {
      console.log("delete");
      console.log(clazz.id)
      const res = await api.deleteClass(clazz.id)
      console.log("delete res: ", res.data)
      await this.getClassesData();

    },
    async updateClazz(clazz) {
      console.log("update");
      console.log(clazz);
      const res = await api.putClass(clazz)
      console.log("update res: ", res.data)
      await this.getClassesData();
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
      api.testDownload()
    }
    ,
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  }
}
</script>