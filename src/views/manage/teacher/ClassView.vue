<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="6" md="6" >
        <h3 class="text-dark mb-4">班级视图</h3>
      </b-col>
      <b-col cols="12" sm="6" md="6" class="text-end" style="margin-bottom: 30px;">
        <b-button variant="primary" @click="addNewClass">
          <i class="fa fa-plus"></i>
          新增班级
        </b-button>
      </b-col>
    </b-row>
    <b-row class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center ms-xl-0 me-xl-0 mb-md-5 mt-xl-0 pt-xl-0"
           style="padding-bottom: 0;margin-top: -25px;padding-top: 0;"
    >
        <class-view-card :clazz="clazz" v-for="clazz in classes"/>
    </b-row>

  </b-container>
</template>

<script>
import ClassViewCard from "@/components/management/teacher/classViewCard.vue";
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "classView",
  components: {ClassViewCard},
  methods: {
    addNewClass(){
      // TODO: 实现新增班级的POST 及窗口跳转
      console.log("新增班级")
    }
  },
  data() {
    const classes = ref([]);
    const {proxy } = getCurrentInstance();
    const getClazzData = async() => {
      // console.log(res)
      classes.value = await proxy.$api.getOwnClazz()
      // console.log("我的班级",classes.value)
    }
    onMounted(() => {
      getClazzData();
    })
    return {
      classes
    }
  }
}
</script>

<style scoped>

</style>