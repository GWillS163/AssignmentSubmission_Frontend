<template>
  <div
      class="card d-inline flex-grow-1 justify-content-around align-items-center align-content-center align-self-end flex-nowrap order-last mx-auto shadow">
    <div
        class="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
      <h6 class="display-6 text-nowrap text-capitalize mb-0" style="font-size: 20px;">查找已交记录</h6>
      <div class="input-group input-group-sm w-auto"><input class="form-control form-control-sm" type="text">
        <button class="btn btn-outline-primary btn-sm" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"
               class="bi bi-search mb-1">
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div v-if="tableData.length === 0" class="col">
      <div class="card-body">
        <div class="text-center">
          <h6 class="text-muted mb-4">暂无已交记录</h6>
        </div>
      </div>
    </div>
    <div v-else>

    <div class="card-body" style="padding-top: 0;">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>用户</th>
            <th>文件名</th>
            <th>大小</th>
            <th>来源</th>
            <th>时间</th>
            <th class="text-center">状态</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in tableData">
            <td class="text-truncate" style="max-width: 200px;">{{ item.name }}</td>
            <td class="text-truncate" style="max-width: 200px;">{{ item.fileName }}</td>
            <td>{{ item.size}}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.time }}</td>
            <td class="text-center">{{ item.status }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    <div class="card-footer">
      <nav>
<!--        TODO: 分页处理-->
        <ul class="pagination pagination-sm mb-0 justify-content-center">
          <li class="page-item"><a class="page-link" aria-label="Previous" href="#"><span
              aria-hidden="true">«</span></a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" aria-label="Next" href="#"><span aria-hidden="true">»</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
  name: "tab4Content",
  methods: {
    handleQuery(keyword) {
      console.log(keyword);
    }
  },
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
}}
</script>

<style scoped>

</style>