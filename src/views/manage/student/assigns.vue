<template xmlns="http://www.w3.org/1999/html">
  <b-container>

    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4"> 文件提交 ({{ classAssign.length }})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <b-button-group>

        <a class="btn btn-primary"
           role="button"
           @click="viewHistroy"
        >
          <i class="fa fa-history"></i> 查看历史
        </a>
        <b-button
            class="btn btn-primary"
            variant="primary"
            @click="uploadFile"
        >
          <i class="fa fa-upload"></i> 上传文件
        </b-button>
<!--         a checkbox switch to filter items -->

        <b-button
            class="btn btn-primary"
            variant="primary"
            @click="switchView"
        >
          <i class="fa fa-exchange"></i> 切换视图
        </b-button>

        <b-form-checkbox
            v-model="showAll"
            switch
            class="mt-2"
            style="margin-left: 10px;"
            size="lg"
        >
          显示全部
        </b-form-checkbox>
        </b-button-group>

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

    <b-row>
      <b-col>
        <div id="TableSorterCard-1" class="card">
        <b-tabs content-class="mt-3" fill>
          <b-tab title="班级作业" active>
            <p>I'm the first tab</p>
              <b-card
                  v-for="assign in classAssign"
                  align="center"
                  border-variant="success"
                  header="Primary"
                  header-bg-variant="success"
                  header-text-variant="white"
                  style="margin-bottom: 20px;"
              >
                <b-card-text align="left">
                  <b-card-body class="pb-xxl-0">
                    <b-row>
                      <b-col>
                        <h4> {{ assign.name }} </h4>
                        <h6 class="text-muted mb-2">DDL: {{ assign.ddl }} (剩余3天)</h6>
                      </b-col>

                      <b-col class="justify-content-end" style="display: flex">
                        <b-row class="justify-content-end">
                          <b-col>
                            <img alt="avatar" class="rounded-circle flex-shrink-0 me-3 fit-cover"
                                 height="50"
                                 src="../../../../public/favicon.ico" width="50">
                          </b-col>
                          <b-col>
                            <p class="fw-bold text-primary mb-0">11</p>
                            <p class="text-muted mb-0"> 22</p>
                          </b-col>
                        </b-row>
                        <div>
                        </div>

                      </b-col>
                    </b-row>
                    <b-row  >

                      <b-col cols="10">
                        <label class="form-label align-self-center my-auto text-wrap">收集进度：</label>
                        <b-progress :value="10" variant="success"></b-progress>

                      </b-col>
                      <b-col cols="2" class="text-end">
                        <b-button class="mt-xxl-2 mb-xxl-1 ms-xxl-2"
                                  type="button"
                                  variant="outline-primary">
                          选定文件
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-card-body>

                </b-card-text>
              </b-card>
          </b-tab>
          <b-tab title="公共作业">
            <p>I'm the second tab</p>

          </b-tab>
        </b-tabs>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import StudentUploadCard from "@/components/management/studentUploadCard.vue";
import {getCurrentInstance, onMounted} from "vue";
import ProgressBar from "@/components/management/progressBar.vue";

export default {
  name: "assigns",
  components: {ProgressBar, StudentUploadCard},
  methods: {
    uploadAssign() {
      console.log("uploadAssign");
    },

    getBarColor(value) {
      // if (this.style) {return this.style}
      if (value < 10) {
        return 'danger'
      } else if (value < 30) {
        return 'warning'
      } else if (value < 80) {
        return 'primary'
      } else if (100 <= value) {
        return 'success'
      }
    }
  },
  data() {
    const {proxy} = getCurrentInstance();
    const classAssign = [];
    const publicAssign = [];
    const getClassAssign = async () => {
      this.classAssign = await proxy.$api.getAssignsByClass(1909);
      console.log("classAssign", this.classAssign);
    }
    const getPublicAssign = async () => {
      this.publicAssign = await proxy.$api.getAssignsByClass(0);
      console.log("publicAssign", this.publicAssign);
    }
    onMounted(() => {
      getClassAssign();
      getPublicAssign();
    })
    return {
      classAssign,
      publicAssign
    }

  }
}
</script>

<style scoped>

</style>