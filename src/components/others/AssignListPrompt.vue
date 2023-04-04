<template>
  <!--  TODO  Pagination-->
  <b-row>
<!--    <b-col class="my-1" md="3" sm="5">-->
<!--      <b-form-group-->
<!--          class="mb-0"-->
<!--          label="Per page"-->
<!--          label-align-sm="left"-->
<!--          label-cols-lg="4"-->
<!--          label-cols-md="4"-->
<!--          label-cols-sm="6"-->
<!--          label-for="per-page-select"-->
<!--          label-size="sm"-->
<!--      >-->
<!--        <b-form-select-->
<!--            id="per-page-select"-->
<!--            v-model="perPage"-->
<!--            :options="pageOptions"-->
<!--            size="sm"-->
<!--        ></b-form-select>-->
<!--      </b-form-group>-->
<!--    </b-col>-->

<!--    <b-col class="my-1" md="8" sm="7">-->
<!--      <b-pagination-->
<!--          v-model="currentPage"-->
<!--          :per-page="perPage"-->
<!--          :total-rows="totalRows"-->
<!--          align="fill"-->
<!--          class="my-0"-->
<!--          first-text="⏮"-->
<!--          last-text="⏭"-->
<!--          next-text="⏩"-->
<!--          prev-text="⏪"-->
<!--          size="sm"-->
<!--      ></b-pagination>-->
<!--    </b-col>-->
  </b-row>
  <b-row v-if="assigns">
    <b-col
        v-for="assign in assigns"
        cols="12" lg="4" md="6" sm="12"
    >
      <assign-view-card :assign="assign" footerType="upload"/>

    </b-col>
  </b-row>
  <b-row v-else>
    <b-col>
      <b-alert variant="info" show>暂无作业</b-alert>
    </b-col>
  </b-row>
</template>

<script>
import {ref} from 'vue'
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";
import handleAssignCard from "@/assets/customed/handleAssignCard.js";

export default {
  name: "assignListPrompt",
  components: {AssignViewCard},
  handleAssignCard: [handleAssignCard],
  props: {
    assigns: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  methods: {
  },
  data() {

    const totalRows = 1;
  //   return assigns
    return {
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
    }
  }
  //
  // }
}
</script>

<style scoped>

</style>