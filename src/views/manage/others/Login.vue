<template>
<!-- set background is aqua-->
  <div class="bg-aqua" style="background-color: #54c4d4; height: 60em; margin-top: -100px; padding-top: 100px; border:0; ">
    <div class="container" >
      <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
          <div class="row">
            <div class="col-lg-6 d-none d-lg-flex">
              <div class="flex-grow-1 bg-login-image" style="background-color: #9bc6fe">
                <img src="../../../../src/assets/img/spring_bin.png"  style="width: 100%;margin-top: 10%; align-content: center" alt="bin"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5 mb-lg-0 pb-lg-1 pt-lg-3">
                <div class="text-center">
                  <h4 class="text-dark mb-4">请登录</h4>
                </div>
                <form class="user">
                  <div class="mb-3"><input id="exampleInputEmail" aria-describedby="emailHelp" class="form-control form-control-user"
                                           name="email" placeholder="输入您的用户名" type="email"></div>
                  <div class="mb-3"><input id="exampleInputPassword" class="form-control form-control-user"
                                           name="password" placeholder="请输入密码" type="password"></div>
                  <div class="mb-3">
                    <div class="custom-control custom-checkbox small">
                      <div class="form-check">
                        <input id="formCheck-1" class="form-check-input custom-control-input"
                                                     type="checkbox">
                        <label class="form-check-label custom-control-label"
                               for="formCheck-1">请记住我</label></div>
                    </div>
                  </div>
                  <a class="btn btn-primary d-block btn-user w-100" @click="handleLogin()"
                     role="button">登录</a>
                  <hr>
                  <a class="btn btn-primary btn-sm d-block btn-google btn-user w-100 mb-2" role="button"><i
                      class="fab fa-google"></i>&nbsp; &nbsp;Google 登录</a><a
                    class="btn btn-primary btn-sm d-block btn-google btn-user w-100 mb-2" role="button"
                    style="background: rgb(25,190,101);"><i class="fa fa-wechat"></i>&nbsp; &nbsp;微信 登录</a><a
                    class="btn btn-primary d-block btn-facebook btn-user w-100" role="button"><i class="fab fa-qq"></i>&nbsp;
                  QQ 登录</a>
                  <div class="justify-content-between mt-lg-3" style="display: flex;">
                    <a class="small" href="/register">创建账户</a>
                    <a class="small" href="/forgotPassword">忘记密码?</a></div>
                  <hr>
                </form>
                <div class="text-center"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>


export default {
  name: "Login",
  methods: {
    handleLogin() {
      console.log("登录~")
      this.$router.push({ path: "/manage/dashboard" });
    }
  }
}
</script>

<style scoped>

</style>