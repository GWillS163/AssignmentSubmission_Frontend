<template>
  <b-button @click="modal = !modal">
  Toggle modal
</b-button>
{{teachers}}
  {{formData.teacherId}}
  <p v-for="(name, id) in teachers"> {{ name }}, {{ id }}</p>
  <b-modal v-model="modal"
  @ok="addNewClazz"
           ok-title="确认"
           cancel-title="取消"
@cancel="cancel"
  >

    <form class="row g-3">
      <div class="col-md-4">
        <label class="form-label" for="validationServer01">班级名</label>
        <input id="validationServer01" v-model="formData.className" class="form-control is-valid" required type="text">
        <div class="valid-feedback">
          看起来不错
        </div>
      </div>
      <div class="col-md-4">
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
           @click="addNewClazz"
           role="button">
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
            first-text="⏮"
            prev-text="⏪"
            next-text="⏩"
            last-text="⏭"
            align="fill"
            class="my-0"
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
                        @click="downloadClass"
                        style="margin: 2px;" type="button">
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
          :items="items"
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
<!--          process the teacherId , turn it to teacherName  -->
<!--          {{ row.item.teacherName }}-->
        </template>


        <template #cell(actions)="row">
          <b-button class="mr-1 " size="sm" @click="openDetail(row.item)">
<!--                    <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">-->
            编辑
          </b-button>
          <b-button size="sm" @click="row.toggleDetails">
            {{ row.detailsShowing ? '隐藏' : '展示' }}详情
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <table>
              <tr v-for="(value, key) in row.item">
                <td>{{  key }}</td>
                <td>{{ value }}</td>
              </tr>
<!--              <tr>-->
<!--                <td>Details showing:</td>-->
<!--                <td>{{ row.detailsShowing ? 'true' : 'false' }}</td>-->
<!--              </tr>-->
            </table>
<!--            <ul>-->
<!--              <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>-->
<!--            </ul>-->
          </b-card>
        </template>
      </b-table>
      </b-card-body>
      <!-- Main table element -->
        <!-- Info modal -->
<!--        <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">-->
<!--          <pre>{{ infoModal.content }}</pre>-->
<!--        </b-modal>-->

      </div>
    </b-row>
  </b-container>

<!--  <EditClassForm :clazz="formData"/>-->

</template>

<script>
import {getCurrentInstance, onMounted,ref} from "vue";
import EditClassForm from "@/components/management/information/EditClassForm.vue";

export default {
  components: {EditClassForm},
  compatConfig: {MODE: 3},
  data() {
    const {proxy} = getCurrentInstance();
    const classes = [];
    const getClasses = async () => {
      // const res = await proxy.$api.getClassesByTeacherId(127);
      // this.classes = res.classes;
    }
    const modal = ref(false)
    onMounted(() => {
      getClasses();
    this.totalRows = this.items.length
    })
    return {
      modal,
      teachers: {
        127: "孟老师",
        128: "李四",
        129: "王五"
      },
      formData: {
        className: " ",
        classId: 0,
        teacherId: 0,
        describe: " "
      },
      items: [
        {
          classId: 11,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 12,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 13,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 14,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 15,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 16,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 17,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 18,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 19,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
        {
          classId: 20,
          className: "软件工程1909班",
          teacherId: 127,
          describe: "这是一个软件工程1909班"
        },
      ],
      fields:  [
        { key: 'classId', label: '班级id', sortable: true},
        { key: 'className', label: '班级名', sortable: true },
        { key: 'teacherId', label: '创建教师' , sortable: true,
         formatter: (value) => {
          return this.teachers[value]
          },
        },
        // { key: 'describe', label: '班级描述', sortable: true },
        { key: 'actions', label: '操作', sortable: false }
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
      infoModal: {
        id: '信息面板',
        title: '',
        content: ''
      }
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
    openDetail(row) {
      console.log(row);
      this.modal = !this.modal
      this.formData = row;
      this.formData.teacherId = 127;
      // TODO: formaData值一一对应
      document.getElementById("addClassBtn").click();

    },
    addNewClazz() {
      console.log(this.formData);
      this.modal = !this.modal
    //   TODO: 发送POST请求
    //   axios.post('/api/clazz', this.clazz)
    //     .then(response => {
    //       this.clazzes.push(response.data)
    //       this.clazz = { id: null, name: '', description: '' }
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    },
    editClazz(clazz) {
      this.clazz = { ...clazz }
      this.editing = true
    },
    updateClazz() {
      axios.put(`/api/clazz/${this.clazz.id}`, this.clazz)
        .then(response => {
          const index = this.clazzes.findIndex(c => c.id === response.data.id)
          this.clazzes.splice(index, 1, response.data)
          this.clazz = { id: null, name: '', description: '' }
          this.editing = false
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteClazz(clazz) {
      axios.delete(`/api/clazz/${clazz.id}`)
        .then(response => {
          const index = this.clazzes.findIndex(c => c.id === clazz.id)
          this.clazzes.splice(index, 1)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getClazzes() {
      axios.get('/api/clazz')
        .then(response => {
          this.clazzes = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      console.log('cancel');
    },
    downloadClass() {
      console.log('downloadClass' + this.items.length);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  mounted() {
    this.getClazzes()
  },
  }
}
</script>