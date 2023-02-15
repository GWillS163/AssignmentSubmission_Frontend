<template>
  <!--    <div class="card-footer">-->

  <div class="row">
    <div class="col-md-6 align-self-center">
      <p id="dataTable_info" aria-live="polite" class="dataTables_info" role="status">
        <a v-if="records.length === 0">没有记录</a>
        <a v-else>显示第 {{ (currentPage - 1) * pageSize + 1 }} 至 {{ currentPage * pageSize }} 项结果，
          共 {{ records.length }} 项</a>
      </p>
    </div>
    <div class="col-md-6">
      <nav>
        <ul class="pagination  mb-0 justify-content-center">
<!--          generate some li label by pageSize and records.length-->
          <li v-if="currentPage > 1" class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
              aria-hidden="true">«</span></a></li>
          <li v-for=" i in Math.ceil(records.length / pageSize)" :key="i" class="page-item">
            <a :class="{active: currentPage === i}" class="page-link" href="#">{{ i }}</a>
          </li>
<!--          <li  class="page-item"><a class="page-link" href="#">1</a></li>-->
<!--          <li class="page-item"><a class="page-link" href="#">2</a></li>-->
<!--          <li class="page-item"><a class="page-link" href="#">3</a></li>-->
          <li v-if="currentPage < (Math.ceil(records.length / pageSize))" class="page-item"><a aria-label="Next" class="page-link" href="#">
            <span aria-hidden="true">»</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSpliter",
  props: {
    records: {
      type: Array,
      default: () => {
        return [
          {},{},{},{},{}
        ];
      },
    },
    pageSize: {
      type: Number,
      default: 2
    },
    currentPage: {
      type: Number,
      default:1
    },
    pageName: {
      type: String,
      default: "default"
    }
  },
}
</script>

<style scoped>

</style>

