<template>

  <div class="progress flex-fill align-self-center my-auto mt-xxl-0 mb-xxl-0"

       style="margin-bottom: 36px;">
    <div aria-valuemax="100" aria-valuemin="0"
         class="progress-bar"
         :aria-valuenow="progress"
         :class="getBarColor()" :style="'width:' + progress +'%;'">{{ progress }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    progress: {
      type: Number,
      default: 100
    },
    style: {
      type: String,
      default: ''
    }
  },
  methods: {
    getBarColor() {
      if (this.style) {return this.style}
      if (this.progress < 10) { return 'bg-danger'}
      else if (this.progress < 30) { return 'bg-warning'}
      else if (this.progress < 80) { return 'bg-primary'}
      else if (100 <= this.progress ) { return 'bg-success'}
    }
  },
  data() {
  }

}
</script>

<style scoped>

</style>