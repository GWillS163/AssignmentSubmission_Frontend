<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>姓名</th>
        <th>格式化文件名</th>
        <th>文件大小</th>
        <th>Hash</th>
        <th>提交时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="file in files">
        <td>{{ file.name }}</td>
        <td>{{ file.formatName }}</td>
        <td>{{ file.size }}</td>
        <td>{{ file.md5 }}</td>
        <td>{{ file.submitTime }}</td>
        <td>删除</td>
      </tr>
      </tbody>
      <tfoot>
      <tr></tr>
      </tfoot>
    </table>
  </div>
  <nav class="d-xl-flex justify-content-xl-end">
    <ul class="pagination">
      <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
          aria-hidden="true">«</span></a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
      <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span
          aria-hidden="true">»</span></a></li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "filesTable",
  props: {
    files: {
      type: Array,
      default: () => {
        return [
          {
            name: "张三",
            recentSubmit: "2021-06-01 12:00:00",
          },
          {
            name: "李四",
            recentSubmit: "2021-06-01 12:00:00",
          },
          {
            name: "王五",
            recentSubmit: "2021-06-01 12:00:00",
          }
        ];
      },
    },

  },
}
</script>

<style scoped>

</style>