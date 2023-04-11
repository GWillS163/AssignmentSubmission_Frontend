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
<!--              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">-->
<!--                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"-->
<!--                          @click="downAssigns">-->
<!--                  <i class="fa fa-download"></i>-->
<!--                  下载作业格式-->
<!--                </b-button>-->
<!--              </b-col>-->
            </b-row>
          </b-card-header>
          <div class="table-responsive">
            <b-table
                :current-page="currentPage"
                :items="records"
                :per-page="perPage"
                empty-filtered-text="条件太多了，未查询到作业"
                empty-text="还没有作业哦"
                show-empty
                stacked="md"
                sticky-header="true"
                striped="true"
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
  data () {
    const records = [];
    const {proxy} = getCurrentInstance();
    const totalRows = 0;
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
      pageSize: 10,
      perPage: 10,

      totalRows,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      fields: [
        {key: 'userName', label: '用户'},
        {key: 'assignName', label: '作业'},
        {key: 'rawName', label: '文件名'},
        {key: 'fileSize', label: '大小',
        formatter: (value) => {
          return handleAssignCard.formatFileSize(value);
        }
        },
        {key: 'uploadTime', label: '时间'},
      ],
      records
    }
  }
}
</script>

<style scoped>

</style>