<script setup>
</script>
<template>
<!-- generate the code that can jump to index or register ... etc page-->
  <div>
    主页测试
    {{tableData}}
  </div>
</template>

<script>
import Header from "../components/public/PublicHeader.vue";
import Tab1Content from "../components/public/Tab1Content.vue";
import Tab2Content from "../components/public/Tab2Content.vue";
import Tab3Content from "../components/public/Tab3Content.vue";
import Tab4Content from "../components/public/Tab4Content.vue";
import Tab5Content from "../components/public/Tab5Content.vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
import {defineComponent, getCurrentInstance, onMounted, reactive, ref} from "vue";
export default defineComponent({
  components:{
    Header,
    Tab1Content,
    Tab2Content,
    Tab3Content,
    Tab4Content,
    Tab5Content,
    PublicFooter
  },
  setup() {
    return {
      tableData: [
          1,2,3
      ]
    };
  },
})
</script>

<style scoped>

</style>
