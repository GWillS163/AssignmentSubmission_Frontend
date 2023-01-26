
<template>
  <Header/>
   <div >{{tab1Assigns}} </div>
  <section class="py-4 py-xl-5  mb-auto "
           style="margin-left: 74px;margin-right: 78px;padding-top: 22px;margin-top: -21px;padding-bottom: 0;">
    <div>
      <ul class="nav nav-tabs" role="tablist"
          style="padding-right: 0px;margin: 0;margin-right: 0px;margin-left: -1px;padding-left: 4px;margin-top: 23px;margin-bottom: 24px;">
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
          <tab1-content/>
        </div>
        <div id="tab-2" class="tab-pane" role="tabpanel"
             style="padding: 0;margin-bottom: 156px; padding-bottom: 2px;">
          <tab2-content/>
        </div>
        <div id="tab-3" class="tab-pane" role="tabpanel"
             style="margin-bottom: 156px;margin-right: 0px;margin-left: 0;padding: 0 0px 2px;">
          <tab3-content/>
        </div>
        <div id="tab-4" class="tab-pane" role="tabpanel">
          <tab4-content/>
        </div>
        <div id="tab-5" class="tab-pane" role="tabpanel">
          <tab5-content/>
        </div>
      </div>
    </div>
  </section>

  <publicFooter/>
</template>

<script>

import Header from "../../components/public/PublicHeader.vue";
import Tab1Content from "../../components/public/Tab1Content.vue";
import Tab2Content from "../../components/public/Tab2Content.vue";
import Tab3Content from "../../components/public/Tab3Content.vue";
import Tab4Content from "../../components/public/Tab4Content.vue";
import Tab5Content from "../../components/public/Tab5Content.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
import {defineComponent, getCurrentInstance, onMounted, ref} from "vue";
import axios from "axios";
export default defineComponent({

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
    const tab1Content = async () => {
      console.log("tab1Content");
      const res = await axios.get("/public/getTab1PublicAssigns");
      console.log(res.data);
      // tab1Assigns.value = await proxy.$api.getTab1PublicAssigns();
      // console.log(tab1Assigns.value);
    };
    onMounted(() => {
      console.log("222")
      tab1Content();
    });

    return {
      tab1Content,
      tab1Assigns,
    };
  },

});
</script>

<style scoped>

</style>