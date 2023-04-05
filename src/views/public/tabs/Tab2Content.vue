<template>

  <public-view-page  v-if="titleBanner.length" title="以作业视图查看" :banner="titleBanner"/>

  <b-row v-if="assigns.length">
    <b-col v-for="assign in assigns"
        cols="12" lg="4" md="6" sm="12"

    >
      <assign-view-card :assign="assign" footer-type="progress">
      </assign-view-card>
    </b-col>
  </b-row>

  <b-row v-else>
    <b-col cols="12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">暂无作业</h4>
          <p class="card-text">暂无作业</p>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import assignListPrompt from "@/components/others/AssignListPrompt.vue";
import {getCurrentInstance, onMounted, ref} from "vue";
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";
import PublicViewPage from "@/components/public/PublicViewPage.vue";

export default {
  name: "tab-2",
  components: {PublicViewPage, AssignViewCard, assignListPrompt},
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