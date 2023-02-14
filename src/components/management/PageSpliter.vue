<template>
<!--TODO: 居中-->
  <nav class="d-xl-flex align-content-center">
    <ul class="pagination">
      <li class="page-item"><a aria-label="Previous" class="page-link" href="#">
        <span
          aria-hidden="true">«</span></a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">4</a></li>
      <li class="page-item"><a class="page-link" href="#">5</a></li>
      <li class="page-item"><a aria-label="Next" class="page-link" href="#">
        <span
          aria-hidden="true">»</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "PageSpliter",
  props: {
    pageName: {
      type: String,
      default: "default"
    }
  },
}
</script>

<style scoped>

</style>

