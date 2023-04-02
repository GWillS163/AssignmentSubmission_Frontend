<template>
  <div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>以班级视图查看收集进度</h2>
    </div>
  </div>
  <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 40px;">
    <div class="row justify-content-center">
      <div class="col" v-for="title in titleBanner">
        <div class="p-3">
          <h4 class="display-5 fw-bold text-white mb-0">{{ title.value }}</h4>
          <p class="mb-0">{{ title.name }}</p>
        </div>
      </div>
    </div>
  </div>
<!--  <assign-list-prompt :assigns="assignments"/>-->
  <b-row v-if="classes.length !== 0">
    <b-col v-for="clazz in classes">
      <class-view-card  :clazz="clazz" />
    </b-col>
  </b-row>
  <b-row v-else>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">暂无班级</h4>
          <p class="card-text">暂无班级</p>
        </div>
      </div>
    </b-col>
  </b-row>


</template>

<script>
import assignListPrompt from "@/components/others/assignListPrompt.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import ClassViewCard from "@/components/management/teacher/classViewCard.vue";

export default {
  name: "tab3Content",
  components: {ClassViewCard, assignListPrompt},
  // define a function
  methods: {
    viewClassAssignDetail(url) {
      // this.$router.push({name: "classAssignDetail"});
      alert("developing" + url);
    }
    },
  props: {
    titleBanner: {
      type: Array,
      default: () => []
    },
    classViews: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const classes = ref([]);
    const assignments = ref([]);
    const {proxy } = getCurrentInstance();
    const getClazzData = async() => {
      // console.log(res)
      classes.value = await proxy.$api.getOwnClazz()
      // console.log("我的班级",classes.value)
    }
    const getAssignments = async () => {
      assignments.value = await proxy.$api.getAssignsByTeacher(127);
      console.log(assignments.value);
    };
    onMounted(() => {
      getClazzData();
      getAssignments();
    })
    return {
      classes,
      assignments
    }
  },
}
</script>

<style scoped>

</style>