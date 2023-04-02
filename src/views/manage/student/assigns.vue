<template xmlns="http://www.w3.org/1999/html">
  <b-container>

    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4"> 文件提交 ({{ showedClassAssign.length }})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <b-button-group>

          <a class="btn btn-primary"
             role="button"
             @click="viewHistory"
          >
            <i class="fa fa-history"></i> 查看历史
          </a>
<!--          <b-button-->
<!--              class="btn btn-primary"-->
<!--              variant="primary"-->
<!--              @click="uploadFile"-->
<!--          >-->
<!--            <i class="fa fa-upload"></i> 上传文件-->
<!--          </b-button>-->

          <b-button
              class="btn btn-primary"
              variant="primary"
              @click="switchViewMode"
          >
            <i class="fa fa-exchange"></i>
            {{ viewMode ? '仅看可交' : '查看所有'}}
          </b-button>

<!--          <b-form-checkbox-->
<!--              v-model="showAll"-->
<!--              class="mt-2"-->
<!--              size="lg"-->
<!--              style="margin-left: 10px;"-->
<!--              switch-->
<!--          >-->
<!--            显示全部-->
<!--          </b-form-checkbox>-->
        </b-button-group>

      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="TableSorterCard-1" class="card">
          <b-tabs content-class="mt-3" fill>
            <b-tab active title="班级作业">
              <assign-list-prompt :assigns="showedClassAssign" :view-mode="viewMode"/>
            </b-tab>
            <b-tab title="公共作业">
              <assign-list-prompt :assigns="showedPublicAssign" :view-mode="viewMode"/>

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
import assignListPrompt from "@/components/others/assignListPrompt.vue";
import handleAssignCard from "@/assets/customed/handleAssignCard.js";

export default {
  name: "assigns",
  components: {assignListPrompt, ProgressBar, StudentUploadCard},
  methods: {
    viewHistory() {
      console.log("viewHistory");
    },

    uploadFile() {
      console.log("uploadAssign");
      console.log(this.$refs);
    },
    switchViewMode() {
      if (this.viewMode) {
        // q: I want to filter list by 2 factors at the same time, What should I do?
        // a:
        this.showedClassAssign = this.classAssign.filter(assign => handleAssignCard.getStatusType(assign.ddl, assign.uploadEnable) !==  4);
        this.showedPublicAssign = this.publicAssign.filter(assign => handleAssignCard.getStatusType(assign.ddl, assign.uploadEnable) !==  4);
      } else {
        this.showedClassAssign = this.classAssign;
        this.showedPublicAssign = this.publicAssign;
      }
      this.viewMode = !this.viewMode;
    },
  },
  data() {
    const {proxy} = getCurrentInstance();
    const classAssign = [];
    const showedClassAssign = [];
    const publicAssign = [];
    const showedPublicAssign = [];
    const files = [];
    const viewMode = true;
    const getClassAssign = async () => {
      // this.classAssign = await proxy.$api.getStudentAssignsByClass(1909);
      this.classAssign = await proxy.$api.getAssignsByClass(1909).then( res => {return res.data});
      console.log("classAssign", this.classAssign);
      this.showedClassAssign = this.classAssign.data;

      // this.showedClassAssign = [];
    }
    const getPublicAssign = async () => {
      this.publicAssign = await proxy.$api.getPublicAssign().then (res => {
        return res.data;
      })
      // console.log("publicAssign", this.publicAssign);
      this.showedPublicAssign = this.publicAssign;
    }
    onMounted(() => {
      getClassAssign();
      getPublicAssign();
    })
    return {
      showedClassAssign: [],
      showedPublicAssign: [],
      files,
      viewMode,

    }

  }
}
</script>

<style scoped>

</style>