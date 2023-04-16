<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">个人信息管理</h3>
    <div class="row mb-3">
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body text-center shadow">
            <div class="row">
              <div class="col">
                <img class="rounded-circle mb-3 mt-4" height="160"
                     src="../../../public/favicon.ico" width="160" alt="">
                <div class="mb-3">
                  <button class="btn btn-primary btn-sm" type="button" @click="uploadAvatar">更改头像</button>
                </div>
              </div>
              <div class="col my-auto">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                    <tr v-for="line in infoCard">
                      <td>{{ line.name }}</td>
                      <td>{{ line.value }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

<!--        <div class="card shadow mb-4">-->
<!--          <div class="card-header d-flex justify-content-between align-items-center">-->
<!--            <h6 class="text-primary fw-bold m-0"><strong>作业上交统计</strong><br></h6>-->
<!--            <div class="dropdown no-arrow">-->


<!--              <button aria-expanded="false" class="btn btn-link btn-sm dropdown-toggle" data-bs-toggle="dropdown"-->
<!--                      type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>-->
<!--              <div class="dropdown-menu shadow dropdown-menu-end animated&#45;&#45;fade-in">-->


<!--                <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item" href="#">&nbsp;Action</a><a-->
<!--                  class="dropdown-item" href="#">&nbsp;Another action</a>-->
<!--                <div class="dropdown-divider"></div>-->
<!--                <a class="dropdown-item" href="#">&nbsp;Something else here</a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="card-body">-->
<!--            <div class="chart-area">-->

<!--&lt;!&ndash;              add a card &ndash;&gt;-->

<!--                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4 align-content-center" style="width: 25rem;"-->
<!--                     src="https://dummyimage.com/600x400/dee2e6/6c757d.jpg" alt="...">-->
<!--            </div>-->
<!--            <div class="text-center small mt-4"><span class="me-2"><i class="fas fa-circle text-primary"></i>&nbsp;按时上交</span><span-->
<!--                class="me-2"><i class="fas fa-circle text-success"></i>暂未提交</span><span class="me-2"><i-->
<!--                class="fas fa-circle text-info"></i>&nbsp;错过提交</span></div>-->
<!--          </div>-->
<!--        </div>-->
      </div>

      <div class="col-lg-8">
<!--        <div class="row mb-3 d-none">-->
<!--          <div class="col">-->
<!--            <div class="card text-white bg-primary shadow">-->
<!--              <div class="card-body">-->
<!--                <div class="row mb-2">-->
<!--                  <div class="col">-->
<!--                    <p class="m-0">Peformance</p>-->
<!--                    <p class="m-0"><strong>65.2%</strong></p>-->
<!--                  </div>-->
<!--                  <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>-->
<!--                </div>-->
<!--                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="col">-->
<!--            <div class="card text-white bg-success shadow">-->
<!--              <div class="card-body">-->
<!--                <div class="row mb-2">-->
<!--                  <div class="col">-->
<!--                    <p class="m-0">Peformance</p>-->
<!--                    <p class="m-0"><strong>65.2%</strong></p>-->
<!--                  </div>-->
<!--                  <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>-->
<!--                </div>-->
<!--                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
        <div class="row">
          <div class="col">
            <div class="card shadow mb-3">
              <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold">基础信息</p>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                        <label class="form-label" for="username">
                        <strong>姓名</strong></label>
                        <input
                          id="username" class="form-control" name="username" placeholder="请输入 姓名" type="text"
                          v-model="basicInfo.name">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="email"><strong>邮箱地址</strong></label><input
                          id="email" class="form-control" name="email" placeholder="user@example.com" type="email"
                          v-model="basicInfo.email"></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="first_name"><strong>ID</strong></label><input
                          id="first_name-2" class="form-control" name="first_name" placeholder="请输入 学号/工号"
                          type="text" v-model="basicInfo.id"></div>
                      <button class="btn btn-primary" type="submit">保存</button>
                    </div>
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="first_name"><strong>密码</strong></label><input
                          class="form-control" name="password" type="password"
                      v-model="basicInfo.password"></div>
                      <button class="btn btn-primary" type="submit">修改密码</button>
                    </div>
                  </div>
                  <div class="mb-3"></div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">作业进度通知设定</p>
                  </div>
                  <div class="card-body">
                    <form class="ps-xl-3 pe-xl-3 ">
                      <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"
                      v-for="setting in settingFromData"
                      >
                        <input
                          :id="'formCheck-' + setting.key"
                          :checked="setting.isChecked"
                          :disabled="setting.isDisabled"
                          class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                          style="width: 49px;height: 24px;" type="checkbox">
                        <label class="form-check-label"
                               :for="'formCheck-' + setting.key"
                               style="font-size: 18px;">{{ setting.name }}
<!--                          add hover prompt-->

                          <i class="fas fa-question-circle ms-xxl-2" data-bs-toggle="tooltip" data-bs-placement="top"  :title="setting.help"></i>
                        </label>
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary" type="submit" @click="saveSetting">保存</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">可选信息</p>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="mb-3"><label class="form-label" for="country"><strong>班级</strong></label><input
                         v-model="optionalInfo.class"  id="country-1" class="form-control" name="country" placeholder="如：1909班" type="text"></div>
                      <div class="mb-3"><label class="form-label"
                          for="country"><strong>手机号</strong><br></label><input
                            v-model="optionalInfo.phone"
                          id="country-2" class="form-control" name="country" placeholder="请输入手机号" type="text">
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary" type="submit" @click="saveOptionalInfo">保存</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow mb-5">
      <div class="card-header py-3">
        <p class="text-primary m-0 fw-bold">站内留言</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 col-xl-12">
            <form>
              <div class="mb-3 col-xl-12">
                <label class="form-label"
                                       for="signature"><strong>留下你的想法</strong>
                </label>
<!--                add a place that width is 100%-->

                <textarea
                  id="signature" class="form-control" name="signature" rows="4"
                  v-model="message.text"
                ></textarea></div>
              <div class="mb-3">
                <div class="form-check form-switch">
                  <input id="formCheck-1" class="form-check-input"
                     type="checkbox" :checked="message.isChecked">
                  <label class="form-check-label"
                     for="formCheck-1"><strong>当有回复时通知我</strong><br></label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" @click="saveMessage">保存</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getCurrentInstance, onMounted} from "vue";

export default {
  name: "profile",
  methods: {
    editBasicInfo() {
      console.log("editBasicInfo");
    },
    saveBasicInfo() {
      console.log("saveBasicInfo");
    },
    editOptionalInfo() {
      console.log("editOptionalInfo");
    },
    saveOptionalInfo() {
      console.log("saveOptionalInfo");
    },
    editSetting() {
      console.log("editSetting");
    },
    saveSetting() {
      console.log("saveSetting");
    },
    saveMessage() {
      console.log("saveMessage");
    },
  },
  data() {
    const { proxy } = getCurrentInstance();
    const infoCard = [];
    const basicInfo = {};
    const optionalInfo = {};
    const settingFromData = [];
    const message = {};
    const getInfoCard = async () => {
      let res = await proxy.$api.getInfoCard();
      this.infoCard = res.infoCard;
    }
    const getBasicInfo = async () => {
      let res = await proxy.$api.getBasicInfo();
      this.basicInfo = res.basicInfo

    }
    const getOptionalInfo = async () => {
      let res = await proxy.$api.getOptionalInfo();
      this.optionalInfo = res.optionalInfo;
    }
    const getSettingFromData = async () => {
      let res = await proxy.$api.getSettings();
      this.settingFromData = res.settings;
    }
    const getMessage = async () => {
      let res = await proxy.$api.getMessage();
      this.message = res.message;
    }
    const getProfile = () => {
      let res = localStorage.getItem("userInfo")
      let userInfo = JSON.parse(res)
    console.log("userInfo", userInfo)
      this.basicInfo.id = userInfo.stuId;
      this.basicInfo.name = userInfo.username;
      this.basicInfo.email = userInfo.mail;
      this.basicInfo.password = userInfo.password;
      this.optionalInfo.class = userInfo.clazz;
      this.optionalInfo.phone = userInfo.phone;
      // this.profile = res.profile;
    }
    onMounted(() => {
      getInfoCard()
      getBasicInfo();
      getOptionalInfo();
      getSettingFromData();
      getMessage();
      getProfile();
    })
    return {
      infoCard,
      basicInfo,
      optionalInfo,
      settingFromData ,
      message,

    }
  }
}
</script>

<style scoped>

</style>