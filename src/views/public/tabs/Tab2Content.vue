<template>
  <div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>以作业视图查看进度</h2>
    </div>
  </div>
  <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 40px;">
    <div class="row justify-content-center ">
      <div v-for=" titleArea in titleBanner" class="col">
        <div class="p-3">
          <h4 class="display-5 fw-bold text-white mb-0">{{ titleArea.num }}</h4>
          <p class="mb-0">{{ titleArea.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <b-row>
    <b-col v-for="assign in assigns">
      <assign-view-card :assign="assign">
        <b-button>
          展示详情 PlaceHolder
        </b-button>
      </assign-view-card>
    </b-col>
  </b-row>
  <!--  <assign-list-prompt :assigns="assignments"/>-->
</template>

<script>
import assignListPrompt from "@/components/others/AssignListPrompt.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";

export default {
  name: "tab-2",
  components: {AssignViewCard, assignListPrompt},
  props: {
    titleBanner: {
      type: Array,
      default: () => [],
    },
    assigns: {
      type: Array,
      default: () => [],
    },
  },
  // export data:
  data() {
    return {
    };
  },

  // export methods:
  //define a function
  methods: {
    viewAssignDetail: function (url) {
      console.log(url);
      alert("[view detail]: " + url + "  \nin the future, and it will be jump to teacher's page");

    }
  }
};
</script>

<style scoped>

</style>