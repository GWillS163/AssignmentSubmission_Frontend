<template>

  <!--  TODO  Pagination-->
<!--  <b-row>-->
<!--    <b-col class="my-1" md="3" sm="5">-->
<!--      <b-form-group-->
<!--          class="mb-0"-->
<!--          label="Per page"-->
<!--          label-align-sm="left"-->
<!--          label-cols-lg="4"-->
<!--          label-cols-md="4"-->
<!--          label-cols-sm="6"-->
<!--          label-for="per-page-select"-->
<!--          label-size="sm"-->
<!--      >-->
<!--        <b-form-select-->
<!--            id="per-page-select"-->
<!--            v-model="perPage"-->
<!--            :options="pageOptions"-->
<!--            size="sm"-->
<!--        ></b-form-select>-->
<!--      </b-form-group>-->
<!--    </b-col>-->

<!--    <b-col class="my-1" md="8" sm="7">-->
<!--      <b-pagination-->
<!--          v-model="currentPage"-->
<!--          :per-page="perPage"-->
<!--          :total-rows="totalRows"-->
<!--          align="fill"-->
<!--          class="my-0"-->
<!--          first-text="⏮"-->
<!--          last-text="⏭"-->
<!--          next-text="⏩"-->
<!--          prev-text="⏪"-->
<!--          size="sm"-->
<!--      ></b-pagination>-->
<!--    </b-col>-->
<!--  </b-row>-->


  <b-alert  v-model="dismissibleAlert"
            @click="dismissibleAlert = false"
            :variant="response.style" dismissible>{{ response.message }}</b-alert>

  <b-row>
    <b-col
        v-for="assign in assigns"
        cols="12" lg="4" md="6" sm="12"
    >
      <assign-view-card :assign="assign"/>

    </b-col>
  </b-row>
</template>

<script>
import {ref} from 'vue'
import AssignViewCard from "@/components/management/teacher/assignViewCard.vue";
import handleAssignCard from "@/assets/customed/handleAssignCard.js";

export default {
  name: "assignListPrompt",
  components: {AssignViewCard},
  handleAssignCard: [handleAssignCard],
  props: {
    assigns: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  methods: {

    onFileChange(e, assign) {
      const file = e.target.files[0];
      // console.log("文件", file);
      // console.log(assign);
      //   TODO: post的时候信息没有填写完整，需要补充
      const formData = {
        fileData: file,
        assignId: assign.id,
        userId: this.userInfo.id
      }
      console.log(formData)
      this.dismissibleAlert = true;
      this.response = {
        message: "正在上传" + assign.name,
        style: "info"
      }
      this.$api.postFile(formData).then(res => {
        // console.log(res);
        if (res.status === 200 ){
          this.response = {
            message: assign.name + "上传成功",
            style: "success"
          }
        } else {
          this.response = {
            message: assign.name + "上传失败" + res.statusText,
            style: "danger"
          }
        }
      })

    },

  },
  data() {

    const dismissibleAlert = ref(false);
    const totalRows = 1;
    const response = {
      style: 'dark',
      message: '暂无数据'
    };
  //   return assigns
    return {
      userInfo: {
        name: "张三",
        avatar: "https://avatars.githubusercontent.com/u/10731096?v=4",
        role: "学生",
        id: 1
      },
      totalRows,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, {value: 100, text: "展示更多"}],
      sortBy: '',
      sortDesc: false,
      sortDirection: '升序',
      filter: null,
      filterOn: [],
      response,
      dismissibleAlert,
    }
  }
  //
  // }
}
</script>

<style scoped>

</style>