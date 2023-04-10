<template>
  <div class="row">
    <b-col cols="1">
      <img alt="" src="public/openaiLogo.png" style="width: 60px;height: 60px;"/>
    </b-col>
    <b-col cols="10">
      <h1>Software Engineering UML Diagrams Assistant</h1>
    </b-col>
    <b-col  cols="1">
      <b-button  variant="primary" @click="getUmlRecords" size="lg">
        <i class="fas fa-refresh"></i>
      </b-button>
    </b-col>
  </div>
  <b-row>
    <b-col cols="11">
      <b-form-textarea id="textarea" v-model="userInput" style="font-size: 20px"
                       max-rows="6" placeholder="请描述你的UML图片，越详细，越精确" rows="3"></b-form-textarea>
    </b-col>
    <b-col cols="1">
      <b-button variant="primary" style="height: 100%" @click="postUmlRecord" size="lg">
        <i class="fas fa-paper-plane"></i>
      </b-button>
    </b-col>
  </b-row>

  <!--  add change line-->

  <b-row style="margin-top: 3%">
    <b-col v-for="record in umlRecords" lg="4" md="6" sm="12">
      <b-card
          class="card text-center"
          no-body>
        <b-card-header
            header-class="bg-primary text-white"
            no-body>
          <b-card-img
              v-if="record.uml_png_src"
              :alt="record.uml_intro"

              :src="record.uml_png_src ? getFullSrc(record.uml_png_src) : 'public/uml.png'"
              style="max-width:100%; width: auto;max-height: 120px;"
              @click="showUmlGraph(record)"/>
          <b-form-text v-else>
            <i class="fas fa-picture-o"> 无图片</i>
            <!--                  <b-spinner v-if="record.uml_intro.length < 10" variant="primary"></b-spinner>-->
          </b-form-text>

        </b-card-header>
        <b-card-text class="overflowText">
          <h2><i class="fas fa-pen"></i>
            {{ record.user_input }}</h2>
        </b-card-text>
        <b-button-group size="sm">
<!--          <b-button variant="outline-primary" @click="editUmlInput(record.id)">-->
<!--            <i class="fas fa-edit"></i>-->
<!--          </b-button>-->
          <b-button variant="outline-info" @click="copyUmlInput(record.user_input)">
            <i class="fas fa-copy"></i>
          </b-button>
          <b-button variant="outline-danger" @click="deleteUml(record.id)">
            <i class="fas fa-trash-alt"></i>
          </b-button>
          <!--                 v-if="!record.uml_png_src"-->
          <b-button variant="outline-secondary" v-if="!record.uml_png_src"
                    @click="refreshSingle(record.id)">
            <i class="fas fa-sync-alt"></i>
          </b-button>
        </b-button-group>
        <b-tabs fill>
          <b-tab title="输入">
            <i class="fas fa-pen"></i>
            <b-form-text>{{ record.user_input }}</b-form-text>
            <!--                  <b-form-textarea disabled v-model="record.user_input"-->
            <!--                                    max-rows="6" placeholder="请描述你的UML图片，越详细，越精确" rows="3"></b-form-textarea>-->
          </b-tab>
          <b-tab active title="介绍">
            <i class="fa fa-quote-left"></i>
            <b-form-text>{{ record.uml_intro }}</b-form-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
  <!--  <b-button @click="click">Show OffCanvas</b-button>-->
  <b-offcanvas v-model="openSide" placement="end" style="width: 200rem;">
    <template #header>
      <h5>{{ showingUmlGraph.user_input }}</h5>
    </template>
    <template #default>
      <b-tabs fill>
        <b-tab title="介绍">
          <b-form-text>{{ showingUmlGraph.uml_intro }}</b-form-text>
        </b-tab>
        <b-tab :active="refreshUmlEnd" title="Uml图">
          <img v-if="showingUmlGraph.uml_png_src" :src="getFullSrc(showingUmlGraph.uml_png_src)" alt=""
               style="width: 100%;height: 100%;"/>
          <div v-else>
            <i class="fas fa-picture-o"> 无图片</i>
            <b-spinner v-if="showingUmlGraph.uml_intro.length < 10" variant="primary"></b-spinner>
          </div>
        </b-tab>

        <b-tab title="Code">
          <b-form-textarea id="textarea" v-model="showingUmlGraph.uml_code"
                           max-rows="20" placeholder="请描述你的UML图片，越详细，越精确" rows="20"></b-form-textarea>

          <b-button-group filled>
            <!--                  <b-button variant="outline-primary" @click="editUmlInput(record.id)">-->
            <!--                    <i class="fas fa-edit"></i>-->
            <!--                  </b-button>-->
            <b-button variant="outline-dark" @click="rerunUmlCode(showingUmlGraph)">生成UML图</b-button>
          </b-button-group>
        </b-tab>
      </b-tabs>
    </template>
<!--    <template #footer>-->
<!--      <b-button @click="openSide = false">Close</b-button>-->
<!--    </template>-->
  </b-offcanvas>
</template>

<script>
import {ref, onMounted, getCurrentInstance} from "vue";

export default {
  name: "tab5Content",
  methods: {
    getFullSrc(src) {
      return "http://localhost/" + src
    },
    editUmlInput(id) {
      console.log("editUmlInput", id)
    },
    showUmlGraph(record) {
      console.log("showUmlGraph", record)
      this.openSide = true;
      this.showingUmlGraph = record;
    },
  },
  data() {
    const userInput = ref("");
    const {proxy} = getCurrentInstance();
    const umlRecords = ref([]);
    const openSide = false;
    const refreshUmlEnd = true;
    const showingUmlGraph = ref({
      uml_png_src: "default",
      uml_intro: "default",
      uml_code: "default",
      user_input: "default"
    });
    const getUmlRecords = async () => {
      this.umlRecords = [];
      await proxy.$api.getUmlRecords()
          .then(res => {
            console.log(res)
            this.umlRecords = res.data;
          })
    }
    const refreshSingle = async (id) => {
      console.log("正在发送，处理约2分钟:", id)
      await proxy.$api.refreshSingleUmlRecord(id)
          .then(res => {
            // console.log(res)
            getUmlRecords();
          })
    }
    const postUmlRecord = async () => {
      console.log("正在发送，处理约2分钟:", this.userInput)
      const value = this.userInput;

      this.userInput = "";
      await proxy.$api.postUmlRecord({
        user_input: value
      })
          .then(res => {
            console.log(res)
            getUmlRecords();
          })
    }
    const editUml = (copyOrigin) => {
      this.userInput = copyOrigin
    }
    const rerunUmlCode = async (record) => {
      console.log("重新生成:", record)

      await proxy.$api.rerunUmlCode(record)
          .then(res => {
            getUmlRecords();
            // console.log("rerunUmlCode", res)
            this.showingUmlGraph = res.data;
            this.refreshUmlEnd = true;
          })
    }
    const deleteUml = async (umlId) => {
      console.log("删除", umlId)

      await proxy.$api.deleteUmlId(umlId)
          .then(res => {
            getUmlRecords();
          })
    }
    onMounted(() => {
      getUmlRecords();
    })
    return {
      userInput,
      umlRecords,
      getUmlRecords,
      postUmlRecord,
      refreshSingle,
      copyUmlInput: editUml,
      deleteUml,
      rerunUmlCode,
      openSide,
      showingUmlGraph,
      refreshUmlEnd,
    }
  }
}
</script>

<style scoped>
.overflowText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 显示的行数 */
  -webkit-box-orient: vertical;
}
</style>