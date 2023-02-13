<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我的作业</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary"
           role="button">
          <i class="fa fa-upload"></i> 上传作业 </a></div>
    </div>
    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">
      <div class="card-header py-3">
        <div>
          <ul class="nav nav-tabs nav-fill" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" data-bs-toggle="tab" href="#tab-1" role="tab">班级作业</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link " data-bs-toggle="tab" href="#tab-2"
                 role="tab">公共作业</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab-1" class="tab-pane active" role="tabpanel">
                <student-upload-card v-for="assign in classAssign" :assign="assign" />
            </div>
            <div id="tab-2" class="tab-pane " role="tabpanel">
                <student-upload-card v-for="assign in publicAssign" :assign="assign" />
            </div>
          </div>
        </div>
        <nav>
          <ul class="pagination pagination-sm mb-0 justify-content-center">
            <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span aria-hidden="true">«</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span aria-hidden="true">»</span></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import StudentUploadCard from "@/components/management/studentUploadCard.vue";
import {getCurrentInstance, onMounted} from "vue";

export default {
  name: "assigns",
  components: {StudentUploadCard},
  methods:{
    uploadAssign(){
      console.log("uploadAssign");
    }
  },
  data() {
    const { proxy } = getCurrentInstance();
    const classAssign = [];
    const publicAssign = [];
    const getClassAssign = async() => {
      this.classAssign = await proxy.$api.getAssignsByClass(1909);
      console.log("classAssign", this.classAssign);
    }
    const getPublicAssign = async() => {
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