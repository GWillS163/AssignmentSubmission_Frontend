<template>
  <nav
      class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 "
     :class="{'toggled': isToggled}"
  >
    <div class="container-fluid d-flex flex-column p-0">
      <router-link
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"

        to="/public">
      <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-laugh-wink"></i></div>
      <div class="sidebar-brand-text mx-3">
        <span> 欢迎，{{ userName }}</span></div>
    </router-link>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <navBarSideRow :menu-part="menuPart1"/>

        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          <p class="mb-0">数据管理</p>
        </div>

        <navBarSideRow :menu-part="menuDataManage"/>

        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          <p class="mb-0">Debug Pages</p>
        </div>
        <nav-bar-side-row :menu-part="menuDebugLink"/>
      </ul>

      <div class="text-center d-none d-md-inline">
        <button id="sidebarToggle" class="btn rounded-circle border-0" type="button" @click="changeToggle"></button>
      </div>
      <hr class="sidebar-divider my-0">
      <ul id="accordionSidebar" class="navbar-nav text-light">
        <li class="nav-item"></li>
      </ul>
    </div>
  </nav>

</template>

<script>
import navBarSideRow from './navBarSideRow.vue';
import {getCurrentInstance, onMounted, ref} from "vue";
export default {
  name: "navBar",
  components:{
    navBarSideRow
  },
  // export data
  data() {
    console.log("data")
    const {proxy} = getCurrentInstance();
    const isToggled = ref(false);
    const menuPart1 = ref([]);
    const menuDataManage = ref([]);
    const menuDebugLink = ref([]);
    const getMenuPart1 = async () => {
      const res = await proxy.$api.getMenuPart1();
      // console.log("menuPart1:", res);
      this.menuPart1 = res

    };
    const getMenuDataMange = async () => {
      const res = await proxy.$api.getMenuDataManage();
      // console.log("getMenuDataMange", res)
      this.menuDataManage = res
    }
    const getMenuDebugLink = async () => {
      const res = await proxy.$api.getMenuDebugLink();
      // console.log("menuDebugLink", res)
      this.menuDebugLink = res

    }
    onMounted(()=> {
      console.log("mounted")
        getMenuPart1();
        getMenuDataMange();
        getMenuDebugLink()
        }
    );
    return {
      // data
      userName: "Admin",
      menuPart1,
      menuDataManage ,
      menuDebugLink,
      isToggled,
      // changeToggle,
      // judgeToggle
    };
  },
  methods:{
    changeToggle() {
      // console.log("toggle", this.isToggled)
      this.isToggled = !this.isToggled;
    }
  }

}
</script>

<style scoped>

</style>