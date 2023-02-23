<template>
  <div>
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
          <ul class="pagination">
            <li :class="{disabled: currentPage === 1}" class="page-item">
              <a class="page-link" href="#" @click.prevent="prevPage">上一页</a>
            </li>
            <li v-for="i in totalPages" :key="i" :class="{active: currentPage === i}" class="page-item">
              <a class="page-link" href="#" @click.prevent="goToPage(i)">{{ i }}</a>
            </li>
            <li :class="{disabled: currentPage === totalPages}" class="page-item">
              <a class="page-link" href="#" @click.prevent="nextPage">下一页</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      required: true,
      default: () => [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    },
    pageSize: {
      type: Number,
      default: 2
    }
  },

  data() {
    return {
      currentPage: 1,
      totalPages: Math.ceil(this.records.length / this.pageSize)
    };
  },
  watch: {
    records() {
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
      this.currentPage = 1;
    }
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    }
  }
};
</script>
