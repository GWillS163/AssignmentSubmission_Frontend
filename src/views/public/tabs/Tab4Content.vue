<template>
  <div
      class="card d-inline flex-grow-1 justify-content-around align-items-center align-content-center align-self-end flex-nowrap order-last mx-auto shadow">
    <div
        class="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
      <h6 class="display-6 text-nowrap text-capitalize mb-0" style="font-size: 20px;">
      <i class="fas fa-table me-2"></i>
              最近提交列表 ({{ totalRows }})

        <b-button variant="outline-primary" size="sm" @click="getTab4Data">
          <i class="fas fa-refresh"></i>
        </b-button>

      <b-spinner v-if="!tableData.length" size="sm"></b-spinner>

<!--        ({{ tableData.length}}) {{ totalRows }}  {{dataLength}}-->
      </h6>
      <div class="input-group input-group-sm w-auto"><input class="form-control form-control-sm" type="text">
        <button class="btn btn-outline-primary btn-sm" type="button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <b-table
        :current-page="currentPage"
        :fields="tableFields"
        :filter="filter"
        :filter-included-fields="filterOn"
        :items="tableData"
        :per-page="30"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        hover
        empty-text="暂无已交记录"
                show-empty
                stacked="md"
        bordered
        striped
        class="text-center text-secondary"
    >
    </b-table>

<!--&lt;!&ndash; Pagination &ndash;&gt;-->
<!--    <b-row>-->
<!--      <b-col class="my-1" md="2" sm="5">-->
<!--        <b-form-group-->
<!--            class="mb-0"-->
<!--            label="Per page"-->
<!--            label-align-sm="right"-->
<!--            label-cols-lg="3"-->
<!--            label-cols-md="4"-->
<!--            label-cols-sm="6"-->
<!--            label-for="per-page-select"-->
<!--            label-size="sm"-->
<!--        >-->
<!--          <b-form-select-->
<!--              id="per-page-select"-->
<!--              v-model="perPage"-->
<!--              :options="pageOptions"-->
<!--              size="sm"-->
<!--          ></b-form-select>-->
<!--        </b-form-group>-->
<!--      </b-col>-->

<!--      <b-col class="my-1" md="9" sm="7">-->
<!--        <b-pagination-->
<!--            v-model="currentPage"-->
<!--            :per-page="perPage"-->
<!--            :total-rows="tableData.length"-->
<!--            align="fill"-->
<!--            class="my-0"-->
<!--            first-text="⏮"-->
<!--            last-text="⏭"-->
<!--            next-text="⏩"-->
<!--            prev-text="⏪"-->
<!--            size="sm"-->
<!--        ></b-pagination>-->
<!--      </b-col>-->
<!--    </b-row>-->
  </div>

</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "tab4Content",
  computed: {

    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
  },
  data() {
    const totalRows = 0;
    const {proxy} = getCurrentInstance();
    const tableData = [];
    const getTab4Data = async () => {
      this.tableData = [];
      const res = await proxy.$api.getTab4SubmitsRecords();
      // console.log("getTab4SubmitsRecords:", res.data);
      // console.log("length", res.data.length)
      this.tableData = res.data;
      this.totalRows = this.tableData.length;

    };
    onMounted(() => {
      getTab4Data();
    });
    return {
      tableData,
      getTab4Data,
      tableFields: [
        {key: 'userName', label: '用户'},
        {key: 'assignName', label: '作业'},
        {key: 'rawName', label: '文件名'},
        {key: 'fileSize', label: '大小',
        formatter: (value) => {
          if (value < 1024) {
            return value + 'B';
          } else if (value < 1024 * 1024) {
            return (value / 1024).toFixed(2) + 'KB';
          } else if (value < 1024 * 1024 * 1024) {
            return (value / 1024 / 1024).toFixed(2) + 'MB';
          } else {
            return (value / 1024 / 1024 / 1024).toFixed(2) + 'GB';
          }
        }
        },
        {key: 'uploadTime', label: '时间'},
      ],

      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],

    };
  }
}
</script>

<style scoped>

</style>