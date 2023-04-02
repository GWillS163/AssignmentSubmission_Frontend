<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="6" md="6">
        <b-card title="作业视图" class="mb-4">
        </b-card>
      </b-col>
      <b-col cols="12" sm="6" md="6" class="text-end" style="margin-bottom: 30px;">
        <b-button variant="primary" @click="handleAddNewAssign">
          <i class="fa fa-plus"></i> 新增作业</b-button>
      </b-col>
    </b-row>
    <b-row class="d-grid">

<!--      <assign-list :assigns="assignments"/>-->
    <assign-view-card :assigns="assignments">
      222
    </assign-view-card>
<!--      <div v-for="assignment in assignments" :key="assignment.id"-->
<!--           class="col mb-xxl-0 " style="padding-bottom: 26px;padding-top: 19px;">-->
<!--        <assign-view-card :assign="assignment"/> -->
<!--      </div>-->
    </b-row>
  </b-container>
</template>

<script>
// export default {
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import assignListPrompt from "@/components/others/assignListPrompt.vue";

export default {
  name: 'Home',
  components: {assignListPrompt, AssignViewCard},
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