<template>
  <b-container>
    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4">最近提交 ({{ records.length}})</h3>
      </b-col>
    </b-row>
    <!--    Pagination-->
    <b-row>
      <b-col class="my-1" md="2" sm="5">
        <b-form-group
            class="mb-0"
            label="Per page"
            label-align-sm="right"
            label-cols-lg="3"
            label-cols-md="4"
            label-cols-sm="6"
            label-for="per-page-select"
            label-size="sm"
        >
          <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col class="my-1" md="9" sm="7">
        <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            align="fill"
            class="my-0"
            first-text="⏮"
            last-text="⏭"
            next-text="⏩"
            prev-text="⏪"
            size="sm"
        ></b-pagination>
      </b-col>
    </b-row>


    <!--    List Card-->
    <b-row>
      <b-col>
        <div id="TableSorterCard-1" class="card">
          <b-card-header>
            <b-row>
              <b-col class="text-start" col="12" md="6" sm="5" style=" padding: 5px 15px;">
                <p class="text-primary m-0 fw-bold">
                  作业格式管理</p>
              </b-col>
            </b-row>
          </b-card-header>
          <div class="table-responsive">
            <b-table
                :current-page="currentPage"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                :items="records"
                :per-page="perPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :sort-direction="sortDirection"
                bordered="true"
                empty-filtered-text="条件太多了，未查询到作业"
                empty-text="还没有作业哦"
                show-empty
                stacked="md"
                sticky-header="true"
                striped="true"
                @filtered="onFiltered"
            >


<!--              <template #row-details="row">-->
<!--                <b-card>-->
<!--                  <table class="detailTable">-->
<!--                    <tr>-->
<!--                      <th v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">-->
<!--                        {{ key }}-->
<!--                      </th>-->
<!--                    </tr>-->
<!--                    <tr>-->
<!--                      <td v-for="(value, key) in row.item" v-if="!(key in detailBlockList)">-->
<!--                        {{ value }}-->
<!--                      </td>-->
<!--                    </tr>-->
<!--                  </table>-->
<!--                </b-card>-->
<!--              </template>-->
            </b-table>

          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import handleAssignCard from "@/assets/customed/handleAssignCard";
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "History",
  data() {
    const {proxy} = getCurrentInstance();
    const totalRows = 0;
    const records = [];
    const userInfo = {
      type: 'admin',
      id: 1
    }


    const getRecords = async () => {
      const res = await proxy.$api.getTab4SubmitsRecords();
      this.records = res.data;
      console.log("getRecords", this.records)
      this.totalRows = res.data.length;
    }
    onMounted(() => {
      getRecords();
    })
    return {
      currentPage: 1,
      perPage: 5,
      records,

      totalRows,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
      detailBlockList: ["_showDetails"],
      // classes,

      fields: [
        {key: 'userName', label: '用户'},
        {key: 'assignName', label: '作业'},
        {key: 'rawName', label: '文件名'},
        {key: 'fileSize', label: '大小',
        formatter: (value) => {
          return handleAssignCard.formatFileSize(value);
        }
        },
        {key: 'formatName', label: '格式化后名称', sortable: true},
        {key: 'uploadTime', label: '上传时间', sortable: true},
        {key: 'userId', label: '来自用户', sortable: true},
        {key: 'actions', label: '操作', sortable: false}
      ],
    }
  }
}
</script>

<style scoped>

</style>