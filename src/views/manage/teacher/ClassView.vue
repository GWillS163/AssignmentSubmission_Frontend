<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">班级视图</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
        <a class="btn btn-primary" role="button" @click="addNewClass">
          <i class="fa fa-plus"></i>&nbsp;
          新增班级
        </a>
      </div>
    </div>
<!--    <div id="TableSorterCard" class="card" style="margin-bottom: 19px;">-->
<!--      <div class="card-header py-3">-->
<!--        <div class="row table-topper align-items-center">-->
<!--          <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">-->
<!--            <p class="text-primary m-0 fw-bold">作业列表</p>-->
<!--          </div>-->
<!--          <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">-->
<!--            <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">Borrar Filtros</button>-->
<!--            <button id="zoom_in" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-plus"></i></button>-->
<!--            <button id="zoom_out" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                    zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-minus"></i></button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center ms-xl-0 me-xl-0 mb-md-5 mt-xl-0 pt-xl-0"
           style="padding-bottom: 0;margin-top: -25px;padding-top: 0;">
        <class-view-card :clazz="clazz" v-for="clazz in classes"/>
      </div>
  </div>
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