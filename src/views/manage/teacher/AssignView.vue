<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">作业视图</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" role="button">
          <i class="fa fa-plus"></i> 新增作业</a></div>
    </div>
    <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 41px;">
      <div class="row row-cols-2 row-cols-md-4">
        <div class="col" v-for="flag in flags">
          <div class="p-3">
            <h4 class="display-5 fw-bold text-white mb-0">{{ flag.value }}</h4>
            <p class="mb-0">{{flag.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-grid" >
      <div
        v-for="assignment in [
            {id: 1, assignName: '第五次数据结构', ddl:'2022-12-15 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

            },
            {id: 2, assignName: '第五次数据结构', ddl:'2022-12-15 18:00', releaseTime:'2022-11-13 18:00', releaseTeacher: 'KissesJun',

            }
        ]" :key="assignment.id"
       class="col mb-xxl-0">
      <assign-view-card assignment="assignment"/>
    </div>
    </div>
  </div>
</template>

<script>
// export default {
import AssignViewCard from "@/components/management/assignViewCard.vue";

export default {
  name: 'Home',
  components: {AssignViewCard},
  methods: {
    handleAddNewAssign() {
      console.log("处理提交作业")
    }
  },
  data() {
    const flags= [
            {name: '已交作业', value:'123+'},
            {name: '总提交率', value:'45%'},
            {name: '未交文件', value:'23+'},
            {name: '最近DDL', value:'3'}
            ];

    return {
        flags,

    }

}
}

</script>