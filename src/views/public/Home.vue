<template>

  <section class="py-4 py-xl-5  mb-auto "
           style="margin-left: 74px;margin-right: 78px;padding-top: 22px;margin-top: -21px;padding-bottom: 0;">
    <div>
      <ul class="nav nav-tabs" role="tablist"
          style="padding-left: 4px;margin-top: 23px;margin-bottom: 24px;">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" data-bs-toggle="tab" href="#tab-1"
             role="tab">公共提交</a></li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-2"
             role="tab">作业视图</a></li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-3"
             role="tab">班级视图</a></li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-4"
             role="tab">提交记录</a></li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" data-bs-toggle="tab" href="#tab-5"
             role="tab">健康码调色</a></li>
      </ul>

      <div class="tab-content">

        <div id="tab-1" class="tab-pane active" role="tabpanel">
          <tab1-content :assigns="tab1Assigns"/>
        </div>
        <div id="tab-2" class="tab-pane " role="tabpanel"
             style="margin-bottom: 156px; padding: 0 0 2px;">
          <tab2-content :assigns="tab2Assigns" :title-banner="tab2AssignView_Banner"/>
        </div>
        <div id="tab-3" class="tab-pane " role="tabpanel"
             style="margin-bottom: 156px;margin-right: 0;margin-left: 0;padding: 0 0 2px;">
          <tab3-content :title-banner="tab3AssignView_Banner" :classes="tab3AssignView_content"/>
        </div>
        <div id="tab-4" class="tab-pane " role="tabpanel">
          <tab4-content :table-data="tab4submitRecord"/>
        </div>
        <div id="tab-5" class="tab-pane" role="tabpanel">
          <tab5-content/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/public/PublicHeader.vue";
import Tab1Content from "@/views/public/tabs/Tab1Content.vue";
import Tab2Content from "@/views/public/tabs/Tab2Content.vue";
import Tab3Content from "@/views/public/tabs/Tab3Content.vue";
import Tab4Content from "@/views/public/tabs/Tab4Content.vue";
import Tab5Content from "@/views/public/tabs/Tab5Content.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "index",

  // name: "index",
  components: {
    Header,
    Tab1Content,
    Tab2Content,
    Tab3Content,
    Tab4Content,
    Tab5Content,
    PublicFooter
  },
  setup() {
    const {proxy} = getCurrentInstance();
    let tab1Assigns = ref([]);
    let tab2Assigns = ref([]);
    let tab2AssignView_Banner = ref([]);
    let tab2AssignView_content = ref([]);
    let tab3AssignView_Banner = ref([]);
    let tab3Records = ref([]);
    const tab3Classes = ref([]);
    let tab4Records = ref([]);
    let tab4submitRecord = ref([]);
    const getTab1Data = async () => {
      // const res = await axios.get("/public/getTab1PublicAssigns");
      // console.log("tab1Content:",res.data);
      // tab1Assigns.value = res.data.data.assigns;
      const res = await proxy.$api.getTab1PublicAssigns();
      console.log("tab1Assigns:", res);
      tab1Assigns.value = res.data;
      tab2Assigns.value = res.data;
    };
    const getTab2Data = async () => {
      const res = await proxy.$api.getTab2PublicAssignsBanner();
      console.log("tab2AssignsBanner:", res);
      // console.log("titleBanner:", res.titleBanner);
      // console.log("assignViews:", res.assignViews);
      // tab2AssignView_Banner.value = res.titleBanner;
      // tab2AssignView_Banner.value = [
      //           {
      //             name: "已交作业",
      //             num: "123+"
      //           },
      //           {
      //             name: "未交作业",
      //             num: "123+"
      //           },
      //           {
      //             name: "提交率",
      //             num: "45%"
      //           },
      //           {
      //             name: "最近DDL",
      //             num: "3"
      //           }
      //         ]
      tab2AssignView_Banner.value = res.data
      // tab2AssignView_content.value = res.assignViews;
    };
    const getTab3Data = async () => {
      tab3Classes.value = await proxy.$api.getOwnClazz()
      console.log("我的班级",tab3Classes.value)
      // const res = await proxy.$api.getTab3PublicAssigns();
      tab3AssignView_Banner.value = res.titleBanner;
    };
    const getTab4Data = async () => {
      // const res = await proxy.$api.getTab4PublicAssigns();
      // console.log("titleBanner:", res.titleBanner);
      // console.log("assignViews:", res.assignViews);
      const res = await proxy.$api.getTab4PublicAssigns();
      console.log("tab4Assigns:", res);
      tab4submitRecord.value = res.tableData;
    };
    onMounted(() => {
      getTab1Data();
      getTab2Data();
      getTab3Data();
      getTab4Data();
    });

    return {
      // tab1Content: getTab1Content,
      tab1Assigns,
      tab2Assigns,
      tab2AssignView_Banner,
      tab3AssignView_Banner,
      tab3Records,
      tab4submitRecord
    };
  },
}
</script>

<style scoped>

</style>