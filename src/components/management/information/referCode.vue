<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>名称</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paginatedItems" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
        </tr>
      </tbody>
    </table>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{disabled: currentPage === 1}">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">上一页</a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page" :class="{active: page === currentPage}">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{disabled: currentPage === pageCount}">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">下一页</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'DynamicTable',
  props: {
    items: {
      type: Array,
      required: true,
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  setup(props) {
    const currentPage = ref(1);

    const pageCount = computed(() => {
      return Math.ceil(props.items.length / props.pageSize);
    });

    const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * props.pageSize;
      const endIndex = startIndex + props.pageSize;
      return props.items.slice(startIndex, endIndex);
    });

    const pages = computed(() => {
      const result = [];
      for (let i = 1; i <= pageCount.value; i++) {
        result.push(i);
      }
      return result;
    });

    function changePage(page) {
      if (page >= 1 && page <= pageCount.value) {
        currentPage.value = page;
      }
    }

    return {
      currentPage,
      pageCount,
      paginatedItems,
      pages,
      changePage,
    };
  },
};
</script>
