<template>

  <li v-for="part in menuPart" class="nav-item">
    <!--          无子元素-->
    <div v-if="!('children' in part)">
      <a :href="part.link" class="nav-link">
        <i :class="part.icon" class="fas"></i>
        <span>&nbsp;{{ part.name }}</span>
      </a>
    </div>

    <!--            有子元素-->
    <div v-else>
      <a :aria-controls="part.name" :aria-expanded="isCollapse" class="btn btn-link nav-link"
          :class="'collapsed' ? isCollapse : ''"
         data-bs-toggle="collapse" :href="'#' + part.name" role="button">

        <i class="fas fa-chart-area"></i>
        <span>{{ part.name }}</span>
      </a>

      <div :id="part.name" class="collapse"
           :class="'' ? isCollapse : 'show'"
      >
        <div class="bg-white border rounded py-2 collapse-inner">
          <a v-for="subPart in part.children" :href="subPart.link"
             class="collapse-item"
          >{{ subPart.name }}
          </a>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "navBarSideRow",
  props: {
    menuPart: Array,
    default: [
      {
        name: '默认Name',
        icon: 'fa-chart-area',
        children: [
          {
            name: 'child1',
            link: ''
          },
          {
            name: 'child2',
            link: ''
          }
        ]
      }
    ]
  },
  setup () {
    const isCollapse = false;
    const switchCollapse = (status) => {
      this.collapse = !isCollapse

    }
    return {
      isCollapse
    }
  }

}
</script>

<style scoped>

</style>