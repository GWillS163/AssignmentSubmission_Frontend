<template>
<div class="row mb-5 mb-lg-4" style="margin-bottom: 90px;">
    <div class="col-md-8 col-xl-6 text-center mx-auto">
      <h2>{{ title }}</h2>
    </div>
  </div>
  <div class="text-center text-white-50 bg-primary border rounded border-0 p-3" style="margin-bottom: 40px;">
    <div class="row justify-content-center">
      <div class="col" v-for="title in banner" v-if="banner">
<!--        <div class="p-3">-->
          <h4 class="display-5 fw-bold text-white mb-0">{{ title.value }}</h4>
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
      default: () => "默认标题"
    },
    banner: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>

</style>