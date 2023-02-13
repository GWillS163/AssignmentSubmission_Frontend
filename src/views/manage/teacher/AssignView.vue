<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">作业视图</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" role="button" @click="handleAddNewAssign">
          <i class="fa fa-plus"></i> 新增作业</a></div>
    </div>
    <div class="row d-grid">
      <div
          v-for="assignment in assignments" :key="assignment.id"
          class="col mb-xxl-0 " style="padding-bottom: 26px;padding-top: 19px;">
        <assign-view-card :assignment="assignment"/>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: 'Home',
  components: {AssignViewCard},
  methods: {
    handleAddNewAssign() {
      console.log("处理提交作业")
    }
  },
  data() {
    const assignments = ref([]);
    const {proxy} = getCurrentInstance();
    const getAssignments = async () => {
      assignments.value = await proxy.$api.getAssignsByTeacher(127);
      console.log(assignments.value);
    };
    onMounted(() => {
      getAssignments();
    })

    return {
      assignments
    }

  }
}

</script>