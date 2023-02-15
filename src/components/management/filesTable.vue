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
  <page-spliter/>

</template>

<script>
import PageSpliter from "@/components/management/PageSpliter.vue";

export default {
  name: "filesTable",
  components: {PageSpliter},
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