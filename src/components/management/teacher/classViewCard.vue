<template>
<!--  <div>-->
<!--    <table>-->
<!--      <tr v-for="(pro, index) in clazz">{{ index }} - {{pro}}</tr>-->
<!--    </table>-->
<!--  </div>-->
    <b-card
         :header="  (assigns.length ? '进行中: ' + assigns.length : '暂无正在收集')"
         header-tag="header"
         :header-class=" assigns.length ? 'text-white bg-primary' : 'text-white bg-secondary'"
        img-top
        no-body
    >
      <b-card-body>
        <b-row>
          <b-card-title class="text-primary"> {{ clazz.clazzName  }} </b-card-title>
          <b-card-text >{{clazz.faculty}} -  {{clazz.major}}</b-card-text>
          <b-card-subtitle class="mb-2">{{ clazz.teacher }}</b-card-subtitle>
          <b-card-text> {{ clazz.description }} </b-card-text>

        </b-row>
      </b-card-body>


      <b-list-group flush >
        <b-list-group-item v-if="addProgress.length !== 0" v-for="assign in addProgress" >
          <b-row>
            <b-col cols="6">
              {{ assign.briefName }}
            </b-col>
            <b-col cols="6">

            <b-progress :max="50">
              <b-progress-bar :value="assign.progress" variant="primary" :label-html="assign.progress"/>
            </b-progress>
              <!--              {{ assign.fileCount }} - {{assign.studentCount}}  - {{ assign.progress}}-->
            </b-col>
          </b-row>
        </b-list-group-item>
        <b-list-group-item v-else>
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
  computed: {
    addProgress() {
      return this.assigns.map(assign => {
        return {
          ...assign,
          progress: this.calcProgress(assign.fileCount, assign.studentCount),
          color:  this.calcProgress(assign.fileCount, assign.studentCount) > 50 ? "success" : "danger"
        }
      })
      }

  },
  methods: {
    viewClassAssignDetail(clazzId) {
      // TODO: 实现查看详情的窗口跳转
      console.log("查看班级作业收集详情" + clazzId)
    },
    calcProgress(fileCount, studentCount) {
      if (!fileCount) {
        return 0;
      } else if (!studentCount) {
        return 100;
      }
      return Math.round(fileCount / studentCount * 100)
    }
  },
  setup(props) {
    const assigns = ref([]);
    const {proxy} = getCurrentInstance();
    const getAssignByClass = async () => {
      // console.log("当前作业", props.clazz.clazzId)
      assigns.value = await proxy.$api.getTab3AssignsProgressByClassId(props.clazz.clazzId)
          .then( res => {
              // console.log(props.clazz.clazzId +"的作业", res)
              return res.data;
        }
      );
      // console.log(assigns.value)
    }
    onMounted(() => {
      // console.log("作业正在加载")
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