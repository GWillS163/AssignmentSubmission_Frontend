<template>
  <div class="row">
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
    <b-col cols="6" v-for="record in umlRecords">
      <b-row>
        <b-col cols="8">
          <b-row>
            <b-col cols="10"><h3>{{ record.user_input }}</h3></b-col>
            <b-col class="text-end" cols="2">
              <b-button-group size="sm">

                <b-button variant="outline-info" @click="editUml(record.user_input)">
                  <i class="fas fa-edit"></i>
                </b-button>
                <b-button variant="outline-danger" @click="deleteUml(record.id)">
                  <i class="fas fa-trash-alt"></i>
                </b-button>
              </b-button-group>
            </b-col>
          </b-row>
          <b-row class="overflowText text-center" rows="4">
            <b-spinner v-if="record.uml_intro.length < 10"
                       variant="primary"></b-spinner>
            <p v-else class="overflowText">
              {{ record.uml_intro }}
            </p>
          </b-row>
          <b-row>
          </b-row>

        </b-col>
        <!--    <b-col class="overflowText">{{ record.id }}</b-col>-->

        <b-col class="overflowText" cols="4">

          <b-button v-if="record.uml_intro.length < 4" variant="outline-info"
                    @click="refreshSingle(record.id)">
            <i class="fas fa-sync-alt"></i>
          </b-button>
          <img v-else :src="getFullSrc(record.uml_png_src)" alt="" style="width: 128px;height: 100%;"/>
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
      await proxy.$api.postUmlRecord({
        user_input: this.userInput
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