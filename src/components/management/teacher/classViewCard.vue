<template>
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
              {{ assign.assignName }}
            </b-col>
            <b-col cols="6">
              <b-progress :value="assign.progress" :variant="assign.progress === 100 ? 'success': 'primary'"></b-progress>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
      <b-list-group flush v-else>
        <b-list-group-item>暂无数据</b-list-group-item>
      </b-list-group>
      <b-card-footer :class=" assigns.length ? 'text-white bg-primary' : 'text-white bg-secondary'">共 {{ assigns.length }} 个作业</b-card-footer>
    </b-card>
  <!--  <div class="col">-->
  <!--    <div>-->
  <!--      <div class="card">-->
  <!--        <div class="d-flex pt-xl-3 pb-xl-2 mb-xl-4"-->
  <!--             style="border-radius: 5px;border-width: 3px;border-color: var(&#45;&#45;bs-blue);-->
  <!--                   font-weight: bold;margin-top: 0;padding-top: 14px;">-->
  <!--          <div class="flex-fill">-->
  <!--            <h4>{{ clazz.name }}</h4>-->
  <!--            <h6 class="text-muted mb-2">{{ clazz.teacher }}</h6>-->
  <!--          </div>-->
  <!--          <hr>-->
  <!--          <div style="width: 84px;">-->
  <!--            <button class="btn btn-primary d-flex ms-auto" type="button" @click="viewDetail(this.clazz.id)">详情</button>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--        <div class="table-responsive" style="border-color: rgb(100,129,217);">-->
  <!--          <table class="table table-striped">-->
  <!--            <tbody>-->

  <!--            <tr v-if="assigns.length" v-for="assign in assigns">-->
  <!--              <td>{{ assign.name }}</td>-->
  <!--              <td colspan="3">-->
  <!--                <div class="progress">-->
  <!--                  <div :aria-valuenow="assign.progress" :class="assign.progress === 100 ? 'bg-success': 'bg-primary'"-->
  <!--                       :style="'width: '+ assign.progress +'%;'"-->
  <!--                       aria-valuemax="100"-->
  <!--                       aria-valuemin="0"-->
  <!--                       class="progress-bar">{{ assign.progress }}%-->
  <!--                  </div>-->
  <!--                </div>-->
  <!--              </td>-->
  <!--            </tr>-->
  <!--            <tr v-else>暂无作业</tr>-->
  <!--            </tbody>-->
  <!--          </table>-->
  <!--        </div>-->
  <!--&lt;!&ndash;        <div class="card-body ps-lg-2 pe-lg-2 pt-lg- pb-lg-3"></div>&ndash;&gt;-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
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
  data() {
    const assigns = ref([]);
    const {proxy} = getCurrentInstance();
    const getAssignByClass = async () => {
      assigns.value = await proxy.$api.getAssignsByClass(this.clazz.id).then( res => {
          return res.data;
        }
      );
      // console.log(assigns.value)
    }
    onMounted(() => {
      getAssignByClass();
    })
    return {
      assigns,
    }
  }
}
</script>

<style scoped>

</style>