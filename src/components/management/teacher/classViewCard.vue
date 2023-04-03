<template>
  <div>
    <table>
      <tr v-for="(pro, index) in clazz">{{ index }} - {{pro}}</tr>
    </table>
  </div>
    <b-card
         :header="  (assigns.length ? '进行中: ' + assigns.length : '暂无正在收集')"
         header-tag="header"
         :header-class=" assigns.name ? 'text-white bg-primary' : 'text-white bg-secondary'"
        img-top
        no-body
        style="max-width: 20rem;"
    >
      <b-card-body>
        <b-row>
          <b-col>
            <b-card-title ><a href="http://www.baidu.com">{{ clazz.name }}</a></b-card-title>
            <b-card-subtitle class="mb-2">{{ clazz.teacher }}</b-card-subtitle>
            <b-card-text> {{ clazz.description }} </b-card-text>
          </b-col>
          <b-col>
              <button class="btn btn-primary d-flex ms-auto" type="button"
              @click="viewClassAssignDetail(classView.detailUrl)"
              >详情</button>
          </b-col>
        </b-row>
      </b-card-body>


      <b-list-group flush v-if="assigns">
        <b-list-group-item v-for="assign in assigns" >
          <b-row>
        {{assign}}
            <b-col cols="6">
              {{ assign.briefName }}
            </b-col>
            <b-col cols="6">
              {{ assign.fileCount }} - {{assign.studentCount}}
              <b-progress :value="assign.progress" :variant="assign.progress === 100 ? 'success': 'primary'"></b-progress>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
      <b-list-group flush v-else>
        {{assigns}}
        <b-list-group-item>
          <b-card-text>暂无数据</b-card-text>
        </b-list-group-item>
      </b-list-group>
      <b-card-footer :class=" assigns.length ? 'text-white bg-primary' : 'text-white bg-secondary'">共 {{ assigns.length }} 个作业</b-card-footer>
    </b-card>
</template>

<script>
import {getCurrentInstance, onMounted, ref} from "vue";

export default {
  name: "classViewCard",
  props: {
    clazz: {
      type: Object,
      default: {
        id: 1909,
        name: "1909班",
        releaseTeacher: "KissesJun"
      }
    }
  },
  methods: {
    viewClassAssignDetail(clazzId) {
      // TODO: 实现查看详情的窗口跳转
      console.log("查看班级作业收集详情" + clazzId)
    }
  },
  setup(props) {
    const assigns = ref([]);
    const {proxy} = getCurrentInstance();
    const getAssignByClass = async () => {
      console.log("当前作业", props.clazz.clazzId)
      assigns.value = await proxy.$api.getTab3AssignsProgressByClassId(props.clazz.clazzId)
          .then( res => {
              console.log(props.clazz.clazzId +"的作业", res)
              return res.data;
        }
      );
      // console.log(assigns.value)
    }
    onMounted(() => {
      console.log("作业正在加载")
      getAssignByClass();
    })
    return {
      assigns ,
    }
  }
}
</script>

<style scoped>

</style>