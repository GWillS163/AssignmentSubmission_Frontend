<template>

  <public-view-page title="以作业视图查看" :banner="titleBanner"/>

  <b-row>
    <b-col v-for="assign in assigns"
        cols="12" lg="4" md="6" sm="12"

    >
      <assign-view-card :assign="assign">
        <b-list-group>
          <b-list-group-item>222</b-list-group-item>
          <b-list-group-item>222</b-list-group-item>
        </b-list-group>
        <b-button>
          展示详情 PlaceHolder
        </b-button>
      </assign-view-card>
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