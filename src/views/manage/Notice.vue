<template>

  <div class="row">
    <div class="col">
      <h3 class="text-dark mb-1">消息中心</h3>
    </div>
    <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
      <a class="btn btn-primary"
         role="button"><i
          class="fa fa-plus"></i>&nbsp;广播消息</a></div>
  </div>
  <div class="card shadow">
    <div
        class="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
      <div class="row flex-fill">
        <div class="col-md-6">
          <h5 class="display-6 text-nowrap text-capitalize mb-0"> </h5>
        </div>
        <div class="col-md-6">
          <div class="input-group input-group-sm w-auto"><input class="form-control form-control-sm"
                                                                placeholder="请输入关键字"
                                                                type="text">
            <button class="btn btn-outline-primary btn-sm" type="button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>已读</th>
            <th>来自</th>
            <th>备注</th>
            <th>内容</th>
            <th style="width: 152px;">时间</th>
            <th class="text-center">详情</th>
          </tr>
          </thead>
          <tbody>
<!--          <tr v-for="notice in notices">-->
<!--            <td><input type="checkbox" :checked="handleCheck()"></td>-->
<!--            <td class="text-truncate" style="max-width: 200px;">{{ notice.from }}</td>-->
<!--            <td>{{ notice.type }}</td>-->
<!--            <td class="text-truncate" style="max-width: 200px;">{{ notice.content }}</td>-->
<!--            <td>{{ notice.sendTime }}</td>-->
<!--            <td class="text-center">-->
<!--&lt;!&ndash;              add a eye icon &ndash;&gt;-->
<!--&lt;!&ndash;              <a class="btn btn-primary btn-sm" role="button" @click="handleDetail(notice)"><i class="fa fa-eye"></i></a>&ndash;&gt;-->
<!--&lt;!&ndash;              <svg class="bi bi-eye-fill fs-5 text-primary" fill="currentColor" height="1em" viewBox="0 0 16 16"&ndash;&gt;-->
<!--&lt;!&ndash;                   width="1em"&ndash;&gt;-->
<!--&lt;!&ndash;                   xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
<!--&lt;!&ndash;                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                <path&ndash;&gt;-->
<!--&lt;!&ndash;                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;              </svg>&ndash;&gt;-->
<!--            </td>-->
<!--          </tr>-->
          <tr v-for="notice in noticeData">
            <td><input type="checkbox" :checked="notice.isChecked"></td>
            <td class="text-truncate" style="max-width: 200px;">{{ notice.from }}</td>
            <td>{{ notice.type }}</td>
            <td class="text-truncate" style="max-width: 200px;">{{  notice.content }}</td>
            <td>{{ notice.sendTime }}</td>
            <td class="text-center">
              <b-button-group size="sm">
                <b-button variant="primary" @click="handleDetail(notice)">查看</b-button>
                <b-button variant="danger" @click="handleDelete(notice)">删除</b-button>
              </b-button-group>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <page-spliter/>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";
import PageSpliter from "@/components/management/PageSpliter.vue";

export default {
  name: "notice",
  components: {PageSpliter},
  data() {

    const {proxy} = getCurrentInstance();
    const noticeData = ref([]);
    const getNoticeData = async() => {
      // console.log("getNoticeData:", res);
      this.noticeData = await proxy.$api.getNoticeData()
    };
    onMounted(() => {
          getNoticeData()
        }
    );
    return {
      noticeData
    }
  }
}
</script>

<style scoped>

</style>