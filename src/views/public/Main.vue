<template>
  <PublicHeader/>
  <router-view/>
  <publicFooter/>
</template>

<script>
import {defineComponent} from "vue";
import PublicFooter from "@/components/public/PublicFooter.vue";
import PublicHeader from "@/components/public/PublicHeader.vue";
export default defineComponent({
  components: {PublicHeader, PublicFooter},



});
</script>

<style scoped>

</style>