<template>

    <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-flex">
                        <div class="flex-grow-1 bg-login-image" style="background-color: #9bc6fe"  >
                          <img src="../../../assets/img/octocat-23.png"/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5 mb-lg-0 pb-lg-1 pt-lg-3">
                            <div class="text-center">
                                <h4 class="text-dark mb-4">请登录</h4>
                            </div>
                            <form class="user">
                                <div class="mb-3"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="输入您的用户名" name="email"></div>
                                <div class="mb-3"><input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="请输入密码" name="password"></div>
                                <div class="mb-3">
                                    <div class="custom-control custom-checkbox small">
                                        <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1"><label class="form-check-label custom-control-label" for="formCheck-1">请记住我</label></div>
                                    </div>
                                </div><a class="btn btn-primary d-block btn-user w-100" role="button" href="../staticDesign/index.html">登录</a>
                                <hr><a class="btn btn-primary btn-sm d-block btn-google btn-user w-100 mb-2" role="button"><i class="fab fa-google"></i>&nbsp; &nbsp;Google 登录</a><a class="btn btn-primary btn-sm d-block btn-google btn-user w-100 mb-2" role="button" style="background: rgb(25,190,101);"><i class="fa fa-wechat"></i>&nbsp; &nbsp;微信 登录</a><a class="btn btn-primary d-block btn-facebook btn-user w-100" role="button"><i class="fab fa-qq"></i>&nbsp; QQ 登录</a>
                                <div class="justify-content-between mt-lg-3" style="display: flex;"><a class="small" href="register.html">创建账户</a><a class="small" href="forgot-password.html">忘记密码?</a></div>
                                <hr>
                            </form>
                            <div class="text-center"></div>
                            <div class="text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>