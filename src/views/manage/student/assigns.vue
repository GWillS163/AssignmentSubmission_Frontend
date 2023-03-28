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
              @click="this.viewMode = !this.viewMode"
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
              <assign-list :assigns="classAssign" :view-mode="viewMode"/>
            </b-tab>
            <b-tab title="公共作业">
              <assign-list :assigns="publicAssign" :view-mode="viewMode"/>

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
import AssignList from "@/components/others/assignList.vue";

export default {
  name: "assigns",
  components: {AssignList, ProgressBar, StudentUploadCard},
  methods: {
    viewHistory() {
      console.log("viewHistory");
    },

    uploadFile() {
      console.log("uploadAssign");
      console.log(this.$refs);
    },

    formatTime(remainedTime) {
    }
  },
  data() {
    const {proxy} = getCurrentInstance();
    const classAssign = [];
    const publicAssign = [];
    const files = [];
    const viewMode = true;
    const getClassAssign = async () => {
      this.classAssign = await proxy.$api.getAssignsByClass(1909);
      // console.log("classAssign", this.classAssign);
    }
    const getPublicAssign = async () => {
      this.publicAssign = await proxy.$api.getAssignsByClass(0);
      // console.log("publicAssign", this.publicAssign);
    }
    onMounted(() => {
      getClassAssign();
      getPublicAssign();
    })
    return {
      classAssign,
      publicAssign,
      files,
       viewMode,

    }

  }
}
</script>

<style scoped>

</style>