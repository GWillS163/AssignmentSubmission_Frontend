<template>

  <li v-for="part in menuPart" class="nav-item">
    <!--          无子元素-->
    <div v-if="!('children' in part)">
      <router-link :to="part.link" class="nav-link">
        <i :class="part.icon" class="fas"></i>
        <span>{{ part.name }}</span>
      </router-link>
<!--      <router-link :to="part.link" class="nav-link">-->
<!--        <i :class="part.icon" class="fas"></i>-->
<!--        <span>{{ part.name }}</span>-->
<!--      </router-link>-->

    </div>

    <!--            有子元素-->
    <div v-else>
      <a :aria-controls="part.name" :aria-expanded="isCollapse" class="btn btn-link nav-link"
          :class="'collapsed' ? isCollapse : ''"
         data-bs-toggle="collapse" :href="'#' + part.name" role="button">

        <i class="fas fa-chart-area"></i>
        <span>{{ part.name }}</span>
      </a>

      <div :id="part.name" class="collapse" :class="isCollapse ? 'show' : ''"
      >
        <div class="bg-white border rounded py-2 collapse-inner">
          <router-link v-for="subPart in part.children" :to="subPart.link"
             class="collapse-item"
          >{{ subPart.name }}
          </router-link>
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