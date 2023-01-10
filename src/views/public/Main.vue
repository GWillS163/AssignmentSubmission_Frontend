<script setup>
import Header from "../../components/public/Header.vue";
import Footer from "../../components/public/Footer.vue";
import Tab1Content from "../../components/public/Tab1Content.vue";
import Tab2Content from "../../components/public/Tab2Content.vue";
import Tab3Content from "../../components/public/Tab3Content.vue";
import Tab4Content from "../../components/public/Tab4Content.vue";
import Tab5Content from "../../components/public/Tab5Content.vue";
</script>

<template>
  <Header/>
  <section class="py-4 py-xl-5  mb-auto "
           style="margin-left: 74px;margin-right: 78px;padding-top: 22px;margin-top: -21px;padding-bottom: 0;">
    <div>
      <ul class="nav nav-tabs" role="tablist"
          style="padding-right: 0px;margin: 0;margin-right: 0px;margin-left: -1px;padding-left: 4px;margin-top: 23px;margin-bottom: 24px;">
        <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab"
                                                    href="#tab-1">公共提交</a></li>
        <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab"
                                                    href="#tab-2">作业视图</a></li>
        <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab"
                                                    href="#tab-3">班级视图</a></li>
        <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab"
                                                    href="#tab-4">提交记录</a></li>
        <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab"
                                                    href="#tab-5">健康码调色</a></li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active" role="tabpanel" id="tab-1">
          <tab1-content/>
        </div>
        <div class="tab-pane" role="tabpanel" id="tab-2"
             style="padding: 0;padding-left: 0px;margin-bottom: 156px;padding-right: 0px;margin-right: 0px;margin-left: 0;padding-bottom: 2px;">
          <tab2-content/>
        </div>
        <div class="tab-pane" role="tabpanel" id="tab-3"
             style="margin-bottom: 156px;margin-right: 0px;margin-left: 0;padding: 0 0px 2px;">
          <tab3-content/>
        </div>
        <div class="tab-pane" role="tabpanel" id="tab-4">
          <tab4-content/>
        </div>
        <div class="tab-pane" role="tabpanel" id="tab-5">
          <tab5-content/>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>