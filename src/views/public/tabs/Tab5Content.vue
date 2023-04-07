<template>
  <div class="row">
    <b-col cols="1">
      <img alt="" src="public/openaiLogo.png" style="width: 80px;height: 80px;"/>
    </b-col>
    <b-col>
      <h1>Software Engineering UML Diagrams Assistant</h1>
    </b-col>
    <b-col class="align-content-end" cols="1">
      <b-button variant="outline-primary" @click="getUmlRecords">
        <i class="fas fa-refresh"></i>
      </b-button>
    </b-col>
  </div>
  <b-row>
    <b-col cols="11">
      <b-form-textarea id="textarea" v-model="userInput"
                       max-rows="6" placeholder="请描述你的UML图片，越详细，越精确" rows="3"></b-form-textarea>
    </b-col>
    <b-col cols="1">
      <b-button style="height:100%" variant="primary" @click="postUmlRecord">提交</b-button>
    </b-col>
  </b-row>

  <b-row>
    <b-col v-for="record in umlRecords" lg="12" sm="12" md="12">
      <b-row>
        <b-col cols="6">
          <b-row>
            <h3>{{ record.user_input }}</h3>
          </b-row>
          <b-row>
              <b-button-group size="sm">
                <b-button variant="outline-info" @click="editUml(record.user_input)">
                  <i class="fas fa-edit"></i>
                </b-button>
                <b-button variant="outline-danger" @click="deleteUml(record.id)">
                  <i class="fas fa-trash-alt"></i>
                </b-button>
<!--                 v-if="!record.uml_png_src"-->
                <b-button variant="outline-secondary"
                          @click="refreshSingle(record.id)">
                  <i class="fas fa-sync-alt"></i>
                </b-button>
              </b-button-group>
          </b-row>
          <b-row class="overflowText text-center" rows="4">
            <b-spinner v-if="record.uml_intro.length < 10"
                       variant="primary"></b-spinner>
            <p v-else class="overflowText">
              {{ record.uml_intro }}
            </p>
          </b-row>
        </b-col>
        <b-col class="overflowText text-center" cols="6">
          <div class="">
            <img v-if="record.uml_png_src" :src="getFullSrc(record.uml_png_src)" alt=""
                 style="width: 100%;height: 100%;"/>
            <div v-else>

              <i  class="fas fa-picture-o"> 无图片</i>
              <b-spinner  v-if="record.uml_intro.length < 10" variant="primary"></b-spinner>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import {ref, onMounted, getCurrentInstance} from "vue";

export default {
  name: "tab5Content",
  methods: {
    getFullSrc(src) {
      return "http://localhost/" + src
    }
  },
  data() {
    const userInput = ref("");
    const {proxy} = getCurrentInstance();
    const umlRecords = ref([]);
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
            console.log(res)
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
      editUml,
      deleteUml,
    }
  }
}
</script>

<style scoped>
.overflowText {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12; /* 显示的行数 */
  -webkit-box-orient: vertical;
}
</style>