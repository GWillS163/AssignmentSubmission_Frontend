
<template>
  <div id="wrapper">
    <NavBarSide/>
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <NavBarTop/>
        <div class="container-fluid">

          <router-view/>
        </div>
      </div>
      <Footer/>

    </div>
    <a class="border rounded d-inline scroll-to-top" href="#wrapper"><i class="fas fa-angle-up"></i></a>
  </div>

</template>

<script>
import NavBarSide from "@/components/management/navBar/navBarSide.vue";
import NavBarTop from "@/components/management/navBar/navBarTop.vue";
import Dashboard from "@/views/manage/admin/Dashboard.vue";
import Footer from "@/components/management/navBar/ManageFooter.vue";
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    NavBarSide,
    NavBarTop,
    Dashboard,
    Footer
  }
})
</script>

<style scoped>

</style>