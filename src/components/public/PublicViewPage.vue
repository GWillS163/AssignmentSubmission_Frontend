<template>
  <div v-if="title" class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>{{ title }}</h2>
    </div>
  </div>
  <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 40px;">
    <div class="row justify-content-center">
      <div class="col" v-for="title in banner" v-if="banner">
<!--        <div class="p-3">-->
          <h4 class="display-5 fw-bold text-white mb-0">
            {{ title.name === "提交率" ? title.value * 100 + '%' :
              title.value  }}</h4>
          <p class="mb-0">{{ title.name }}</p>
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicViewPage",
  props: {
    title: {
      type: String,
      default: () => ""
    },
    banner: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    formatted() {
      for (let i = 0; i < this.banner.length; i++) {
        console.log(this.banner[i].name)
        console.log(this.banner[i].value)
        if (this.banner[i].name === "提交率") {
          this.banner[i].value = this.banner[i].value * 100 + "%"
          // console.log(this.banner[i].value)
        }
      }
      // return this.banner
    }
  }
}
</script>

<style scoped>

</style>