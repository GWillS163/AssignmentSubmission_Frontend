<template>
  <b-container>
    <b-row>
      <b-col col="12" md="6" sm="6">
        <h3 class="text-dark mb-4">收件箱 ({{ noticeData.length}})</h3>
      </b-col>
      <b-col class="text-end" col="12" md="6" sm="6"
             style="margin-bottom: 30px; margin-right: 0;">
        <a class="btn btn-primary"
           role="button"
           @click="addNew">
          <i class="fa fa-plus"></i> 广播消息
        </a>
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
              <b-col class="text-end" col="12" md="6" sm="7" style=" padding: 5px 15px;">
                <b-button class="btn  btn-sm" style="margin: 2px;" type="button" variant="primary"
                          @click="downAssigns">
                  <i class="fa fa-download"></i>
                  下载作业格式
                </b-button>
              </b-col>
            </b-row>
          </b-card-header>
          <div class="table-responsive">
            <b-table
                :current-page="currentPage"
                :fields="fields"
                :filter="filter"
                :filter-included-fields="filterOn"
                :items="noticeData"
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

              <template #cell(actions)="row">
                <b-button
                    :disabled="row.item.checked"
                    :variant="row.item.checked ? 'outline-secondary' :  'outline-primary'"
                    class="mr-1 " size="sm"
                    @click="alreadyRead(row.item)">
                  已读
                </b-button>
              </template>

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
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "notice",
  methods: {
    handleDelete(notice) {
      console.log("handleDelete:", notice);
    },
    alreadyRead(notice) {
      console.log("alreadyRead:", notice);
    },
  },
  data() {

    const {proxy} = getCurrentInstance();
    const noticeData = ref([]);

    const totalRows = 0;
    const getNoticeData = async() => {
      const res = await proxy.$api.getNoticeData()
      console.log("getNoticeData:", res);
      noticeData.value = res.data;
      this.totalRows = res.data.length;
    };
    onMounted(() => {
          getNoticeData()
        }
    );
    return {
      noticeData,

      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
      detailBlockList: ["_showDetails"],

      fields: [
        {key: 'from', label: '来自', sortable: true},
          {key: 'type', label: '类型', sortable: true},
          // content
          {key: 'content', label: '内容', sortable: true},
          {key: 'sendTime', label: '时间', sortable: true},
          {key: 'actions', label: '操作', sortable: false},

          ]

    }
  }
}
</script>

<style scoped>

</style>