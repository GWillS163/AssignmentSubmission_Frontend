<template>
  <public-view-page title="以班级视图查看" :banner="titleBanner"/>

<!--  <assign-list-prompt :assigns="assignments"/>-->
  <b-row v-if="classes.length !== 0">
    <b-col v-for="clazz in classes"
    cols="4"
    >
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
import assignListPrompt from "@/components/others/AssignListPrompt.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import ClassViewCard from "@/components/management/teacher/classViewCard.vue";
import PublicViewPage from "@/components/public/PublicViewPage.vue";

export default {
  name: "tab3Content",
  components: {PublicViewPage, ClassViewCard, assignListPrompt},
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
    classes: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const assignments = ref([]);
    const {proxy } = getCurrentInstance();
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
  },
}
</script>

<style scoped>

</style>